var app = angular.module('quoteBook');

app.controller('mainCtrl', function ($scope, quoteGetter) {

	$scope.myName = 'Dan the man';

	$scope.quotes = quoteGetter.getData();

	$scope.removeData = function (text) {

		quoteGetter.removeData(text)
	};

	$scope.addData = function () {

        var newData = {
            text: $scope.newQuote,
            author: $scope.newAuthor
        }

		quoteGetter.addData(newData)
	};

});
