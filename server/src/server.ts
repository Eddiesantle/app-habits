import Fastify from 'fastify';

const app = Fastify();

console.log('Fala mané')
app.get('/', () => {

  return 'Hello Word';
});

app.listen({
  port: 3333,
});
