import http from 'http';
import fs from 'fs';
import FormData from "form-data";

const filePath = 'requestExamples/pic.png';
const photoStream = fs.createReadStream(filePath);

const form = new FormData();
form.append('author', 'Dimon');
form.append('title', 'Dimon');
form.append('content', 'Dimon');
form.append('picture', photoStream);

const options = {
    hostname: 'localhost',
    port: 5000,
    path: '/post',
    method: 'POST',
    headers: form.getHeaders(),
};

const req = http.request(options, res => {
    console.log(res.statusCode);
    let info = '';
    res.on("data", (chunk) => {
        info += chunk;
        // console.log(chunk);
    })
    res.on("end", () =>{
        console.log(info)
    })
})
req.on("error", (err)=>{
    console.log(err.message)
})
form.pipe(req);