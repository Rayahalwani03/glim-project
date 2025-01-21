const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 5000;

// MongoDB connection URI
const uri = "mongodb+srv://miraresmc:4aRSlCst06BAX5oa@cluster0.nnldd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.use(cors()); // To allow cross-origin requests
app.use(express.json()); // To parse incoming JSON requests

// Function to insert a new post into MongoDB
async function insertNewPost(title, content) {
  try {
    await client.connect();
    const db = client.db("raya");  // Your MongoDB database
    const collection = db.collection("allposts");  // Your MongoDB collection

    const newPost = {
      date: new Date(),
      title: title,
      content: content,
    };

    const result = await collection.insertOne(newPost);
    console.log(`New post inserted with ID: ${result.insertedId}`);
    return result;
  } catch (error) {
    console.error("Error inserting new post: ", error);
    throw error;
  } finally {
    await client.close();
  }
}

// POST route to handle form submissions
app.post('/api/posts', async (req, res) => {
  const { title, content } = req.body;
  try {
    const result = await insertNewPost(title, content);
    res.status(200).json({ message: 'Post created', postId: result.insertedId });
  } catch (error) {
    res.status(500).json({ message: 'Error creating post' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
