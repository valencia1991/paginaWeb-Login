const mysql = require("mysql")
const { clearScreenDown } = require("readline")

const connetion = mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'',
    database:'loginformulario'
})

connetion.connect((err)=>{
    if(err) throw err
    console.log('conexión funciona')
});

