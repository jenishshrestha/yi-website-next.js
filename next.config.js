const path = require('path')
module.exports = {
  trailingSlash: true,
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }

    return config
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    })

    return config
  },
  images: {
    domains: ['cms.yipl.staging.yipl.com.np'],
  },
}
