# Imagem base: Começamos com uma imagem oficial do Python.
FROM python:3.9-slim 

# Diretório de trabalho: Define o diretório onde os comandos subsequentes serão executados.
WORKDIR /app1

# Copia o arquivo de dependências primeiro
COPY requirements.txt .

# Instala as dependências
RUN pip install --no-cache-dir -r requirements.txt

# Copia o resto do código da aplicação para o diretório de trabalho no contêiner.
COPY . .

# Expõe a porta: Informa ao Docker que o contêiner escutará na porta 3031.
EXPOSE 3031

# HEALTHCHECK: Verifica se o servidor web está respondendo
HEALTHCHECK --interval=15s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3031 || exit 1

# Comando de execução: O comando que será executado quando o contêiner iniciar.
CMD [ "python", "app.py" ]