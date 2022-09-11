// Importing team module and assigning it to team variable
const team = require("./Team");
// Importing moment
const moment = require("moment");

// Function with array to contain teams data
function findTeams() {
	let teamsArray = [];
	// Adding team objects to array above
	teamsArray.push(
		new team("Alabama", "Crimson Tide", 54),
		new team("LSU", "Tigers", 54),
		new team("Georgia", "Bulldogs", 54),
		new team("Texas", "Longhorns", 54),
		new team("USC", "Trojans", 54)
	);

	return teamsArray;
}

// Returning a team object if the name parameter matches a team name from the objects inside the teamsArray
function findTeam(name) {
	let teams = findTeams();
	for (let team of teams) {
		if (team.name === name) {
			return team;
		}
	}
}

// Return a string containing the Championship game teams names, mascot, and date the game will be played
function getGame() {
	let selectedTeam = findTeam();
	return `${findTeam("Texas").name} ${findTeam("Texas").mascot} is playing ${
		findTeam("Alabama").name
	} ${findTeam("Alabama").mascot} on ${moment()
		.add(7, "days")
		.format("MM-DD-YYYY")} at 7:30 PM CST`;
}

// Exporting findTeams and getGame
module.exports = { findTeams, getGame };
