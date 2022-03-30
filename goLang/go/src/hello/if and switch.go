package main

import (
	"fmt"
	"reflect"
)

func main() {
	var nome string = "Rodney"
	idade := 27
	var versao float32 = 1.2
	fmt.Println("Olá", nome)
	fmt.Println("Você tem", idade)
	fmt.Println("Programa v.:", versao, reflect.TypeOf(versao))

	fmt.Println("1 - Scan")
	fmt.Println("2 - Log")
	fmt.Println("3 - Exit")

	var comando int
	fmt.Scanf("%d", &comando)

	if comando == 1 {
		fmt.Println("Monitorando...")
	} else if comando == 2 {
		fmt.Println("Logs...")
	} else if comando == 3 {
		fmt.Println("Exit...")
	} else {
		fmt.Println("Opção inválida...")
	}

	var comando2 int
	fmt.Scan(&comando2)

	switch comando2 {
	case 1:
		fmt.Println("Monitorando...")
	case 2:
		fmt.Println("Logs...")
	case 3:
		fmt.Println("Exit...")
	default:
		fmt.Println("Opção inválida...")
	}
}