const express = require("express")
const mysql = require("mysql")
const app = express()
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodeDB'
}
const connection = mysql.createConnection(config)

const sql = `INSERT INTO ml(product, un) VALUES(?,?)`
app.get("/", (req,res)=>{
    res.send('<h1>Olá mundo fantástico</h1>')
})
app.get("/db/", (req,res)=>{
    product = req.query.product
    un = req.query.un
    console.log(product, "UN:", un)
    connection.query(sql, [product, un], (err, res, field) => {
        console.log(err, res, field)
    })
    res.send('<h1>Olá mundo fantástico</h1>')
})

app.listen(2000, ()=>{
    console.log("Servidor rodando na porta 2000")
})