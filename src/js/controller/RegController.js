/**
 * Created by Administrator on 2017/8/4.
 */
angular.module("myApp") //引用已存在的myApp模块
.controller("RegController",["$scope","$http","$state","$rootScope",function($scope,$http,$state,$rootScope){

    $scope.agreeRule = false;
    $scope.reg=function () {
       if($scope.agreeRule){
           $http({
               url: "http://localhost:3000/user/reg",
               method:"post",
               data:{
                   name:$scope.username,
                   phone:$scope.phone,
                   password:$scope.password,
                   passwordRepeat:$scope.passwordRepeat
               }
           }).then(function success(data) {
               console.log(data);
               $scope.result_msg="";

               if(data.data.resultCode!="0000"){

               }else {

                   $scope.result_msy="";
                   $rootScope.loginUser =data.config.data.name;
                   $state.go("home");
               }

           },function error(err) {
               console.log(err);
           })
       }
    };
}]).directive('compare',function () {
    {
        var hp={};
        hp.strict='AE';
        hp.scope={
            orgText:'=compare'
        };
        hp.require='ngModel';
        hp.link=function (scope,element,attrs,ctrl) {
            ctrl.$validators.compare=function (prevalue) {
                return prevalue==scope.orgText;
            };
            scope.$watch('orgText',function () {
                ctrl.$validate();

            })
        };
        return hp
    }
});