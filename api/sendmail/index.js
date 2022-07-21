const nodemailer = require("nodemailer");

module.exports = async function (context, req) {
    let transporter = nodemailer.createTransport({
        service: "hotmail",
        // host: "smtp.gmail.com",
        // port: 465,
        // secure: true,
        // service: "gmail",
        auth: {
        //   user: process.env.EMAIL,
        //   pass: process.env.PASSWORD,
            user: "kffsande@outlook.com",
            pass: "Pwd4Kff5and3"
        },
        });

        const mailOptions = {
            from: "kffsande@outlook.com",
            to: "kffsande@outlook.com",
            // subject: req.body.name + "'s order is shown below...",
            subject: "Test Subject 8",
            text: "Wow! That's Easy"
        }

        transporter.sendMail(mailOptions,(error, info)=>{
            if(error){
                console.log(error);
                res.send('error');
            }else{
                console.log("Sent: " + info.response); 
            }
        }) 
};