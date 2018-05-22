angular.module('starter.controllers', [])
  .controller('PickCtrl', function ($rootScope,$scope, $ionicModal) {
    /**
     * 特效层 =======
     */
    $ionicModal.fromTemplateUrl('my-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.modal = modal;
    });
    $scope.ismodalOpen = false;
    $scope.clickToggle = function () {
      if (!$scope.ismodalOpen) {
        $scope.modal.show();
        $scope.ismodalOpen = true;
      } else {
        $scope.modal.hide();
        $scope.ismodalOpen = false;
      }
    };

    $scope.openModal = function () {
      $scope.modal.show();
    };
    $scope.closeModal = function () {
      $scope.modal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function () {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function () {
      // Execute action
    });

  })
.controller('ConfirmCtrl', function($scope) {})
  .controller('DrawingCtrl', function($scope,Slot,Countup,Winning,Tip) {
    Slot.init([3,4,5,6,3],$('#slot'));
    $('.drawbar').click(function(){
      Slot.start();
    });
    $('.bar-btn').click(function(){
      Slot.quickAnimation();
      $scope.add();
    });
    $('.wining-first').click(function(){
      $scope.delete();
    });

    $scope.allwin = 3454.04;
    $scope.allwinend = 3700;
    $scope.winnings = [
      {numbers:'0123456789 | 0123456789|0123456789| 0123456789 | 0123456789',type:"五星直选   1注x2角",money:'中奖30元'},
      {numbers:'0123456789 | 012345678',type:"五星直选   1注x2角", money:'中奖30元'}
    ];
    $scope.add = function(){
      $scope.winnings.unshift(
        {numbers:'0123456789 | 0123456789|0123456789| 0123456789 | 0123456789',type:"五星直选   1注x2角",money:'中奖30元'}
      );
      $scope.allwin+= 300;
      $scope.$apply(function(){
        countup.update($scope.allwin);
      });
    };
    $scope.delete = function(){
      $scope.winnings = [];
      $scope.$apply(function(){});
    };
    var sta = $scope.allwin;
    var end = $scope.allwinend;
    var dur = 1;
    var countup = new Countup($('#countUp'),sta, end, dur);
    countup.reset();
    countup.start();
    Winning.start(true);
    var tips = new Tip('dddd');
    tips.start();
  })
.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
