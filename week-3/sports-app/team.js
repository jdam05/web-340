/**
 * Title: team.js
 * Date: September 10, 2022
 * Author: Jamal Eddine Damir
 * Description: Class for team objects
 * Sources:
 * Source code from class GitHub Repository
 * W3Schools.com
 * Instructor provided assignment specific instructions
 */

// Class with constructor that creates and initializes team objects
class Team {
	constructor(name, mascot, playerCount) {
		this.name = name;
		this.mascot = mascot;
		this.playerCount = playerCount;
	}
}

// Exporting the Team class
module.exports = Team;
