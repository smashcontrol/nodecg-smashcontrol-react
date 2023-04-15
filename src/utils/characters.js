const ssb64 = ["Mario", "Luigi", "Yoshi", "Pikachu", "Fox", "Samus", "Falcon", "Jigglypuff", "Ness", "Kirby", "Link", "Donkey Kong", "[REMIX] Bowser",
            "[REMIX] Dr. Mario", "[REMIX] Sheik", "[REMIX] Young Link", "[REMIX] Ganondorf", "[REMIX] Dark Samus", "[REMIX] King Dedede", "[REMIX] Falco",
            "[REMIX] Wolf", "[REMIX] Mewtwo", "[REMIX] Lucas", "[REMIX] Marth", "[REMIX] Wario", "[REMIX] Sonic", "[REMIX] Conker", "[REMIX] Marina"];

const ssbm = ssb64.slice(0, 11).concat(["Peach", "Bowser", "Marth", "Zelda", "Sheik", "Ganondorf", "Falco", "Ice Climbers",
                                    "Mr. Game and Watch", "Dr. Mario", "Young Link", "Mewtwo", "Roy"]);

const ssbb = ssbm.slice(0, -4).concat(["Diddy Kong", "Meta Knight", "King Dedede", "Toon Link", "Zero Suit Samus", "Charizard",
                                                "Lucario", "Lucas", "Ike", "Wario", "Pit", "Olimar", "ROB", "Sonic", "Snake",
                                                "Wolf", "Pokemon Trainer", "Squirtle", "Ivysaur"]);
                                                
const ssbpm = ssbb.concat(["Mewtwo", "Roy"]);

const ssb4 = ssbb.slice(0, -5).concat(["Dr. Mario", "Mewtwo", "Roy", "Rosalina", "Bowser Jr.", "Roy Koopa", "Wendy", "Iggy", "Lemmy", "Morton", "Ludwig", "Larry", "Greninja",
                                    "Lucina", "Corrin Female", "Corrin Male", "Robin Female", "Robin Male", "Palutena", "Dark Pit", "Villager Male", "Villager Female",
                                    "Wii Fit Male", "Wii Fit Female", "Little Mac", "Duck Hunt", "Shulk", "Mega Man", "Pac Man", "Ryu", "Cloud", "Bayonetta", "Mii"])
                                    .filter(e => e !== "Ice Climbers");

const ssbult = ssb4.concat(["Ice Climbers", "Young Link", "Snake", "Wolf", "Pokemon Trainer Male", "Pokemon Trainer Female", "Squirtle",
                                        "Ivysaur", "Daisy", "Piranha Plant", "King K. Rool", "Pichu", "Ridley", "Dark Samus", "Incineroar",
                                        "Chrom", "Isabelle", "Inkling Boy", "Inkling Girl", "Ken", "Simon", "Richter", "Joker", "Mii Gunner",
                                        "Mii Swordfighter", "Mii Brawler", "Banjo & Kazooie", "Hero", "Terry", "Byleth Male", "Byleth Female", "Min Min", "Steve", 
                                        "Alex", "Zombie", "Enderman", "Sephiroth", "Pyra Mythra", "Kazuya", "Sora"]);
const roa = ["Absa", "Clairen", "Elliana", "Etalus", "Forsburn", "Hodan", "Kragg", "Maypul", "Mollo", "Olympia", "Orcane", "Ori", "Pomme", "Ranno", "Shovel Knight",
        "Sylvanos", "Wrastor", "Zetterburn"];	 

const characters = {
        "ssb64": ssb64.sort(),
        "ssbm": ssbm.sort(),
        "ssbb": ssbb.sort(),
        "ssbpm": ssbpm.sort(),
        "ssb4": ssb4.sort(),
        "ssbult": ssbult.sort(),
        "roa": roa.sort()
}

export { characters }
