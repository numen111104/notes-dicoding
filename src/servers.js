const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const init = async () => {
  const server = Hapi.server({
    port: process.env.NODE_ENV !== 'production' ? 5000 : process.env.PORT,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });
  server.route(routes);
  await server.start();
  console.log('Server is running on %s', server.info.uri);
};
init();
