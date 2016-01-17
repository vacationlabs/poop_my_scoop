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
 
    $scope.save_images = function(){
      $scope.save_image = true
      $scope.edit_content = $scope.edit_content + $scope.image_to_be_added
      $('#myModal').modal('hide')
    }

    var i;
    var id_arr = []

    $scope.change_colour = function(img_id){
    i=$scope.images_ranged_data;
    flaten=_.flatten($scope.images_ranged_data, true)
    _.each(flaten,function(o){
      id_arr.push(o.id);
      //console.log(id_arr);
    })

    _.each(id_arr, function(num){ 
      if($("#"+num).hasClass( "selected-image" ) && img_id!=num ) 
        console.log(num);
        $("#"+num).removeClass("selected-image");
    });
    
    element = $('#'+img_id)
    element.addClass("selected-image")
    }


    $scope.add_image = function(img){
       
      markdown_text = '\n\n'+'![alt text]['+img.id+']'+'\n\n' +
                      '['+img.id+']: '+ 
                      img.image_m_link+
                      ' "'+img.title+'"'

      $scope.image_to_be_added = markdown_text
    }

    
  }]) 
