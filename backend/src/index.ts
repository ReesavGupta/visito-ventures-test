import express from 'express'
import { indexRouter } from './routes/index.route'
import cors from 'cors'
const app = express()

app.use(cors({ origin: '*' }))

const port = 3000

app.use(express.json())
app.use('/api', indexRouter)

app.listen(3000, () => {
  console.log(`server is running on port : ${port}`)
})

// $ docker run --name temp-todo -e POSTGRES_PASSWORD=mypassword -d -p 5432:5432 postgres
