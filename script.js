// TODO: load the dataset 

let attractions;
let selection;

async function loadData(){
	// fetch('attractions.json')
	// .thenr(response => response.json())
	// .then(data => {
	// 		let d = data;
	// 		//console.log(a);
	// 		return d;
	// 	});
	let response = await fetch('attractions.json');
	let data = await response.json();
	return data;
}

loadData(attractions);
//console.log(attractions);


function filterData(category) {

	/* **************************************************
	 *
	 * TODO: filter attractions by the selected category
	 * TODO: filter top 5 attractions
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/
	console.log(category);
	let filteredArr;
	if (!category || category == "all"){
		filteredArr = attractions;
	}
	else{
		filteredArr = attractions.filter(place => place.Category == category);
	}
	//console.log(filteredArr);
	filteredArr.sort((a, b) => b.Visitors - a.Visitors);
	let top5Attractions = filteredArr.slice(0, 5);
	console.log(top5Attractions);
	return top5Attractions;
}

async function main(){
	attractions = await loadData();
	//console.log(attractions);
	let top5Attr = filterData();
	renderBarChart(top5Attr);

	let elem = document.querySelector("#attraction-category");
	elem.addEventListener("change", function(event){
		selection = event.target.value;
		top5Attr = filterData(selection);
		//console.log(top5Attr);
		renderBarChart(top5Attr);
	});
}

main();

// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category