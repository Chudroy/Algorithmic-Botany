// let ang = 137.5
let ang
let n = 0;
let c = 4
let doms

function setup() {
  createCanvas(1080, 920);
  background(0);
  colorMode(HSB)
  angleMode(DEGREES)

  doms = new Doms();
  doms.angBox.selected("137.5")
}

function draw() {

  ang = doms.angVal()
  doms.angP.html(doms.angVal() + "º")

  for (let i = 0; i < 5; i++) {
    let phi = n * ang
    let r = c * Math.sqrt(n)
    push();
    noStroke();
    fill(color((r) % 255, 255, 255))
    // fill(0);
    translate(width / 2, height / 2)
    rotate(phi);
    ellipse(r, 0, 3);
    pop();
    n += 1
  }

}