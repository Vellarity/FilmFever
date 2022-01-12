import nextConnect from 'next-connect';
import middleware from '../../../lib/mongodb';

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req, res) =>{
  const comment = JSON.parse(req.body)
  try {
    req.db.collection('Comments').insertOne(comment)
    res.json({data:'Успех!'})
  } catch (error) {
    console.log(error)
  }
})
export default handler