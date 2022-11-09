package main

import (
	"encoding/json"
	"fmt"
)

type MyStructComplete struct {
	Name   string `json:"name"`
	Person Person `json:"person"`
}
type Person struct {
	Age      int    `json:"age"`
	LastName string `json:"last_name"`
}
type MyStruct struct {
	Name   string `json:"name"`
	Person []byte `json:"person"`
}

func main() {
	ms := MyStructComplete{Name: "Rodney", Person: Person{Age: 10, LastName: "Silva"}}

	obj, _ := json.Marshal(ms)

	fmt.Printf("%+v ANTES", obj)
	fmt.Printf("%+v ANTES", ms)

	ms2 := MyStruct{}
	json.Unmarshal(obj, &ms2)

	fmt.Printf("\nDEPOIS: %+v", obj)
	fmt.Printf("\nDEPOIS: %+v ", ms2)

	// obj2 := ms2.Person.(Person)
	// fmt.Println(obj2)
}
