const express = require('express');



const app = express();

app.get('/', (req, res) => {
    res.send('Node is amazing.')
} )

app.listen(4500, () => console.log('Hello port 4500'));