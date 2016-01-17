angular.module('poopMyScoop').directive('poopEditor', ['$timeout', function($timeout) {
  function set_markdown_content(ele_id, download_div_link, scope){
    blg_ttl = scope.blogtitle + "\n" +"===================" + "\n"
    markdown_con = (_.isEmpty(scope.save_image) && _.isEmpty(scope.image_to_be_added)) ? scope.blogtitle + scope.model : scope.model + scope.image_to_be_added 
    markdown_html = markdown.toHTML(blg_ttl + scope.model);
    scope.preview_content = markdown_html
    
    ele = $('#'+ele_id)
    ele.html(markdown_html)

    download_ele = $('#'+download_div_link)
    textfile = make_text_file(markdown_html)
    download_ele.attr("href", textfile)
  }

  function make_text_file (text) {
    var textFile = null
    var data = new Blob([text], {type: 'text/html'});
    if (textFile !== null) {
      window.URL.revokeObjectURL
    };

    textFile = window.URL.createObjectURL(data);
    return textFile
  }




  return {
    'restrict' : 'A',
    'template' :  '<div>' +
                    '<input class="title-style col-xs-12" value="Welcome to poop My scoope"  placeholder="Add Title" type="text" ng-model="blogtitle">' + 
                    '<textarea style="height: 345px; resize: none;" class="col-xs-12" name="" id=""  rows="10" ng-model="model"></textarea>' +
                  '</div>',
    // 'replace' : true,
    'scope' : {
      'model' : '=',
      'blogtitle': '='
    },
    link : function(scope, element, attrs) {
      blg_ttl = scope.blogtitle + "\n" +"===================" + "\n"
      markdown_html = markdown.toHTML(blg_ttl + scope.model);
      scope.preview_content = markdown_html
       
      $timeout(function(){
        set_markdown_content('preview-content', 'download-as-html', scope)
      })
     
      scope.$watch('blogtitle', function(value){
        set_markdown_content('preview-content', 'download-as-html', scope)
      })

      scope.$watch('model', function(value) {
        set_markdown_content('preview-content', 'download-as-html', scope)
      }); 

      scope.$watch('add_image', function(value){
        set_markdown_content('preview-content', 'download-as-html', scope)
      })
    },
    'controller': ['$scope', function($scope){
      // $scope.preview_content =
     }]
  }
}]);