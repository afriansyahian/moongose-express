const User = require("../models/user");

module.exports = {
  addUser: (req, res) => {
    const newUser = new User(req.body);
    newUser.save((error, result) => {
      if (error) {
        res.status(400).send({
          message: "user failed to create",
          error
        });
      } else {
      
        res.status(200).send({
          message: "user created",
          result
        });
      }
    });
  },
  
  getUser: (req, res) => {
    console.log("masuk");
    
    User.find({})
    .populate("address", "address -_id")
    .then(result =>{
      res.send(result);
    })
    .catch(error => console.log(error));
  },

  deleteUser: (req, res) => {
    User.deleteOne(
        {
          _id:(req.params.id)
        },
        (err, result) => {
          try {
            res.send(result);
          } catch (err) {
            console.log(error);
            console.log(err);
          }
        }
      );
  },

  
  updateUser: (req, res) => {
    User.findOneAndUpdate({_id: req.params.id}, {name: req.body.name, password: req.body.password, email: req.body.email, phoneNumber: req.body.phoneNumber}, function(err, result){
      if(err){
        res.status(400).send({
          message: `error`,
          err,
        }) 
      } else {
        res.status(200).send({
          message: `update success`,
          result
        })
      
    }
      },
    
      // .updateOne(
      //   {
      //     _id: { $eq: objectId(req.params.id) }
      //   },
      //   {
      //     $set: { name: req.body.name, password: req.body.password, remail: req.body.email, hone: req.body.phone}
      //   }, 
      //   (err, result) => {
      //     try {
      //       res.send(result);
      //     } catch (error) {
      //       console.log(error);
      //       console.log(err);
      //     }
      //   }
      // );
    )}
};
