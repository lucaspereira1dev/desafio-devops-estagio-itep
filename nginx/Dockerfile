FROM nginx:stable-alpine

# Removemos a config padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia o arquivo de configuração personalizado para o lugar correto
COPY nginx.conf /etc/nginx/nginx.conf

# HEALTHCHECK: Verifica se o processo do Nginx está rodando
HEALTHCHECK --interval=15s --timeout=3s --start-period=5s --retries=3 \
  CMD pgrep nginx || exit 1