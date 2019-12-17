const path = require('path')

module.exports = function({ config }) {
  config.module.rules.unshift({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/source-loader')],
    enforce: 'pre'
  })

  config.module.rules.unshift({
    test: /\.svg$/,
    use: ['preact-svg-loader']
  })

  config.resolve.alias['@lib'] = path.resolve(__dirname, '../src/lib')
  config.resolve.alias['@components'] = path.resolve(__dirname, '../components')
  // config.resolve.alias['react'] = 'preact-compat'
  // config.resolve.alias['react-dom'] = 'preact-compat'

  config.resolve.extensions = ['.js', '.jsx', '.json', '.css', '.scss']

  config.externals = {
    jsdom: 'window',
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
    'react/addons': true
  }

  return config
}
