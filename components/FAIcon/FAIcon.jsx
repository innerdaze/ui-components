// import { h } from 'preact'
import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@aduh95/preact-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas, fab, far)

export const STYLES = {
  SOLID: 'SOLID',
  REGULAR: 'REGULAR',
  // LIGHT: 'LIGHT',
  BRAND: 'BRAND'
}

const styleMap = {
  SOLID: 'fas',
  REGULAR: 'far',
  // LIGHT: 'fal',
  BRANDS: 'fab'
}

export default function FAIcon({ iconStyle = STYLES.SOLID, type }) {
  return <FontAwesomeIcon icon={[styleMap[iconStyle], type]} />
}
