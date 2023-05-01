import http from 'http';

const id = '644517f02ab6ceb47f6c2f50'
const options = {
    hostname: 'localhost',
    port: 5000,
    path: `/posts/${id}`,
    method: 'DELETE',
    headers: {
        "content-type": "application/json",
    }
};
const req = http.request(options, (res)=>{
    let info = '';

    res.on('data', chunk=>{
        info += chunk;
    })
    res.on('end', () => {
        console.log(JSON.parse(info));
    })
});
req.on("error", (err)=>{
    console.log(err.message)
});
req.end();