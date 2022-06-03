exports.goes = function (){
    const { MongoClient } = require("mongodb");

    const uri = process.env.MONGODB_URL;

    // Create a new MongoClient
    const client = new MongoClient(uri);

    async function run() {
        try {
            // Connect the client to the server
            await client.connect();

            const DB = client.db('VladDB');
            const currentMissions = DB.collection('Missions');

            const query = { name: "Mikita" };

            const movie = await currentMissions.findOne(query);

            console.log(movie);
        } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
        }
    }

    run().catch(console.dir);
}