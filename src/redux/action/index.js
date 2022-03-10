const addCart = (product) => {
  return {
    type: 'ADDITEM',
    payload: product,
  }
}

export { addCart }
