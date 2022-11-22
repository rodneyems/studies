package main

import (
	"fmt"
	"sync"
)

func printSomething(s string, wg *sync.WaitGroup){
	fmt.Println(s)
	wg.Done()
}

func main() {
	var wg sync.WaitGroup
	words := []string{
		"teste 01",
		"teste 02",
		"teste 03",
		"teste 04",
		"teste 05",
		"teste 06",
		"teste 07",
		"teste 08",
		"teste 09",
		"teste 10",
	}
	wg.Add(len(words))
	for i, v := range words {
		go printSomething(fmt.Sprintf("%v: %v", i, v), &wg)
	}
	wg.Wait()
	wg.Add(1)
	printSomething("END", &wg)
	wg.Wait()
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Nesse exemplo não será printado todas as strings, pois o software se encerra antes de todas a go routines terminarem
// func main() {
// 	words := []string{
// 		"teste 01",
// 		"teste 02",
// 		"teste 03",
// 		"teste 04",
// 		"teste 05",
// 		"teste 06",
// 		"teste 07",
// 		"teste 08",
// 		"teste 09",
// 		"teste 10",
// 	}
// 	for i, v := range words {
// 		go printSomething(fmt.Sprintf("%v: %v", i, v))
// 	}
// 	printSomething("END")
// })