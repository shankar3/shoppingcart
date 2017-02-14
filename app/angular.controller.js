angular.module("myApp")//getter
  .controller("productController",function($scope){
    $scope.product=   {
        "name": "Rose",
        "description" : "Lorem ipsum a dollar",
        "price" : 1.90,
        "availability_products" : 0,

        "reviews": [
          {
            "name" : "abid",
            "review_text" : "Lorem ipsum dollar",
            "rating" : 4,
          },
          {
            "name" : "diwakar",
            "review_text" : "Lorem ipsum dollar",
            "rating" : 3,
          },
          {
            "name" : "shankar",
            "review_text" : "Lorem ipsum dollar",
            "rating" : 5,
          },
          {
            "name" : "jotshna",
            "review_text" : "Lorem ipsum dollar",
            "rating" : 2,
          }

        ]
      };
  })
  .controller("productListingController", function($scope){
    $scope.productList = [
      {
        "name": "Rose",
        "description" : "Lorem ipsum a dollar",
        "price" : 1.90,
        "availability_products" : 3,

        "reviews": [
          {
            "name" : "abid",
            "review_text" : "Lorem ipsum dollar",
            "rating" : 4,
          }
        ]
      },

      {
        "name": "Jasmine",
        "description" : "Lorem ipsum a dollar",
        "price" : 2.90,
        "availability_products" : 2,

        "reviews": [
          {
            "name" : "abid",
            "review_text" : "Lorem ipsum dollar",
            "rating" : 4,
          }
        ]
      },

      {
        "name": "Tulip",
        "description" : "Lorem ipsum a dollar",
        "price" : 0.90,
        "availability_products" : 3,

        "reviews": [
          {
            "name" : "abid",
            "review_text" : "Lorem ipsum dollar",
            "rating" : 4,
          }
        ]
      },

      {
        "name": "Sun flower",
        "description" : "Lorem ipsum a dollar",
        "price" : 5.90,
        "availability_products" : 3,

        "reviews": [
          {
            "name" : "abid",
            "review_text" : "Lorem ipsum dollar",
            "rating" : 4,
          }
        ]
      },

      {
        "name": "Marigold",
        "description" : "Lorem ipsum a dollar",
        "price" : 3.90,
        "availability_products" : 3,

        "reviews": [
          {
            "name" : "abid",
            "review_text" : "Lorem ipsum dollar",
            "rating" : 4,
          }
        ]
      }

    ]

  })
