const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express()
const port = process.env.PORT || 3001;


app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://singhrishi2929:Qpt6VFbp2nLTOczt@cluster0.uhufrfq.mongodb.net/?retryWrites=true&w=majority")

app.get('/', (req, res) => {
    UserModel.find({})
        .then(users => res.json(users))
})

app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById({ _id: id })
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({ _id: id }, { name: req.body.name, email: req.body.email, age: req.body.age })
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({ _id: id })
        .then(res => res.json(res))
        .catch(err => res.json(err))
})

app.post("/createUser", (req, res) => {
    UserModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})
app.listen(port, () => {
    console.log("Server is running")
})