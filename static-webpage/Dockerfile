# 1. Imagem base: Começamos com uma imagem oficial do Python.
FROM python:3.9-slim 

# 2. Diretório de trabalho: Define o diretório onde os comandos subsequentes serão executados.
WORKDIR /app

# 3. Copia e instala as dependências:
# Copiamos primeiro o requirements.txt para aproveitar o cache do Docker.
# A instalação só será refeita se este arquivo mudar.
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 4. Copia o resto do código da aplicação para o diretório de trabalho no contêiner.
COPY . .

# 5. Expõe a porta: Informa ao Docker que o contêiner escutará na porta 3031.
EXPOSE 3031

# 6. Comando de execução: O comando que será executado quando o contêiner iniciar.
CMD ["python", "app.py"]