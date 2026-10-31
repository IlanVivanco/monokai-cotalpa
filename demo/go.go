// Package palette has small helpers, to try the theme with Go.
package main

import (
	"errors"
	"fmt"
	"regexp"
	"strings"
)

const theme = "Monokai Cotalpa"

var hexPattern = regexp.MustCompile(`^#(?:[0-9a-f]{3}){1,2}$`)

// Variant is one of the theme flavors.
type Variant int

const (
	Main Variant = iota
	Dark
	Coffee
)

// Color is a named hex color.
type Color struct {
	Name  string  `json:"name"`
	Hex   string  `json:"hex"`
	Alpha float64 `json:"alpha,omitempty"`
}

// Describer is implemented by anything that can describe itself.
type Describer interface {
	Describe() string
}

var ErrInvalidColor = errors.New("invalid color")

func NewColor(name, hex string) (*Color, error) {
	hex = strings.ToLower(hex)
	if !hexPattern.MatchString(hex) {
		return nil, fmt.Errorf("%w: %s (%q)", ErrInvalidColor, name, hex)
	}

	return &Color{Name: name, Hex: hex, Alpha: 1.0}, nil
}

func (c *Color) Describe() string {
	return fmt.Sprintf("%s is %s at %.0f%%", c.Name, c.Hex, c.Alpha*100)
}

// fib returns a function that returns successive Fibonacci numbers.
func fib() func() int {
	a, b := 0, 1
	return func() int {
		a, b = b, a+b
		return a
	}
}

func main() {
	colors := map[string]string{"yellow": "#fcdc7d", "red": "#fc988d", "bad": "nope"}
	done := make(chan bool, 1)

	go func() {
		defer close(done)
		for name, hex := range colors {
			color, err := NewColor(name, hex)
			if err != nil {
				fmt.Println("skipped:", err)
				continue
			}

			var d Describer = color
			fmt.Println(d.Describe())
		}
		done <- true
	}()

	<-done
	f := fib()
	fmt.Println(theme, f(), f(), f(), f(), f(), nil == nil)
}
