const cart = []

const handleCart = (state = cart, action) => {
  const product = action.payload
  switch (action.type) {
    case 'ADDITEM':
      const exist = state.find((x) => x.id === product.id)
      if (exist) {
        return state.map((x) => {
          return x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        })
      } else {
        const product = action.payload
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ]
      }
      break
    default:
      return state
  }
}

export default handleCart
