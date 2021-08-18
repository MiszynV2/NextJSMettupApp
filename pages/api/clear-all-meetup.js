import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://admin:Mh4FowKbpnWm8pXw@cluster0.q56p7.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    await meetupsCollection.remove({});
    client.close();

    res.status(201).json({ message: "Meetups removed" });
  }
};

export default handler;
