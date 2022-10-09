// crio o controlador do formulario
// "formulario" referencia o modulo
// "controlador_formulario" referencia o nome do ng-controller

formulario.controller('controlador_formulario', function($scope, $http){    
    
    // DECLARACAO DE VARIAVEIS
    $scope.nome = "";
    $scope.sobrenome = "";
    $scope.resposta = "";

    // FUNCAO postar_dados
    $scope.postar_dados = function(nome, sobrenome, resposta){  // FUNCAO PARA POSTAR DADOS QUE VEM LA DO HTML
        
        // CRIEI VARIAVEL DADOS PARA ARMAZENAR TUDO QUE FOI PASSADO PELO HTML
        var dados = {   
            nome: $scope.nome,
            sobrenome: $scope.sobrenome,
            resposta: $scope.resposta
        }   // FIM DA VARIAVEL dados

        // METODO POST TRANSFORMANDO dados EM JSON PARA PODER PASSAR
        $http.post('https://63429207ba4478d4783dd7a1.mockapi.io/desafio/dados', JSON.stringify(dados)).then(function(response) {});

        // CONDICIONAL CASO A RESPOSTA SEJA POSITIVA

        var r = $scope.resposta;

        if (r == 'sim' || r == 'Sim' || r == 'SIM') 
        {
            alert('Sucesso');
        }
        else 
        {
            alert('Erro');
        }
    
    }

});




