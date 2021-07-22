const { User } = require('../models');
const { signToken } = require('../utils/auth');

module.exports = {
    async getSingleUser({ user = null, params }, res) {
      const foundUser = await User.findOne({
        $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
      });
  
      if (!foundUser) {
        return res.status(400).json({ message: 'Cannot find a user with this id!' });
      }
  
      res.json(foundUser);
    },

    async createUser({ body }, res) {
      const user = await User.create(body);
  
      if (!user) {
        return res.status(400).json({ message: 'Something is wrong!' });
      }
      const token = signToken(user);
      res.json({ token, user });
    },

    async login({ body }, res) {
      const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
      if (!user) {
        return res.status(400).json({ message: "Can't find this user" });
      }
  
      const correctPw = await user.isCorrectPassword(body.password);
  
      if (!correctPw) {
        return res.status(400).json({ message: 'Wrong password!' });
      }
      const token = signToken(user);
      res.json({ token, user });
    },
  }
  
  exports.deleteUser = (req, res, next) => {
    User.remove({ _id: req.params.userID })
      .then((result) => {
        if (result.length > 0)
          res.status(200).json({ message: "User has been deleted" });
        else res.status(404).json({ message: "No user was found with this ID" });
      })
      .catch((error) => res.status(200).json(error));
  }
  