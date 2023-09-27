import jwt from 'jsonwebtoken'

const validateAccessToken = async (req, res, next) => {
  let token = req.headers['Authorization']
  if (!token) return res.status(403).send('Forbidden')
  token = token.replace('Bearer ', '')

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

export default validateAccessToken
