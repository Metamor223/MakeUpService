import smtplib
from email.mime.text import MIMEText

def send_email():
    sender = "dmitryp1771@gmail.com"
    password = "89119387037d"

    server = smtplib.SMTP("smtp.gmail.com",587)
    server.starttls()

    try:
    	with open("index.html") as file:
    		template = file.read()
    except:
    	return "The template file doesn`t found!"

    try:
       server.login(sender,password)
       msg = MIMEText(template,"html")
       msg["From"] = sender
       msg["To"] = sender
       msg["Subject"] = ""
       server.sendmail(sender, sender, msg.as_string())
    except Exception as _ex:
    return f"{_ex}\n Check your login or password please!"	

def SquareTwo():
	print(send_email())

if __name__=="__main__":
	SquareTwo()