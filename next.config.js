module.exports = ({ defaultConfig }) => {
  config = {
    api: {
      bodyParser: {
        sizeLimit: '14mb',
      },
    },
  }
  return config
}