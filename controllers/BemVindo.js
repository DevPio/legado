app.controller('BemVindo',function ($scope,$http) { 


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

 })