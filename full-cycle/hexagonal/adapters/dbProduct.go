package adapters

import (
	"arquitetura-hexagonal/application"
	"database/sql"
	"errors"
)

type ProductDB struct {
	db *sql.DB
}

func (p *ProductDB) Get(id string) (application.ProductInterface, error) {
	var product application.Product

	stmt, err := p.db.Prepare("select id, name, price, status from products where id=?")
	if err != nil {
		return &application.Product{}, err
	}
	err = stmt.QueryRow(id).Scan(&product.ID, &product.Name, &product.Price, &product.Status)
	if err != nil {
		return &application.Product{}, err
	}
	return &product, nil
}

func (p *ProductDB) Save(product application.ProductInterface) (application.ProductInterface, error) {
	stmt, err := p.db.Prepare("insert into products (id, name, price, status) values (?, ?, ?, ?)")
	if err != nil {
		return &application.Product{}, err
	}
	result, err := stmt.Exec(product.GetID(), product.GetName(), product.GetPrice(), product.GetStatus())
	if err != nil {
		return &application.Product{}, err
	}
	rows, err := result.RowsAffected()
	if err != nil {
		return &application.Product{}, err
	}
	if rows == 0 {
		return &application.Product{}, errors.New("insert failed")
	}
	return product, nil
}
