const express = require('express');
const app = express();

const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/', (req, res)=>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'emailtesterjnc@gmail.com',
            pass: 'TestPassword1'
        },

    });

    const mailOptions = {
        from: req.body.email,
        to: 'jncostamagna@gmail.com',
        subject: `Mensaje de ${req.body.name} desde solucionescontablessd.com`,
        text: req.body.message,
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
            res.send('error');
        }
        else{
            console.log('Email sent: ' + info.response.text);
            res.send('success');
        }
    })
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})

