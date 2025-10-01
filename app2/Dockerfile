# Imagem base: Começamos com uma imagem oficial do Python.
FROM python:3.9-slim 

# Diretório de trabalho: Define o diretório onde os comandos subsequentes serão executados.
WORKDIR /app2

# Copia o arquivo de dependências primeiro
COPY requirements.txt .

# Instala as dependências
RUN pip install --no-cache-dir -r requirements.txt

# Copia o resto do código da aplicação para o diretório de trabalho no contêiner.
COPY . .

# Expõe a porta: Informa ao Docker que o contêiner escutará na porta 3032.
EXPOSE 3032

# HEALTHCHECK: Verifica se o servidor web está respondendo
HEALTHCHECK --interval=15s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3032/ || exit 1

# Comando de execução: O comando que será executado quando o contêiner iniciar.
# Garanta que o Flask está sendo instruído a rodar na porta correta
CMD ["flask", "run", "--host=0.0.0.0", "--port=3032"]