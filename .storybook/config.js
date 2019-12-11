import { configure, addDecorator } from '@storybook/html'
// import { jsxDecorator } from 'storybook-addon-jsx'

// addDecorator(jsxDecorator)

// automatically import all files ending in *.stories.js
configure(require.context('../components', true, /\.stories\.jsx?$/), module)
