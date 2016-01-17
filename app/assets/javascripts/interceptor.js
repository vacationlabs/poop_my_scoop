angular.module("poopMyScoop").factory('interceptor', ['FlashMessagesService', '$q', function(flash_messages, $q) {
  return {

    'request' : function(config) {
      flash_messages.clear_errors();
      return config || $q.when(config);
    },

    'response' : function(response) {
      if(response.data && response.data.flash) {
        flash_messages.for_promise($q.when(response));
      }

      return response || $q.when(response);
    },

    'requestError' : function(rejection) {

      return $q.reject(rejection);
    }

  }

}]);
