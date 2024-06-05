import Server from './server.js';

const server = new Server();
const app = server.bootstrap();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});