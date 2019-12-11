import jsxElem from 'jsx-no-react'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

export const TYPES = {
  SOLID: 'SOLID',
  REGULAR: 'REGULAR',
  LIGHT: 'LIGHT',
  BRAND: 'BRAND'
}

const styleMap = {
  SOLID: 'fas',
  REGULAR: 'far',
  LIGHT: 'fal',
  BRANDS: 'fab'
}

export default function FAIcon({ iconStyle = TYPES.SOLID, type }) {
  return <i class={`${styleMap[iconStyle]} fa-${type}`}></i>
}
