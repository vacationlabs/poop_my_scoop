angular.module('poopMyScoop').factory('PoopMyScoop', ['$http', function($http) {
  var poop_my_scoop_api = '/';
  var PoopMyScoop = function() {
    angular.extend(this, {
      id: "",
      image_m_link: "",
      image_t_link: "",
      title: "",
    });
  };


  PoopMyScoop.fetch_images = function(search_title){
    // TODO see if title containing spaces give correct result
    
    if (_.isEmpty(search_title)) {
      alert("Its empty")
      return 0
    };

    var prom = $http.get(encodeURI(poop_my_scoop_api + 'fetch_images.json?text=' + search_title))
    prom.success(function(data) {
      PoopMyScoop.images = data;
    });
    return prom;
  }


  return PoopMyScoop;
}]);