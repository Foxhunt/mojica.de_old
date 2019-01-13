let fills = function () {
	return (document.getElementById("fillSlider").value * 1);
};
let filler = ['flow', 'focus', 'feel', 'calm', 'relax', 'unwind', 'ease', 'rewind', 'hold', 'breathe'];
let lastLines = [];
let breatheIn = ['breathe in', 'inhale', 'in', 'take in'];
let breatheOut = ['breathe out', 'exhale', 'out', 'release'];


let timeBetweenInSteps = function () {
	return (document.getElementById("inSlider").value * 1000 / (fills() + 1));
}
let timeBetweenOutSteps = function () {
	return (document.getElementById("outSlider").value * 1000 / (fills() + 1));
}

let main = document.getElementsByTagName('main')[0];

function delay(t) {
	return new Promise(resolve => setTimeout(resolve, t));
}

function addLine(text, filler) {
	let p = document.createElement('p');
	p.innerHTML = text;

	if (filler) {
		p.classList.add('gray');
	}
	
	main.appendChild(p);

	let lines = main.children;

	while (lines.length > (fills() + 1))
		lines[0].remove();

}

function rndLine(arr) {
	let out = arr[Math.floor(Math.random() * arr.length)];
	if (lastLines.includes(out)) return rndLine(arr);
	lastLines.push(out);
	while (lastLines.length > fills()) 
		lastLines.shift();
	return out;
}

function updateVals() {
	document.getElementById("inVal").value = document.getElementById("inSlider").value;
	document.getElementById("outVal").value = document.getElementById("outSlider").value;
	document.getElementById("fillVal").value = document.getElementById("fillSlider").value;
}

function updateSlider() {
	document.getElementById("inSlider").value = document.getElementById("inVal").value;
	document.getElementById("outSlider").value = document.getElementById("outVal").value;
	document.getElementById("fillSlider").value = document.getElementById("fillVal").value;
}

document.getElementById("inSlider").addEventListener("input", updateVals);
document.getElementById("outSlider").addEventListener("input", updateVals);
document.getElementById("fillSlider").addEventListener("input", updateVals);
document.getElementById("fillVal").addEventListener("input", updateSlider);
document.getElementById("inVal").addEventListener("input", updateSlider);
document.getElementById("outVal").addEventListener("input", updateSlider);

async function breathe() {
	addLine(rndLine(breatheIn));
	for (var i = 0; i < fills(); i++) {
		await delay(timeBetweenInSteps());
		addLine(rndLine(filler), true);
	}
	await delay(timeBetweenInSteps());
	addLine(rndLine(breatheOut));
	for (var i = 0; i < fills(); i++) {
		await delay(timeBetweenOutSteps());
		addLine(rndLine(filler), true);
	}
	await delay(timeBetweenOutSteps());
	breathe();
}

breathe();
updateVals();

if (!/Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent)) {
	let canvas = null;
	let context = null;
	let body = document.body;
	let html = document.documentElement;
	let time = 0;
	let intervalId = 0;

	let makeNoise = function () {
		var imgd = context.createImageData(canvas.width, canvas.height);
		var pix = imgd.data;

		for (let i = 0; i < pix.length; i += 4) {
			let c = 3 + Math.sin(i / 50000 + time / 20); // A sine wave of the form sin(ax + bt)
			pix[i] = pix[i + 1] = pix[i + 2] = 20 * Math.random() * c; // Set a random gray
			pix[i + 3] = 60; // 100% opaque
		}

		context.putImageData(imgd, 0, 0);
		time = (time + 1) % canvas.height;
	}

	let setup = function () {
		canvas = document.getElementById("tv");
		context = canvas.getContext("2d");
		canvas.width = document.documentElement.clientWidth / 2;
		canvas.height = document.documentElement.clientHeight / 2;
	}

	setup();
	intervalId = setInterval(makeNoise, 50);
}
