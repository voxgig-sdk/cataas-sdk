package core

type CataasError struct {
	IsCataasError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewCataasError(code string, msg string, ctx *Context) *CataasError {
	return &CataasError{
		IsCataasError: true,
		Sdk:              "Cataas",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *CataasError) Error() string {
	return e.Msg
}
