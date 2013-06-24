var MakeBlinkyDancer = function(top, left, timeBetweenSteps){
  this.left = left;
  this.top = top;
  this.timeBetweenSteps = timeBetweenSteps;
};

MakeBlinkyDancer.prototype = new MakeDancer(this.top, this.left, this.timeBetweenSteps);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.oldStep = this.step;

MakeBlinkyDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    //debugger;
    this.oldStep();

    /* toggle() is a jQuery method to show/hide the <span> tag.
     * See http://api.jquery.com/category/effects/ for this and
     * other effects you can use on a jQuery-wrapped html tag. */
    this.$node.toggle();
};
