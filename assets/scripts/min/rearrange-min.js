$(function(){var t,a,i=[{x:0,y:0,width:4,height:2,name:".my-accounts"},{x:4,y:0,width:4,height:2,name:".top-5-accounts"},{x:8,y:0,width:4,height:1,name:".cash-forecast"},{x:8,y:1,width:4,height:1,name:".bill-payment-vs-invoice-receipts"},{x:0,y:2,width:8,height:1,name:".accounts-payable"},{x:0,y:3,width:8,height:1,name:".accounts-receivable"},{x:8,y:2,width:4,height:2,name:".profit-and-loss"}],e={cell_height:210,vertical_margin:18};$(".grid-stack").gridstack(e),t=$(".grid-stack").data("gridstack"),t.disable(),this.saveGrid=function(){console.log("save"),a=_.map($(".grid-stack > .grid-stack-item:visible"),function(t){var t=$(t),a=t.data("_gridstack_node");return{x:a.x,y:a.y,width:a.width,height:a.height,name:"."+a.el[0].classList[0]}},this)},this.loadGrid=function(){_.each(a,function(a){t.update($(a.name),a.x,a.y,a.width,a.height)})},this.loadDefaultGrid=function(){_.each(i,function(a){t.update($(a.name),a.x,a.y,a.width,a.height)})},this.rearrangeOrSave=function(){$("#text-swap").toggleClass("on"),$(".grid-block.scale-1").toggleClass("rearrange"),$(".grid-block.scale-2").toggleClass("rearrange"),$("#text-swap").hasClass("on")?t.enable():(t.disable(),this.saveGrid())}.bind(this),$("#reset").click(this.loadDefaultGrid),$("#text-swap").click(this.rearrangeOrSave),$("#save").click(this.saveGrid),$("#load").click(this.loadGrid)});