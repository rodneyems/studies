package db

import (
	"database/sql"
	"log"
	"testing"

	"github.com/stretchr/testify/assert"
	_"github.com/mattn/go-sqlite3"
)

var Db *sql.DB

func setUp() {
	var err error
	Db, err = sql.Open("sqlite3", ":memory:")
	if err != nil {
		log.Fatal(err.Error())
	}
	createTable(Db)
	createProduct(Db)
}

func createTable(db *sql.DB) {
	table := `CREATE TABLE products (
				'id' string,
				'name' string,
				'price' float,
				'status' string,
				PRIMARY KEY ('id')
	 		 )
	`
	stmt, err := db.Prepare(table)
	if err != nil {
		log.Fatal(err.Error())
	}
	stmt.Exec()
}

func createProduct(db *sql.DB) {
	insert := `insert into products values('abc-123', 'mouse gamer', 0, 'disabled')`
	stmt, err := db.Prepare(insert)
	if err != nil {
		log.Fatal(err.Error())
	}
	stmt.Exec()
}

func TestProductDB_Get(t *testing.T) {
	setUp()
	defer Db.Close()
	productDB := NewProductDB(Db)
	product, err := productDB.Get("abc-123")
	assert.Equal(t, nil, err)
	assert.Equal(t, "abc-123", product.GetID())
	assert.Equal(t, "mouse gamer", product.GetName())
	assert.Equal(t, 0.0, product.GetPrice())
	assert.Equal(t, "disabled", product.GetStatus())
}
