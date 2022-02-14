const container = document.querySelector(".container");

//get data from server

const url = "https://api.themoviedb.org/3/movie/550?api_key=5d89a028b230f67ec5ae8468d5a8a11f"

fetch(url)
.then(Response => {
	return Response.json();

})
.then(data => {
		console.log(data.title);
		console.log(data.overview);

		//fromat date to get year
		let year = new Date(data.release_date).getFullYear();
		console.log(year);

		let imagePath = data.poster_path;
		let imageUrl = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+imagePath;
		console.log(imageUrl);

		let movieTitle = document.createElement('h1');
		movieTitle.textContent = data.title + " " + year;
		container.appendChild(movieTitle);
	
		let overview = document.createElement("p");
		overview.textContent = data.overview;
		container.appendChild(overview);

		let moviePoster = document.createElement("img");
		moviePoster.src = imageUrl;
		container.appendChild(moviePoster);
});

