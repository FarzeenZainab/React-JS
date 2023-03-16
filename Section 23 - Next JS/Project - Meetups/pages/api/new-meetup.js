import { MongoClient } from "mongodb";

// MongoCLient allows us to connect to our db using .connect() method
// this is a secure place because the code never reaches the client's machine and only runs on the server
async function handler(req, res) {
  if (req.method === "POST") {
    const formData = req.body;
    // connect to database
    // .connect returns a promise
    // Can also create cases if the connection failed or the insert failed later in this code block
    const client = await MongoClient.connect(
      "mongodb+srv://farzeen:mongo123@meetups-cluster-udemy.h9x0rew.mongodb.net/meetups-app-demo?retryWrites=true&w=majority"
    );

    // calling db method on the client
    const db = client.db("meetups-app-demo");

    // in mongoDB collections are tables in your sql database (ex: meetups table, users table, products table)
    // documents will be your entries - data of the table (ex: id: 2, name: user1 etc)
    const meetupsCollection = db.collection("meetups"); // table

    // insert one record - one document which is a JS object in the end
    const result = await meetupsCollection.insertOne({ ...formData });

    console.log(result);

    client.close();

    // next we will use the response object we get in the function parameter to send back the response of the operation

    // you can set a status code of the response which will be returned
    // Ex. 201 to indicate that something was insert successfuly
    res.status(201).json({ inserted: true });
  }
}

export default handler;
