const path  = require('path')
const express = require('express')
const fs = require('fs')
const { v4: uuid } = require('uuid')
const app = express()
const cors = require('cors')

var listOfstudies = JSON.parse(fs.readFileSync(path.join(__dirname,'studies.json')))

function myMiddlewareValidate(req,res,next){
    console.log("URL requisition: "+ req.method + req.url)
    return next()
}

// To read JSON from the body
app.use(express.json())
app.use(cors())
app.use(myMiddlewareValidate)

app.get('/studies',(req,res)=>{
    const { status } = req.query
    const results = status ? listOfstudies.filter(tech => tech.status.includes(status)) : listOfstudies
        
    return res.json(results)
})

app.post('/studies',(req,res)=>{
    const { tech, status } = req.body
    const study = {id: uuid(), tech, status}
    listOfstudies.push(study)
    fs.writeFileSync(path.join(__dirname,'studies.json'), JSON.stringify(listOfstudies))
    return res.json(study)
})

app.put('/studies/:id',(req,res)=>{
    const { tech, status } = req.body
    const { id } = req.params
    const studyIndex = listOfstudies.findIndex(tech => tech.id === id)

    if (studyIndex < 0)  {
        return res.status(400).json({error:'Tech not found 🤢'})
    }

    const study = {tech, status, id}
    listOfstudies[studyIndex] = study
    fs.writeFileSync(path.join(__dirname,'studies.json'), JSON.stringify(listOfstudies))
    return res.json(listOfstudies[studyIndex])
})

app.delete('/studies/:id',(req,res)=>{
    const { id } = req.params
    const studyIndex = listOfstudies.findIndex(tech => tech.id === id)

    if (studyIndex < 0)  {
        return res.status(400).json({error:'Tech not found 🤢'})
    }
    
    listOfstudies.splice(studyIndex, 1)
    fs.writeFileSync(path.join(__dirname,'studies.json'), JSON.stringify(listOfstudies))
    return res.json({"Delete":"OK"})
})

app.listen(5000,()=>{
    console.log("Server is Running on port 5000")
})