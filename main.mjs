import express from 'express'
import cors from 'cors'
const PORT = process.env.PORT || 3001;


import authRouter from './routes/auth.mjs'
import postRouter from './routes/post.mjs'
import feedRouter from './routes/feed.mjs'
import commentRouter from './routes/comment.mjs'


app.use(cors())
const app = express()
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello World!' + new Date())
  })

app.use('/api/v1', authRouter)
app.use('/api/v1', postRouter)
app.use('/api/v1', feedRouter)
app.use('/api/v1', commentRouter)


app.listen(PORT, () => {
    console.log(`Example server listening on port ${PORT}`)
})