'use strict';
const nodemailer = require('nodemailer');
exports.send_mail = (req, res) => {
  var transporter = nodemailer.createTransport({
    // config mail server
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'jpham6088@gmail.com', //Tài khoản gmail vừa tạo
      pass: 'test1234@', //Mật khẩu tài khoản gmail vừa tạo
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });
  var content = '';
  content += `
    <div style="padding: 10px; background-color: #003375">
        <div style="padding: 10px; background-color: white;">
            <h4 style="color: #0085ff">Gửi mail với nodemailer và express</h4>
            <span style="color: black">Đây là mail test</span>
        </div>
    </div>
`;
  console.log(req.body.mail);
  var mainOptions = {
    // thiết lập đối tượng, nội dung gửi mail
    from: 'LuatPT test',
    to: req.body.mail,
    subject: 'Test Nodemailer',
    text: 'Your text is here', //Thường thi mình không dùng cái này thay vào đó mình sử dụng html để dễ edit hơn
    html: content, //Nội dung html mình đã tạo trên kia :))
  };
  transporter.sendMail(mainOptions, function (err, info) {
    if (err) res.send(err);
    console.log('send success');
  });
};
