package main

import (
	"fmt"
	"time"
)

func main() {
	myCh := make(chan string, 5)

	// myCh <- "oi 1"
	// myCh <- "oi 2"
	// myCh <- "oi 3"
	// myCh <- "oi 4"
	// myCh <- "oi 5"

	go func() {
		for {
			valor, ok := <-myCh
			if ok {
				fmt.Println("FAZSENTIDO")
			}
			fmt.Println("valor", valor, "ok?", ok)
			time.Sleep(2 * time.Second)
		}
	}()
	time.Sleep(2 * time.Second)
	// close(myCh)
	time.Sleep(20 * time.Second)
	// Ele fecha o ch apenas após a leitura de todas as mensagens
}
