import { MongoClient } from 'mongodb'
import nextConnect from 'next-connect';

const connectionString = 'mongodb+srv://Vell:RiVell019289@kinodoiskxd.soic6.mongodb.net/Movies?retryWrites=true&w=majority'

const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  await client.connect();
  req.dbClient = client;
  req.db = client.db('Movies');
  return next();
}
const middleware = nextConnect();
middleware.use(database);
export default middleware;

export async function connectDB(){
  await client.connect()
  return (client.db('Movies'))
}