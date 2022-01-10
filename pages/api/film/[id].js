import nextConnect from 'next-connect';
import middleware from '../../../lib/mongodb';
const Jimp = require("jimp");

const handler = nextConnect();
handler.use(middleware);
handler.get(async (req, res) => {
    const {id} = req.query
    let data = {}
    let film = await req.db.collection('Movie').findOne({id:Number(id)})
    data.film = film
    let comments = await req.db.collection('Comments').find({filmID:Number(id)}).toArray()
    for (let comment of comments){
        let user = await req.db.collection('Users').findOne({id:comment.userID},{projection:{userName:1, avatar:1}})
        let imageAr = user.avatar.split(',')
        const imageBuf = Buffer.from(imageAr[1], 'base64')
        Jimp.read(imageBuf, (err, res) =>{
            if (err) throw new Error(err);
            res.quality(1).getBase64(Jimp.MIME_JPEG, (err, base) =>{
                user.avatar = imageAr[0] + base
            })
        })
        comment.user = user
    }
    data.comments = comments
    res.json(data);
});
export default handler;