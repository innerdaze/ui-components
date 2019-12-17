// import { h } from 'preact'
import React from 'react'
import FAIcon, { STYLES } from './FAIcon'

export default {
  title: 'FAIcon',
  component: FAIcon
}

export const solid = () => <FAIcon type="grin-hearts" />
export const regular = () => (
  <FAIcon type="grin-hearts" iconStyle={STYLES.REGULAR} />
)
// export const light = () => (
//   <FAIcon type="grin-hearts" iconStyle={STYLES.LIGHT} />
// )
export const brands = () => (
  <FAIcon type="grin-hearts" iconStyle={STYLES.BRANDS} />
)
// export const style = () => (
//   <FAIcon type="grin-hearts" style={{ color: 'red', fontSize: '2em' }} />
// )
