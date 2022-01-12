import nextConnect from 'next-connect';
import middleware, { connectDB } from '../../lib/mongodb';

const handler = nextConnect()
handler.use(middleware)
handler.post(async(req, res) =>{
  const data = JSON.parse(req.body)
  try {
    const count = await req.db.collection('Users').countDocuments()
    if (req.db.collection('Users').findOne({userName:data.userName}) !== null){
      throw new Error('Пользователь с таким никнеймом уже существует')
    }
    else{
      await req.db.collection('Users').insertOne({userName:data.userName, password:data.password, role:'user', avatar:data.avatar, id:count+1})
      res.json({data:'Успех'})
    }
  } catch (error) {
    console.log(error)
    res.json({error:'Пользователь с таким никнеймом уже существует'})
  }
})
export default handler