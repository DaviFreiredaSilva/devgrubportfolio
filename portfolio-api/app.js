const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sendGrid = require('@sendgrid/mail');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) =>{
  res.setHeader('Acess-Control-Allow-Origin', '*');
  res.setHeader('Acess-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Acess-Control-Allow-Headers', 'Content-type, Authrization');
  next();
});

app.get('/api', (req, res, next)=> {
  res.send('API Status: Running')
});



app.post('/api/email', (req, res, next)=> {
	const apiKey = "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";
  //A chave abaixo é obtida no site do sendgrid, escolhendo um plano
  sendGrid.setApiKey(apiKey)

  const msg = {
    to: 'dfsfreire@gmail.com',
    from: req.body.email,
    subject: 'Contato do portfolio',
    text: req.body.message
  }

  sendGrid.send(msg)
  .then(result =>{

    res.status(200).json({
      success: true
    })
  })
  .catch(err=> {
    console.log('Error: ', err);
    res.status(401).json({
      success: false
    })
  })

});

app.listen(3030, '0.0.0.0');
