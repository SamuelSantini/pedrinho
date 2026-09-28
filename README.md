# Pedrinho

CRUD simples de alunos com Node.js, Express e PostgreSQL.

## O que faz

- Listar alunos
- Cadastrar
- Atualizar
- Apagar

## Como rodar

1. Crie o banco `pedrinho` no PostgreSQL
2. Rode o arquivo `sql.sql` para criar a tabela
3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor:

```bash
npm start
```

5. Abra [http://localhost:3000](http://localhost:3000)

## Rotas

| Método | Rota | Ação |
|--------|------|------|
| GET | `/alunos` | Listar |
| POST | `/alunos` | Cadastrar |
| PUT | `/alunos/:id` | Atualizar |
| DELETE | `/alunos/:id` | Apagar |
