import { configureStore } from '@reduxjs/toolkit'
import accountReducer from './features/accounts/account-slice'
import customerReducer from './features/customers/customer-slice'

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer
  }
})

export default store
