var coinFlipApp = angular.module('coinFlipApp', []);
coinFlipApp.controller('headsOrTails', function($scope){
    $scope.test = "TESTING!";

    // The user clicked on heads
    $scope.heads = function(){
        console.log('Test heads');
        $scope.userGuess = "heads";
        var flipResult = flip();
        $scope.guess = true;
        if (flipResult.coinFlipResult == "heads"){
            $scope.message =  "You Won!"
        }else{
            $scope.message = "You Lost!"
        }
        $scope.coin = flipResult.coinImg
    }

    // The user clicked on tails
    $scope.tails = function(){
        console.log('Test tails');
        $scope.userGuess = "tails";
        var flipResult = flip();
        if (flipResult.coinFlipResult == "tails"){
            $scope.message =  "You Won!"
        }else{
            $scope.message = "You Lost!"
        }
        $scope.coin = flipResult.coinImg
    }

    // The user clicked on Play Game
    $scope.playGame = function(){
        console.log('Test Play');
        $scope.guess = false;
        $scope.message = null;
        coinFlipResult = null;
    }

    var flip = function(){
        var rand = Math.random();
        var flipResult = {
            coinImg: null,
            coinFlipResult: null,
        }
        if (rand > .5){
            flipResult.coinImg = "quarter-front.png";
            flipResult.coinFlipResult = "heads";
        }else{
            flipResult.coinImg = "quarter-back.png";
            flipResult.coinFlipResult = "tails";
        }
        return flipResult;
    }
});

