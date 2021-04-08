
app.controller('Data',function($scope,$http,FuncionariosService){

    let $ = document.querySelector.bind(document);

    let inputValue = $('#digitaFunc');
    let btn = $('#change');

    
    let resurce = FuncionariosService('/funcionarios/:id')
    $scope.mostra = false;
    

    function getFunc(){
        $http.get('/funcionarios').success(function(data){
            $scope.list = data;
        })
        .error(function(msg){
            $scope.messageError = 'Erro ao buscar os funcionários.';
    
            console.log(msg);
        })
    }
    getFunc()
    $http.get('/funcionarios/1').success(function(cola){
        $scope.funcionario = cola;

    })

   

    $scope.remove = function(funcionarioID){
        
        resurce.delete({id:funcionarioID})
        getFunc()
    }
})