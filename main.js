var app = angular.module('Funcionarios',['ngRoute','ngResource','services','minhasDiretivas']);

app.config(function($routeProvider){
    //o parametro deve ser examatemnte $routeProvider
    $routeProvider.when('/',{
        templateUrl:'./partials/bem-vindo.tpl.html',
        controller:'BemVindo'
    })

    $routeProvider.when('/funcionarios',{
        templateUrl:'./partials/funcionarios.tpl.html',
        controller:'Data'
    })

    $routeProvider.otherwise({redirectTo:'/'})
})