# Usamos a imagem oficial e leve do Nginx
FROM nginx:stable-alpine

# Removemos a configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copiamos nosso arquivo de configuração personalizado para o lugar correto
COPY nginx.conf /etc/nginx/nginx.conf

# HEALTHCHECK: Verifica se o processo do Nginx está rodando
HEALTHCHECK --interval=15s --timeout=3s --start-period=5s --retries=3 \
  CMD pgrep nginx || exit 1

# O comando padrão da imagem Nginx já é para iniciar o servidor, então não precisamos de CMD.