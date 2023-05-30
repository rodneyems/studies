package database

import (
	"database/sql"

	"github.com/google/uuid"
)

type Course struct {
	ID          string
	Name        string
	Description string
	CategoryID  string
	db          *sql.DB
}

func NewCourse(db *sql.DB) *Course {
	return &Course{db: db}
}

func (c *Course) Create(name string, description string, categoryID string) (*Course, error) {
	id := uuid.New().String()
	_, err := c.db.Exec("INSERT INTO course (id, name, description, category_id) VALUES ($1, $2, $3, $4)", id, name, description, categoryID)
	if err != nil {
		return nil, err
	}
	return &Course{ID: id, db: c.db, Name: name, Description: description, CategoryID: categoryID}, nil
}

func (c *Course) GetAll() ([]Course, error) {
	rows, err := c.db.Query("SELECT * FROM course")
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var courses []Course
	for rows.Next() {
		var id string
		var name string
		var description string
		var categoryID string
		err = rows.Scan(&id, &name, &description, &categoryID)
		if err != nil {
			return nil, err
		}
		courses = append(courses, Course{db: c.db, ID: id, Name: name, Description: description, CategoryID: categoryID})
	}
	return courses, nil
}