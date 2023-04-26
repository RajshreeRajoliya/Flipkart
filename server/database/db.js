import mongoose from 'mongoose';

const Connection = async (username, password)  => {

    const URL = `mongodb://${username}:${password}@ac-pkqh0jf-shard-00-00.4nnc0yt.mongodb.net:27017,ac-pkqh0jf-shard-00-01.4nnc0yt.mongodb.net:27017,ac-pkqh0jf-shard-00-02.4nnc0yt.mongodb.net:27017/?ssl=true&replicaSet=atlas-yg8ft5-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};


export default Connection;