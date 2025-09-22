from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello():
    return "<h1>Olá, Mundo Docker!</h1>"

if __name__ == "__main__":
    # O host '0.0.0.0' faz a aplicação ser acessível de fora do contêiner
    app.run(host='0.0.0.0', port=5000)