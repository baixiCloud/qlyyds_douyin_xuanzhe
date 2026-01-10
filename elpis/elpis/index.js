const koa = require('koa');

const app = new koa()

try {
    const port = process.env.PORT || 3000
    const host = process.env.IP || '0.0.0.0'
    app.listen(port, host)
}catch ( e){
    console.log(e)
}

