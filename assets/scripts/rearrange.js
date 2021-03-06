$(function() {

	// Variables
	// --------------------------------------------------------------
	var grid, serializedData;

	// The initial placements are set on the HTML elements
	// These are the same coords, used for the reset button
	var defaultSerialization = [
		{ x: 0, y: 0, width: 4, height: 2, name: ".my-accounts" },
		{ x: 4, y: 0, width: 4, height: 2, name: ".top-5-accounts" },
		{ x: 8, y: 0, width: 4, height: 1, name: ".cash-forecast" },
		{ x: 8, y: 1, width: 4, height: 1, name: ".bill-payment-vs-invoice-receipts" },
		{ x: 0, y: 2, width: 8, height: 1, name: ".accounts-payable" },
		{ x: 0, y: 3, width: 8, height: 1, name: ".accounts-receivable" },
		{ x: 8, y: 2, width: 4, height: 2, name: ".profit-and-loss" },
	];

	var options = {
		animate: true,
		cell_height: 210,
		vertical_margin: 18,
	};
	

	// Init
	// --------------------------------------------------------------
	$('.grid-stack').gridstack(options);
	grid = $('.grid-stack').data('gridstack');
	grid.disable();

	
	/**
	*	Demo to show that the save functionality is working
	*
	*	Updates grid if it has been saved to sessionStorage
	*/
	if(sessionStorage.gridData) {
		_.each(JSON.parse(sessionStorage.gridData), function(el) {
			grid.update($(el.name), el.x, el.y, el.width, el.height);
		});
	}


	// Methods
	// --------------------------------------------------------------

	/**
	*	Saves x pos, y pos, width, height, and unique css class name to serializedData
	*
	*	Note: unique class name must be first in the classlist
	*/
	this.saveGrid = function() {
		console.log('save');
		serializedData = _.map($('.grid-stack > .grid-stack-item:visible'), function(el) {
			var el = $(el);
			var node = el.data('_gridstack_node');
			return {
				x: node.x,
				y: node.y,
				width: node.width,
				height: node.height,
				name: '.' + node.el[0].classList[0]
            };
		}, this);

		// Part of the demo to show the save functionality
		// Saves grid info in sessionStorage so it's destroyed on close
		sessionStorage.gridData = JSON.stringify(serializedData);
	};

	/**
	*	Loads the grid layout based on data from serializedData
	*/
	this.loadGrid = function() {
		_.each(serializedData, function(el) {
			grid.update($(el.name), el.x, el.y, el.width, el.height);
		});
	};

	/**
	*	Loads the default grid layout based on data from defaultSerialization
	*/
	this.loadDefaultGrid = function() {
		_.each(defaultSerialization, function(el) {
			grid.update($(el.name), el.x, el.y, el.width, el.height);
		});
		this.saveGrid();
	}.bind(this);

	/**
	*	Trigger for rearrange/save button
	*
	*	First toggle enables grid to be draggable/moveable
	*	Second toggle disables grid updates and saves data in serializedData
	*/
	this.rearrangeOrSave = function() {
		$('#text-swap').toggleClass("on");
		$('.grid-block.scale-1').toggleClass("rearrange");
		$('.grid-block.scale-2').toggleClass("rearrange");

		if($('#text-swap').hasClass('on')) {
			grid.enable();
		} else {
			grid.disable();
			this.saveGrid();
		}
	}.bind(this);
	

	// Handlers
	// --------------------------------------------------------------
	$('#reset').click(this.loadDefaultGrid);
	$('#text-swap').click(this.rearrangeOrSave);

	// For testing
	$('#save').click(this.saveGrid);
	$('#load').click(this.loadGrid);
});