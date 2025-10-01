### App 1 - Página Web estática
from flask import Flask, render_template

# Inicializa a aplicação Flask
app = Flask(__name__)

# Definindo a rota principal ('/') da aplicação
@app.route('/')
def home():
    return render_template('index.html')


@app.route('/health')
def health():
    return'OK',200


# Bloco principal que executa a aplicação
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=3031)