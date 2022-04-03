package contas

import "strconv"

type ContaCorrente struct {
	Titular string
	Agencia int
	Conta   int
	Saldo   float64
}

func (c *ContaCorrente) Sacar(valor float64) string {
	if c.Saldo >= valor && valor != 0 {
		c.Saldo -= valor
		return "Saque efetuado com sucesso seu novo Saldo é de: " + strconv.FormatFloat(c.Saldo, 'f', 2, 64)
	} else if valor == 0 {
		return "Valor precisa ser maior que zero"
	} else {
		return "Saldo insuficiente"
	}
}

func (c *ContaCorrente) Depositar(valor float64) (string, float64) {
	if valor > 0 {
		c.Saldo += valor
		return "Deposito efetuado com sucesso seu novo Saldo é de: ", c.Saldo
	}
	return "Valor precisa ser maior que zero", c.Saldo
}

func (c *ContaCorrente) Transferir(valor float64, contaDestino *ContaCorrente) (string, float64) {
	if valor > 0 && valor <= c.Saldo {
		c.Saldo -= valor
		contaDestino.Saldo += valor
		return "Transferencia efetuada com sucesso seu novo Saldo é de: ", c.Saldo
	}
	return "Valor precisa ser maior que zero e menor que o Saldo", c.Saldo
}
