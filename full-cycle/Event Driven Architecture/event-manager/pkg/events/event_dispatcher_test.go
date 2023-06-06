package events

import (
	"time"

	"github.com/go-playground/assert/v2"
	"github.com/stretchr/testify/mock"
	"github.com/stretchr/testify/suite"
)

type TestEvent struct {
	Name    string
	Payload interface{}
}

func (e *TestEvent) GetName() string {
	return e.Name
}
func (e *TestEvent) GetPayload() interface{} {
	return e.Payload
}
func (e *TestEvent) GetDateTime() time.Time {
	return time.Now()
}

type TestEventHandler struct {
	ID int
}

func (h *TestEventHandler) Handle(event EventInterface) {}

type EventDispatcherTestSuite struct {
	suite.Suite
	event           TestEvent
	event2          TestEvent
	handler         TestEventHandler
	handler2        TestEventHandler
	handler3        TestEventHandler
	eventDispatcher *EventDispatcher
}

func (suite *EventDispatcherTestSuite) SetupTest() {
	suite.event = TestEvent{Name: "test", Payload: "test"}
	suite.event2 = TestEvent{Name: "test2", Payload: "test2"}
	suite.handler = TestEventHandler{ID: 1}
	suite.handler2 = TestEventHandler{ID: 2}
	suite.handler3 = TestEventHandler{ID: 3}
	suite.eventDispatcher = NewEventDispatcher()
}

type Mockhandler struct {
	mock.Mock
}

func (m *Mockhandler) Handle(event EventInterface) {
	m.Called(event)
}

func (suite *EventDispatcherTestSuite) TestEventDispatcher_Register() {
	err := suite.eventDispatcher.Register(suite.event.GetName(), &suite.handler)
	suite.Nil(err)
	suite.Equal(1, len(suite.eventDispatcher.handlers[suite.event.GetName()]))
	err = suite.eventDispatcher.Register(suite.event.GetName(), &suite.handler2)
	suite.Nil(err)
	suite.Equal(2, len(suite.eventDispatcher.handlers[suite.event.GetName()]))
	assert.Equal(suite.T(), &suite.handler, suite.eventDispatcher.handlers[suite.event.GetName()][0])
	assert.Equal(suite.T(), &suite.handler2, suite.eventDispatcher.handlers[suite.event.GetName()][1])
}

func (suite *EventDispatcherTestSuite) TestEventDispatcher_TestRegister_ShouldReturnError() {
	err := suite.eventDispatcher.Register(suite.event.Name, &suite.handler)
	suite.Nil(err)
	err = suite.eventDispatcher.Register(suite.event.Name, &suite.handler2)
	suite.Nil(err)
	err = suite.eventDispatcher.Register(suite.event.Name, &suite.handler2)
	suite.Equal(ErrHandlerAlreadyExists, err)
}

func (suite *EventDispatcherTestSuite) TestEventDispatcher_Clear() {
	err := suite.eventDispatcher.Register(suite.event.Name, &suite.handler)
	suite.Nil(err)
	err = suite.eventDispatcher.Register(suite.event2.Name, &suite.handler2)
	suite.Nil(err)
	suite.Equal(2, len(suite.eventDispatcher.handlers))
	suite.eventDispatcher.Clear()
	suite.Equal(0, len(suite.eventDispatcher.handlers))
	suite.Equal(0, len(suite.eventDispatcher.handlers[suite.event.GetName()]))
	suite.Equal(0, len(suite.eventDispatcher.handlers[suite.event2.GetName()]))
}

func (suite *EventDispatcherTestSuite) TestEventDispatcher_Has() {
	err := suite.eventDispatcher.Register(suite.event.Name, &suite.handler)
	suite.Nil(err)
	err = suite.eventDispatcher.Register(suite.event2.Name, &suite.handler2)
	suite.Nil(err)
	suite.True(suite.eventDispatcher.Has(suite.event.Name, &suite.handler))
	suite.True(suite.eventDispatcher.Has(suite.event2.Name, &suite.handler2))
	suite.False(suite.eventDispatcher.Has(suite.event.Name, &suite.handler2))
	suite.False(suite.eventDispatcher.Has(suite.event2.Name, &suite.handler))
}

func (suite *EventDispatcherTestSuite) TestEventDispatcher_Dispatch() {
	m := new(Mockhandler)
	m.On("Handle", suite.event).Return()
	m.On("Handle", suite.event2).Return()
	suite.eventDispatcher.Register(suite.event.Name, m)
	suite.eventDispatcher.Register(suite.event2.Name, m)
	suite.eventDispatcher.Dispatch(&suite.event)
	suite.eventDispatcher.Dispatch(&suite.event2)
	m.AssertExpectations(suite.T())
}

func (suite *EventDispatcherTestSuite) TestEventDispatcher_Remove() {
	err := suite.eventDispatcher.Register(suite.event.Name, &suite.handler)
	suite.Nil(err)
	err = suite.eventDispatcher.Register(suite.event2.Name, &suite.handler2)
	suite.Nil(err)
	suite.Equal(2, len(suite.eventDispatcher.handlers))
	err = suite.eventDispatcher.Remove(suite.event.Name, &suite.handler)
	suite.Nil(err)
	suite.Equal(1, len(suite.eventDispatcher.handlers))
	suite.Equal(1, len(suite.eventDispatcher.handlers[suite.event2.GetName()]))
}