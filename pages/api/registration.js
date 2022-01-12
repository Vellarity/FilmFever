import nextConnect from 'next-connect';
import middleware, { connectDB } from '../../lib/mongodb';

const handler = nextConnect()
handler.use(middleware)
handler.post(async(req, res) =>{
  const data = JSON.parse(req.body)
  const db = connectDB()
  try {
    const count = await (await db).collection('Users').countDocuments()
    (await db).collection('Users').insertOne({userName:data.userName, password:data.password, role:'user', avatar:data.avatar, id:count})
    res.json({data:'Успех'})
  } catch (error) {
    res.json({error:'Ошибка'})
  }
})
export default handler