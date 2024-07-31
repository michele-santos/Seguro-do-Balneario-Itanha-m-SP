const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/alert', (req, res) => {
    const { message, location } = req.body;
    
    // Aqui você adiciona a lógica para enviar o alerta às autoridades ou serviços de emergência
    // Isso pode incluir enviar um email, SMS, ou integração com uma API de terceiros
    
    console.log(`Alerta recebido: ${message}, Localização: ${location}`);
    
    // Simulação de processamento bem-sucedido
    res.status(200).send('Alerta de pânico recebido');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
