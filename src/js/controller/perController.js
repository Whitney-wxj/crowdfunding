/**
 * Created by Administrator on 2017/8/8.
 */
angular.module("myApp")
.controller("perController",["$scope","$http","$state","$rootScope",function ($scope,$http,$state,$rootScope) {
    console.log($rootScope.loginUser.phone);
    $http({
        url: "http://localhost:3000/user/info",
        method:"post",
       data:{
            phone:$rootScope.loginUser.phone
        }
    }).then(function success(data) {
        console.log(data);
        $scope.user=data.data.result;
    },function error(err) {
        console.log(err);
    })
}])



