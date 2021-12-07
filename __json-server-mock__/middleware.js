const { users } = require("./users");

module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    const { username, password } = req.body;
    const isValid = users.some(
      (user) => username === user.username && password === user.password
    );
    if (!isValid) {
      return res.status(400).json({
        message: "Invalid username or password",
      });
    }
    return res.status(200).json({
      user: username,
    });
  }
  next();
};
