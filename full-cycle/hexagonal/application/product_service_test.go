package application_test

import (
	"arquitetura-hexagonal/application"
	"arquitetura-hexagonal/mocks"
	"errors"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
)

func TestProductService_GetShouldReturnProduct(t *testing.T) {
	persistence := mocks.NewProductPersistenceInterface(t)
	service := application.ProductService{
		Persistence: persistence,
	}
	persistence.On("Get", mock.Anything).Return(&application.Product{ID: "teste", Name: "teste", Price: 10.00, Status: application.DISABLE}, nil)
	product, err := service.Get("teste")

	assert.Equal(t, "teste", product.GetID())
	assert.Nil(t, err)
}

func TestProductService_GetShouldReturnError(t *testing.T) {
	persistence := mocks.NewProductPersistenceInterface(t)
	service := application.ProductService{
		Persistence: persistence,
	}
	persistence.On("Get", mock.Anything).Return(&application.Product{}, errors.New("some error"))
	_, err := service.Get("teste")

	assert.NotNil(t, err)
}

func TestProductService_CreateShouldReturnProduct(t *testing.T) {
	persistence := mocks.NewProductPersistenceInterface(t)
	service := application.ProductService{
		Persistence: persistence,
	}
	persistence.On("Save", mock.Anything).Return(&application.Product{ID: "teste", Name: "teste", Price: 10.00, Status: application.DISABLE}, nil)
	product, err := service.Create("teste", 10.00)

	assert.Equal(t, "teste", product.GetID())
	assert.Nil(t, err)
}

func TestProductService_CreateShouldReturnErrorInPersistence(t *testing.T) {
	persistence := mocks.NewProductPersistenceInterface(t)
	service := application.ProductService{
		Persistence: persistence,
	}
	persistence.On("Save", mock.Anything).Return(&application.Product{}, errors.New("some error"))
	_, err := service.Create("teste", 10.00)

	assert.NotNil(t, err)
}

func TestProductService_CreateShouldReturnErrorInPrice(t *testing.T) {
	persistence := mocks.NewProductPersistenceInterface(t)
	service := application.ProductService{
		Persistence: persistence,
	}
	_, err := service.Create("teste", -10.00)

	assert.NotNil(t, err)
}

func TestProductService_EnableShouldReturnProduct(t *testing.T) {
	persistence := mocks.NewProductPersistenceInterface(t)
	service := application.ProductService{
		Persistence: persistence,
	}
	persistence.On("Save", mock.Anything).Return(&application.Product{ID: "teste", Name: "teste", Price: 10.00, Status: application.DISABLE}, nil)
	productToEnable := application.Product{ID: "teste", Name: "teste", Price: 10.00, Status: application.DISABLE}
	product, err := service.Enable(&productToEnable)

	assert.Equal(t, "teste", product.GetID())
	assert.Nil(t, err)
}

func TestProductService_EnableShouldReturnErrorInPersistence(t *testing.T) {
	persistence := mocks.NewProductPersistenceInterface(t)
	service := application.ProductService{
		Persistence: persistence,
	}
	persistence.On("Save", mock.Anything).Return(&application.Product{}, errors.New("some error"))
	productToEnable := application.Product{ID: "teste", Name: "teste", Price: 10.00, Status: application.DISABLE}
	_, err := service.Enable(&productToEnable)

	assert.NotNil(t, err)
}

func TestProductService_DisableShouldReturnErrorInPrice(t *testing.T) {
	persistence := mocks.NewProductPersistenceInterface(t)
	service := application.ProductService{
		Persistence: persistence,
	}
	productToDisable := application.Product{ID: "teste", Name: "teste", Price: 00.00, Status: application.DISABLE}
	_, err := service.Enable(&productToDisable)

	assert.NotNil(t, err)
}

func TestProductService_DisableShouldReturnProduct(t *testing.T) {
	persistence := mocks.NewProductPersistenceInterface(t)
	service := application.ProductService{
		Persistence: persistence,
	}
	persistence.On("Save", mock.Anything).Return(&application.Product{ID: "teste", Name: "teste", Price: 10.00, Status: application.DISABLE}, nil)
	productToEnable := application.Product{ID: "teste", Name: "teste", Price: 00.00, Status: application.DISABLE}
	product, err := service.Disable(&productToEnable)

	assert.Equal(t, "teste", product.GetID())
	assert.Nil(t, err)
}

func TestProductService_DisableShouldReturnErrorInPersistence(t *testing.T) {
	persistence := mocks.NewProductPersistenceInterface(t)
	service := application.ProductService{
		Persistence: persistence,
	}
	persistence.On("Save", mock.Anything).Return(&application.Product{}, errors.New("some error"))
	productToDisable := application.Product{ID: "teste", Name: "teste", Price: 10.00, Status: application.DISABLE}
	_, err := service.Disable(&productToDisable)

	assert.NotNil(t, err)
}

func TestProductService_DisableShouldReturnErrorInDisable(t *testing.T) {
	persistence := mocks.NewProductPersistenceInterface(t)
	service := application.ProductService{
		Persistence: persistence,
	}
	productToDisable := application.Product{ID: "teste", Name: "teste", Price: 00.00, Status: application.DISABLE}
	_, err := service.Disable(&productToDisable)

	assert.NotNil(t, err)
}
