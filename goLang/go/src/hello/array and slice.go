package main

import "fmt"

func main() {
	var array [3]string

	array[0] = "teste"
	array[1] = "teste 1"
	array[2] = "teste 2"

	fmt.Println(array)

	slice := []string{"teste", "teste"}
	fmt.Println(slice)
	slice = append(slice, "teste3")
	fmt.Println(slice)

}
