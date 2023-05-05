//authorize middleware

const authorize = (req, res, next) => {
  const { user } = req.query;

  if (user === "bilal") {
    req.user = { name: "bilal", id: 3 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;
