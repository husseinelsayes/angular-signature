const express = require('express');
const app = express();
app.use(express.static('./dist/angular-signature'));
app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/angular-signature/'}),
);
app.listen(process.env.PORT || 8080);