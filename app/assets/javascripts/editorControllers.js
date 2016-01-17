var editorControllers = angular.module('editorControllers', []);
editorControllers.controller('editorMarkdownController', ['$scope', 'PoopMyScoop', function($scope, PoopMyScoop){
    $scope.edit_content = "this is my data"
    
    console.log($scope.blog_title)
    $scope.fetch_images_data = function(){
      var prom = PoopMyScoop.fetch_images($scope.blog_title);
      prom.success(function(data) {
        $scope.images_data = data
        $('#myModal').modal('show')
      });

    }
}])