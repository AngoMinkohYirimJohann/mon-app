const User = require("../../models/user");

module.exports = {
  signIn(req, res) {
    const { email, password } = req.body;
    res.json({ message: "Connectez-vous!" });
  },
  async register(req, res) {
    const { firstName, lastName, email, password } = req.body;
    try {
      const newUser = new User({ firstName, lastName, email, password });
      await newUser.save();
      res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
