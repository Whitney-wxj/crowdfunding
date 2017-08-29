/**
 * Created by Administrator on 2017/8/8.
 */
angular.module("myApp") //引用已存在的myApp模块
    .controller("LoginoutController",["$scope","$http","$state","$rootScope",function ($scope,$http,$state,$rootScope) {
       $rootScope.loginUser=null;
       $state.go("home");

    }]);