const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.cookie('jwt', token, {
    httpOnly: true,  // Ensures the cookie can't be accessed by JavaScript
    secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production (HTTPS)
    sameSite: 'None', // Allows cookies to be sent in cross-origin requests
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });
};

export default generateToken;
