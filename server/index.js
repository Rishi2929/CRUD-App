const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://singhrishi2929:Qpt6VFbp2nLTOczt@cluster0.uhufrfq.mongodb.net/?retryWrites=true&w=majority")

app.post("/createUser", (req, res) => {
    UserModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})
app.listen(3001, () => {
    console.log("Server is running")
})