# Imagem base: Começamos com uma imagem oficial do Python.
FROM python:3.9-slim 

# Diretório de trabalho: Define o diretório onde os comandos subsequentes serão executados.
WORKDIR /app2

# Copia o arquivo de dependências primeiro
COPY requirements.txt .

# Instala as dependências
RUN pip install --no-cache-dir -r requirements.txt

# Instala o curl
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Copia o resto do código para o diretório de trabalho no contêiner.
COPY . .

# Expõe a porta 3032.
EXPOSE 3032

# HEALTHCHECK: Verifica se o servidor web está respondendo
HEALTHCHECK --interval=5s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3032/health || exit 1


CMD ["flask", "run", "--host=0.0.0.0", "--port=3032"]