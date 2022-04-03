package main

import (
	"fmt"
	"strconv"
)

type ContaCorrente struct {
	titular string
	agencia int
	conta   int
	saldo   float64
}

func (c *ContaCorrente) Sacar(valor float64) string {
	if c.saldo >= valor && valor != 0 {
		c.saldo =- valor
		return "Saque efetuado com sucesso seu novo saldo é de: " + strconv.FormatFloat(c.saldo, 'f', 2, 64)
	} else if valor == 0{
		return "Valor precisa ser maior que zero"
	}else {
		return "Saldo insuficiente"
	}
}

func Somando(numeros ...int) int {
	resultadoDaSoma := 0
	for _, numero := range numeros {
			resultadoDaSoma += numero
	}
	return resultadoDaSoma
}

func main() {
	var rodney = ContaCorrente{
		titular: "Rodney",
		agencia: 5562,
		saldo:   55000.00,
	}

	var rodney2 = ContaCorrente{
		titular: "Rodney",
		agencia: 5562,
		saldo:   55000.00,
	}

	var rodney3 = ContaCorrente{
		titular: "Martinha",
		agencia: 123,
		conta:   123,
		saldo:   123.00,
	}

	fmt.Println(rodney == rodney2)
	fmt.Println(rodney == rodney3)

	martinha := ContaCorrente{
		"Martinha",
		123,
		123,
		123.00,
	}

	fmt.Println(martinha == rodney3)

	var tedy *ContaCorrente
	tedy = new(ContaCorrente)
	tedy.agencia = 7894
	tedy.conta = 7894
	tedy.saldo = 7894
	tedy.titular = "Tedy"

	fmt.Println("imprime local da memoria", &tedy) // imprime local da memoria
	fmt.Println("imprime o ponteiro", tedy)        // imprime o ponteiro
	fmt.Println(tedy)
	fmt.Println("imprime o conteudo", *tedy) // imprime o conteudo

	fmt.Println("VALOR NO ANTERIOR",tedy.saldo)
	tedy.Sacar(10)
	fmt.Println("VALOR NO POSTERIOR",tedy.saldo)
	fmt.Println(martinha.Sacar(0))
	fmt.Println(martinha.Sacar(150))

	fmt.Println(Somando(1))
	fmt.Println(Somando(1,1))
	fmt.Println(Somando(1,1,1))
	fmt.Println(Somando(1,1,2,4))

	
}
