export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	aknosom: {
		num: 1,
		name: "Aknosom",
		types: ["Fire", "Flying"],
		baseStats: {hp: 100, atk: 62, def: 90, spa: 100, spd: 80, spe: 88},
		abilities: {0: "Flame Body", 1: "Dancer"},
		heightm: 1.4,
		weightkg: 39.2,
		color: "White",
		eggGroups: ["Flying"],
	},
	almudron: {
		num: 2,
		name: "Almudron",
		types: ["Ground"],
		baseStats: {hp: 112, atk: 108, def: 102, spa: 66, spd: 92, spe: 75},
		abilities: {0: "Mold Breaker", 1: "Earth Eater"},
		heightm: 3.0,
		weightkg: 52.5,
		color: "Brown",
		eggGroups: ["Water 1"],
	},
	magmadron: {
		num: 2,
		name: "Magmadron",
		types: ["Ground", "Fire"],
		baseStats: {hp: 112, atk: 108, def: 102, spa: 66, spd: 92, spe: 75},
		abilities: {0: "Flash Fire", 1: "Earth Eater"},
		heightm: 3.0,
		weightkg: 52.5,
		color: "Brown",
		eggGroups: ["Water 1"],
	},
	amatsu: {
		num: 3,
		name: "Amatsu",
		types: ["Dragon", "Flying"],
		baseStats: {hp: 102, atk: 95, def: 90, spa: 130, spd: 124, spe: 94},
		abilities: {0: "Regenerator", 1: "Delta Stream"},
		heightm: 8.5,
		weightkg: 392.0,
		color: "White",
		eggGroups: ["Undiscovered"],
	},
	anjanath: {
		num: 4,
		name: "Anjanath",
		types: ["Fire"],
		baseStats: {hp: 94, atk: 135, def: 80, spa: 50, spd: 74, spe: 93},
		abilities: {0: "Strong Jaw", 1: "Anger Point"},
		heightm: 2.5,
		weightkg: 155.5,
		color: "Pink",
		eggGroups: ["Monster", "Dragon"],
	},
	arzuros: {
		num: 5,
		name: "Arzuros",
		types: ["Normal"],
		baseStats: {hp: 81, atk: 112, def: 115, spa: 60, spd: 78, spe: 74},
		abilities: {0: "Hustle", 1: "Tough Claws", H: "Honey Gather"},
		heightm: 1.8,
		weightkg: 125.8,
		color: "Blue",
		eggGroups: ["Field"],
		otherFormes: ["Redhelm Arzuros"],
	},
 	redhelmarzuros: {
		num: 5,
		name: "Redhelm Arzuros",
		baseSpecies: "Arzuros",
		forme: "Mega",
		types: ["Normal"],
		baseStats: {hp: 80, atk: 112, def: 144, spa: 90, spd: 94, spe: 100},
		abilities: {0: "Tough Claws"},
		heightm: 1.9,
		weightkg: 178.4,
		color: "Blue",
		eggGroups: ["Field"],
		requiredItem: "Arzurite",
	},
	astalos: {
		num: 6,
		name: "Astalos",
		types: ["Bug", "Electric"],
		baseStats: {hp: 50, atk: 92, def: 84, spa: 112, spd: 112, spe: 125},
		abilities: {0: "Lightning Rod", 1: "Surge Surfer"},
		heightm: 1.9,
		weightkg: 45.5,
		color: "Green",
		eggGroups: ["Bug"],
		otherFormes: ["Boltreaver Astalos"],
	},
 	boltreaverastalos: {
		num: 6,
		name: "Boltreaver Astalos",
		baseSpecies: "Astalos",
		forme: "Mega",
		types: ["Bug", "Electric"],
		baseStats: {hp: 60, atk: 114, def: 84, spa: 145, spd: 122, spe: 150},
		abilities: {0: "Tinted Lens"},
		heightm: 1.9,
		weightkg: 45.5,
		color: "Green",
		eggGroups: ["Bug"],
		requiredItem: "Astalosite",
	},
	barioth: {
		num: 7,
		name: "Barioth",
		types: ["Ice"],
		baseStats: {hp: 103, atk: 110, def: 83, spa: 78, spd: 83, spe: 80},
		abilities: {0: "Justified", 1: "Slush Rush"},
		heightm: 1.9,
		weightkg: 152.2,
		color: "White",
		eggGroups: ["Field"],
	},
	barroth: {
		num: 8,
		name: "Barroth",
		types: ["Ground"],
		baseStats: {hp: 86, atk: 84, def: 90, spa: 72, spd: 110, spe: 70},
		abilities: {0: "Mega Launcher", 1: "Sand Stream"},
		heightm: 2.4,
		weightkg: 282.8,
		color: "Brown",
		eggGroups: ["Monster"],
	},
 	basarios: {
		num: 9,
		name: "Basarios",
		types: ["Rock", "Poison"],
		baseStats: {hp: 81, atk: 74, def: 155, spa: 82, spd: 55, spe: 53},
		abilities: {0: "Sturdy", 1: "Rough Skin"},
		heightm: 1.9,
		weightkg: 312.2,
		color: "White",
		eggGroups: ["Mineral"],
	},
	bazelgeuse: {
		num: 10,
		name: "Bazelgeuse",
		types: ["Fire", "Flying"],
		baseStats: {hp: 102, atk: 120, def: 86, spa: 86, spd: 102, spe: 104},
		abilities: {0: "Skill Link", 1: "Reckless"},
		heightm: 2.5,
		weightkg: 220.5,
		color: "Brown",
		eggGroups: ["Monster", "Dragon"],
		otherFormes: ["Seething Bazelgeuse"],
	},
 	seethingbazelgeuse: {
		num: 10,
		name: "Seething Bazelgeuse",
		baseSpecies: "Bazelgeuse",
		forme: "Mega",
		types: ["Fire", "Dark"],
		baseStats: {hp: 110, atk: 138, def: 86, spa: 129, spd: 117, spe: 120},
		abilities: {0: "Anger Shell"},
		heightm: 3.5,
		weightkg: 280.5,
		color: "Red",
		eggGroups: ["Monster", "Dragon"],
		requiredItem: "Bazelnite",
	},
	bishaten: {
		num: 11,
		name: "Bishaten",
		types: ["Fighting"],
		baseStats: {hp: 110, atk: 94, def: 78, spa: 94, spd: 80, spe: 94},
		abilities: {0: "Ripen", 1: "Magician"},
		heightm: 1.2,
		weightkg: 55.0,
		color: "White",
		eggGroups: ["Field", "Human-Like"],
	},
	orangaten: {
		num: 11,
		name: "Orangaten",
		types: ["Fighting", "Fire"],
		baseStats: {hp: 110, atk: 94, def: 78, spa: 94, spd: 80, spe: 94},
		abilities: {0: "Flame Body", 1: "Magician"},
		heightm: 1.2,
		weightkg: 55.0,
		color: "Orange",
		eggGroups: ["Field", "Human-Like"],
	},
	chameleos: {
		num: 12,
		name: "Chameleos",
		types: ["Dragon", "Poison"],
		baseStats: {hp: 78, atk: 128, def: 78, spa: 128, spd: 78, spe: 125},
		abilities: {0: "Neutralizing Gas", 1: "Corrosion"},
		heightm: 3.5,
		weightkg: 230.4,
		color: "Purple",
		eggGroups: ["Monster", "Dragon"],
	},
	daimyohermitaur: {
		num: 13,
		name: "Daimyo Hermitaur",
		types: ["Water"],
		baseStats: {hp: 78, atk: 98, def: 124, spa: 78, spd: 102, spe: 52},
		abilities: {0: "Shell Armor", 1: "Weak Armor"},
		heightm: 1.3,
		weightkg: 60.0,
		color: "Red",
		eggGroups: ["Water 3"],
	},
	diablos: {
		num: 14,
		name: "Diablos",
		types: ["Rock", "Ground"],
		baseStats: {hp: 112, atk: 122, def: 94, spa: 20, spd: 77, spe: 120},
		abilities: {0: "Rock Head", 1: "Reckless"},
		heightm: 3.0,
		weightkg: 220.2,
		color: "Brown",
		eggGroups: ["Mineral", "Monster"],
	},
	espinas: {
		num: 15,
		name: "Espinas",
		types: ["Grass", "Poison"],
		baseStats: {hp: 98, atk: 100, def: 105, spa: 98, spd: 108, spe: 91},
		abilities: {0: "Unaware", 1: "Toxic Debris"},
		heightm: 2.0,
		weightkg: 113.4,
		color: "Green",
		eggGroups: ["Dragon", "Grass"],
	},
	flamingespinas: {
		num: 15,
		name: "Flaming Espinas",
		types: ["Grass", "Fire"],
		baseStats: {hp: 98, atk: 100, def: 105, spa: 98, spd: 108, spe: 91},
		abilities: {0: "Flash Fire", 1: "Toxic Debris"},
		heightm: 2.0,
		weightkg: 130.4,
		color: "Green",
		eggGroups: ["Dragon", "Grass"],
	},
	gaismagorm: {
		num: 16,
		name: "Gaismagorm",
		types: ["Dragon", "Dark"],
		baseStats: {hp: 125, atk: 106, def: 117, spa: 103, spd: 114, spe: 60},
		abilities: {0: "Sheer Force", 1: "Regenerator"},
		heightm: 8.0,
		weightkg: 888.0,
		color: "Black",
		eggGroups: ["Undiscovered"],
	},
	garangolm: {
		num: 17,
		name: "Garangolm",
		types: ["Grass", "Ground"],
		baseStats: {hp: 113, atk: 115, def: 105, spa: 78, spd: 94, spe: 65},
		abilities: {0: "Rocky Payload", 1: "Gorilla Tactics"},
		heightm: 2.5,
		weightkg: 150.5,
		color: "Brown",
		eggGroups: ["Field", "Mineral"],
	},
	goremagala: {
		num: 18,
		name: "Gore Magala",
		types: ["Dark", "Dragon"],
		baseStats: {hp: 95, atk: 96, def: 108, spa: 128, spd: 50, spe: 98},
		abilities: {0: "Infiltrator", 1: "Overcoat"},
		heightm: 2.5,
		weightkg: 230.3,
		color: "Black",
		eggGroups: ["Undiscovered"],
	},
	chaoticgore: {
		num: 18,
		name: "Chaotic Gore",
		types: ["Dark", "Fairy"],
		baseStats: {hp: 95, atk: 95, def: 95, spa: 100, spd: 95, spe: 95},
		abilities: {0: "Contrary"},
		heightm: 2.5,
		weightkg: 230.3,
		color: "Black",
		eggGroups: ["Undiscovered"],
	},
	gossharag: {
		num: 19,
		name: "Goss Harag",
		types: ["Ice", "Fighting"],
		baseStats: {hp: 74, atk: 126, def: 104, spa: 60, spd: 102, spe: 66},
		abilities: {0: "Stakeout", 1: "Adaptability"},
		heightm: 2.0,
		weightkg: 240.5,
		color: "White",
		eggGroups: ["Field"],
	},
  	greatbaggi: {
		num: 20,
		name: "Great Baggi",
		types: ["Normal", "Psychic"],
		baseStats: {hp: 90, atk: 50, def: 107, spa: 90, spd: 123, spe: 65},
		abilities: {0: "Comatose", 1: "Vital Spirit"},
		heightm: 1.7,
		weightkg: 45.5,
		color: "Blue",
		eggGroups: ["Monster"],
	},
 	greatizuchi: {
		num: 21,
		name: "Great Izuchi",
		types: ["Normal", "Fighting"],
		baseStats: {hp: 90, atk: 123, def: 90, spa: 50, spd: 65, spe: 107},
		abilities: {0: "Hyper Cutter", 1: "Scrappy"},
		heightm: 1.7,
		weightkg: 45.5,
		color: "Orange",
		eggGroups: ["Monster"],
	},
 	greatwroggi: {
		num: 22,
		name: "Great Wroggi",
		types: ["Normal", "Poison"],
		baseStats: {hp: 90, atk: 50, def: 65, spa: 123, spd: 107, spe: 90},
		abilities: {0: "Merciless", 1: "Dry Skin"},
		heightm: 1.7,
		weightkg: 45.5,
		color: "Orange",
		eggGroups: ["Monster"],
	},
	ibushi: {
		num: 23,
		name: "Ibushi",
		types: ["Dragon", "Flying"],
		baseStats: {hp: 114, atk: 87, def: 112, spa: 102, spd: 122, spe: 88},
		gender: "M",
		abilities: {0: "Air Lock", 1: "Minus"},
		heightm: 5.5,
		weightkg: 132.3,
		color: "Blue",
		eggGroups: ["Dragon"],
	},
	jyuratodus: {
		num: 24,
		name: "Jyuratodus",
		types: ["Ground", "Water"],
		baseStats: {hp: 126, atk: 70, def: 60, spa: 114, spd: 85, spe: 75},
		abilities: {0: "Storm Drain", 1: "Hydration"},
		heightm: 1.1,
		weightkg: 33.3,
		color: "Brown",
		eggGroups: ["Water 2"],
	},
	khezu: {
		num: 25,
		name: "Khezu",
		types: ["Electric"],
		baseStats: {hp: 105, atk: 67, def: 72, spa: 113, spd: 109, spe: 60},
		abilities: {0: "Electric Surge", 1: "Static"},
		heightm: 1.7,
		weightkg: 50.5,
		color: "White",
		eggGroups: ["Monster"],
	},
 	kuluyaku: {
		num: 26,
		name: "Kulu-Ya-Ku",
		types: ["Normal", "Flying"],
		baseStats: {hp: 75, atk: 105, def: 117, spa: 44, spd: 70, spe: 104},
		abilities: {0: "Quick Feet", 1: "Unburden"},
		heightm: 1.4,
		weightkg: 30.0,
		color: "Yellow",
		eggGroups: ["Flying"],
	},
	kushaladaora: {
		num: 27,
		name: "Kushala Daora",
		types: ["Dragon", "Flying"],
		baseStats: {hp: 95, atk: 85, def: 105, spa: 127, spd: 130, spe: 73},
		abilities: {0: "Filter", 1: "Magic Bounce"},
		heightm: 3.2,
		weightkg: 200.4,
		color: "Gray",
		eggGroups: ["Dragon"],
	},
 	lagombi: {
		num: 28,
		name: "Lagombi",
		types: ["Normal", "Ice"],
		baseStats: {hp: 88, atk: 112, def: 83, spa: 46, spd: 76, spe: 115},
		abilities: {0: "Fur Coat", 1: "Slush Rush"},
		heightm: 1.3,
		weightkg: 53.4,
		color: "White",
		eggGroups: ["Field"],		
		otherFormes: ["Snowbaron Lagombi"],
	},
 	snowbaronlagombi: {
		num: 28,
		name: "Snowbaron Lagombi",
		baseSpecies: "Lagombi",
		forme: "Mega",
		types: ["Normal", "Ice"],
		baseStats: {hp: 88, atk: 148, def: 96, spa: 48, spd: 90, spe: 150},
		abilities: {0: "Skill Link"},
		heightm: 1.9,
		weightkg: 178.4,
		color: "White",
		eggGroups: ["Field"],
		requiredItem: "Lagombite",
	},
	lunagaron: {
		num: 29,
		name: "Lunagaron",
		types: ["Ice", "Dark"],
		baseStats: {hp: 88, atk: 125, def: 79, spa: 87, spd: 88, spe: 108},
		abilities: {0: "Hyper Cutter", 1: "Tough Claws"},
		heightm: 1.4,
		weightkg: 90.5,
		color: "Blue",
		eggGroups: ["Field"],
	},
	magnamalo: {
		num: 30,
		name: "Magnamalo",
		types: ["Dark", "Fire"],
		baseStats: {hp: 105, atk: 115, def: 78, spa: 121, spd: 75, spe: 96},
		abilities: {0: "Intimidate", 1: "Moxie"},
		heightm: 3.3,
		weightkg: 212.2,
		color: "Purple",
		eggGroups: ["Field", "Monster"],
		otherFormes: ["Scorned Magnamalo"],
	},
 	scornedmagnamalo: {
		num: 30,
		name: "Scorned Magnamalo",
		baseSpecies: "Magnamalo",
		forme: "Mega",
		types: ["Dark", "Ghost"],
		baseStats: {hp: 105, atk: 155, def: 80, spa: 134, spd: 110, spe: 106},
		abilities: {0: "Supreme Overlord"},
		heightm: 3.3,
		weightkg: 212.2,
		color: "Purple",
		eggGroups: ["Field", "Monster"],
		requiredItem: "Magnamalite",
	},
	malzeno: {
		num: 31,
		name: "Malzeno",
		types: ["Dark", "Fairy"],
		baseStats: {hp: 90, atk: 110, def: 80, spa: 130, spd: 80, spe: 120},
		abilities: {0: "Multiscale", 1: "Regenerator"},
		heightm: 2.5,
		weightkg: 85.0,
		color: "Pink",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Primordial Malzeno"],
	},
 	primordialmalzeno: {
		num: 31,
		name: "Primordial Malzeno",
		baseSpecies: "Malzeno",
		forme: "Mega",
		types: ["Dragon", "Fairy"],
		baseStats: {hp: 90, atk: 155, def: 80, spa: 155, spd: 80, spe: 150},
		abilities: {0: "Soul-Heart"},
		heightm: 2.5,
		weightkg: 85.0,
		color: "White",
		eggGroups: ["Undiscovered"],
		requiredItem: "Malzenite",
	},
	mizutsune: {
		num: 32,
		name: "Mizutsune",
		types: ["Fairy", "Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 88, atk: 72, def: 90, spa: 116, spd: 102, spe: 112},
		abilities: {0: "Water Bubble", 1: "Marvel Scale"},
		heightm: 3.3,
		weightkg: 70.3,
		color: "White",
		eggGroups: ["Water 1", "Dragon"],
		otherFormes: ["Soulseer Mizutsune"],
	},
 	soulseermizutsune: {
		num: 32,
		name: "Soulseer Mizutsune",
		baseSpecies: "Mizutsune",
		forme: "Mega",
		types: ["Fairy", "Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 88, atk: 121, def: 90, spa: 144, spd: 109, spe: 128},
		abilities: {0: "No Guard"},
		heightm: 3.3,
		weightkg: 70.3,
		color: "White",
		eggGroups: ["Water 1", "Dragon"],
		requiredItem: "Mizutsunite",
	},
	violetmizutsune: {
		num: 32,
		name: "Violet Mizutsune",
		types: ["Fairy", "Fire"],
		baseStats: {hp: 88, atk: 72, def: 90, spa: 116, spd: 102, spe: 112},
		abilities: {0: "Serene Grace", 1: "Marvel Scale"},
		heightm: 3.3,
		weightkg: 70.3,
		color: "Purple",
		eggGroups: ["Water 1"],
	},
	nargacuga: {
		num: 33,
		name: "Nargacuga",
		types: ["Steel", "Dark"],
		baseStats: {hp: 88, atk: 116, def: 102, spa: 72, spd: 90, spe: 112},
		abilities: {0: "Sharpness", 1: "Screen Cleaner"},
		heightm: 2.0,
		weightkg: 88.8,
		color: "Black",
		eggGroups: ["Field"],
	},
	lucentnargacuga: {
		num: 33,
		name: "Lucent Nargacuga",
		types: ["Steel", "Ghost"],
		baseStats: {hp: 88, atk: 116, def: 102, spa: 72, spd: 90, spe: 112},
		abilities: {0: "Clear Body", 1: "Screen Cleaner"},
		heightm: 2.0,
		weightkg: 88.8,
		color: "White",
		eggGroups: ["Field"],
	},
	narwa: {
		num: 34,
		name: "Narwa",
		types: ["Dragon", "Electric"],
		baseStats: {hp: 114, atk: 102, def: 87, spa: 122, spd: 88, spe: 112},
		gender: "F",
		abilities: {0: "Electric Surge", 1: "Plus"},
		heightm: 6.6,
		weightkg: 154.3,
		color: "Yellow",
		eggGroups: ["Dragon"],
		otherFormes: ["Allmother Narwa"],
	},
 	allmothernarwa: {
		num: 34,
		name: "Allmother Narwa",
		baseSpecies: "Narwa",
		forme: "Mega",
		types: ["Electric", "Flying"],
		baseStats: {hp: 110, atk: 108, def: 110, spa: 160, spd: 130, spe: 107},
		gender: "F",
		abilities: {0: "Electromorphosis"},
		heightm: 6.6,
		weightkg: 154.3,
		color: "Yellow",
		eggGroups: ["Dragon"],
		requiredItem: "Narwanite",
	},
	pukeipukei: {
		num: 35,
		name: "Pukei-Pukei",
		types: ["Poison"],
		baseStats: {hp: 68, atk: 74, def: 70, spa: 112, spd: 98, spe: 108},
		abilities: {0: "Liquid Ooze", 1: "Merciless"},
		heightm: 1.0,
		weightkg: 22.0,
		color: "Green",
		eggGroups: ["Field"],
	},
	rajang: {
		num: 36,
		name: "Rajang",
		types: ["Electric", "Fighting"],
		baseStats: {hp: 75, atk: 137, def: 91, spa: 102, spd: 91, spe: 100},
		abilities: {0: "Anger Point", 1: "Defiant"},
		heightm: 1.5,
		weightkg: 90.0,
		color: "Gray",
		eggGroups: ["Field"],
		otherFormes: ["Furious Rajang"],
	},
 	furiousrajang: {
		num: 36,
		name: "Furious Rajang",
		baseSpecies: "Rajang",
		forme: "Mega",
		types: ["Electric", "Fighting"],
		baseStats: {hp: 75, atk: 195, def: 95, spa: 126, spd: 95, spe: 110},
		abilities: {0: "Gorilla Tactics"},
		heightm: 1.5,
		weightkg: 113.0,
		color: "Brown",
		eggGroups: ["Field"],
		requiredItem: "Rajanite",
	},
	raknakadaki: {
		num: 37,
		name: "Rakna-Kadaki",
		types: ["Bug", "Ghost"],
		baseStats: {hp: 100, atk: 104, def: 112, spa: 104, spd: 78, spe: 60},
		abilities: {0: "Swarm", 1: "Mummy"},
		heightm: 2.5,
		weightkg: 188.8,
		color: "White",
		eggGroups: ["Bug"],
	},
 	pyrekadaki: {
		num: 37,
		name: "Pyre-Kadaki",
		types: ["Bug", "Fire"],
		baseStats: {hp: 100, atk: 104, def: 112, spa: 104, spd: 78, spe: 60},
		abilities: {0: "Blaze", 1: "Mummy"},
		heightm: 2.5,
		weightkg: 188.8,
		color: "White",
		eggGroups: ["Bug"],
	},
	rathalos: {
		num: 38,
		name: "Rathalos",
		types: ["Fire", "Flying"],
		gender: "M",
		baseStats: {hp: 70, atk: 120, def: 85, spa: 120, spd: 70, spe: 110},
		abilities: {0: "Poison Touch", 1: "Gale Wings"},
		heightm: 2.2,
		weightkg: 110.5,
		color: "Red",
		eggGroups: ["Flying", "Dragon"],
		otherFormes: ["Dreadking Rathalos"],
	},
 	dreadkingrathalos: {
		num: 38,
		name: "Dreadking Rathalos",
		baseSpecies: "Rathalos",
		forme: "Mega",
		types: ["Fire", "Flying"],
		gender: "M",
		baseStats: {hp: 70, atk: 145, def: 100, spa: 145, spd: 70, spe: 145},
		abilities: {0: "Desolate Land"},
		heightm: 2.2,
		weightkg: 110.5,
		color: "Red",
		eggGroups: ["Flying", "Dragon"],
		requiredItem: "Rathalosite",
	},
 	rathian: {
		num: 39,
		name: "Rathian",
		types: ["Poison", "Ground"],
		gender: "F",
		baseStats: {hp: 120, atk: 85, def: 115, spa: 70, spd: 115, spe: 70},
		abilities: {0: "Poison Point", 1: "Queenly Majesty"},
		heightm: 2.2,
		weightkg: 110.5,
		color: "Green",
		eggGroups: ["Flying", "Dragon"],
		otherFormes: ["Dreadqueen Rathian"],
	},
 	dreadqueenrathian: {
		num: 39,
		name: "Dreadqueen Rathian",
		baseSpecies: "Rathian",
		forme: "Mega",
		types: ["Poison", "Ground"],
		gender: "F",
		baseStats: {hp: 145, atk: 100, def: 145, spa: 70, spd: 145, spe: 70},
		abilities: {0: "Toxic Chain"},
		heightm: 2.2,
		weightkg: 110.5,
		color: "Green",
		eggGroups: ["Flying", "Dragon"],
		requiredItem: "Rathianite",
	},
 	royalludroth: {
		num: 40,
		name: "Royal Ludroth",
		types: ["Water"],
		baseStats: {hp: 113, atk: 107, def: 70, spa: 70, spd: 85, spe: 85},
		abilities: {0: "Water Absorb", 1: "Swift Swim"},
		heightm: 2.0,
		weightkg: 6.9,
		color: "Yellow",
		eggGroups: ["Water 1"],
	},
	seregios: {
		num: 41,
		name: "Seregios",
		types: ["Fighting", "Flying"],
		baseStats: {hp: 82, atk: 125, def: 99, spa: 60, spd: 92, spe: 112},
		abilities: {0: "Weak Armor", 1: "Well-Baked Body"},
		heightm: 2.0,
		weightkg: 160.4,
		color: "Yellow",
		eggGroups: ["Monster", "Dragon"],
	},
	shagarumagala: {
		num: 42,
		name: "Shagaru Magala",
		types: ["Dragon", "Fairy"],
		baseStats: {hp: 107, atk: 82, def: 92, spa: 132, spd: 112, spe: 95},
		abilities: {0: "Misty Surge", 1: "Overcoat"},
		heightm: 2.5,
		weightkg: 230.3,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
	},
	shogunceanataur: {
		num: 43,
		name: "Shogun Ceanataur",
		types: ["Water"],
		baseStats: {hp: 60, atk: 140, def: 90, spa: 70, spd: 60, spe: 100},
		abilities: {0: "Sharpness", 1: "Swift Swim"},
		heightm: 1.3,
		weightkg: 60.0,
		color: "Blue",
		eggGroups: ["Water 3"],
	},
	somnacanth: {
		num: 44,
		name: "Somnacanth",
		types: ["Ice", "Psychic"],
		gender: "F",
		baseStats: {hp: 70, atk: 60, def: 65, spa: 126, spd: 95, spe: 116},
		abilities: {0: "Forewarn", 1:"Synchronize"},
		heightm: 1.7,
		weightkg: 5.0,
		color: "Yellow",
		eggGroups: ["Water 2"],
	},
	auroracanth: {
		num: 44,
		name: "Auroracanth",
		types: ["Ice", "Ghost"],
		gender: "F",
		baseStats: {hp: 70, atk: 60, def: 65, spa: 126, spd: 95, spe: 116},
		abilities: {0: "Snow Cloak", 1: "Synchronize"},
		heightm: 1.7,
		weightkg: 5.0,
		color: "White",
		eggGroups: ["Water 2"],
	},
	teostra: {
		num: 45,
		name: "Teostra",
		types: ["Dragon", "Fire"],
		baseStats: {hp: 85, atk: 135, def: 120, spa: 105, spd: 74, spe: 96},
		abilities: {0: "Thermal Exchange", 1: "Reckless"},
		heightm: 2.5,
		weightkg: 113.0,
		color: "Red",
		eggGroups: ["Dragon", "Field"],
	},
 	tetranadon: {
		num: 46,
		name: "Tetranadon",
		types: ["Water", "Grass"],
		baseStats: {hp: 111, atk: 75, def: 85, spa: 100, spd: 75, spe: 54},
		abilities: {0: "Thick Fat", 1: "Drizzle"},
		heightm: 2,
		weightkg: 105.5,
		color: "Green",
		eggGroups: ["Water 1", "Grass"],
	},
	tigrex: {
		num: 47,
		name: "Tigrex",
		types: ["Normal"],
		baseStats: {hp: 94, atk: 114, def: 100, spa: 108, spd: 82, spe: 82},
		abilities: {0: "Punk Rock", 1: "Gluttony"},
		heightm: 2.3,
		weightkg: 130.5,
		color: "Yellow",
		eggGroups: ["Monster", "Dragon"],
	},
 	tobikadachi: {
		num: 48,
		name: "Tobi-Kadachi",
		types: ["Electric"],
		baseStats: {hp: 60, atk: 105, def: 70, spa: 108, spd: 72, spe: 115},
		abilities: {0: "Prankster", 1: "Static"},
		heightm: 1.4,
		weightkg: 42.4,
		color: "White",
		eggGroups: ["Field"],
	},
	valstrax: {
		num: 49,
		name: "Valstrax",
		types: ["Dragon", "Steel"],
		baseStats: {hp: 94, atk: 107, def: 101, spa: 112, spd: 81, spe: 140},
		abilities: {0: "Dragon's Maw", 1: "Steely Spirit"},
		heightm: 2.5,
		weightkg: 50.0,
		color: "Red",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Crimson Glow Valstrax"],
	},
 	crimsonglowvalstrax: {
		num: 49,
		name: "Crimson Glow Valstrax",
		baseSpecies: "Valstrax",
		forme: "Mega",
		types: ["Dragon"],
		baseStats: {hp: 96, atk: 122, def: 110, spa: 122, spd: 105, spe: 180},
		abilities: {0: "Prism Armor"},
		heightm: 2.2,
		weightkg: 47.0,
		color: "Red",
		eggGroups: ["Dragon"],
		requiredItem: "Valstraxite",
	},
	velkhana: {
		num: 50,
		name: "Velkhana",
		types: ["Dragon", "Ice"],
		baseStats: {hp: 76, atk: 102, def: 65, spa: 148, spd: 106, spe: 128},
		abilities: {0: "Ice Scales", 1: "Snow Warning"},
		heightm: 2.5,
		weightkg: 55.4,
		color: "White",
		eggGroups: ["Undiscovered"],
	},
 	volvidon: {
		num: 51,
		name: "Volvidon",
		types: ["Normal", "Ground"],
		baseStats: {hp: 60, atk: 72, def: 116, spa: 82, spd: 104, spe: 80},
		abilities: {0: "Stench", 1: "Neutralizing Gas"},
		heightm: 1.4,
		weightkg: 58.0,
		color: "Red",
		eggGroups: ["Field"],
	},
 	zinogre: {
		num: 52,
		name: "Zinogre",
		types: ["Normal", "Electric"],
		baseStats: {hp: 73, atk: 103, def: 82, spa: 109, spd: 92, spe: 111},
		abilities: {0: "Volt Absorb", 1: "Speed Boost"},
		heightm: 1.9,
		weightkg: 178.4,
		color: "Blue",
		eggGroups: ["Field"],
		otherFormes: ["Thunderlord Zinogre"],
	},
 	thunderlordzinogre: {
		num: 52,
		name: "Thunderlord Zinogre",
		baseSpecies: "Zinogre",
		forme: "Mega",
		types: ["Electric"],
		baseStats: {hp: 83, atk: 133, def: 82, spa: 144, spd: 92, spe: 136},
		abilities: {0: "Transistor"},
		heightm: 1.9,
		weightkg: 178.4,
		color: "Blue",
		eggGroups: ["Field"],
		requiredItem: "Zinogrite",
	},
}