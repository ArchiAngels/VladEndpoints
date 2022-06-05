exports.goes = async function (ms){
    return new Promise(function(resolve,reject){

        let timer = setTimeout;

        let HandleSetTimeoutError = new Promise((_,reject)=>{
            timer(()=>{
                try {
                    throw new Error('Time is up');
                } catch (error) {
                    reject(error)
                }
            },ms);
        })

        HandleSetTimeoutError.catch((e)=>{
            reject({reason:e,status:"BAD",passedMS:ms});
        })

        
        const { MongoClient } = require("mongodb");
            
            const uri = process.env.MONGODB_URL;
    
            // Create a new MongoClient
            const client = new MongoClient(uri);
    
            async function run() {
                try {
                    // Connect the client to the server
                    await client.connect();
    
                    const DB = client.db(process.env.DB_NAME);
                    const currentMissions = DB.collection(process.env.DB_COLLECTION);
    
                    const query = { name: "Mikita" };
    
                    const movie = await currentMissions.findOne(query);

                    
    
                    clearTimeout(timer);
    
                    return resolve({value:movie,status:'OK'});
                }catch(e){
                    console.log(e);
                }
                 finally {
                    await client.close();
                }
            }
    
            return run()
    }).catch((e=>{
        return e;
    }))
}