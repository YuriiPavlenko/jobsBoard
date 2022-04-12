import express from "express"
import cors from "cors"
import * as fs from "fs"
import bodyParser from "body-parser"

const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

app.get("", (req, res) => {
  const data = fs.readFileSync("data.json")
  const results = JSON.parse(data)
  res.send(results)
})

app.post("", (req, res) => {
  fs.writeFile("data.json", JSON.stringify(req.body, null, 2), () => {})
  res.send("success")
})

app.listen(8080, () => console.log("listening on http://localhost:8080"))
