
document.addEventListener("DOMContentLoaded", function (event) {
    //localStorage.clear()                               

    localStorage.removeItem("clientes")
    var voltarButton = document.getElementById('Voltar');
    voltarButton.addEventListener('click', function () {
        window.location.href = 'cadastrocliente.html';
    });
})
const nomeInput = document.getElementById('nome');
const sobrenomeInput = document.getElementById('Sobrenome');
const CPFInput = document.getElementById('CPF');
const dataNascimentoInput = document.getElementById('DataNascimento');
const cidadeInput = document.getElementById('Cidade');
const CEPInput = document.getElementById('CEP');
const enderecoInput = document.getElementById('Endereco');
const numeroCasaInput = document.getElementById('NumeroCasa');
const incluirButton = document.getElementById('incluir');
const excluirButton = document.getElementById('excluir');
const alterarButton = document.getElementById('alterar');
const limparButton = document.getElementById('limparCampos');
const clientesList = document.getElementById('clientes');
const TipoClienteselect = document.getElementById('TipoCliente');
var frmCadCliente = document.getElementById("frm-cad-cliente");

/*
frmCadCliente.addEventListener("submit", (e) => {
    e.preventDefault();
    //receber dados do formulario


    const nome = nomeInput.value + ' ' + sobrenomeInput.value;
    const CPF = CPFInput.value;
    const dataNascimento = dataNascimentoInput.value;
    const cidade = cidadeInput.value;
    const CEP = CEPInput.value;
    const endereco = enderecoInput.value + ' ' + numeroCasaInput.value;

    //criar array de objetos
    var listaclientes = new Array();
    //verifica se já existe localstorage gravada
    if (localStorage.hasOwnProperty("clientes")) {
        //recuperar valores da propriedade clientes (localstorage)
        //Converte a string para Object
        clientes = JSON.parse(localStorage.getItem("clientes"))
    }
    //Vamos adicionar novo objeto ao Array criado
    listaclientes.push({
        nomeCliente: nome,
        CPFCliente: CPF,
        DataNascimentoCliente: dataNascimento,
        cidadeCliente: cidade,
        CEPClientes: CEP,
        enderecoCliente: endereco
    })
    //precisamos conver a string em objeto
    //vamos salvar em LocalStorage
    localStorage.setItem("clientes", JSON.stringify(clientes))
    //Monstrando os dados
    
    
    document.getElementById("dadosIncluidos").insertAdjacentHTML("Nome: " + NomeCliente + "<br>CPF: " + CPFCliente + "<br>Data de Nascimento: " + DataNascimentoCliente + "<br>Cidade: " + cidadeCliente + "<br>CEP: " + CEP + "<br>Endereço:" + enderecoCliente + "<br><hr>")
*/

document.addEventListener("DOMContentLoaded", function (event) {
    //localStorage.clear()                                                                        
    localStorage.removeItem("clientes")                                          
})                                                                                                                         

var campos = document.getElementById("campos");
campos.addEventListener("submit", (e) => {
    e.preventDefault();
    //receber dados do formulario
    const nomeInput = document.getElementById('nome');
    const sobrenomeInput = document.getElementById('Sobrenome');
    const CPFInput = document.getElementById('CPF');
    const dataNascimentoInput = document.getElementById('DataNascimento');
    const cidadeInput = document.getElementById('Cidade');
    const CEPInput = document.getElementById('CEP');
    const enderecoInput = document.getElementById('Endereco');
    const numeroCasaInput = document.getElementById('NumeroCasa');
    const incluirButton = document.getElementById('incluir');
    const excluirButton = document.getElementById('excluir');
    const alterarButton = document.getElementById('alterar');
    const limparButton = document.getElementById('limparCampos');
    const listaClientesButton = document.getElementById('listaClientes');
    const clientesList = document.getElementById('clientes');
    const TipoClienteselect = document.getElementById('TipoCliente');

    const nomeRegex = /^[A-Za-z\s]+$/;
    const sobrenomeRegex = /^[A-Za-z\s]+$/;
    const dataNascimentoRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    const CPFRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    const cidadeRegex = /^[A-Za-z\s]+$/;
    const enderecoRegex = /^[\s\S]*$/;
    const CEPRegex = /^\d{5}-\d{3}$/;
    const numeroCasaRegex = /^\d+$/;

    //criar array de objetos
    var clientes = new Array();
    //verifica se já existe localstorage gravada
    if (localStorage.hasOwnProperty("clientes")) {
        //recuperar valores da propriedade clientes (localstorage)
        //Converte a string para Object
        clientes = JSON.parse( localStorage.getItem("clientes"))
    }
    //Vamos adicionar novo objeto ao Array criado
    clientes.push({
        nomeCliente: frmNomeCliente,
        emailCliente: frmEmailCliente,
        celCliente: frmCelCliente
        })
    //precisamos conver a string em objeto
    //vamos salvar em LocalStorage
    localStorage.setItem("clientes",JSON.stringify(clientes))
    //Monstrando os dados
    document.getElementById("dadosIncluidos").insertAdjacentHTML('beforeend',"Nome: "+frmNomeCliente+"<br>E-mail: "+frmEmailCliente+"<br>Cel: "+frmCelCliente+"<br><hr>")
})