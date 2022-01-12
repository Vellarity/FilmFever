import nextConnect from 'next-connect';
import middleware from '../../lib/mongodb';
const jwt = require('jsonwebtoken')

const handler = nextConnect()
handler.use(middleware)
handler.post(async(req, res) =>{
  if (req.headers.authorization){
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, async function(err, decoded){
      if (err){
        res.json({warning:"Вы не авторизованы"})
      }
      else{
        const DBuser = await req.db.collection('Users').findOne({'userName':decoded.userName, 'id':decoded.id})
        res.json({
          user:{
            id: DBuser.id,
            userName: DBuser.userName,
            role: DBuser.role,
            avatar: DBuser.avatar
          },
          token:token
        })
      }
      
    })
  }
  else{
    const user = JSON.parse(req.body)
    const DBuser = await req.db.collection('Users').findOne({'userName':user.userName, 'password':user.password})
    if (DBuser){
      const token = jwt.sign({userName:DBuser.userName, role: DBuser.role, id: DBuser.id}, process.env.JWT_SECRET, { expiresIn: '2d' })
      res.json({
        user:{
          id: DBuser.id,
          userName: DBuser.userName,
          role: DBuser.role,
          avatar: DBuser.avatar
        },
        token:token
      })
    }
    else{
      res.json({data:'wrong'})
    }
  }
})
export default handler;