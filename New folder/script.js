const classes = {
  paladin: {
    hp: 8,
    mp: 0,
    PhyAtk: 8,
    PhyDef: 5,
    MagAtk: 0,
    MagDef: 4,
    Agility: 10,
    Resist: 5,
  },
  wizard: {
    hp: 6,
    mp: 15,
    PhyAtk: 0,
    PhyDef: 0,
    MagAtk: 7,
    MagDef: 7,
    Agility: 0,
    Resist: 5,
  },
  cleric: {
    hp: 8,
    mp: 5,
    PhyAtk: 2,
    PhyDef: 2,
    MagAtk: 8,
    MagDef: 8,
    Agility: 2,
    Resist: 5,
  },
  barbarian: {
    hp: 12,
    mp: 0,
    PhyAtk: 13,
    PhyDef: 0,
    MagAtk: 0,
    MagDef: 0,
    Agility: 10,
    Resist: 5,
  },
  monk: {
    hp: 10,
    mp: 0,
    PhyAtk: 7,
    PhyDef: 8,
    MagAtk: 0,
    MagDef: 0,
    Agility: 10,
    Resist: 5,
  },
};

let maxLevel;
let currentLevel = 1;
let characterClass;

const levelInput = document.getElementById("level");
const continueButton = document.getElementById("continue");
const classContainer = document.getElementById("class-container");
const characterStats = document.getElementById("character-stats");
const classP = document.getElementById("class");
const hpP = document.getElementById("hp");
const mpP = document.getElementById("mp");
const PhyAtkP = document.getElementById("PhyAtk");
const PhyDefP = document.getElementById("PhyDef");
const MagAtkP = document.getElementById("MagAtk");
const MagDefP = document.getElementById("MagDef");
const AgilityP = document.getElementById("Agility");
const ResistP = document.getElementById("Resist");

levelInput.addEventListener("change", (event) => {
	maxLevel = event.target.value;
});

continueButton.addEventListener("click", () => {
	if (maxLevel) {
		for (let className in classes) {
			const classButton = document.createElement("button");
			classButton.innerText = className;
			classButton.setAttribute("class", "class-button");
			classButton.addEventListener("click", () => {
				if (currentLevel <= maxLevel) {
					characterClass = classes[className];
					currentLevel++;
					updateCharacterStats();
				}
			});
			classContainer.appendChild(classButton);
		}
	}
});

function updateCharacterStats() {
	if (currentLevel <= maxLevel) {
		classP.innerText = `Class: ${Object.keys(classes).find(key => classes[key] === characterClass)}`;
		hpP.innerText = `HP: ${characterClass.hp * currentLevel}`;
		mpP.innerText = `MP: ${characterClass.mp * currentLevel}`;
		PhyAtkP.innerText = `Physical Attack: ${characterClass.PhyAtk * currentLevel}`;
		PhyDefP.innerText = `Physical Defense: ${characterClass.PhyDef * currentLevel}`;
		MagAtkP.innerText = `Magical Attack: ${characterClass.MagAtk * currentLevel}`;
		MagDefP.innerText = `Magical Defense: ${characterClass.MagDef * currentLevel}`;
		AgilityP.innerText = `Agility: ${characterClass.Agility * currentLevel}`;
		ResistP.innerText = `Resistance: ${characterClass.Resist * currentLevel}`;
		setTimeout(() => {
			if (currentLevel === maxLevel) {
				alert("Character creation complete!");
			}
		}, 250);
	}
}