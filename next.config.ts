module.exports = {
  async redirects() {
    return [
      {
        source: '/ios',
        destination: 'https://click.dysperse.com/ios',
        permanent: false,
      },
      {
        source: '/android',
        destination: 'https://click.dysperse.com/android',
        permanent: false,
      },
    ]
  },
}
