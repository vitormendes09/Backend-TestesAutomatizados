import express from 'express';
import { cursoRouter } from './infra/routes/cursoRouter';

const app = express();
const port = 3000;

app.use(express.json());

// Adicionando uma rota para a raiz do servidor
app.get('/', (req, res) => {
    res.send('Bem-vindo à API de Cursos!');
});

app.use('/api/cursos', cursoRouter);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});