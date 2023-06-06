package events

import "errors"

var ErrHandlerNotFound = errors.New("handler not found")
var ErrHandlerAlreadyExists = errors.New("handler already exists")

type EventDispatcher struct {
	handlers map[string][]EventHandlerInterface
}

func NewEventDispatcher() *EventDispatcher {
	return &EventDispatcher{
		handlers: make(map[string][]EventHandlerInterface),
	}
}

func (ed *EventDispatcher) Register(eventName string, handler EventHandlerInterface) error {
	if _, exists := ed.handlers[eventName]; !exists {
		for _, h := range ed.handlers[eventName] {
			if h == handler {
				return ErrHandlerAlreadyExists
			}
		}
	}
	ed.handlers[eventName] = append(ed.handlers[eventName], handler)
	return nil
}

func (ed *EventDispatcher) Clear() {
	ed.handlers = make(map[string][]EventHandlerInterface)
}


func (ed *EventDispatcher) Has(eventName string, handler EventHandlerInterface) bool {
	if _, exists := ed.handlers[eventName]; exists {
		for _, h := range ed.handlers[eventName] {
			if h == handler {
				return true
			}
		}
	}
	return false
}

func (ed *EventDispatcher) Dispatch(event EventInterface) error {
	if handlers, exists := ed.handlers[event.GetName()]; exists {
		for _, handler := range handlers {
			go handler.Handle(event)
		}
	}
	return nil
}

func (ed *EventDispatcher) Remove(eventName string, handler EventHandlerInterface) error {
	if _, exists := ed.handlers[eventName]; exists {
		for i, h := range ed.handlers[eventName] {
			if h == handler {
				ed.handlers[eventName] = append(ed.handlers[eventName][:i], ed.handlers[eventName][i+1:]...)
				return nil
			}
		}
	}
	return ErrHandlerNotFound
}