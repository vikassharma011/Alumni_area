import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    // Get the token from the Authorization header
    const token = req.headers.authorization.split(" ")[1];

    // Verify the token using your secret key (replace "RANDOM-TOKEN" with your actual secret)
    const decodedToken = jwt.verify(token, "RANDOM-TOKEN");

    // Store the decoded token data in the request object for later use
    req.userData = decodedToken;

    // Continue to the next middleware or route
    next();
  } catch (error) {
    // Handle token verification errors (e.g., token is invalid or expired)
    return res.status(401).json({
      message: "Authentication failed",
    });
  }
};

export default auth;
