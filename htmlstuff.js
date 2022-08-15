function Doms() {
  this.angSlider = createSlider(1, 359, 137.5, 0.1);
  this.angSlider.style('width', '500px');
  this.refreshCheck = createButton("Restart");
  this.playPause = createButton("Play/Pause")
  this.toggleAng = createSelect();
  this.angP = createP()
  this.refreshCheck.mousePressed(refreshBackground);
  this.playPause.mousePressed(playPause)
  this.angBox = createRadio();

  this.angBox.option(1, "1º")
  this.angBox.option(32.1, "32.1º")
  this.angBox.option(45, "45º")
  this.angBox.option(67.5, "67.5º")
  this.angBox.option(90, "90º")
  this.angBox.option(124.5, "124.5º")
  this.angBox.option(124.6, "124.6º")
  this.angBox.option(130.9, "130.9º")
  this.angBox.option(137.5, "137.5º")
  this.angBox.option(162.6, "162.6º")
  this.angBox.option(180, "180º")
  this.angBox.option(239.9, "239.9º")
  this.angBox.option(271, "271º")
  this.angBox.option(324.2, "324.2º")
  this.angBox.option(356, "356º")

  this.toggleAng.option("use slider")
  this.toggleAng.option("use buttons")
  this.instructions = createP("Change the value of the angle using either the slider or the buttons. To change between them, select 'use slider' or 'use buttons' in the select menu.");


  this.angVal = function(func) {

    if (this.toggleAng.value() == "use slider") {
      return this.angSlider.value()
    } else if (this.toggleAng.value() == "use buttons") {
      return this.angBox.value();
    }

    // return this.angBox.value();

    //   if (this.angBox.checked){
    //     return this.angBox.value();
    // } else {
    //    return this.angSlider.value()
    // }
  }





  function playPause() {
    if (isLooping()) {
      noLoop();
    } else {
      loop()
    }
  }

  function refreshBackground() {
    background(0);
    n = 0
  }
}