angular.module("testpartial").config([
  "$stateProvider",
  function($stateProvider){
    $stateProvider
    .state("myState",{
      url:"/x",
      templateUrl:"/modules/hello/views/hello2.client.view.mustache"
    });
  }
]);
