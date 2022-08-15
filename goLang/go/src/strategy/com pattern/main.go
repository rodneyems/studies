package main

import "fmt"

const (
	ITAU      = "ITAU"
	BRADESCO  = "BRADESCO"
	SANTANDER = "SANTANDER"
)

func main() {
	fmt.Println("R$", calculadora(15, Santander{}))
}

func calculadora(valor float32, banco CalculaJurosStrategyInterface) float32 {
	return banco.calculaJuros() * valor
}

type CalculaJurosStrategyInterface interface {
	calculaJuros() float32
}


type Itau struct {
}
func (i Itau) calculaJuros() float32 {
	return 0.10
}

type Bradesco struct {
}
func (b Bradesco) calculaJuros() float32 {
	return 0.12
}

type Santander struct {
}
func (s Santander) calculaJuros() float32 {
	return 0.12
}

type MercadoPago struct {
}
func (m MercadoPago) calculaJuros() float32 {
	return 0.05
}

