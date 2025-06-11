//1 - Criando um objeto, que é um tipo de dado

let pessoa = {
    nome: 'Ana',
    cpf: '99955522232',
    genero: 'F',
    idade: 25,
    altura: 1.65,
    dataNacimento: '25/12/1998',
    endereco: 'Rua 01,  Casa 02, Messejana, Fortaleza, Ceará',
    adicionar: function() {
        console.log('Adicionando...')
    },
    remover: function(){
        console.log('Removendo...')
    },
    contato: {
    telefone:'9999952233',
    email:'ana@ig.com.br'
}

}
// Imprimindo no console
console.log(pessoa)


// 2 - Acessando os dados do objeto
console.log(pessoa.dataNacimento);
console.log(PermissionStatus.endereco)
console.log(pessoa.contato)