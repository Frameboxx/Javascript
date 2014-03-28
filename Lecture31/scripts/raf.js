// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
// MIT license
var requestAnimationFrame, cancelAnimationFrame;

(function() {
  requestAnimationFrame = window.requestAnimationFrame
  cancelAnimationFrame = window.cancelAnimationFrame

  var lastTime = 0,
      vendors = ['ms', 'moz', 'webkit', 'o']
      
      
      
      for (var i = 0; i < vendors.length && !requestAnimationFrame; ++i) {
      requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame']

      cancelAnimationFrame =
      window[vendors[i] + 'CancelAnimationFrame'] || window[vendors[i] + 'CancelRequestAnimationFrame']
      }
      
      
      
      if (!requestAnimationFrame) {
      requestAnimationFrame = function(callback, element) {
        var currTime = new Date().getTime(),
            timeToCall = Math.max(0, 16 - (currTime - lastTime))
            
            
             var id = setTimeout(function() {
          callback(currTime + timeToCall)
        }, timeToCall)

        lastTime = currTime + timeToCall

        return id
      };
      }
      
      
      
      if (!cancelAnimationFrame) {
      cancelAnimationFrame = function(id) {
        clearTimeout(id)
      };
      }
}());