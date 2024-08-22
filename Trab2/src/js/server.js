const { createPool } = require("@vercel/postgres")
const http = require("http")
const hostname = "localhost"
const port =3000

const server = http.createServer((req,res) => {
    res.statusCode = 200
    res.setHeader("Content-Type","text/plain")
    res.end("ServerOn")
})

server.listen(port,hostname,()=> console.log(`http://${hostname}:${port}`)) 
const bar = {
    barName: string
    address: {
        CEP: string 
        neighborhood: string
        
    },
    price: Number
    site: string
    foodType: string
    typeBar: string
}