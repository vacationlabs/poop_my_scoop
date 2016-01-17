var editorControllers = angular.module('editorControllers', []);
editorControllers.controller('editorMarkdownController', ['$scope', 'PoopMyScoop', function($scope, PoopMyScoop){
    $scope.edit_content = "this is my data"
    
    console.log($scope.blog_title)
    $scope.fetch_images_data = function(slice_range){
      var prom = PoopMyScoop.fetch_images($scope.blog_title);
      prom.success(function(data) {
        
        $scope.images_data = data
        $scope.images_ranged_data = []
        while($scope.images_data.length)
        {
          $scope.images_ranged_data.push($scope.images_data.splice(0, slice_range))
        }
        $('#myModal').modal('show')
      });

    }
