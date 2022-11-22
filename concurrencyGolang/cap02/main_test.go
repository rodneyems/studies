package main

import (
	"io"
	"os"
	"sync"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestPrintSomeThing_ShouldPrintString(t *testing.T) {
	stdOut := os.Stdout

	r, w, _ := os.Pipe()
	os.Stdout = w

	var wg sync.WaitGroup
	wg.Add(1)
	go printSomething("test", &wg)
	wg.Wait()

	w.Close()

	result, _ := io.ReadAll(r)
	output := string(result)

	os.Stdout = stdOut

	assert.Equal(t, "test\n", output)
}
