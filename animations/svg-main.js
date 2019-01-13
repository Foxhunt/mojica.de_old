var drawing = document.getElementById('drawing')
var width = drawing.attributes.width.value
var height = drawing.attributes.height.value
var draw = SVG('drawing').size(width, height)

var svgMainDuration = 1000 * 4;

var controlls = new Controlls('drawing', svgMainDuration)
setTimeout(() => {
	controlls.playPause.click()
}, Math.random() * svgMainDuration)
setInterval(() => {
	setTimeout(() => {
		controlls.revBox.click()
		controlls.playPause.click()
	}, Math.random() * svgMainDuration)
}, svgMainDuration * 4)

var innerCircles = draw.group()
var outerCircles = draw.group()
var lines = draw.group()

draw.circle().radius(4).center(width/2, height/2)

var lineAnims = []
var circleAnims = []
var rotations = []

controlls.addAnimations(lineAnims)
controlls.addAnimations(circleAnims)
controlls.addAnimations(rotations)

circleAnims.push(
  outerCircles.circle().radius(1).center(width/2, height/2)
  .animate(svgMainDuration, '>').center(width/3, height/3).radius(4)
  .pause()
)
circleAnims.push(
  innerCircles.circle().radius(1).center(width/2, height/2)
  .animate(svgMainDuration, '<').center(width/3,  height/2).radius(4)
  .pause()
)
circleAnims.push(
  outerCircles.circle().radius(1).center(width/2, height/2)
  .animate(svgMainDuration, '>').center(width/1.5, height/3).radius(4)
  .pause()
)
circleAnims.push(
  innerCircles.circle().radius(1).center(width/2, height/2)
  .animate(svgMainDuration, '<').center(width/1.5,  height/2).radius(4)
  .pause()
)
circleAnims.push(
  outerCircles.circle().radius(1).center(width/2, height/2)
  .animate(svgMainDuration, '>').center(width/1.5, height/1.5).radius(4)
  .pause()
)
circleAnims.push(
  innerCircles.circle().radius(1).center(width/2, height/2)
  .animate(svgMainDuration, '<').center(width/2, height/1.5).radius(4)
  .pause()
)
circleAnims.push(
  outerCircles.circle().radius(1).center(width/2, height/2)
  .animate(svgMainDuration, '>').center(width/3, height/1.5).radius(4)
  .pause()
)
circleAnims.push(
  innerCircles.circle().radius(1).center(width/2, height/2)
  .animate(svgMainDuration, '<').center(width/2, height/3).radius(4)
  .pause()
)

lineAnims.push(
  lines.line(width/3, height/3, width/3, height/3)
  .animate(svgMainDuration).plot(width/1.5, height/1.5, width/1.5, height/3)
  .pause()
)
lineAnims.push(
  lines.line(width/1.5, height/3, width/1.5, height/3)
  .animate(svgMainDuration).plot(width/3, height/1.5, width/1.5, height/1.5)
  .pause()
)
lineAnims.push(
  lines.line(width/1.5, height/1.5, width/1.5, height/1.5)
  .animate(svgMainDuration).plot(width/3, height/3, width/3, height/1.5)
  .pause()
)
lineAnims.push(
  lines.line(width/3, height/1.5, width/3, height/1.5)
  .animate(svgMainDuration).plot(width/1.5, height/3, width/3, height/3)
  .pause()
)

lines.stroke({
  width: 2,
	linecap: 'round',
  color: '#000'
})

rotations.push(lines.animate(svgMainDuration, '<>').rotate(-(45 * 9)).pause())
rotations.push(outerCircles.animate(svgMainDuration, '<>').rotate(-(45 * 3)).pause())
rotations.push(innerCircles.animate(svgMainDuration, '<>').rotate(45 * 7).pause())
