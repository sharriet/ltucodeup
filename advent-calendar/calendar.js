// make an array to store list of 24 random integers 0-59
rand_nums = [];
while (rand_nums.length < 24) {
	// make a random integer in range 0-59
	var rand = Math.floor(Math.random() * 60);
	// add it to random numbers array
	rand_nums.push(rand);
	// convert array to set to eliminate duplicates
	rand_nums_set = new Set(rand_nums);
	// convert back to an array
	rand_nums = Array.from(rand_nums_set);
}

// get the calendar 'cells' from the DOM
var cells = document.getElementsByClassName("col-sm-2");

// for each random number in the list...
for (var i=0;i<rand_nums.length;i++) {

	//  target the cell of that index and add door class
	cells[rand_nums[i]].classList.add("door");

	// output the number of the door in that cell
	var door_number = i + 1;
	cells[rand_nums[i]].innerHTML = "<p>" + door_number + "</p>";

	// make the cell clickable
	cells[rand_nums[i]].addEventListener("click", function(i) {
		// a random image will be displayed each time
		let src = Math.floor(Math.random() * 24);
		this.setAttribute("style", `background-image:url("images/${src}.jpg")`);
	});
}
