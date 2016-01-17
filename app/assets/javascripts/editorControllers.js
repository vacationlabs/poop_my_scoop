var editorControllers = angular.module('editorControllers', []);
editorControllers.controller('editorMarkdownController', ['$scope', 'PoopMyScoop', function($scope, PoopMyScoop){
    $scope.edit_content = "Welcome to Poof my Scoop!"+"\n"+"==================="+"\n"
    					   +"Brief overview paragraph 1....This is a Markdown editor. It stores your documents in your browser, which means all your documents are automatically saved locally and are accessible **offline!**"
    					   +"\n\n"+"- Add bullets or numbers"
    					   +"\n"+"- Add bullets or numbers"
    					   +"\n"+"- Add bullets or numbers"
    					   +"\n\n"+"Markdown is a lightweight markup language based on the formatting conventions that people naturally use in email."
    					   +"\n\n"+"> The overriding design goal for Markdown's"
    					   +"\n"+"> formatting syntax is to make it as readable"
    					   +"\n"+"> as possible. The idea is that a"
    					   +"\n"+">Markdown-formatted document should be"
						   +"\n"+"> publishable as-is, as plain text, without"
						   +"\n"+"> looking like it's been marked up with tags"
						   +"\n"+"> or formatting instructions."
						   +"\n"+"This text you see here is *actually* written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right."
    
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
