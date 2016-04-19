/**
 * Created by Jeff on 16/4/19.
 */

var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl', ['$scope','$http', function ($scope , $http) {
    console.log("hello world from controller");

    var refresh = function () {
        $http.get('/contactlist').success(function (response) {
            console.log("i got data i requested");
            $scope.contactlist = response;
            $scope.contact = "";
        });
    };

    refresh();
    
    $http.get('/contactlist').success(function (response) {
        console.log("i got data i requested");
        $scope.contactlist = response;
    });

    $scope.addContact = function () {
        console.log($scope.contact);
        $http.post('/contactlist', $scope.contact).success(function (response) {
            console.log(response);
            refresh();
        });
    };

}]);
