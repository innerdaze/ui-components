// import { configure, addDecorator } from '@storybook/preact'
import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import 'storybook-addon-specifications/register'
import { configure as configureEnzyme } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configureEnzyme({ adapter: new Adapter() })

addDecorator(withKnobs)

// automatically import all files ending in *.stories.js
configure(require.context('../components', true, /\.stories\.jsx?$/), module)
