const ssb64_character_list = ["Mario", "Luigi", "Yoshi", "Pikachu", "Fox", "Samus", "Falcon", "Jigglypuff", "Ness", "Kirby", "Link", "Donkey Kong", "[REMIX] Bowser",
    "[REMIX] Dr. Mario", "[REMIX] Sheik", "[REMIX] Young Link", "[REMIX] Ganondorf", "[REMIX] Dark Samus", "[REMIX] King Dedede", "[REMIX] Falco",
    "[REMIX] Wolf", "[REMIX] Mewtwo", "[REMIX] Lucas", "[REMIX] Marth", "[REMIX] Wario", "[REMIX] Sonic", "[REMIX] Conker", "[REMIX] Marina",
    "[REMIX] Goemon", "[REMIX] Slippy", "[REMIX] Peppy"];

const ssbm_character_list = ssb64.slice(0, 11).concat(["Peach", "Bowser", "Marth", "Zelda", "Sheik", "Ganondorf", "Falco", "Ice Climbers",
    "Mr. Game and Watch", "Dr. Mario", "Young Link", "Mewtwo", "Roy"]);

const ssbb_character_list = ssbm.slice(0, -4).concat(["Diddy Kong", "Meta Knight", "King Dedede", "Toon Link", "Zero Suit Samus", "Charizard",
    "Lucario", "Lucas", "Ike", "Wario", "Pit", "Olimar", "ROB", "Sonic", "Snake",
    "Wolf", "Pokemon Trainer", "Squirtle", "Ivysaur"]);

const ssbpm_character_list = ssbb.concat(["Mewtwo", "Roy"]);

const ssb4_character_list = ssbb.slice(0, -5).concat(["Dr. Mario", "Mewtwo", "Roy", "Rosalina", "Bowser Jr.", "Roy Koopa", "Wendy", "Iggy", "Lemmy", "Morton", "Ludwig", "Larry", "Greninja",
    "Lucina", "Corrin Female", "Corrin Male", "Robin Female", "Robin Male", "Palutena", "Dark Pit", "Villager Male", "Villager Female",
    "Wii Fit Male", "Wii Fit Female", "Little Mac", "Duck Hunt", "Shulk", "Mega Man", "Pac Man", "Ryu", "Cloud", "Bayonetta", "Mii"])
    .filter(e => e !== "Ice Climbers");

const ssbult_character_list = ssb4.concat(["Ice Climbers", "Young Link", "Snake", "Wolf", "Pokemon Trainer Male", "Pokemon Trainer Female", "Squirtle",
    "Ivysaur", "Daisy", "Piranha Plant", "King K. Rool", "Pichu", "Ridley", "Dark Samus", "Incineroar",
    "Chrom", "Isabelle", "Inkling Boy", "Inkling Girl", "Ken", "Simon", "Richter", "Joker", "Mii Gunner",
    "Mii Swordfighter", "Mii Brawler", "Banjo & Kazooie", "Hero", "Terry", "Byleth Male", "Byleth Female", "Min Min", "Steve",
    "Alex", "Zombie", "Enderman", "Sephiroth", "Pyra Mythra", "Kazuya", "Sora"]);

const roa_character_list = ["Absa", "Clairen", "Elliana", "Etalus", "Forsburn", "Hodan", "Kragg", "Maypul", "Mollo", "Olympia", "Orcane", "Ori", "Pomme", "Ranno", "Shovel Knight",
    "Sylvanos", "Wrastor", "Zetterburn"];

const ssb64 = {
    "slug": "game/super-smash-bros",
    "characters": [
        {
            "id": 85,
            "name": "Mario"
        },
        {
            "id": 86,
            "name": "Donkey Kong"
        },
        {
            "id": 87,
            "name": "Link"
        },
        {
            "id": 88,
            "name": "Samus"
        },
        {
            "id": 89,
            "name": "Yoshi"
        },
        {
            "id": 90,
            "name": "Kirby"
        },
        {
            "id": 91,
            "name": "Fox"
        },
        {
            "id": 92,
            "name": "Pikachu"
        },
        {
            "id": 93,
            "name": "Luigi"
        },
        {
            "id": 94,
            "name": "Captain Falcon"
        },
        {
            "id": 95,
            "name": "Ness"
        },
        {
            "id": 96,
            "name": "Jigglypuff"
        },
        {
            "id": null,
            "name": "[REMIX] Dr. Mario"
        },
        {
            "id": null,
            "name": "[REMIX] Sheik"
        },
        {
            "id": null,
            "name": "[REMIX] Young Link"
        },
        {
            "id": null,
            "name": "[REMIX] Ganondorf"
        },
        {
            "id": null,
            "name": "[REMIX] Dark Samus"
        },
        {
            "id": null,
            "name": "[REMIX] King Dedede"
        },
        {
            "id": null,
            "name": "[REMIX] Falco"
        },
        {
            "id": null,
            "name": "[REMIX] Wolf"
        },
        {
            "id": null,
            "name": "[REMIX] Mewtwo"
        },
        {
            "id": null,
            "name": "[REMIX] Lucas"
        },
        {
            "id": null,
            "name": "[REMIX] Marth"
        },
        {
            "id": null,
            "name": "[REMIX] Wario"
        },
        {
            "id": null,
            "name": "[REMIX] Sonic"
        },
        {
            "id": null,
            "name": "[REMIX] Conker"
        },
        {
            "id": null,
            "name": "[REMIX] Marina"
        },
        {
            "id": null,
            "name": "[REMIX] Goemon"
        },
        {
            "id": null,
            "name": "[REMIX] Slippy"
        },
        {
            "id": null,
            "name": "[REMIX] Peppy"
        }
    ]
}

const ssbm = {
    "slug": "game/melee",
    "characters": [
        {
            "id": 1,
            "name": "Bowser"
        },
        {
            "id": 2,
            "name": "Captain Falcon"
        },
        {
            "id": 3,
            "name": "Donkey Kong"
        },
        {
            "id": 4,
            "name": "Dr. Mario"
        },
        {
            "id": 5,
            "name": "Falco"
        },
        {
            "id": 6,
            "name": "Fox"
        },
        {
            "id": 7,
            "name": "Ganondorf"
        },
        {
            "id": 8,
            "name": "Ice Climbers"
        },
        {
            "id": 9,
            "name": "Jigglypuff"
        },
        {
            "id": 10,
            "name": "Kirby"
        },
        {
            "id": 11,
            "name": "Link"
        },
        {
            "id": 12,
            "name": "Luigi"
        },
        {
            "id": 13,
            "name": "Mario"
        },
        {
            "id": 14,
            "name": "Marth"
        },
        {
            "id": 15,
            "name": "Mewtwo"
        },
        {
            "id": 16,
            "name": "Mr. Game & Watch"
        },
        {
            "id": 17,
            "name": "Ness"
        },
        {
            "id": 18,
            "name": "Peach"
        },
        {
            "id": 19,
            "name": "Pichu"
        },
        {
            "id": 20,
            "name": "Pikachu"
        },
        {
            "id": 21,
            "name": "Roy"
        },
        {
            "id": 22,
            "name": "Samus"
        },
        {
            "id": 23,
            "name": "Sheik"
        },
        {
            "id": 24,
            "name": "Yoshi"
        },
        {
            "id": 25,
            "name": "Young Link"
        },
        {
            "id": 26,
            "name": "Zelda"
        }
    ]
}

const ssbb = {
    "slug": "game/brawl",
    "characters": null
}

const ssbpm = {
    "slug": "game/pm",
    "characters": [
        {
            "id": 97,
            "name": "Mario"
        },
        {
            "id": 98,
            "name": "Luigi"
        },
        {
            "id": 99,
            "name": "Peach"
        },
        {
            "id": 100,
            "name": "Bowser"
        },
        {
            "id": 101,
            "name": "Yoshi"
        },
        {
            "id": 102,
            "name": "Donkey Kong"
        },
        {
            "id": 103,
            "name": "Diddy Kong"
        },
        {
            "id": 104,
            "name": "Link"
        },
        {
            "id": 105,
            "name": "Zelda"
        },
        {
            "id": 106,
            "name": "Sheik"
        },
        {
            "id": 107,
            "name": "Ganondorf"
        },
        {
            "id": 108,
            "name": "Toon Link"
        },
        {
            "id": 109,
            "name": "Samus"
        },
        {
            "id": 110,
            "name": "Zero Suit Samus"
        },
        {
            "id": 111,
            "name": "Kirby"
        },
        {
            "id": 112,
            "name": "Meta Knight"
        },
        {
            "id": 113,
            "name": "King Dedede"
        },
        {
            "id": 114,
            "name": "Fox"
        },
        {
            "id": 115,
            "name": "Falco"
        },
        {
            "id": 116,
            "name": "Wolf"
        },
        {
            "id": 117,
            "name": "Pikachu"
        },
        {
            "id": 118,
            "name": "Jigglypuff"
        },
        {
            "id": 119,
            "name": "Mewtwo"
        },
        {
            "id": 120,
            "name": "Squirtle"
        },
        {
            "id": 121,
            "name": "Ivysaur"
        },
        {
            "id": 122,
            "name": "Charizard"
        },
        {
            "id": 123,
            "name": "Lucario"
        },
        {
            "id": 124,
            "name": "Captain Falcon"
        },
        {
            "id": 125,
            "name": "Ness"
        },
        {
            "id": 126,
            "name": "Lucas"
        },
        {
            "id": 127,
            "name": "Ice Climbers"
        },
        {
            "id": 128,
            "name": "Marth"
        },
        {
            "id": 129,
            "name": "Roy"
        },
        {
            "id": 130,
            "name": "Ike"
        },
        {
            "id": 131,
            "name": "Mr. Game & Watch"
        },
        {
            "id": 132,
            "name": "Pit"
        },
        {
            "id": 133,
            "name": "Wario"
        },
        {
            "id": 134,
            "name": "Olimar"
        },
        {
            "id": 135,
            "name": "R.O.B."
        },
        {
            "id": 136,
            "name": "Snake"
        },
        {
            "id": 137,
            "name": "Sonic"
        },
        {
            "id": 626,
            "name": "Sheik/Zelda"
        },
        {
            "id": 1915,
            "name": "Knuckles"
        }
    ]
}

const ssb4 = {
    "slug": "game/super-smash-bros-for-wii-u",
    "characters": [
        {
            "id": 27,
            "name": "Mario"
        },
        {
            "id": 28,
            "name": "Luigi"
        },
        {
            "id": 29,
            "name": "Peach"
        },
        {
            "id": 30,
            "name": "Bowser"
        },
        {
            "id": 31,
            "name": "Dr. Mario"
        },
        {
            "id": 32,
            "name": "Yoshi"
        },
        {
            "id": 33,
            "name": "Donkey Kong"
        },
        {
            "id": 34,
            "name": "Diddy Kong"
        },
        {
            "id": 35,
            "name": "Link"
        },
        {
            "id": 36,
            "name": "Zelda"
        },
        {
            "id": 37,
            "name": "Sheik"
        },
        {
            "id": 38,
            "name": "Ganondorf"
        },
        {
            "id": 39,
            "name": "Toon Link"
        },
        {
            "id": 40,
            "name": "Samus"
        },
        {
            "id": 41,
            "name": "Zero Suit Samus"
        },
        {
            "id": 42,
            "name": "Kirby"
        },
        {
            "id": 43,
            "name": "Meta Knight"
        },
        {
            "id": 44,
            "name": "King Dedede"
        },
        {
            "id": 45,
            "name": "Fox"
        },
        {
            "id": 46,
            "name": "Falco"
        },
        {
            "id": 47,
            "name": "Pikachu"
        },
        {
            "id": 48,
            "name": "Jigglypuff"
        },
        {
            "id": 49,
            "name": "Mewtwo"
        },
        {
            "id": 50,
            "name": "Charizard"
        },
        {
            "id": 51,
            "name": "Lucario"
        },
        {
            "id": 52,
            "name": "Captain Falcon"
        },
        {
            "id": 53,
            "name": "Ness"
        },
        {
            "id": 54,
            "name": "Lucas"
        },
        {
            "id": 55,
            "name": "Marth"
        },
        {
            "id": 56,
            "name": "Roy"
        },
        {
            "id": 57,
            "name": "Ike"
        },
        {
            "id": 58,
            "name": "Mr. Game & Watch"
        },
        {
            "id": 59,
            "name": "Pit"
        },
        {
            "id": 60,
            "name": "Wario"
        },
        {
            "id": 61,
            "name": "Olimar"
        },
        {
            "id": 62,
            "name": "ROB"
        },
        {
            "id": 63,
            "name": "Sonic"
        },
        {
            "id": 64,
            "name": "Rosalina & Luma"
        },
        {
            "id": 65,
            "name": "Bowser Jr."
        },
        {
            "id": 65,
            "name": "Roy Koopa"
        },
        {
            "id": 65,
            "name": "Wendy"
        },
        {
            "id": 65,
            "name": "Iggy"
        },
        {
            "id": 65,
            "name": "Lemmy"
        },
        {
            "id": 65,
            "name": "Morton"
        },
        {
            "id": 65,
            "name": "Ludwig"
        },
        {
            "id": 65,
            "name": "Larry"
        },
        {
            "id": 66,
            "name": "Greninja"
        },
        {
            "id": 67,
            "name": "Robin Male"
        },
        {
            "id": 67,
            "name": "Robin Female"
        },
        {
            "id": 68,
            "name": "Lucina"
        },
        {
            "id": 69,
            "name": "Palutena"
        },
        {
            "id": 70,
            "name": "Dark Pit"
        },
        {
            "id": 71,
            "name": "Villager Male"
        },
        {
            "id": 71,
            "name": "Villager Female"
        },
        {
            "id": 72,
            "name": "Little Mac"
        },
        {
            "id": 73,
            "name": "Wii Fit Male"
        },
        {
            "id": 73,
            "name": "Wii Fit Female"
        },
        {
            "id": 74,
            "name": "Shulk"
        },
        {
            "id": 75,
            "name": "Duck Hunt"
        },
        {
            "id": 76,
            "name": "Mega Man"
        },
        {
            "id": 77,
            "name": "Pac Man"
        },
        {
            "id": 78,
            "name": "Ryu"
        },
        {
            "id": 79,
            "name": "Mii"
        },
        {
            "id": 80,
            "name": "Cloud"
        },
        {
            "id": 81,
            "name": "Corrin Male"
        },
        {
            "id": 81,
            "name": "Corrin Female"
        },
        {
            "id": 82,
            "name": "Bayonetta"
        }
    ]
}

const ssbult = {
    "slug": "game/ultimate",
    "characters": [
        {
            "id": 1271,
            "name": "Bayonetta"
        },
        {
            "id": 1272,
            "name": "Bowser Jr."
        },
        {
            "id": 1272,
            "name": "Roy Koopa"
        },
        {
            "id": 1272,
            "name": "Wendy"
        },
        {
            "id": 1272,
            "name": "Iggy"
        },
        {
            "id": 1272,
            "name": "Lemmy"
        },
        {
            "id": 1272,
            "name": "Morton"
        },
        {
            "id": 1272,
            "name": "Ludwig"
        },
        {
            "id": 1272,
            "name": "Larry"
        },
        {
            "id": 1273,
            "name": "Bowser"
        },
        {
            "id": 1274,
            "name": "Captain Falcon"
        },
        {
            "id": 1275,
            "name": "Cloud"
        },
        {
            "id": 1276,
            "name": "Corrin"
        },
        {
            "id": 1277,
            "name": "Daisy"
        },
        {
            "id": 1278,
            "name": "Dark Pit"
        },
        {
            "id": 1279,
            "name": "Diddy Kong"
        },
        {
            "id": 1280,
            "name": "Donkey Kong"
        },
        {
            "id": 1282,
            "name": "Dr. Mario"
        },
        {
            "id": 1283,
            "name": "Duck Hunt"
        },
        {
            "id": 1285,
            "name": "Falco"
        },
        {
            "id": 1286,
            "name": "Fox"
        },
        {
            "id": 1287,
            "name": "Ganondorf"
        },
        {
            "id": 1289,
            "name": "Greninja"
        },
        {
            "id": 1290,
            "name": "Ice Climbers"
        },
        {
            "id": 1291,
            "name": "Ike"
        },
        {
            "id": 1292,
            "name": "Inkling Boy"
        },
        {
            "id": 1292,
            "name": "Inkling Girl"
        },
        {
            "id": 1293,
            "name": "Jigglypuff"
        },
        {
            "id": 1294,
            "name": "King Dedede"
        },
        {
            "id": 1295,
            "name": "Kirby"
        },
        {
            "id": 1296,
            "name": "Link"
        },
        {
            "id": 1297,
            "name": "Little Mac"
        },
        {
            "id": 1298,
            "name": "Lucario"
        },
        {
            "id": 1299,
            "name": "Lucas"
        },
        {
            "id": 1300,
            "name": "Lucina"
        },
        {
            "id": 1301,
            "name": "Luigi"
        },
        {
            "id": 1302,
            "name": "Mario"
        },
        {
            "id": 1304,
            "name": "Marth"
        },
        {
            "id": 1305,
            "name": "Mega Man"
        },
        {
            "id": 1307,
            "name": "Meta Knight"
        },
        {
            "id": 1310,
            "name": "Mewtwo"
        },
        {
            "id": 1311,
            "name": "Mii Brawler"
        },
        {
            "id": 1313,
            "name": "Ness"
        },
        {
            "id": 1314,
            "name": "Olimar"
        },
        {
            "id": 1315,
            "name": "Pac Man"
        },
        {
            "id": 1316,
            "name": "Palutena"
        },
        {
            "id": 1317,
            "name": "Peach"
        },
        {
            "id": 1318,
            "name": "Pichu"
        },
        {
            "id": 1319,
            "name": "Pikachu"
        },
        {
            "id": 1320,
            "name": "Pit"
        },
        {
            "id": 1321,
            "name": "Pokemon Trainer Male"
        },
        {
            "id": 1321,
            "name": "Pokemon Trainer Female"
        },
        {
            "id": 1321,
            "name": "Squirtle"
        },
        {
            "id": 1321,
            "name": "Ivysaur"
        },
        {
            "id": 1321,
            "name": "Charizard"
        },
        {
            "id": 1322,
            "name": "Ridley"
        },
        {
            "id": 1323,
            "name": "ROB"
        },
        {
            "id": 1324,
            "name": "Robin Male"
        },
        {
            "id": 1324,
            "name": "Robin Female"
        },
        {
            "id": 1325,
            "name": "Rosalina"
        },
        {
            "id": 1326,
            "name": "Roy"
        },
        {
            "id": 1327,
            "name": "Ryu"
        },
        {
            "id": 1328,
            "name": "Samus"
        },
        {
            "id": 1329,
            "name": "Sheik"
        },
        {
            "id": 1330,
            "name": "Shulk"
        },
        {
            "id": 1331,
            "name": "Snake"
        },
        {
            "id": 1332,
            "name": "Sonic"
        },
        {
            "id": 1333,
            "name": "Toon Link"
        },
        {
            "id": 1334,
            "name": "Villager Male"
        },
        {
            "id": 1334,
            "name": "Villager Female"
        },
        {
            "id": 1335,
            "name": "Wario"
        },
        {
            "id": 1336,
            "name": "Wii Fit Trainer Male"
        },
        {
            "id": 1336,
            "name": "Wii Fit Trainer Female"
        },
        {
            "id": 1337,
            "name": "Wolf"
        },
        {
            "id": 1338,
            "name": "Yoshi"
        },
        {
            "id": 1339,
            "name": "Young Link"
        },
        {
            "id": 1340,
            "name": "Zelda"
        },
        {
            "id": 1341,
            "name": "Zero Suit Samus"
        },
        {
            "id": 1405,
            "name": "Mr. Game & Watch"
        },
        {
            "id": 1406,
            "name": "Incineroar"
        },
        {
            "id": 1407,
            "name": "King K. Rool"
        },
        {
            "id": 1408,
            "name": "Dark Samus"
        },
        {
            "id": 1409,
            "name": "Chrom"
        },
        {
            "id": 1410,
            "name": "Ken"
        },
        {
            "id": 1411,
            "name": "Simon"
        },
        {
            "id": 1412,
            "name": "Richter"
        },
        {
            "id": 1413,
            "name": "Isabelle"
        },
        {
            "id": 1414,
            "name": "Mii Swordfighter"
        },
        {
            "id": 1415,
            "name": "Mii Gunner"
        },
        {
            "id": 1441,
            "name": "Piranha Plant"
        },
        {
            "id": 1453,
            "name": "Joker"
        },
        {
            "id": 1526,
            "name": "Hero"
        },
        {
            "id": 1530,
            "name": "Banjo & Kazooie"
        },
        {
            "id": 1532,
            "name": "Terry"
        },
        {
            "id": 1539,
            "name": "Byleth Male"
        },
        {
            "id": 1539,
            "name": "Byleth Female"
        },
        {
            "id": 1747,
            "name": "Min Min"
        },
        {
            "id": 1766,
            "name": "Steve"
        },
        {
            "id": 1766,
            "name": "Alex"
        },
        {
            "id": 1766,
            "name": "Zombie"
        },
        {
            "id": 1766,
            "name": "Enderman"
        },
        {
            "id": 1777,
            "name": "Sephiroth"
        },
        {
            "id": 1795,
            "name": "Pyra Mythra"
        },
        {
            "id": 1846,
            "name": "Kazuya"
        },
        {
            "id": 1897,
            "name": "Sora"
        }
    ]
}

const roa = {
    "slug": "game/rivals-of-aether",
    "characters": [
        {
            "id": 184,
            "name": "Zetterburn"
        },
        {
            "id": 185,
            "name": "Orcane"
        },
        {
            "id": 186,
            "name": "Wrastor"
        },
        {
            "id": 187,
            "name": "Kragg"
        },
        {
            "id": 188,
            "name": "Forsburn"
        },
        {
            "id": 189,
            "name": "Maypul"
        },
        {
            "id": 190,
            "name": "Absa"
        },
        {
            "id": 191,
            "name": "Etalus"
        },
        {
            "id": 1117,
            "name": "Ori"
        },
        {
            "id": 1118,
            "name": "Ranno"
        },
        {
            "id": 1119,
            "name": "Clairen"
        },
        {
            "id": 1349,
            "name": "Sylvanos"
        },
        {
            "id": 1350,
            "name": "Elliana"
        },
        {
            "id": 1381,
            "name": "Shovel Knight"
        },
        {
            "id": 1920,
            "name": "Mollo"
        },
        {
            "id": 1921,
            "name": "Hodan"
        },
        {
            "id": 1922,
            "name": "Pomme"
        },
        {
            "id": 1923,
            "name": "Olympia"
        }
    ]
}

const characters = {
    "ssb64": ssb64_character_list.sort(),
    "ssbm": ssbm_character_list.sort(),
    "ssbb": ssbb_character_list.sort(),
    "ssbpm": ssbpm_character_list.sort(),
    "ssb4": ssb4_character_list.sort(),
    "ssbult": ssbult.sort(),
    "roa": roa_character_list.sort()
}
const backend_character_objects = {
    "ssb64": ssb64,
    "ssbm": ssbm,
    "ssbb": ssbb,
    "ssbpm": ssbpm,
    "ssb4": ssb4,
    "ssbult": ssbult,
    "roa": roa
}

export { characters, backend_character_objects }
