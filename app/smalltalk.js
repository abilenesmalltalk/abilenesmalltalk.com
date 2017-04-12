(function() {
  // Define our module
  angular.module('smalltalk', ['ngMaterial'])

    // Configure our app/theme
    .config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('red', {
          default: '900'
        })
        .accentPalette('grey', {
          default: '50'
        });
    })

    // Setup our controllers
    .controller('EventController', EventController);

  function EventController($timeout) {
    var self = this;

    // Setup our variables which change per event
    self.realDate = new Date("May 16, 2017 18:00 CDT");
    self.mindate = new Date("May 1, 2017");
    self.maxdate = new Date("May 31, 2017");
    self.meetupid = "239155993";

    // Create some easier-to-use dates/times
    self.date = angular.copy(self.realDate);
    self.time = angular.copy(self.realDate);

    $timeout(function() {
      angular.element(document.body).addClass('loading-finished');
    }, 0, false);
  }

  EventController.$inject = ['$timeout'];
})();
