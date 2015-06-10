$(function() {
	/*
	var elements = document.getElementsByClassName('grid-row');
	var sortArr = [];
	Array.prototype.forEach.call(elements, function(el, i) {
		console.debug(el)
		sortArr[i] = Sortable.create(el);
		//console.debug(sortArr[i]);
	});
	//*/

	/*
	var elements = [
		'my-accounts',
		'top-5-accounts',
		'cash-forecast',
		'bill-payment-vs-invoice-receipts'
	];
	var sortArr = [];
	Array.prototype.forEach.call(elements, function(el, i) {
		el = document.getElementsByClassName(elements[i]);
		console.debug(el[0]);
		sortArr[i] = Sortable.create(el[0]);
		console.debug(sortArr[i]);
	});
	//*/

	var defaultSerialization = [
		{ x: 0, y: 0, width: 4, height: 2, name: ".my-accounts" },
		{ x: 4, y: 0, width: 4, height: 2, name: ".top-5-accounts" },
		{ x: 8, y: 0, width: 4, height: 1, name: ".cash-forecast" },
		{ x: 8, y: 1, width: 4, height: 1, name: ".bill-payment-vs-invoice-receipts" },
		{ x: 0, y: 2, width: 8, height: 1, name: ".accounts-payable" },
		{ x: 0, y: 3, width: 8, height: 1, name: ".accounts-receivable" },
		{ x: 8, y: 2, width: 4, height: 2, name: ".profit-and-loss" },
	];

	// defaultSerialization = GridStackUI.Utils.sort(defaultSerialization);

	// var grid = $('.grid_stack').data('gridstack');
	// grid.remove_all();

	_.each(this.defaultSerialization, function(node) {
		// console.log('...');
	})

	var options = {
		cell_height: 280,
		vertical_margin: 18,
	};

	$('.grid-stack').gridstack(options);
	var grid = $('.grid-stack').data('gridstack');
	// grid.disable();


	function saveGrid() {
		this.serialized_data = _.map($('.grid-stack > .grid-stack-item:visible'), function(el) {
			var el = $(el);
			var node = el.data('_gridstack_node');
			return {
				x: node.x,
				y: node.y,
				width: node.width,
				height: node.height,
				name: node.el[0]
            };
		}, this);
	}

	function loadGrid() {
		var items = GridStackUI.Utils.sort(this.serialized_data);
		// console.debug(items);
	}

	this.loadDefaultGrid = function() {
		console.debug('loading default grid...', defaultSerialization);
		_.each(defaultSerialization, function(el) {
			grid.update($(el.name), el.x, el.y, el.width, el.height);
		});
	}

	$('#load').click(this.loadDefaultGrid);

	$('.grid-stack').on('change', function(e, items) {
		// console.debug(items);
	})

	saveGrid();
	loadGrid();

	/**
	*	Trigger for rearrange/save button
	*/
	$("#text-swap").on("click", function() {
		$(this).toggleClass("on");
		$('.grid-block.scale-1').toggleClass("rearrange");
		$('.grid-block.scale-2').toggleClass("rearrange");

		if($(this).hasClass('on')) {
			grid.enable();
		} else {
			grid.disable();
		}
	});
	
	// console.log(serialized_data);
});