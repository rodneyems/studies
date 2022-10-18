package application

import (
	"testing"

	"github.com/google/uuid"
	"github.com/stretchr/testify/assert"
)

func TestProduct_Enable(t *testing.T) {
	product := Product{
		ID:     "mouse-01",
		Name:   "Mouse",
		Price:  10.00,
		Status: DISABLE,
	}
	assert.Nil(t, product.Enable())
}

func TestProduct_EnableShouldReturnError(t *testing.T) {
	product := Product{
		ID:     "mouse-01",
		Name:   "Mouse",
		Price:  0.00,
		Status: DISABLE,
	}
	err := product.Enable()
	assert.Equal(t, "the price must be greater than zero to enable the product", err.Error())
}

func TestProduct_IsValidShouldReturnNilWithValidStruct(t *testing.T) {
	product := Product{
		ID:     uuid.New().String(),
		Name:   "Mouse",
		Price:  10.00,
		Status: ENABLE,
	}
	ok, err := product.IsValid()

	assert.Equal(t, true, ok)
	assert.Nil(t, err)
}

func TestProduct_IsValidShouldReturnErrorWithWrongStatus(t *testing.T) {
	product := Product{
		ID:     uuid.New().String(),
		Name:   "Mouse",
		Price:  10.00,
		Status: "teste",
	}
	ok, err := product.IsValid()

	assert.Equal(t, false, ok)
	assert.NotNil(t, err)
}

func TestProduct_IsValidShouldReturnErrorWithInvalidPrice(t *testing.T) {
	product := Product{
		ID:     uuid.New().String(),
		Name:   "Mouse",
		Price:  -10.00,
		Status: "",
	}
	ok, err := product.IsValid()

	assert.Equal(t, false, ok)
	assert.NotNil(t, err)
}
