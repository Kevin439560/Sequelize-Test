const express = require('express'); 

const app = express();

const db = require("./models");

const {User} = require('./models');

app.get("/select", (req, res) => {

    User.findAll()//{where:  {Nome: "Kevin"}}

    .then((users) => {

        res.send(users);

    })
    .catch((err) => {

        console.log(err);

    }) 
        
})
app.get("/insert", (req, res) => {

    User.create({
        Nome:"Kevin",
        Idade: 21
    }).catch(err => {
        if(err){
            console.log(err)
        }
    })

    res.send("data insert")
})
app.get("/delete", (req, res) => {
    User.destroy({where: {id: 1}})
    res.send('deleted user');
})
db.sequelize.sync().then((req) => {
    //precisa ser uma porta diferente da que o bd escuta
    app.listen(3301, () =>{
        console.log("escutando na porta 3301...")
    });
});