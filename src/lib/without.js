import curry from './curry'

export default curry(function without(props, data) {
  const _props = [].concat(props)

  return Object.entries(data).reduce((acc, [k, v]) => {
    if (!_props.includes(k)) {
      acc[k] = v
    }

    return acc
  }, {})
})
