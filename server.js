var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static('build'));

app.listen(PORT, ()=>{
  console.log(`Server running at http://localhost:${PORT}`);
})
