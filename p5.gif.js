function gifGenerator(_canvas, _positionX, positionY)
{
    
}

gifGenerator.prototype = {
    setupUI : function (_canvas, _x, _y) 
    {
        
    },
    
    
    showGif : function ()
    {
        gif.render();
    },

    startRecording : function ()
    {
        numFrames = frameSlider.value();
        record = !record;
        console.log("beginning recording");
    }

        setupGif : function () {
      counter = 0;
      gif = new GIF({
        workers: 2,
        quality: 80
      });

      gif.on('finished', function(blob) {
        window.open(URL.createObjectURL(blob));
        setupGif();
      });
    },


}