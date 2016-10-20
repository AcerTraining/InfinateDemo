angular.module('myApp', ['ionic'])
	.controller('MainCtrl', function($scope) {
			$scope.numberOfItemsToDisplay = 20; // number of item to load each time
			$scope.items = getData();

			function getData() {
					var a = [];
					for (var i=1; i< 1000; i++) {
							a.push(i);
					}

					return a;
			}
			$scope.addMoreItem = function(done) {
					if ($scope.items.length > $scope.numberOfItemsToDisplay)
							$scope.numberOfItemsToDisplay += 20; // load 20 more items
					done(); // need to call this when finish loading more data
			}

	});/**
 * Created by Richard on 10/20/16.
 */
