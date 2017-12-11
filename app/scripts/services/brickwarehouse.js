'use strict';

/**
 * @ngdoc service
 * @name serviceQuizApp.brickWarehouse
 * @description
 * # brickWarehouse
 * Service in the serviceQuizApp.
 */
angular.module('serviceQuizApp')
.service('brickWarehouse', function ()
{
	// AngularJS will instantiate a singleton by calling "new" on this function

	this.getBricks = function ()
	{
		return $.get('scripts/bricks.json');
	};

	this.buy = function (brick)
	{
		brick.quantity--;
	};

}
);
