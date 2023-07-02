/* eslint-disable @typescript-eslint/no-empty-function */
import sgMail from '@sendgrid/mail'

export function sendNodeMailer() {


}

export function sendMailSendgrid(data: sgMail.MailDataRequired) {
  const apiKey = process.env.SENDGRID_API_KEY as string
  sgMail.setApiKey(apiKey)

  return sgMail.send(data)
}
