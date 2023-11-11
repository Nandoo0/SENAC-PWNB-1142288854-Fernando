document.addEventListener("DOMContentLoaded", function () {
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


    const clientesArray = [];
    listaClientesButton.addEventListener('click', function () {
        window.location.href = 'listaCliente.html';
    });

    incluirButton.addEventListener('click', function () {
        const nome = nomeInput.value + ' ' + sobrenomeInput.value;
        const CPF = CPFInput.value;
        const dataNascimento = dataNascimentoInput.value;
        const cidade = cidadeInput.value;
        const CEP = CEPInput.value;
        const endereco = enderecoInput.value + ' ' + numeroCasaInput.value;
        const erros = {};

        if (!nome.match(nomeRegex)) {
            erros.nome = "Nome inválido";
        }

        if (!sobrenomeInput.value.match(sobrenomeRegex)) {
            erros.sobrenome = "Sobrenome inválido";
        }
        if (!CPF.match(CPFRegex)) {
            erros.CPF = "CPF inválido";
        }

        if (!dataNascimento.match(dataNascimentoRegex)) {
            erros.dataNascimento = "Data de Nascimento inválida";
        }

        if (!cidade.match(cidadeRegex)) {
            erros.cidade = "Cidade inválida";
        }

        if (!endereco.match(enderecoRegex)) {
            erros.endereco = "Endereço inválido";
        }

        if (!CEP.match(CEPRegex)) {
            erros.CEP = "CEP inválido";
        }

        if (!numeroCasaInput.value.match(numeroCasaRegex)) {
            erros.numeroCasa = "Número da casa inválido";
        }

        const camposInvalidos = Object.keys(erros);

        if (camposInvalidos.length > 0) {
            const mensagem = "Os seguintes campos estão preenchidos incorretamente:\n" + camposInvalidos.map(campo => erros[campo]).join("\n");
            window.alert(mensagem);
        } else {
            const cliente = { nome, CPF, dataNascimento, cidade, CEP, endereco };
            clientesArray.push(cliente);
            
            /*const li = document.createElement('li');
            li.textContent = `Nome: ${nome} - CPF: ${CPF} - Data de Nascimento: ${dataNascimento} - Cidade: ${cidade} - Endereço: ${endereco}`;
            clientesList.appendChild(li);*/

            window.alert("Cliente Cadastrado com sucesso!");
        }

        nomeInput.value = '';
        sobrenomeInput.value = '';
        CPFInput.value = '';
        dataNascimentoInput.value = '';
        cidadeInput.value = '';
        CEPInput.value = '';
        enderecoInput.value = '';
        numeroCasaInput.value = '';
    });



    excluirButton.addEventListener('click', function () {
        const CPF = CPFInput.value;


        const index = clientesArray.findIndex(cliente => cliente.CPF === CPF);

        if (index !== -1) {
            clientesArray.splice(index, 1);
            nomeInput.value = '';
            sobrenomeInput.value = '';
            dataNascimentoInput.value = '';
            cidadeInput.value = '';
            CEPInput.value = '';
            enderecoInput.value = '';
            numeroCasaInput.value = '';
            const listaClientes = clientesList.getElementsByTagName('li');
            if (listaClientes[index]) {
                listaClientes[index].remove();
            }
        } else {
            window.alert("Cliente não encontrado ou campos não preenchidos corretamente.");
        }
    });

    limparButton.addEventListener('click', function () {
        nomeInput.value = '';
        sobrenomeInput.value = '';
        CPFInput.value = '';
        dataNascimentoInput.value = '';
        cidadeInput.value = '';
        CEPInput.value = '';
        enderecoInput.value = '';
        numeroCasaInput.value = '';
    });

    alterarButton.addEventListener('click', function () {
        const cpf = CPFInput.value;
        if (cpf.match(CPFRegex)) {
            const cliente = clientesArray.find(cliente => cliente.CPF === cpf);
            if (cliente) {
                nomeInput.value = cliente.nome;
                sobrenomeInput.value = cliente.sobrenome;
                dataNascimentoInput.value = cliente.dataNascimento;
                cidadeInput.value = cliente.cidade;
                CEPInput.value = cliente.CEP;
                enderecoInput.value = cliente.endereco;
                numeroCasaInput.value = cliente.numeroCasa;
            } else {
                window.alert("Cliente não encontrado.");
            }
        } else {
            window.alert("CPF inválido. Por favor, insira um CPF válido.");
        }
    });


});




