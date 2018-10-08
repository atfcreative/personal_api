console.log("Sanity Check: JS is working!");

//Global vars
const form = document.getElementById('andrewForm');
const output = document.getElementById('output');
const baseUrl = 'http://localhost:3000/api/art/';

// const show = document.getElementById('blind');

const render = (arts) => {
	output.innerHTML = '';
	form.children[0] = '';
	form.children[1] = '';
	form.children[2] = '';

	const art = arts.forEach(art => {
		output.insertAdjacentHTML('afterbegin', `
			<div style="margin:0 auto 40px; border-top: 2px dashed #ccc;">
				<p class="bold">${art.title}</p>
				<p><strong>${art.medium}</strong></p>
				<p><strong>${art.description}</strong></p>
				<img src="${art.image}" style="height:50%; width:50%; margin-left: 25%;">
				<small id="${art._id}">Edit</small>
				<small id="${art._id}">Delete</small>
			</div>
		`)
	})
}

//Get all ART
const getArts = () => {
	fetch(baseUrl)
	.then(res => res.json())
	.then(arts => render(arts))
	.catch(err => console.log(err));
}

getArts();

var audio = new Audio('dotmatrix.mp3');
audio.play();

//Add new art piece 
const handleSubmit = (event) => {
	event.preventDefault();
	// console.log('Form submitted!');
	const artTitle = document.getElementById('title').value;
	const artMedium = document.getElementById('medium').value;
	const artDescription = document.getElementById('description').value;
	const data = {title: artTitle, medium: artMedium, description: artDescription};

	// console.log(data);

	fetch(baseUrl, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json; charset=utf-8",
		},
		body: JSON.stringify(data),
	})
		.then(res => res.json(res))
		.then(data => getArts())
		.catch(err => console.log(err));
}

//DELETE ARTS STUFFS
const handleEditDelete = (event) => {
	if (event.target.innerText === 'Delete') {
		// console.log(event.target.id)
		fetch(baseUrl + event.target.id, {
			method: 'DELETE',
		})
			//form.remove(); not working that great
			.then(() => getArts())
			.catch(err => console.log(err));
	} else if(event.target.innerText === 'Edit') {
		// console.log('Edit Clicked!');
		const parent = event.target.parentNode;
		const artTitle = parent.children[0].innerText;
		const artMedium = parent.children[1].innerText;
		const artDescription = parent.children[2].innerText;
		const artImage = parent.children[3].innerText;
		const artId = parent.children[4].id;

		parent.insertAdjacentHTML('beforeend', `
				<span id="editArt">
					<input id="editArtTitle" name="name" type="text" value="${artTitle}" />
					<input id="editArtMedium" name="type" type="text" value="${artMedium}" />
					<input id="editArtDescription" name="age" type="text" value="${artDescription}" />
					<button id="editCancel">Cancel</button>
					<button id="editSubmit" data-id="${artId}">Submit</button>
				</span>
    `);
	} else if(event.target.id === 'editCancel') {
		const form = document.getElementById('editArt');
		form.remove();
	} else if(event.target.id === 'editSubmit') {
		let artId = event.target.getAttribute('data-id');
		console.log(artId);
		const newTitle = document.getElementById('editArtTitle').value;
		const newMedium = document.getElementById('editArtMedium').value;
		const newDescription = document.getElementById('editArtDescription').value;
		const data = {title: newTitle, medium: newMedium, description: newDescription};
		if (newTitle.length !== 0 && newMedium.length !== 0 && newDescription.length !==0) {
			fetch(baseUrl + artId, {
				method: 'PUT',
				headers: {
					"Content-Type": "application/json; charset=utf-8",
				},
				body: JSON.stringify(data),
			})
				.then(() => getArts());
		}
	}
}


// EVENT LISTENERS
form.addEventListener('submit', handleSubmit);
output.addEventListener('click', handleEditDelete);

//Toggle technique
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

//show element 
var show = function (elem) {
	elem.classList.add('is-visible');
};

//hide element 
var hide = function (elem) {
	elem.classList.remove('is-visible');
};

//toggle element vis
var toggle = function (elem) {
	elem.classList.toggle('is-visible');
};

//listen for click events
document.addEventListener('click', function (event) {
	
	//make sure clilcked elem is our toggle 
	if(!event.target.classList.contains('toggle')) return;
	
	//prevent default link beahvior
	event.preventDefault();
	
	// get the content
	var content = document.querySelector(event.target.hash);
	if (!content) return;

	toggle(content);
}, false);





// blind.addEventListener('click', showDiv);


// $('formAndrew').on('submit', handleSuccess);

// $.ajax ({
// 	method: 'GET',
// 	url: 'http://localhost:3000/api/art',
// 	// dataType:json,
// 	success: handleSuccess,
// 	error: handleError,

// })

// $.ajax ({
// 	method: 'POST',
// 	url: 'http://localhost:3000/api/art',
// 	success: handleSuccess,
// 	error: handleError,

// })

// function handleSuccess (response) {
// 	response.preventDefault;
// 	var data = response.json();
// 	for (let i = 0; i < data.length; i++) {
// 		return data[i];
// 	}
// }

// function handleError (e) {
	
// }


