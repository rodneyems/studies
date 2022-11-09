package main

import "fmt"

type T1 struct {
	Name string
	Idade int
}
type T2 struct {
	Name string
	Idade int
}
type T3 struct {
	T1 T1
	T2 T2
}
func teste() interface{}{
	return	T3{
		T1: T1{"Tedi", 20},
		T2: T2{"Todi", 20},
	}
}
func main() {
	t := teste()
	fmt.Println(fmt.Sprintf("%+v", t))
}