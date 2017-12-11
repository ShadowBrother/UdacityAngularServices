'use strict';

/**
 * @ngdoc function
 * @name serviceQuizApp.controller:LotsOBricksCtrl
 * @description
 * # LotsOBricksCtrl
 * Controller of the serviceQuizApp
 */
angular.module('serviceQuizApp')
.controller('LotsOBricksCtrl', ['brickWarehouse', function (warehouse) {
			this.name = 'Lots O Bricks';
						
			var vm = this;

			warehouse.getBricks().then(function (data) {
				vm.lotsStore = data;
			});
		}
	]);
