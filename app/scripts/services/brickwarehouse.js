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
		var data = $.get('scripts/bricks.json', function(data){console.log("success");}, function(data){ console.log("get failed");});
		return data;
	};

	this.buy = function (brick)
	{
		brick.quantity--;
	};

}
);
