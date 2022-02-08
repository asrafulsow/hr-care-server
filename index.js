const express = require('express')
const app = express()
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 5000;


//middelweare
app.use(cors())
app.use(express.json())

//mongoDB connection here


async function run() {
  try {
    await client.connect();
    const database = client.db("insertDB");
    const userCollection = database.collection("user");
    // create a document to insert
    
    // get method



  } finally {
    await client.close();
  }
}
run().catch(console.dir);




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})