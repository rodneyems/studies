package main

import (
	"encoding/json"
	"fmt"
)

type teste struct {
	Name  string `json:"name,omitempty"`
	Idade string `json:"idade,omitempty"`
}

func main() {
	obj := teste{
		Name: "rodney",
	}
	jsonObj, _ := json.Marshal(obj)

	fmt.Println(string(jsonObj))
}
