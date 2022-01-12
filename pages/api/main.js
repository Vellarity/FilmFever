import nextConnect from 'next-connect';
import middleware from '../../lib/mongodb';

const handler = nextConnect()
handler.use(middleware);
handler.get(async(req, res) =>{
  let data = {}
  const bestTop = await req.db.collection('Movie').find().sort({'rating':-1}).limit(10).toArray()
  const boxUSA = await req.db.collection('Movie').find().sort({'boxUSA':-1}).limit(5).toArray()
  const boxRU = await req.db.collection('Movie').find().sort({'boxRU':-1}).limit(5).toArray()
  const boxWRLD = await req.db.collection('Movie').find().sort({'boxWRLD':-1}).limit(5).toArray()

  data.bestTop = bestTop
  data.boxUSA = boxUSA
  data.boxRU = boxRU
  data.boxWRLD = boxWRLD
  res.json(data);
})
export default handler;