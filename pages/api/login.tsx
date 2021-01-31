// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// tutorial ding: nextjs.org/learn/basics/api-routes/creating-api-routes

export default (req, res) => {
  res.statusCode = 200
  return res.json({ accessToken: 'randomToken' })
}
