/**
 * Created by Administrator on 2017/8/4.
 */
angular.module("myApp") //引用已存在的myApp模块
.controller("infoController",["$scope","$http","$state",function($scope,$http,$state){
    $http({
        url: "http://localhost:3000/user/pros",
        method: "get"
    }).then(function (data) {
        console.log(data);
    }, function (err) {
        console.log(err);
    })
}]);