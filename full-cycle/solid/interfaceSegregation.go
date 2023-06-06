package main


type FilmePlayer interface {
	aumentarVolume()
	play()
}

type Filme1Impl struct {}
func (f Filme1Impl) aumentarVolume() {
	// aumentar volume
}
func (f Filme1Impl) play() {
	// dar play
}

type Filme2MudoImpl struct {}
func (f Filme2MudoImpl) aumentarVolume() {
	// não faz nada, pois o filme é mudo
}
func (f Filme2MudoImpl) play() {
	// dar play
}



type player interface {
	play()
}

type audioControl interface {
	aumentarVolume()
}

type Filme3Impl struct {}
func (f Filme3Impl) aumentarVolume() {
	// aumentar volume
}
func (f Filme3Impl) play() {
	// dar play
}

type Filme4MudoImpl struct {}
func (f Filme4MudoImpl) play() {
	// dar play
}
