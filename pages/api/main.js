import nextConnect from 'next-connect';
import middleware from '../../lib/mongodb';

const handler = nextConnect()
handler.use(middleware);
handler.get(async(req, res) =>{
  let data = {}
  let bestTop = await req.db.collection('Movie').find().sort({'rating':-1}).limit(10).toArray()
  data.bestTop = bestTop
  let boxUSA = await req.db.collection('Movie').find().sort({'boxUSA':-1}).limit(5).toArray()
  let boxRU = await req.db.collection('Movie').find().sort({'boxRU':-1}).limit(5).toArray()
  let boxWRLD = await req.db.collection('Movie').find().sort({'boxWRLD':-1}).limit(5).toArray()
  data.boxUSA = boxUSA
  data.boxRU = boxRU
  data.boxWRLD = boxWRLD
  res.json(data);
})
export default handler;