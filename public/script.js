const btnListar = document.getElementById('btn-listar');
const btnCadastrar = document.getElementById('btn-cadastrar');
const btnAtualizar = document.getElementById('btn-atualizar');
const btnApagar = document.getElementById('btn-apagar');

btnListar.addEventListener('click', async () => {
    const response = await fetch('http://localhost:3000/alunos');
    const data = await response.json();
    document.getElementById('lista').textContent = JSON.stringify(data, null, 2);
});

btnCadastrar.addEventListener('click', async () => {
    const response = await fetch('http://localhost:3000/alunos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            nome: document.getElementById('cad-nome').value,
            email: document.getElementById('cad-email').value,
            senha: document.getElementById('cad-senha').value
        })
    });
    const data = await response.json();
    console.log(data);
});

btnAtualizar.addEventListener('click', async () => {
    const id = document.getElementById('atualizar-id').value;
    const response = await fetch(`http://localhost:3000/alunos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            nome: document.getElementById('atualizar-nome').value,
            email: document.getElementById('atualizar-email').value,
            senha: document.getElementById('atualizar-senha').value
        })
    });
    const data = await response.json();
    console.log(data);
});

btnApagar.addEventListener('click', async () => {
    const id = document.getElementById('deletar-id').value;
    const response = await fetch(`http://localhost:3000/alunos/${id}`, {
        method: 'DELETE'
    });
    const data = await response.json();
    console.log(data);
});
