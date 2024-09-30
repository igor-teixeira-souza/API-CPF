function buscar() {
    //Função que carrega o JSON para consumir a API e processa os dados JSON
    fetch('https://raw.githubusercontent.com/igor-teixeira-souza/CPF-JSON/refs/heads/main/dados.json').then(resposta => resposta.json()).then(corpo => {
        var identificador = document.getElementById('valor').value 
        var encontrado = false;

        corpo.forEach(pessoa => {
            if(identificador == pessoa.cpf) {
                //JQUERY
                var linkSite = `<a href="${pessoa.link}">Visite nosso site</a>`;
                document.getElementById('imagem').innerHTML = pessoa.imagem;
                document.getElementById('nome').innerHTML = pessoa.nickname;
                document.getElementById('nome_real').innerHTML = pessoa.real_name;
                document.getElementById('data_nascimento').innerHTML = pessoa.birthdate;
                document.getElementById('cpf').innerHTML = pessoa.cpf;
                document.getElementById('ganhos').innerHTML = pessoa.earnings;
                document.getElementById('competindo').innerHTML = pessoa.still_competing;
                document.getElementById('plataforma').innerHTML = pessoa.platform;
                encontrado = true;
            } 
        })
        if(!encontrado) {
            document.getElementById('erro').innerHTML = "Registro inválido"
        }
        console.log(corpo)
    
    })
}
