const bycript = require('bcryptjs');
const nodemailer = require('nodemailer');
const UserModel = require('../Database/User');
const UserModel2 = require('../Database/User2');
exports.Message = async (req, res) => {
  const { name, email, radio, City, Message, Checkbox } = req.body;
  try {
    let User = new UserModel({
      name,
      email,
      radio,
      City,
      Message,
      Checkbox,
    });
    await User.save((err) => {
      if (!err) {
        res.send({ message: 'Data sent succesfully' });
      } else {
        console.log(err);
      }
    });
  } catch (error) {}
};
exports.Upload = async (req, res) => {
  let success = (await req.file.filename) + 'upload succesfully';
  console.log(success);
  const newimage = new UserMOdel({
    image: {
      data: req.file.filename,
      contentType: 'CV/pdf',
    },
  });
  await newimage.save((err) => {
    if (!err) {
      console.log('Resume OR CV saved in uploads ');
    } else {
      console.log(err);
    }
  });
};
exports.Login = async (req, res) => {
  const { email, password } = req.body;
  UserModel2.findOne({ email: email }, async (err, user) => {
    if (!user) {
      res.send({ message: 'Invalid email or password' });
    } else {
      const domatch = await bycript.compare(password, user.password);
      if (domatch) {
        res.send({ message: 'login successfully', user: user });
      } else {
        res.send({ message: 'Invalid email or password' });
      }
    }
  });
};
exports.Register = async (req, res) => {
  const { name, email, password, Checkbox } = req.body;
  UserModel2.findOne({ email: email }, async (err, user) => {
    if (user) {
      res.send({ message: 'user already exists' });
    } else {
      bycript.hash(password, 12).then(async (hashedpassword) => {
        const User = new UserModel({
          name,
          email,
          password: hashedpassword,
          Checkbox,
        });
        await User.save((err) => {
          if (!err) {
            res.send({ message: 'Data Successfully register' });
          } else {
            console.log(err);
          }
        });
      });
    }
  });
};
