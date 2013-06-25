var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  //debugger;
  makeDancer.apply(this, arguments);
};

makeBlinkyDancer.prototype = new makeDancer();
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    // debugger;
    // console.log(MakeDancer.prototype.step);
    makeDancer.prototype.step.apply(this);
    /* toggle() is a jQuery method to show/hide the <span> tag.
     * See http://api.jquery.com/category/effects/ for this and
     * other effects you can use on a jQuery-wrapped html tag. */
     //debugger;
    this.$node.toggle();
};
