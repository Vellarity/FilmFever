import nextConnect from 'next-connect';
import middleware from '../../lib/mongodb';

const users = [
  {
    userName:'Vell',
    password:'Vell'
  }
]

const handler = nextConnect()
handler.use(middleware)
handler.post(async(req, res) =>{
  const user = JSON.parse(req.body)
  let match = false
  const DBuser = await req.db.collection('Users').findOne({'userName':user.userName, 'password':user.password})
  if (DBuser){
    console.log(DBuser)
    res.json(DBuser)
  }
  else{
    res.json({data:'wrong'})
  }
})
export default handler;