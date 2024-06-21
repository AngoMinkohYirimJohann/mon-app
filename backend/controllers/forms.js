module.exports = {
  async signIn(req, res) {
    res.json({ message: "Connecté-vous! " });
  },
  async register(req, res) {
    res.json({ message: "Inscrivez-vous! " });
  },
};
