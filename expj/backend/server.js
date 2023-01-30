const express = require("express");
const cors = require("cors");

const PORT = 4000;
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    const pororoObjArr = [
        {
            name: '뽀로로',
            age: '5',
            nickName: '주인공'
        },
        {
            name: '루피',
            age: '4',
            nickName: '잔망 루피'
        },
        {
            name: '크롱이',
            age: '5',
            nickName: '용'
        }
    ];

    res.status(200).send(JSON.stringify(pororoObjArr));
});

app.listen(PORT, () => {
    console.log(`백엔드 서버가 ${PORT}번에서 작동 중`);
})