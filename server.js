const express = require('express')
const app = express()
const cors = require ('cors')
const port = 8080
const route = require('./routes/userRoutes')
const routeAdmin = require('./routes/adminRoutes')
const routeProd = require('./routes/productRoutes')

const Connect = require("./dbCconnect")



Connect()
app.use(cors())
app.use(express.json())


app.use("/api/cosm/user",route)
app.use("/api/cosm/admin",routeAdmin)
app.use("/api/cosm/product",routeProd)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
