package main

import (
	"fmt"
	"time"
)

func main() {
	t0 := time.Now()

	fmt.Println(time.Since(t0))
	// timeS := time.Now()
	// fmt.Println(time.Now())

	// fmt.Println(timeS.Truncate(time.Hour * 24))

	// // fmt.Println(t.UTC().Truncate(time.Hour*24), err)

	// teste := 1
	// teste1 := 1
	// teste2 := "a"
	// if (teste == 10 && teste1 == 8 || teste == 1 && teste1 == 1) && (teste2 == "a") {
	// 	fmt.Println("ENTROU!!!!!!!!!!!!!!")
	// }

	// t, _ := time.Parse("2006-01-02T15:04:05-07:00", "2022-12-05T19:30:00.000-04:00")
	// fmt.Println("antes", time.Since(t))

	// // timeL, _ := time.LoadLocation("UTC")
	// // time.Local = timeL
	// // time.FixedZone("UTC", 3)
	// time.Since(t)
	// fmt.Println("depois1", time.Now().UTC().Sub(t.UTC()))
	// fmt.Println("depois2", t)
	// fmt.Println("depois3", t.UTC())
	// fmt.Println("depois4", time.Now())
	// teste3 := time.Now().UnixMilli()
	// teste4 := t.UTC().UnixMilli()
	// timesince := teste4 - teste3

	// sec := timesince / 1000
	// msec := timesince % 1000
	// fmt.Println(sec, msec)
	// fmt.Println("depois6", time.Unix(sec, msec*int64(time.Millisecond)))

	// fmt.Println("depois7", time.Now().UTC())

	// time.Since(t)
	fmt.Println(time.UnixMilli(1670030073010))
	//fmt.Println(time.UnixMilli(1670030073010).Add(-3 * time.Hour))
		teste := "oi %d %d"
	fmt.Sprintf(teste, 1, 2)
	fmt.Println(fmt.Sprintf(teste, 1, 2))
}
