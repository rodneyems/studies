package main

import (
	"fmt"
	"math/rand"
	"time"

	"github.com/fatih/color"
)

const NumberOfPizzas = 2

var pizzasMade, pizzasFailed, total int

type Producer struct {
	data chan PizzaOrder
	quit chan chan error
}

func (p *Producer) Close() error {
	ch := make(chan error)
	p.quit <- ch
	return <-ch
}

type PizzaOrder struct {
	pizzaNumber int
	message     string
	success     bool
}

func makePizza(pizzzaNumber int) *PizzaOrder {
	pizzzaNumber++
	if pizzzaNumber <= NumberOfPizzas {
		delay := rand.Intn(5) + 1
		fmt.Printf("Received order #%d!\n", pizzzaNumber)

		rnd := rand.Intn(12) + 1
		msg := ""
		success := false

		if rnd < 5 {
			pizzasFailed++
		} else {
			pizzasMade++
		}
		total++

		fmt.Printf("Making pizza #%d. It will take %d seconds...\n", pizzzaNumber, delay)
		time.Sleep(time.Duration(delay) * time.Second)

		if rnd <= 2 {
			msg = fmt.Sprintf("*** We ran out of ingredients for pizza #%d", pizzzaNumber)
		} else if rnd <= 4 {
			msg = fmt.Sprintf("*** The cook quit while making pizza #%d", pizzzaNumber)
		} else {
			success = true
			msg = fmt.Sprintf("Pizza order #%d is ready", pizzzaNumber)
		}

		p := PizzaOrder{
			pizzaNumber: pizzzaNumber,
			message:     msg,
			success:     success,
		}

		return &p
	}
	return &PizzaOrder{
		pizzaNumber: pizzzaNumber,
	}
}

func pizzeria(pizzaMaker *Producer) {
	var i = 0

	for {
		currentPizza := makePizza(i)

		if currentPizza != nil {
			i = currentPizza.pizzaNumber
			select {
			case pizzaMaker.data <- *currentPizza:

			case quitChan := <-pizzaMaker.quit:
				close(pizzaMaker.data)
				close(quitChan)
				return
			}
		}
	}
}
func main() {
	rand.Seed(time.Now().UnixNano())

	color.Cyan("The Pizzeria is open for business")
	color.Cyan("_________________________________")

	pizzaJob := &Producer{
		data: make(chan PizzaOrder),
		quit: make(chan chan error),
	}

	go pizzeria(pizzaJob)

	for i := range pizzaJob.data {
		if i.pizzaNumber <= NumberOfPizzas {
			if i.success {
				color.Green(i.message)
				color.Green("Order #%d is out for delivery", i.pizzaNumber)
			} else {
				color.Red(i.message)
				color.Red("The custtomer is really mad!")
			}
		} else {
			color.Cyan("Done making pizzas... %v", i.message)
			err := pizzaJob.Close()
			if err != nil {
				color.Red("*** Error close channel!", err)
			}
		}
	}
	color.Green("End of day. Success: %v, Failed: %v, Total: %v", pizzasMade, pizzasFailed, total)
}
