package main

import "fmt"

type TestInterface interface {
	Piscar() string
	Falar() string
	Andar() string
}

type Humano struct {
}

func (Humano) Piscar() string {
	return "PISQUEI"
}

func (Humano) Falar() string {
	return "TUDO BEM?"
}

func (Humano) Andar() string {
	return "ANDEI"
}

func TestandoInterface(testeInterface TestInterface) {
	fmt.Println(testeInterface.Piscar())
	fmt.Println(testeInterface.Falar())
	fmt.Println(testeInterface.Andar())
}

type HumanoCorredor struct {
	Humano
}

func (HumanoCorredor) Andar() string {
	return "CORRI KKKK"
}

func main() {
	humano := Humano{}
	TestandoInterface(humano)
	humanoCorredor := HumanoCorredor{Humano: humano}
	TestandoInterface(humanoCorredor)
}
