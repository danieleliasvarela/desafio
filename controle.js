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
        
        

        // CRIEI VARIAVEL "dados" PARA ARMAZENAR TUDO QUE FOI PASSADO PELO HTML 
        var dados = {   
            nome: $scope.nome,
            sobrenome: $scope.sobrenome,
            resposta: $scope.resposta
        }



        // METODO POST TRANSFORMANDO "dados" EM JSON PARA PODER PASSAR
        $http.post('https://63429207ba4478d4783dd7a1.mockapi.io/desafio/dados', JSON.stringify(dados))
        .then(function(response)
        {
            /* TEXTO INDICANDO STATUS DO METODO EH PASSADO PARA A VARIAVEL "status_do_metodo"
            "response.statusText" devolve "Created" se o metodo POST for efetuado com sucesso */
            var status_do_metodo = response.statusText; 
            var resposta = $scope.resposta;
            
            
            /* CONDICIONAL CASO O "POST" FUNCIONE */
            if (status_do_metodo == "Created")
            {
                console.log(status_do_metodo);
                
                /* CONDICIONAL CASO A O STATUS DO METODO SEJA POSITIVO (RESPOSTA POSITIVA PRO "POST")
                E O USUARIO PREENCHER UMA RESPOSTA POSITIVA */
                if (resposta == "SIM" || resposta == "sim" || resposta == "Sim")
                {
                    alert('Você está mais próximo de se juntar ao time!');
                }
                else
                {
                    alert('Erro');
                }
            }                   // fim da condicional baseada no status do metodo
        });                     // fim do then
    }                           // fim da funcao postar_dados
});                             // fim do controller