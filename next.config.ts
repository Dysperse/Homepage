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
      {
        source: '/download/ios',
        destination: 'https://click.dysperse.com/ios',
        permanent: false,
      },
      {
        source: '/download/android',
        destination: 'https://click.dysperse.com/android',
        permanent: false,
      },
    ]
  },
}
