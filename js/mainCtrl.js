var app = angular.module('quoteBook');

app.controller('mainCtrl', ['$scope', 'quoteGetter', '$timeout', function ($scope, quoteGetter, $timeout) {

	$scope.myName = 'Dan the man';

	$scope.quotes = quoteGetter.getData();

	$scope.removeData = function (text) {

		$scope.missingQuote = quoteGetter.removeData(text);

		$timeout(function () {
			$scope.missingQuote = false;
		}, 2500)

	};

	$scope.addData = function () {

		if ($scope.newQuote === undefined) {
			$scope.addDataReturn = 'missingText';
			$timeout(function () {
				delete $scope.addDataReturn;
			}, 2000);
			return;
		}
		if ($scope.newAuthor === undefined) {
			$scope.addDataReturn = 'missingAuthor';
			$timeout(function () {
				delete $scope.addDataReturn;
			}, 2000);
			return;
		}

		var newData = {
			text: $scope.newQuote,
			author: $scope.newAuthor
		}

		quoteGetter.addData(newData)
	};

	$scope.setupFilter = function () {

		if ($scope.myFilter === undefined) {
			$scope.myFilter = $scope.newQuote;
		} else {
			$scope.myFilter = undefined;
		}
	}

}]);
