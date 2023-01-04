var app=angular.module("category",[]);


app.controller("catController",function($scope){
    $scope.designs=[
        {id:1,cat:"Bath-room",collect:48},
        {id:2,cat:"Bed-room",collect:56},
        {id:3,cat:"Living-room",collect:54},
        {id:4,cat:"Kitchen",collect:32},
    ];
});