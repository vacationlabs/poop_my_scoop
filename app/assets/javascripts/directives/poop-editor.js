angular.module('poopMyScoop').directive('poopEditor', ['$timeout', function($timeout) {
  return {
    'restrict' : 'A',
    'template' : '<textarea style="height: 345px; resize: none;" class="col-xs-12" name="" id=""  rows="10" ng-model="model"></textarea>',
    // 'replace' : true,
    'scope' : {
      'model' : '='
    },
    link : function(scope, element, attrs) {
      markdown_html = markdown.toHTML(scope.model);
      console.log(element)
      scope.preview_content = markdown_html
      $timeout(function(){
        ele = $('#preview-content')
        ele.html(markdown_html)
      })
     

      scope.$watch('model', function(value) {
        markdown_html = markdown.toHTML(scope.model);
        ele = $('#preview-content')
        ele.html(markdown_html)
      }); 
    }
  }
}]);