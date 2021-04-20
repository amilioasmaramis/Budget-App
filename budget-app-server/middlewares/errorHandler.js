module.exports = (err, req, res, next) => {
  console.log(err, '<<<<<<<:ERROR MASUK DARI ERROR HANDLER')
  console.log(err.name, '<<<<<<:ERROR NAME')
  console.log(err.message, '<<<<<<<:ERROR MSG')
  let statusCode = 500
  let errorCode = 'Internal server error'
  let message = 'Unexpected error.'

  switch (err.name) {
    case 'error_400_body_invalid':
      statusCode = 400
      errorCode = 'Validation error'
      message = 'Input invalid'
      break

    default:
      break
  }

  res.status(statusCode).json({ errorCode, message })
}
