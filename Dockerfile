# 1. Usar uma imagem base oficial do Python
FROM python:3.9-slim

# 2. Definir o diretório de trabalho dentro do contêiner
WORKDIR /app

# 3. Copiar o arquivo de dependências para o diretório de trabalho
COPY requirements.txt .

# 4. Instalar as dependências da aplicação
RUN pip install --no-cache-dir -r requirements.txt

# 5. Copiar o resto do código da aplicação para o diretório de trabalho
COPY . .

# 6. Expor a porta que a aplicação usa
EXPOSE 5000

# 7. Definir o comando para executar a aplicação quando o contêiner iniciar
CMD ["python", "app.py"]