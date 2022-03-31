package main

import (
	"bufio"
	"fmt"
	"io"
	"net/http"
	"os"
	"reflect"
	"strings"
	"time"
)

const monitoramentos = 3
const delay = 3

func main() {
	leSitesDoArquivo()
	boasVindas()

	for {
		var comando int = exibeMenu()

		switch comando {
		case 1:
			iniciarMonitoramento()
		case 2:
			fmt.Println("Logs...")
		case 3:
			fmt.Println("Exit...")
			os.Exit(0)
		default:
			fmt.Println("Opção inválida...")
		}
	}

}

func boasVindas() {
	var nome string = "Rodney"
	idade := 27
	var versao float32 = 1.2

	fmt.Println("Olá", nome)
	fmt.Println("Você tem", idade)
	fmt.Println("Programa v.:", versao, reflect.TypeOf(versao))
}

func exibeMenu() int {
	fmt.Println("1 - Scan")
	fmt.Println("2 - Log")
	fmt.Println("3 - Exit")

	var comando int
	fmt.Scan(&comando)

	return comando
}

func iniciarMonitoramento() {
	fmt.Println("Monitorando...")
	sites := leSitesDoArquivo()
	for i := 0; i < monitoramentos; i++ {
		for _, site := range sites {
			fmt.Println(site)
			testaSite(site)
		}
		time.Sleep(delay * time.Second)
	}
}

func testaSite(site string) {
	res, err := http.Get(site)
	if err != nil {
		fmt.Println("Ocorreu um erro na requisição do site:", site)
		return
	}
	if res.StatusCode == 200 {
		fmt.Println("Site:", site, "Foi carregado com sucesso")
	} else {
		fmt.Println("Site:", site, "Não disponível")
	}
}

func leSitesDoArquivo() []string {
	var sites []string
	arquivo, err := os.Open("sites.txt")
	if err != nil {
		fmt.Println("Ocorreu um erro de", err)
	}
	leitor := bufio.NewReader(arquivo)
	for {
		linha, err := leitor.ReadString('\n')
		linha = strings.TrimSpace(linha)
		sites = append(sites, linha)
		if err == io.EOF {
			break
		} else if err != nil {
			fmt.Println("Ocorreu um erro de", err)
		}
	}
	arquivo.Close()
	return sites
}
