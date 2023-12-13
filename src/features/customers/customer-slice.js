const initStateCustomer = {
  fullName: '',
  nationalID: '',
  createdAt: ''
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

const createCustomer = (fullName, nationalID) => {
  return {
    type: 'customers/createCustomer',
    payload: { fullName, nationalID, createdAt: new Date().toISOString() }
  }
}

const updateName = (fullName) => {
  return { type: 'customers/updateName', payload: fullName }
}

export default customerReducer
export { createCustomer, updateName }
