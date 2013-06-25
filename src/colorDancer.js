var makeColorDancer = function(top, left, timeBetweenSteps){
	// run makeDancer class inside this context
  makeDancer.apply(this, arguments);
  //makeDancer();
};

// overwrite the colorDancer prototype with a new makeDancer object
makeColorDancer.prototype = new makeDancer(); //Object.create(makeDancer);

// point colorDancer constructor at the colorDancer class
makeColorDancer.prototype.constructor = makeColorDancer;

makeColorDancer.prototype.step = function() {
  makeDancer.prototype.step.apply(this);
  this.$node.addClass('color-anim').html('<img src="http://www.appsmay.com/upload/20120321/icon-space-invaders-for-android.jpg">');
};