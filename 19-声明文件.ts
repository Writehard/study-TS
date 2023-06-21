//在ts中引入的第三方库 如果没有声明文件 需要使用npm i --save-dev @types/express
//如下所示引入 axios express axios是有声明文件的 而express是没有声明文件的 
// npm i --save-dev @types/express 就不会报错了
import express from "express";
//手写
const app = express();
const router = express.Router()
app.use('/api', router)

router.get('/api', (req:any, res:any)=> {
    res.json({
        code:200
    })
})

app.listen(9001,()=> {
    console.log('9001');
})
