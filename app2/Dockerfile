# 1. Imagem Base
FROM python:3.9-slim

# 2. Instalação de dependências do sistema (curl)
RUN apt-get update && \
  apt-get install -y --no-install-recommends curl && \
  rm -rf /var/lib/apt/lists/*

COPY entrypoint.sh /app/entrypoint.sh

# 3. Diretório de Trabalho
WORKDIR /app2

# 4. Instalação das Dependências Python
COPY requirements.txt create-data.py train.py ./
RUN pip install --no-cache-dir -r requirements.txt

# 5. Copiando o resto do código e o entrypoint
COPY . .

# 6. Garantindo permissão e formato correto do entrypoint
RUN chmod +x /app/entrypoint.sh && sed -i 's/\r$//' /app/entrypoint.sh

# 7. Expondo a Porta
EXPOSE 3032

# 8. HEALTHCHECK
HEALTHCHECK --interval=15s --timeout=5s --start-period=30s --retries=3 \
  CMD curl -f http://localhost:3032/_stcore/health || exit 1

# 9. Definindo o Entrypoint e o Comando Padrão
ENTRYPOINT ["/app/entrypoint.sh"]
CMD ["streamlit", "run", "app.py", "--server.address=0.0.0.0", "--server.port=3032"]
