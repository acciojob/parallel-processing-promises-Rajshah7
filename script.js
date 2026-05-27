//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function loadImage(url){
	return new Promise((resolve,reject) => {
		const img = createElement('img');

		img.src = url;

		img.onload = () => resolve(img);

		img.onerror = () => reject("Image failed to load");
	})
}

btn.addEventListener("click",() => {
	const promises = images.map(() => loadImage(image.url));

	promise.all(promises).then((result) => {
		output.innerHTML = "";

		result.forEach(() => {
			output.appendChild(img);
		})
		
	}).catch(err){
		output.appendChild(err);
		console.log(err);
	}
})