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
  let tongAll = 0;

  content += `
    <div>
    <h4>Chào bạn, </h4>
    <p>Đơn hàng của bạn tại WheyStore :</p>
    <div style="background-color: #ccffff;">
    <table style="width: 100%; margin-bottom: 1em;border-spacing: 0; text-align: center; border: 0.5px gray solid;" >
    <thead>
      <tr>
        <th>Sản phẩm</th>
        <th>Tổng</th>
      </tr>
    </thead>
    <tbody>
    `;
  req.body.list.map((ele, key) => {
    tongAll = tongAll + ele.tong;
    content +=
      '<tr>' +
      '<td> ' +
      ele.product_name +
      'x' +
      ele.soluong +
      '</td>' +
      '<td> ' +
      ele.tong.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) +
      '</td>' +
      '</tr>';
  });
  content += `
        </tbody>
    </table>
  </div>
  `;
  content +=
    `<b> Tổng giá trị đơn hàng : 
    ${tongAll.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
    </b>  
     <p>Đơn hàng sẽ gửi muộn nhất 3 ngày kể từ lúc email này gửi đi</p>
     <h3>WHEY STORE</h3>
     <p>
     0982678xxx</p>
  </div> `;

  var mainOptions = {
    // thiết lập đối tượng, nội dung gửi mail
    from: 'LuatPT test',
    to: req.body.eomail,
    subject: '[Whey Store] Đơn hàng thực phẩm bổ sung',
    text: 'Your text is here', //Thường thi mình không dùng cái này thay vào đó mình sử dụng html để dễ edit hơn
    html: content, //Nội dung html mình đã tạo trên kia :))
  };
  transporter.sendMail(mainOptions, function (err, info) {
    if (err) res.send(err);
    console.log('Send email success');
  });
};
