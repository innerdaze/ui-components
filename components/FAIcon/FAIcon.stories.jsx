import jsxElem from 'jsx-no-react'
import FAIcon, { TYPES } from './FAIcon'

export default {
  title: 'FAIcon',
  component: FAIcon
}

export const solid = () => <FAIcon type="grin-hearts" />
export const regular = () => (
  <FAIcon type="grin-hearts" iconStyle={TYPES.REGULAR} />
)
export const light = () => <FAIcon type="grin-hearts" iconStyle={TYPES.LIGHT} />
export const brands = () => (
  <FAIcon type="grin-hearts" iconStyle={TYPES.BRANDS} />
)
export const style = () => (
  <FAIcon type="grin-hearts" style={{ color: 'red', fontSize: '2em' }} />
)
