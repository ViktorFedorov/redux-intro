import { combineReducers, createStore } from 'redux'

const initStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: ''
}

const initStateCustomer = {
  fullName: '',
  nationalID: '',
  createdAt: ''
}

const createCustomer = (fullName, nationalID) => {
  return {
    type: 'customers/createCustomer',
    payload: { fullName, nationalID, createdAt: new Date().toISOString() }
  }
}

const updateName = (fullName) => {
  return { type: 'customers/updateName', payload: fullName }
}

const customerReducer = (state = initStateCustomer, action) => {
  switch (action.type) {
    case 'customers/createCustomer':
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt
      }
    case 'customers/updateName':
      return {
        ...state,
        fullName: action.payload
      }
    default:
      return state
  }
}

const accountReducer = (state = initStateAccount, action) => {
  switch (action.type) {
    case 'accounts/deposit':
      return {
        ...state,
        balance: state.balance + action.payload
      }
    case 'accounts/withdraw':
      return {
        ...state,
        balance: state.balance - action.payload
      }
    case 'accounts/requestLoan':
      if (state.loan > 0) return state
      return {
        ...state,
        loan: action.payload.amount,
        balance: state.balance + action.payload.amount,
        loanPurpose: action.payload.purpose
      }
    case 'accounts/payLoan':
      return {
        ...state,
        loan: 0,
        loanPurpose: '',
        balance: state.balance - state.loan
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({ accountReducer, customerReducer })

const store = createStore(rootReducer)

const deposit = (amount) => {
  return {
    type: 'accounts/deposit',
    payload: amount
  }
}
const withdraw = (amount) => {
  return {
    type: 'accounts/withdraw',
    payload: amount
  }
}
const requestLoan = (amount, purpose) => {
  return {
    type: 'accounts/requestLoan',
    payload: { amount, purpose }
  }
}

const payLoan = () => {
  return {
    type: 'accounts/payLoan'
  }
}
