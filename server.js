require("dotenv").config();

const express = require("express");
const connectDB = require("./db");
const app = express();
const port = process.env.PORT;
const user = require("./schema");



app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.get("/", (req, res) => {
  res.status(201).render("home");
});




app.get("/register",(req,res) => {
    res.status(201).render("register");
})

app.post('/register',async(req,res) => {
  try {
    const data = new user({
      username:req.body.username,
      email:req.body.email,
      password:req.body.password
    })

    const response = await data.save();
    // console.log(response);
    res.status(201).render("home");
  } catch (error) {
    
  }
})


app.get("/admin", async(req,res) => {
  const add_data = await user.find({});
  console.log(add_data);
    res.render("admin",{
      users:add_data
    });
})


connectDB().then(() => {
    app.listen(port,() => {
        console.log(`http://localhost:${port}`);
    })
});