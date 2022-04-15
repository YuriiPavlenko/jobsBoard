import express from "express"
import cors from "cors"
import * as fs from "fs"
import bodyParser from "body-parser"

const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

app.get("/kotya", (req, res) => {
  const data = fs.readFileSync("kotya.json")
  const results = JSON.parse(data)
  res.send(results)
})

app.get("/kitya", (req, res) => {
  const data = fs.readFileSync("kitya.json")
  const results = JSON.parse(data)
  res.send(results)
})

app.post("/kotya", (req, res) => {
  fs.writeFile("kotya.json", JSON.stringify(req.body, null, 2), () => {})
  res.send("success")
})

app.post("/kitya", (req, res) => {
  fs.writeFile("kitya.json", JSON.stringify(req.body, null, 2), () => {})
  res.send("success")
})

app.listen(8080, () => console.log("listening on http://localhost:8080"))
