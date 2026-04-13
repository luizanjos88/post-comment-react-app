# Já vem com Node e Cypress prontos
FROM cypress/included:12.17.4

WORKDIR /app

# Copia seus arquivos (com o .dockerignore configurado)
COPY . .

# Instala as dependências do seu projeto
RUN npm install

# Comando para rodar os testes
ENTRYPOINT ["npm", "run", "test:e2e"]