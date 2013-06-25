var makeColorDancer = function(){
	// run makeDancer class inside this context
  makeDancer.apply(this, arguments);
};

// overwrite the colorDancer prototype with a new makeDancer object
makeColorDancer.prototype = new makeDancer();

// point colorDancer constructor at the colorDancer class
makeColorDancer.prototype.constructor = makeColorDancer;

makeColorDancer.prototype.step = function() {
  makeDancer.prototype.step.apply(this);
  this.$node.addClass('color-anim');
};