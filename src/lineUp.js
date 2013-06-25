var lineUp = function() {
  // _.invoke(window.dancers, 'lineUp', 10, 10);
  _.each(window.dancers, function(dancer, index) {
    dancer.lineUp(20*index, 50);
  });
};