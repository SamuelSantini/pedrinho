DROP TABLE IF EXISTS alunos;

CREATE TABLE IF NOT EXISTS alunos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL
);

INSERT INTO alunos (nome, email, senha) VALUES 
('João', 'joao@gmail.com', '123456'),
('Maria', 'maria@gmail.com', '123456'),
('Ana', 'ana@gmail.com', '123456'),
('Pedro', 'pedro@gmail.com', '123456');

SELECT * FROM alunos;