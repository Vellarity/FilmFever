import nextConnect from 'next-connect';
import middleware, { connectDB } from '../../../lib/mongodb';
const sharp = require('sharp')

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req, res) =>{
  const params = JSON.parse(req.body)
  let comments = await req.db.collection('Comments').find({filmID:Number(params.filmID.id)}).skip(params.from).limit(params.to).toArray()
  for (let comment of comments){
    let user = await req.db.collection('Users').findOne({id:comment.userID},{projection:{userName:1, avatar:1}})
    let imageAr = user.avatar.split(',')
    const imageBuf = Buffer.from(imageAr[1], 'base64')
    const newImage = await (await sharp(imageBuf).resize(40, 40).jpeg({ mozjpeg: true, quality:50}).toBuffer()).toString('base64')
    user.avatar = imageAr[0] + ',' + newImage
    comment.user = user
  }
  res.json({comments:comments})
})
export default handler