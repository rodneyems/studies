package gateway

import "eda/internal/entity"

type TransactionGateway interface {
	Create(transaction *entity.Transaction) error
}
