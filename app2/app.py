from flask import Flask, render_template

# Inicializa a aplicação Flask
app2 = Flask(__name__)

# Define a rota principal ('/') da aplicação
@app2.route('/')
def home():
    return render_template('index.html')


@app2.route('/health')
def health():
    return'OK',200


# Bloco principal que executa a aplicação
if __name__ == "__main__":
    # O host '0.0.0.0' é crucial para o Docker.
    app2.run(host='0.0.0.0', port=3032)