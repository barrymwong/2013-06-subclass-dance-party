var makeFadeDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  window.dancers.push(this);
};

makeFadeDancer.prototype = new makeDancer();
makeFadeDancer.prototype.constructor = makeFadeDancer;

makeFadeDancer.prototype.step = function(){
  makeDancer.prototype.step.apply(this);

  this.$node.fadeToggle();
};


