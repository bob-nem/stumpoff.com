import nodemailer from 'nodemailer'
import API_KEY from '../../apikey'

export default async (req, res) => {
  const { name, email, message, phone, picture } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: API_KEY.user,
      clientId: API_KEY.clientId,
      clientSecret: API_KEY.clientSecret,
      refreshToken: API_KEY.refreshToken,
      accessToken: API_KEY.accessToken
    },
  });

  try {
    const emailRes = await transporter.sendMail({
    from: email,
    to: '79278500916@ya.ru',
    subject: `Contact form submission from ${name}`,
    html: `<p>You have a new contact form submission</p><br>
    <p><strong>Name: </strong> ${name} </p><br>
    <p><strong>E-mail: </strong> ${email} </p><br>
    <p><strong>Phone: </strong> ${phone} </p><br>
    <p><strong>Message: </strong> ${message} </p><br>
    <p><strong>Files: </strong> ${picture} </p>
    `,
    });

    console.log('Message Sent', emailRes.messageId);
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};