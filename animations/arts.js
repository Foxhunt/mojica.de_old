var artsDrawing = document.getElementById('arts')
var exportDiv = document.getElementById('export')
var exportCanvas = document.getElementById('canvas')
var artsWidth = artsDrawing.attributes.width.value
var artsHeight = artsDrawing.attributes.height.value
const arts = SVG('arts').size(artsWidth, artsHeight)

artsDrawing.onclick = function(){
	artsControlls.revBox.click()
	artsControlls.playPause.click()
	controlls.revBox.click()
	controlls.playPause.click()
}

var div170 = 1.7647058823529411764705882352941
var div130 = 2.3076923076923076923076923076923

var artsDuration = 2000
var artsAnimations = []

var artsControlls = new Controlls('arts', artsDuration)
artsControlls.addAnimations(artsAnimations)
setTimeout(() => {
	artsControlls.playPause.click()
}, Math.random() * artsDuration)
setInterval(() => {
	setTimeout(() => {
		artsControlls.revBox.click()
		artsControlls.playPause.click()
	}, Math.random() * artsDuration)
}, artsDuration * 4)

var outerLines = arts.group()
var middLines = arts.group()
var innerLines = arts.group()
var all = arts.group().add(outerLines).add(middLines).add(innerLines)

artsAnimations.push(all.circle().radius(1).center(artsWidth/2, artsHeight/2)
										.animate(artsDuration, '<').center(artsWidth/2, 140).radius(2).rotate(180, artsWidth/2, artsHeight/2).pause())
all.circle().radius(2).center(artsWidth/2, artsHeight/2)
artsAnimations.push(all.circle().radius(1).center(artsWidth/2, artsHeight/2)
										.animate(artsDuration, '<').center(artsWidth/2, 160).radius(2).rotate(180, artsWidth/2, artsHeight/2).pause())

arts.stroke({
  color: '#000',
	linecap: 'round',
  width: 2
})

// diamond
all.line(artsWidth/2, 130, 170, artsHeight/2)
all.line(artsWidth/2, 130, 130, artsHeight/2)
all.line(artsWidth/2, 170, 170, artsHeight/2)
all.line(artsWidth/2, 170, 130, artsHeight/2)

// arrows up
artsAnimations.push(outerLines.line(artsWidth/2, 50, 170, 70).animate(artsDuration, '<').dmove(0, 60).pause())
artsAnimations.push(outerLines.line(artsWidth/2, 50, 130, 70).animate(artsDuration, '<').dmove(0, 60).pause())
artsAnimations.push(outerLines.line(artsWidth/2, 40, 170, 60).animate(artsDuration, '<').dmove(0, 60).pause())
artsAnimations.push(outerLines.line(artsWidth/2, 40, 130, 60).animate(artsDuration, '<').dmove(0, 60).pause())
artsAnimations.push(outerLines.line(170, 70, 170, 60).animate(artsDuration, '<').dmove(0, 60).pause())
artsAnimations.push(outerLines.line(130, 70, 130, 60).animate(artsDuration, '<').dmove(0, 60).pause())

artsAnimations.push(middLines.line(artsWidth/2, 80, 170, 100).animate(artsDuration, '<').dmove(0, 40).pause())
artsAnimations.push(middLines.line(artsWidth/2, 80, 130, 100).animate(artsDuration, '<').dmove(0, 40).pause())
artsAnimations.push(middLines.line(artsWidth/2, 70, 170, 90).animate(artsDuration, '<').dmove(0, 40).pause())
artsAnimations.push(middLines.line(artsWidth/2, 70, 130, 90).animate(artsDuration, '<').dmove(0, 40).pause())
artsAnimations.push(middLines.line(170, 100, 170, 90).animate(artsDuration, '<').dmove(0, 40).pause())
artsAnimations.push(middLines.line(130, 100, 130, 90).animate(artsDuration, '<').dmove(0, 40).pause())

artsAnimations.push(innerLines.line(artsWidth/2, 110, 170, 130).animate(artsDuration, '-').dmove(0, 20).pause())
artsAnimations.push(innerLines.line(artsWidth/2, 110, 130, 130).animate(artsDuration, '-').dmove(0, 20).pause())
artsAnimations.push(innerLines.line(artsWidth/2, 100, 170, 120).animate(artsDuration, '-').dmove(0, 20).pause())
artsAnimations.push(innerLines.line(artsWidth/2, 100, 130, 120).animate(artsDuration, '-').dmove(0, 20).pause())
artsAnimations.push(innerLines.line(170, 130, 170, 120).animate(artsDuration, '-').dmove(0, 20).pause())
artsAnimations.push(innerLines.line(130, 130, 130, 120).animate(artsDuration, '-').dmove(0, 20).pause())

// arrows down
artsAnimations.push(innerLines.line(artsWidth/2, 190, 170, 170).animate(artsDuration, '-').dmove(0, -20).pause())
artsAnimations.push(innerLines.line(artsWidth/2, 190, 130, 170).animate(artsDuration, '-').dmove(0, -20).pause())
artsAnimations.push(innerLines.line(artsWidth/2, 200, 170, 180).animate(artsDuration, '-').dmove(0, -20).pause())
artsAnimations.push(innerLines.line(artsWidth/2, 200, 130, 180).animate(artsDuration, '-').dmove(0, -20).pause())
artsAnimations.push(innerLines.line(170, 170, 170, 180).animate(artsDuration, '-').dmove(0, -20).pause())
artsAnimations.push(innerLines.line(130, 170, 130, 180).animate(artsDuration, '-').dmove(0, -20).pause())

artsAnimations.push(middLines.line(artsWidth/2, 220, 170, 200).animate(artsDuration, '<').dmove(0, -40).pause())
artsAnimations.push(middLines.line(artsWidth/2, 220, 130, 200).animate(artsDuration, '<').dmove(0, -40).pause())
artsAnimations.push(middLines.line(artsWidth/2, 230, 170, 210).animate(artsDuration, '<').dmove(0, -40).pause())
artsAnimations.push(middLines.line(artsWidth/2, 230, 130, 210).animate(artsDuration, '<').dmove(0, -40).pause())
artsAnimations.push(middLines.line(170, 200, 170, 210).animate(artsDuration, '<').dmove(0, -40).pause())
artsAnimations.push(middLines.line(130, 200, 130, 210).animate(artsDuration, '<').dmove(0, -40).pause())

artsAnimations.push(outerLines.line(artsWidth/2, 250, 170, 230).animate(artsDuration, '<').dmove(0, -60).pause())
artsAnimations.push(outerLines.line(artsWidth/2, 250, 130, 230).animate(artsDuration, '<').dmove(0, -60).pause())
artsAnimations.push(outerLines.line(artsWidth/2, 260, 170, 240).animate(artsDuration, '<').dmove(0, -60).pause())
artsAnimations.push(outerLines.line(artsWidth/2, 260, 130, 240).animate(artsDuration, '<').dmove(0, -60).pause())
artsAnimations.push(outerLines.line(170, 230, 170, 240).animate(artsDuration, '<').dmove(0, -60).pause())
artsAnimations.push(outerLines.line(130, 230, 130, 240).animate(artsDuration, '<').dmove(0, -60).pause())

artsAnimations.push(innerLines.animate(artsDuration, '>').rotate(90, artsWidth/2, artsHeight/2).pause())
artsAnimations.push(middLines.animate(artsDuration, '>').rotate(-180, artsWidth/2, artsHeight/2).pause())
artsAnimations.push(outerLines.animate(artsDuration, 'swingTo').rotate(90*3, artsWidth/2, artsHeight/2).pause())
