npm init -y

npm i fastify

npm install typescript -D

npx tsc --init

tsconfig.json -- Atualizar    
/* Language and Environment */
    "target": "es2020",   

npm i tsx -D

// Rodar arquivo .ts sem precisar converter para javascript
npx tsx src/server.ts

// Configurar local package.json
"scripts": {
    "dev": "tsx src/server.ts"
  },

  //recarregar ao alterar codigo
  "scripts": {
    "dev": "tsx watch src/server.ts"
  },