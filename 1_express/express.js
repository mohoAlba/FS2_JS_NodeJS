try {
const port = 999;
const express = require('express')
const app = express();
app.get('/', (req, res) => {
 res.send('Hello World')
});
app.listen(port, () => {
 console.log( port)
});

} catch (err) {
    console.log("something went wrong");

}

