### App 1 - Página Web estática

from flask import Flask, render_template

# Inicializa a aplicação Flask
app = Flask(__name__)

# Define a rota principal ('/') da aplicação
@app.route('/')
def home():
    """Esta função será executada quando alguém acessar a raiz do site."""
    # A função render_template procura o arquivo 'index.html' na pasta 'templates' e o retorna.
    return render_template('index.html')

# Bloco principal que executa a aplicação
if __name__ == "__main__":
    # O host '0.0.0.0' é crucial para o Docker.
    # Ele faz com que a aplicação seja acessível de fora do contêiner.
    # A porta pode ser qualquer uma, mas 5000 é um padrão comum para Flask.
    app.run(host='0.0.0.0', port=3031)