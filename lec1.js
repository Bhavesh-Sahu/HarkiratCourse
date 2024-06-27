
const express = require('express')
const app = express()
const port = 3000

var users = [{name: 'abc', kidneys:[{healthy:false},{healthy:true}]}]

app.use(express.json())

app.get('/', (req, res) => {
  const numberOfKidneys = users[0].kidneys.length
  const numberOfHealthyKidneys = users[0].kidneys.filter(kidney => kidney.healthy).length
  res.json({
    numberOfKidneys,numberOfHealthyKidneys
  })
})

app.post('/', (req, res) => {
  const isHealthy = req.body.isHealthy
  users[0].kidneys.push({healthy:isHealthy})
  res.json({msg:'Done'})
})

app.put('/', (req, res) => {
  users[0].kidneys.forEach((item) => {
    item.healthy = true
  })
  res.json({msg:'Done'})
})

app.delete('/', (req, res) => {
  const x = users[0].kidneys.filter((item) => {
    return item.healthy === true
  })
  users[0].kidneys = [...x]
  res.json({msg:'Done'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})















