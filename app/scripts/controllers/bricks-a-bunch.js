'use strict';

/**
 * @ngdoc function
 * @name serviceQuizApp.controller:BricksABunchCtrl
 * @description
 * # BricksABunchCtrl
 * Controller of the serviceQuizApp
 */
angular.module('serviceQuizApp')
.controller('BricksABunchCtrl', ['brickWarehouse', function (warehouse) {
			this.name = 'Bricks A Bunch';
						
			var vm = this;

			warehouse.getBricks().then(function (data) {
				console.log(data);
				vm.name = data;
				vm.bricks = data;
}, function(data) {console.log("bricks a bunch warehouse.getBricks().then failed");});

		}
	]);
