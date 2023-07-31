import nodemailer from 'nodemailer'

export const POST = async ({ request }) => {
  const body = await request.json()
  const keys = ['name', 'email', 'msg']
  // check if body has all keys
  if (!keys.every(key => Object.keys(body).includes(key))) {
    return new Response(JSON.stringify({ error: 'invalid body' }), {
      headers: { 'content-type': 'application/json;charset=UTF-8' },
    })
  } else {
    // check if req is our server
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env['MAIL_ID'],
        pass: process.env['MAIL_PASS'],
      },
    })

    var mailOptions = {
      from: 'vcode@vcode-studio.com',
      to: 'vcode@vcode-studio.com',
      subject: `${body.name}으로 부터 메일`,
      text: `${body.msg}`,
    }

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error)
      } else {
        console.log('Email sent: ' + info.response)
      }
    })
    return new Response(JSON.stringify(body), {
      headers: { 'content-type': 'application/json;charset=UTF-8' },
    })
  }
}
// Gmail : AIzaSyAI8mOIJxdADNNHqai2eGx2RR9KeC_7V1U
