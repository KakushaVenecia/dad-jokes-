const express = require('express');
const routes = require('./routes/routes')
const app = express();

const port = process.env.PORT || 3000

routes(app); 

app.listen(port, () => {
    console.log(`This server is listening on port ${port}`);
});
    