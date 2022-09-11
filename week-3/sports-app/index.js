/**
 * Title: index.js
 * Date: September 10, 2022
 * Author: Jamal Eddine Damir
 * Description: This file contains code to display teams data
 * 				and the championship game data
 * Sources:
 * Source code from class GitHub Repository
 * W3Schools.com
 * Instructor provided assignment specific instructions
 */

// Importing team-manager module and assigning it to teamManager variable
const teamManager = require("./team-manager");

// Console logging teams names and mascots return from findTeams
function displayTeamData() {
	console.log("-- DISPLAYING TEAMS --");
	for (let team of teamManager.findTeams()) {
		console.log(`Name: ${team.name}
Mascot: ${team.mascot}
Player Count: ${team.playerCount}
        `);
	}
}

// Console logging Championship game team names and mascots
function displayChampionshipGame() {
	console.log(`-- CHAMPIONSHIP GAME --
${teamManager.getGame()}`);
}

// Calling the functions to console log data
displayTeamData();
displayChampionshipGame();
