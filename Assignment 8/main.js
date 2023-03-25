const { validateFullName, validateEmail, checkPassword } = require("./validations");

const express = require("express"),  //need express js
      app = express(),
      mongoose = require("mongoose"),   //need for mongo db connection
      bcrypt = require("bcrypt"),       //for encryption
      bodyParser = require("body-parser");  //for parsing json

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/Assignment_8", {   //to connect mongo database
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userDataSchema = new mongoose.Schema({
  fullname: String,  
  email: String,
  password: String,
});

const User = mongoose.model("user", userDataSchema);

// Home Page
app.get("/", (req, res) => {
    res.send("Welcome to Home page");
  });

  app.post("/user/create", async (req, res) => {

    try {
  
      let user = await User.findOne({ email: req.body.email });
      let passBool, emailBool, fullnameBool = false;
  
      if (user) {
        res.status(400).send({ message: "Email address already exists." });
      } else {
  
        if (validateEmail(req.body.email)) {
          emailBool = true;
        } else {
          emailBool = false;
          res.status(400).send({ message: "Please enter valid email address!"});
        }
  
        if (checkPassword(req.body.password) ) {
          passBool = true;
        } else {
          passBool = false;
          res.status(400).send({ message: "Please enter valid password!"});
        }

        if (validateFullName(req.body.fullname)) {
            fullnameBool = true;
          } else {
            fullnameBool = false;
            res.status(400).send({ message: "Please enter valid full name!"});
          }
  
        if ( passBool && emailBool && fullnameBool) {
          const hashedPassword = await bcrypt.hash(req.body.password, 10);
          const result = await User.create({
            email: req.body.email,
            password: hashedPassword,
            fullname: req.body.fullname,
            user_type: req.body.user_type
          });
          res.status(201).send(result);
        }   
      }    
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Internal Server Error Occurred!"});
    }
  
  });

//Edit user
app.put("/user/edit", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        res.status(404).send({ message: "User not found" });
        return;
      }
      if (req.body.fullname && validateFullName(req.body.fullname)) {
        user.fullname = req.body.fullname;
      } else {
        res.status(400).send({ message: "Please enter a valid full name" });
        return;
      }
      if (req.body.password && checkPassword(req.body.password)) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        user.password = hashedPassword;
      } else {
        res.status(400).send({ message: "Please enter a valid password" });
        return;
      }
      const result = await user.save();
      res.send(result);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Internal Server Error Occurred!" });
    }
  });
  

// Get all users
app.get("/user/getAll", async (req, res) => {
    try {
      const users = await User.find({});
      users.forEach((user) => delete user.password);
      const newResult = users.map((item) => {
        return {
          email: item.email,
          password: item.password,
          fullname: item.fullname
        };
      });
      res.send(newResult);
    } catch (err) {
      res.status(500).send(err);
    }
  });

//Delete user
app.delete("/user/delete", async (req, res) => {
    try {
      const { email } = req.body;
  
      const deletedUser = await User.findOneAndDelete({ email });
  
      if (deletedUser) {
        res.status(200).send({ message: "User deleted successfully" });
      } else {
        res.status(404).send({ message: "User not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Internal Server Error Occurred!" });
    }
  });
  

// Server config block
app.listen(8000, () => {
    console.log("Server started at port 8000");
});
