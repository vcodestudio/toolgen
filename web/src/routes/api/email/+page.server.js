import { __e, __t } from '$lib/utils'
import nodemailer from 'nodemailer'

export const actions = {
  license: async ({ cookies, request }) => {
    const data = await request.formData()
    const forms = ['name*', 'email*', 'number', 'desc*', 'company*']
    const values = {}
    let success = true
    let errors = {}
    const lang = data.get('lang') || 'eng'
    forms.forEach(a => {
      // check valid field value. (*) is required. errors is error message
      const required = a.includes('*')
      const key = a.replace('*', '')
      const value = data.get(key)
      const valid = isValid(key, value, lang)
      if (!valid.check && required) {
        success = false
        errors[key] = valid.msg
      }
      values[key] = value
    })

    if (success) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'vcode@vcode-studio.com',
          pass: 'qqmajzxhjmcqbuqa',
        },
      })

      var mailOptions = {
        from: '"Info" <info@toolgen.com>', //'info@toolgen.com'
        to: 'Partnership@toolgen.com',
        subject: `[라이센스 문의]${data.get('title')}`,
        html: `
        <p>${data.get('title')}에 대한 문의가 접수되었습니다.</p>
        <br>
        <table>
          <tr>
            <td>이름</td>
            <td>${data.get('name')}</td>
          </tr>
          <tr>
            <td>이메일</td>
            <td>${data.get('email')}</td>
          </tr>
          <tr>
            <td>전화번호</td>
            <td>${data.get('number')}</td>
          </tr>
          <tr>
            <td>회사명/단체명</td>
            <td>${data.get('company')}</td>
          </tr>
          <tr>
            <td>내용</td>
            <td>${data.get('desc')}</td>
          </tr>
        </table>
        `,
      }

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log('error', error)
        } else {
          console.log('Email sent: ' + info.response)
        }
      })
    }

    return { success, values, errors }
  },
  sendDB: async ({ cookies, request }) => {
    const data = await request.formData()
    const forms = ['name*', 'email*', 'number*', 'upload*']
    const values = {}
    let success = true
    let errors = {}
    const lang = data.get('lang') || 'eng'
    forms.forEach(a => {
      // check valid field value. (*) is required. errors is error message
      const required = a.includes('*')
      const key = a.replace('*', '')
      const value = data.get(key)
      console.log(key)
      const valid = isValid(key, value, lang)
      if (!valid.check && required) {
        success = false
        errors[key] = valid.msg
      }
      values[key] = value
    })

    if (success) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'vcode@vcode-studio.com',
          pass: 'qqmajzxhjmcqbuqa',
        },
      })

      var mailOptions = {
        from: '"Info" <info@toolgen.com>', //'info@toolgen.com'
        to: 'recruit@toolgen.com',
        subject: `[인재 DB 등록] 인재 DB 등록 요청이 접수되었습니다.`,
        html: `
        <table>
          <tr>
            <td>이름</td>
            <td>${data.get('name')}</td>
          </tr>
          <tr>
            <td>이메일</td>
            <td>${data.get('email')}</td>
          </tr>
          <tr>
            <td>전화번호</td>
            <td>${data.get('number')}</td>
          </tr>
          <tr>
            <td>파일</td>
            <td>${data.get('upload')}</td>
          </tr>
        </table>
        `,
      }

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log('error', error)
        } else {
          console.log('Email sent: ' + info.response)
        }
      })
    }

    return { success, values, errors }
  },
}

function isValid(key, value, lang) {
  let check = value.length > 0
  let msg = __t('form.invalid_required', lang, '필수 입력 항목입니다.')
  switch (key) {
    case 'email':
      // check valid email
      check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      if (!check) msg = __t('form.invalid_email', lang, '이메일 형식이 올바르지 않습니다.')
      break
    case 'desc':
      // check desc is over 10 characters
      check = value.length > 10
      if (!check) msg = __t('form.invalid_desc', lang, '내용은 10자 이상 입력해주세요.')
      break
    // case 'number':
    //   // check valid phone number
    //   check = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/.test(value)
    //   if (!check) msg = __t('form.invalid_number', lang, '전화번호 형식이 올바르지 않습니다.')
    //   break
  }

  return { check, msg }
}
