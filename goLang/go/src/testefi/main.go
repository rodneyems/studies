package main

import "fmt"

func main() {
	teste := false
	if teste == true {
		fmt.Print("akdlkasjdalksd")
	}
	if teste == true {
		fmt.Print("akdlkasjdalksd")
	}
	if teste == false {
		fmt.Print("akdlkasjdalksd")
	}
	if teste == true {
		fmt.Print("akdlkasjdalksd")
	} else if teste == false {
		fmt.Println("ENTROU")
	}
}