package main

import (
	"fmt"
	"time"
)

func main() {
	timeS := time.Now()
	fmt.Println(time.Now())
	
	fmt.Println(timeS.Truncate(time.Hour))

	t, err := time.Parse("2006-01-02T15:04:05.000-07:00", "2022-08-16T13:47:58.000-04:00")
	fmt.Println(t, err)
	

	teste := 1
	teste1 := 1
	teste2 := "a"
	if (teste == 10 && teste1 == 8 || teste == 1 && teste1 == 1) && (teste2 == "a") {
		fmt.Println("ENTROU!!!!!!!!!!!!!!")
	}
}