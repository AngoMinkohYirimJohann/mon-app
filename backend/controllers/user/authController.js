const User = require("../../models/user");

module.exports = {
  signIn(req, res) {
    res.json({ message: "Connectez-vous!" });
  },
  register(req, res) {
    const { firstName, lastName, email, password } = req.body;
    try {
      const newUser = new User({ firstName, lastName, email, password });
      newUser.save();
      res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
