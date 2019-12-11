const path = require('path')

module.exports = function({ config }) {
  config.module.rules.unshift({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/source-loader')],
    enforce: 'pre'
  })

  config.resolve.alias['@lib'] = path.resolve(__dirname, '../src/lib')
  config.resolve.alias['@components'] = path.resolve(__dirname, '../components')

  config.resolve.extensions = ['.js', '.jsx', '.json', '.css', '.scss']

  return config
}
