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
    self.realDate = new Date("November 15, 2016 18:00 CST");
    self.mindate = new Date("November 1, 2016");
    self.maxdate = new Date("November 30, 2016");
    self.meetupid = "228904135";

    // Create some easier-to-use dates/times
    self.date = angular.copy(self.realDate);
    self.time = angular.copy(self.realDate);

    $timeout(function() {
      angular.element(document.body).addClass('loading-finished');
    }, 0, false);
  }

  EventController.$inject = ['$timeout'];
})();
