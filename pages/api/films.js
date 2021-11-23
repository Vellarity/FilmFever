import nextConnect from 'next-connect';
import middleware from '../../lib/mongodb';

const handler = nextConnect();
handler.use(middleware);
handler.get(async (req, res) => {
    let doc = await req.db.collection('Movie').find({}).toArray()
    console.log(doc);
    res.json(doc);
});
export default handler;