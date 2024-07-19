const express = require('express');
const app = express();
const downloadRoute = require('./api/download');

app.use(express.json());
app.use(express.static('public'));
app.use('/api/download', downloadRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
