import { createSlice } from '@reduxjs/toolkit'

const initState = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
  isLoading: false
}

const accountSlice = createSlice({
  name: 'account',
  initialState: initState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload
    },
    withdraw(state, action) {
      state.balance -= action.payload
    },
    requestLoan(state, action) {
      if (state.loan > 0) return

      state.loan = action.payload.amount
      state.loanPurpose = action.payload.loanPurpose
      state.balance += state.loan
    },
    payLoan(state, action) {
      state.loan = 0
      state.loanPurpose = ''
      state.balance -= state.loan
    }
  }
})

console.log(accountSlice)

export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions

export default accountSlice.reducer
