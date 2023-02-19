function constructor(
    name,
    email,
    telefone,
    idade,
    genero,
    setor,
    id,
)
{
    this.name = name;
    this.email = email;
    this.telefone = telefone;
    this.idade = idade;
    this.genero = genero;
    this.setor = setor;
    this.id = id;
}


var funcionarios = []
var nextId = 0

function botao(){
    var nome = document.querySelector('#nome').value;
    var email = document.querySelector('#email').value;
    var telefone = document.querySelector('#telefone').value;
    var idade = document.querySelector('#idade').value;
    var genero = document.querySelector('#genero').value;
    var setor = document.querySelector('#setor').value;



    funcionarios[funcionarios.length] = new constructor(nome,email,telefone,idade,genero,setor,nextId)
    nextId ++
    update()
    document.querySelector('#nome').value = ''
    document.querySelector('#email').value = ''
    document.querySelector('#telefone').value = ''
    document.querySelector('#idade').value = ''
    document.querySelector('#genero').value = ''
    document.querySelector('#setor').value = ''

}

function excluir() {
    let pick = document.querySelector('#funcionarios').value;
    let confirma = window.confirm(`Você está tentando excluir "${funcionarios[pick].name}", id: ${funcionarios[pick].id}, da lista de funcionários, tem certeza disso?`)
    if (confirma){
        funcionarios.splice(pick,1);
        update()
    }
    
}

function update(){
    document.querySelector('#funcionarios').innerHTML = ''
    for (i in funcionarios){
        document.querySelector('#funcionarios').innerHTML += `<option value="${i}">${funcionarios[i].id}. ${funcionarios[i].name}</option>`
    }
    
}

function load(){
    update()
    document.querySelector('#nome').value = ''
    document.querySelector('#email').value = ''
    document.querySelector('#telefone').value = ''
    document.querySelector('#idade').value = ''
    document.querySelector('#genero').value = ''
    document.querySelector('#setor').value = ''
}

function pickInfo(){
    let pick = document.querySelector('#funcionarios').value;
    let func = funcionarios[pick]
    document.querySelector('#idFuncionario').innerHTML = func.id
    document.querySelector('#emailInfo').value = func.email
    document.querySelector('#telefoneInfo').value = func.telefone
    document.querySelector('#idadeInfo').value = func.idade
    document.querySelector('#generoInfo').value = func.genero
    document.querySelector('#setorInfo').value = func.setor
}