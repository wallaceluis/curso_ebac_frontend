$(document).ready(function(){
    $('.exibir-form').click(function(){
        $('form').slideToggle(1000);
    })

    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: { 
                required: true
            },
            email: { 
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: { 
                required: true
            },
            endereco: { 
                required: true
            },
            cep: { 
                required: true
            },
        },
        messages: {
    nome: 'Por favor, insira o nome',
    email: 'Por favor, insira o email',
    telefone: 'Por favor, insira o telefone',
    email: 'Por favor, insira o email',
    cpf: 'Por favor, insira o CPF',
    endereco: 'Por favor, insira o endereco',
    cep: 'Por favor, insira o CEP',
    },
    submitHandler: function(form){
        alert(`Formulário enviado com sucesso`);
        $('#nome').val('');
        $('#email').val('');
        $('#telefone').val('');
        $('#cpf').val('');
        $('#endereco').val('');
        $('#cep').val('');
    },
    invalidHandler: function(evento, validador){
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
            alert(`Preencha os ${camposIncorretos} campos restantes`)
        }
    }
    })
})