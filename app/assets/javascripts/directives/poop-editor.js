angular.module('poopMyScoop').directive('poopEditor', ['$timeout', function($timeout) {
  function set_markdown_content(ele_id, scope){
    markdown_con = (_.isEmpty(scope.save_image) && _.isEmpty(scope.image_to_be_added)) ? scope.model : scope.model + scope.image_to_be_added 
    markdown_html = markdown.toHTML(scope.model);
    ele = $('#'+ele_id)
    ele.html(markdown_html)
  }

  return {
    'restrict' : 'A',
    'template' : '<textarea style="height: 345px; resize: none;" class="col-xs-12" name="" id=""  rows="10" ng-model="model"></textarea>',
    // 'replace' : true,
    'scope' : {
      'model' : '='
    },
    link : function(scope, element, attrs) {
      markdown_html = markdown.toHTML(scope.model);
      scope.preview_content = markdown_html
      $timeout(function(){
        set_markdown_content('preview-content', scope)
      })
     

      scope.$watch('model', function(value) {
        set_markdown_content('preview-content', scope)
      }); 

      scope.$watch('add_image', function(value){
        set_markdown_content('preview-content', scope)
      })


    },
    'controller': ['$scope', function($scope){
      // $scope.save_images = function(){
       
      //   $scope.save_image = true
      // }

      // $scope.add_image = function(img){
      //   if (img.length > 0) {
      //     markdown_text = '![alt text][logo]' +
      //     '[logo]: '+img.get_m_640_link+' "'+img.title+'"'
      //     $scope.image_to_be_added = markdown_text
      //   };
      // }

    }]
  }
}]);