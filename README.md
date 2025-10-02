Desafio DevOps - Estágio ITEP

Solução Proposta para o Desafio de DevOps (Seleção de Estagiário ITEP)

O desafio proposto é a criação de um sistema web com 2 containers contendo aplicações web distintas (app1 e app2), regidos por um reverse proxy em um terceiro container. O proxy roteia requisições baseadas em paths (/app1/ e /app2/) para a aplicação correspondente.

🚀 Tecnologias Utilizadas

Containerização: Docker, Docker Compose

Reverse Proxy: Nginx

Backend App1: Python com Flask

Backend App2: Python com Streamlit e Scikit-learn

⚙️ Descrição dos Serviços

### 1. Nginx (Reverse Proxy)

O Nginx foi escolhido para atuar como reverse proxy por ser uma solução madura, versátil e de alta performance. Ele é o único ponto de entrada para a aplicação, recebendo todo o tráfego na porta 80 e o direcionando para os containers app1 ou app2 conforme a URL requisitada.

Além disso, ele é responsável por:

Servir arquivos estáticos (CSS, JS) da app1 diretamente, otimizando a performance.

Gerenciar a comunicação WebSocket necessária para a interatividade da app2 (Streamlit).

Todas as suas configurações estão no arquivo nginx/nginx.conf.

### 2. Aplicação 1: /app1 (Quiz Interativo)

Uma página web que simula o login e a execução de um jogo de Quiz. Esta aplicação foi desenvolvida utilizando Python com o microframework Flask e serve uma interface estática rica em HTML, CSS e JavaScript.

### 3. Aplicação 2: /app2 (Predição de Preços de Imóveis)

Um Data App construído com Streamlit que apresenta uma solução de Machine Learning. A aplicação permite que o usuário insira atributos de um imóvel e utiliza um modelo pré-treinado (RandomForestRegressor) para prever seu valor de mercado. O ambiente é preparado automaticamente a cada inicialização através de um script entrypoint.sh.

💻 Como Executar

### Pré-requisitos

Docker instalado e em execução.

Docker Compose instalado.

Git para clonar o repositório.

### Passo a Passo

Clonar o Repositório

    git clone https://github.com/lucaspereira1dev/desafio-devops-estagio-itep.git

Entrar no Diretório do Projeto

    cd desafio-devops-estagio-itep

Aviso para Usuários Windows ⚠️
Este projeto usa um script de inicialização (entrypoint.sh). No Windows, é possível que este arquivo seja salvo com um formato de quebra de linha (CRLF) incompatível com o ambiente Linux do container. Se você encontrar um erro no such file or directory relacionado ao entrypoint.sh, converta o arquivo para o formato LF. Em editores como o VS Code, basta clicar em "CRLF" na barra de status inferior e selecionar "LF".

Construir e Iniciar os Containers
Execute o comando abaixo. Ele irá construir as imagens a partir dos Dockerfiles e iniciar todos os serviços em segundo plano.
Bash

    docker-compose up -d --build


## ➡️ Como Acessar

Após a inicialização, as aplicações estarão disponíveis nos seguintes endereços:

Página Principal (Nginx): http://localhost/

Aplicação 1 (Quiz): http://localhost/app1/

Aplicação 2 (Data App): http://localhost/app2/

## 📊 Verificando o Status

Para verificar se todos os containers estão rodando e saudáveis (healthy), use o comando:
Bash

docker-compose ps

## 🛑 Como Parar

Para parar e remover todos os containers, redes e volumes criados, execute:
Bash

docker-compose down

