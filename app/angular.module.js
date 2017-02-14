angular.module("myApp",['ngRoute']) //setter
.config(['$routeProvider',function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl : 'template/product-list/product-list.html',
    controller : 'productListingController'
  })
  .when('/product',{
    templateUrl : 'template/product/product.html',
    controller : 'productController'
  })
  .otherwise({redirectTo:"/"});
}])
