package main

import "fmt"

const (
	DebtPausedStatus            = "paused"
	DebtInPaymentStatus         = "in_payment"
	DebtDefaultedStatus         = "defaulted"
	DebtRevertedStatus          = "reverted"
	DebtProcessingPaymentStatus = "processing_payment"
	DebtProcessingRevertStatus  = "processing_revert"
	DebtProcessingDefaultStatus = "processing_default"
	DebtPaidStatus              = "paid"
)

type transitionValidator func(string, string) bool

var DebtStatusValidations = map[string]transitionValidator{
	DebtPausedStatus: func(previousState, nextState string) bool {
		return true
	},
	DebtInPaymentStatus: func(previousState, nextState string) bool {
		return true
	},
	DebtProcessingPaymentStatus: func(previousState, nextState string) bool {
		return true
	},
	DebtProcessingDefaultStatus: func(previousState, nextState string) bool {
		return true
	},
	DebtDefaultedStatus: func(previousState, nextState string) bool {
		return true
	},
	DebtProcessingRevertStatus: func(previousState, nextState string) bool {
		return true
	},
	DebtRevertedStatus: func(previousState, nextState string) bool {
		return true
	},
	DebtPaidStatus: func(previousState, nextState string) bool {
		return false
	},
}

var DebtStatesTransitions = map[string][]string{
	DebtPausedStatus: {
		DebtInPaymentStatus,
		DebtProcessingDefaultStatus,
		DebtProcessingRevertStatus,
		DebtProcessingPaymentStatus,
	},
	DebtInPaymentStatus: {
		DebtPausedStatus,
		DebtProcessingDefaultStatus,
		DebtProcessingRevertStatus,
		DebtProcessingPaymentStatus,
	},
	DebtProcessingPaymentStatus: {DebtPaidStatus},
	DebtPaidStatus:              {DebtProcessingRevertStatus, DebtInPaymentStatus},
	DebtProcessingRevertStatus:  {DebtRevertedStatus},
	DebtProcessingDefaultStatus: {DebtDefaultedStatus},
	DebtRevertedStatus:          {},
	DebtDefaultedStatus:         {DebtProcessingRevertStatus},
}

// IsValidStatus checks if it's a valid state.
func IsValidStatus(status string) bool {
	for key := range DebtStatesTransitions {
		if key == status {
			return true
		}
	}
	return false
}

func IsValidStateTransition(current, desired string) bool {
	valid := DebtStatesTransitions[current]

	for _, s := range valid {
		if s == desired {
			return DebtStatusValidations[desired](current, desired)
		}
	}

	return false
}

func IsFinalStatus(status string) bool {
	return len(DebtStatesTransitions[status]) == 0
}

func main() {
	fmt.Println(IsValidStateTransition(DebtPaidStatus, DebtProcessingRevertStatus))
}