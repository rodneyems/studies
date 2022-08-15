package main

import "fmt"

const (
	ITAU      = "ITAU"
	BRADESCO  = "BRADESCO"
	SANTANDER = "SANTANDER"
)

func main() {
	fmt.Println("R$", calculadora(10, SANTANDER))
}

func calculadora(valor float32, banco string) float32 {
	if banco == ITAU {
		return Itau{}.calculaJuros() * valor
	} else if banco == BRADESCO {
		return Bradesco{}.calculaJuros() * valor
	} else if banco == SANTANDER {
		return Santander{}.calculaJuros() * valor
	}
	return 0
}

type Itau struct {
}

type Bradesco struct {
}

type Santander struct {
}

func (i Itau) calculaJuros() float32 {
	return 0.10
}

func (b Bradesco) calculaJuros() float32 {
	return 0.12
}

func (s Santander) calculaJuros() float32 {
	return 0.12
}
