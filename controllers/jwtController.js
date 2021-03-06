import jwt from 'jsonwebtoken'

export const generateJWT = async (req, res) => {
    const token = jwt.sign(
        {
            access_api : true
        },
        "simpleSecret",
        {
            expiresIn: "30m",
        }
    )
    return res.status(201).json({
        token : token
    })
}

export const verifyJWT = async (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"] || req.headers['authorization'];

    if (!token) {
        return res.status(403).json({
            message : "A token is required for authentication"
        });
    }

    try {
        const decoded = jwt.verify(token, 'simpleSecret');
        req.user = decoded;
      } catch (err) {
        return res.status(401).json({
            message : "Invalid Token"
        });
      }
      return next();
}