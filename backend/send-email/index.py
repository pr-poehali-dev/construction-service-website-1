import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки с сайта на почту nikoinvest.stroy@mail.ru"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    description = body.get('description', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Имя и телефон обязательны'})
        }

    smtp_user = 'nikoinvest.stroy@mail.ru'
    smtp_password = os.environ['SMTP_PASSWORD']

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с сайта — {name}'
    msg['From'] = smtp_user
    msg['To'] = smtp_user

    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px; background: #1a1a1a; color: #fff; padding: 32px; border-radius: 4px;">
      <div style="border-left: 4px solid #f97316; padding-left: 16px; margin-bottom: 24px;">
        <h2 style="margin: 0; color: #f97316; font-size: 20px;">НОВАЯ ЗАЯВКА С САЙТА</h2>
      </div>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px 0; color: #888; width: 140px;">Имя</td>
          <td style="padding: 10px 0; color: #fff; font-weight: bold;">{name}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #888;">Телефон</td>
          <td style="padding: 10px 0; color: #f97316; font-weight: bold; font-size: 18px;">{phone}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #888; vertical-align: top;">Описание</td>
          <td style="padding: 10px 0; color: #ccc;">{description if description else '—'}</td>
        </tr>
      </table>
    </div>
    """

    msg.attach(MIMEText(html, 'html'))

    with smtplib.SMTP_SSL('smtp.mail.ru', 465) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, smtp_user, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True})
    }
