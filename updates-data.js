// Lost City content roadmap data — generated from the OSRS/RS3 wiki release timeline export.
// Sources: Old School RuneScape Wiki + RuneScape Wiki (CC BY-NC-SA 3.0); build dates from
// https://runescape.wiki/w/Build_number . Window: builds 275-377 (2004-11-29 to 2006-05-02).
// Package boundaries match the published Lost City roadmap.
//
// HOW TO EDIT
//
// Pinning (the main tool — promote what matters instead of deleting what doesn't):
//   PINNED below         a flat list of entity names. A pinned item/spell/monster gets a gold
//                        chip and sorts to the front of its type group, everywhere it appears.
//   star: true           on an update -> gold star, sorts to the top of its package, and is
//                        what the "Starred only" button keeps.
//
// Annotating:
//   note: "free text"    on an update -> one line of your own commentary under the title.
//
// Pruning (still available, rarely needed now that pinning exists):
//   hidden: true                  on an update -> the whole update disappears
//   hide: ["Bronze axe", "Rock"]  on an update -> just those entity names disappear
//
// Entity groups are { type, names }. Delete names or whole groups freely.
// HIDDEN_TYPES are the types collapsed out of the default view (still toggleable in the UI).

export const CURRENT_BUILD = 274;

// Pinned entity names — highlighted gold and sorted first within their type group.
// Case-insensitive, matched on the exact page name. Add freely; this is the list to grow.
// Entity types that are pinned wholesale — every member is highlighted and
// floats to the front of its group, without being listed by name below.
// Quests and skills are the headline content of any build, so they always lead.
export const PINNED_TYPES = ["Quest", "Skill", "Miniquest", "Activity", "Spell", "Emote", "Prayer"];

export const PINNED = [
  "Mystic hat",
  "Mystic boots",
  "Mystic robe bottom",
  "Mystic robe top",
  "Mystic gloves",
  "Slayer's staff",
  "Dragon scimitar",
  "Dragon platelegs",
  "Dragon plateskirt",
  "Abyssal whip",
  "Granite maul",
  "Salve amulet",
  "Crystal bow",
  "Ancient staff",
  "Slayer staff",
  "Ectophial",
  "Berserker helm",
  "Fire cape",
  "Decorative armour (red platelegs)",
  "Decorative helm (red)",
  "Decorative shield (red)",
  "Decorative sword (red)",
  "Decorative armour (red platebody)",
  "Saradomin banner",
  "Zamorak banner",
  "Yo-yo",
  "Steel dragon",
  "Iron dragon",
  "Bronze dragon",
  "Fremennik Slayer Dungeon",
  "Slayer Tower",
  "Magic Guild Store (Mystic Robes)",
  "Experiment",
  "Ectofuntus",
  "Port Phasmatys",
  "Brimhaven Dungeon",
  "Miscellania",
  "Etceteria",
  "Ape atoll",
  "Crystal bow (historical)",
  "Crystal shield (historical)",
  "Steel key ring",
  "Guthix rest",
  "Team-1 cape",
  "H.A.M. Hideout",
  "Bearhead",
  "Lumbridge Swamp Caves",
  "Dondakan's mine",
  "Rubber chicken",
  "Brian's Archery Supplies.",
  "Tutab's Magical Market",
  "Magic Guild Store (Mystic Robes)",
  "Slayer Equipment (shop)",
  "Rune boots",
  "Port Phasmatys General Store",
  "Pollnivneach",
  "Willow blackjack",
  "Bandit Camp (Kharidian Desert)",
  "Ahrim's hood",
  "Ahrim's robeskirt",
  "Ahrim's robetop",
  "Ahrim's staff",
  "Bolt rack",
  "Dharok's greataxe",
  "Dharok's helm",
  "Dharok's platebody",
  "Dharok's platelegs",
  "Guthan's chainskirt",
  "Guthan's helm",
  "Guthan's platebody",
  "Guthan's warspear",
  "Karil's coif",
  "Karil's crossbow",
  "Karil's leatherskirt",
  "Karil's leathertop",
  "Torag's hammers",
  "Torag's helm",
  "Torag's platebody",
  "Torag's platelegs",
  "Verac's brassard",
  "Verac's flail",
  "Verac's helm",
  "Verac's plateskirt",
  "Ak-Haranu's Exotic Shop.",
  "Keldagrim",
  "Shirt (brown)",
  "Shirt (lilac)",
  "Shirt (yellow)",
  "Shorts (blue)",
  "Shorts (brown)",
  "Shorts (yellow)",
  "Skirt (blue)",
  "Skirt (brown)",
  "Skirt (lilac)",
  "Trousers (blue)",
  "Trousers (brown)",
  "Trousers (lilac)",
  "Woven top (blue)",
  "Woven top (brown)",
  "Woven top (yellow)",
  "Amulet of nature",
  "Antidote+",
  "Antidote++",
  "Weapon poison(+)",
  "Weapon poison(++)",
  "Slayer's respite",
  "Grimy snapdragon",
  "Grimy toadflax",
  "Sophanem",
  "Zogre",
  "Rune nails",
  "Rune brutal",
  "Dorgesh-Kaan mine",
  "Draynor Seed Market",
];

export const HIDDEN_TYPES = ["NPC", "Scenery", "Music track", "Organisation", "Currency"];


// Names whose wiki icon URL can't be guessed from the page name — no image is requested for these.
// Add any name you see rendering without an icon; seeds, clue scrolls and disambiguated
// names like "Bones (Rum Deal)" are already skipped by pattern in the page itself.
export const NO_ICON = [];

export const packages = [
  {
    build: 274, date: "2004-11-24", shipped: "2026-05-30", status: "done", uncertain: true,
    items: [
      { title: "Tai Bwo Wannai Trio" },
      { title: "Plague City Part 4 Released" },
      { title: "Skills, Duels and the Kalphite" },
      { title: "Eadgar's Ruse" },
      { title: "Morytania Expansion" },
      { title: "Mort'ton Shades and Mage Armour" },
      { title: "Treasure Trails and Changes" },
      { title: "The Fremennik Trials" },
      { title: "Horror From The Deep" },
      { title: "Burthorpe Games Room" },
    ],
  },
  {
    build: 289, from: 275, date: "2005-01-17", status: "next",
    items: [
      { title: "Throne Of Miscellania", build: 275, date: "2004-11-29", entities: [
        { type: "Quest", names: ["Throne of Miscellania"] },
        { type: "Location", names: ["Etceteria", "Etceteria bank", "Here be penguins", "Miscellania", "Miscellania Castle", "Miscellania farm", "Miscellania mine", "Unnamed island (penguins)", "Unnamed island (south of Miscellania)"] },
        { type: "Monster", names: ["Alrik", "Broddi", "Einar", "Halla (Miscellania)", "Ragnar (Miscellania)", "Ragnvald", "Rannveig", "Skraeling (Etceteria)", "Skraeling (Miscellania)", "Thora (Miscellania)", "Thorhild", "Valgerd", "Yrsa (Miscellania)"] },
        { type: "NPC", names: ["Advisor Ghrim", "Arnor", "Ashild", "Banker (Etceteria)", "Derrik", "Farmer (Miscellania)", "Fisherman Frodi", "Fishmonger", "Flower Girl", "Gardener Gunnhild", "Greengrocer", "Guard (Miscellania Castle)", "Haming", "Helga", "King Vargas", "Lumberjack Leif", "Matilda", "Miner Magnus", "Moldof", "Prince Brand", "Princess Astrid", "Queen Sigrid"] },
        { type: "Item", names: ["Awful anthem", "Ghrim's book", "Giant nib", "Giant pen", "Good anthem", "Iron sickle", "Treaty"] },
        { type: "Emote", names: ["Blow Kiss"] },
        { type: "Shop", names: ["Etceteria Fish", "Greengrocer of Miscellania", "Island Fishmonger", "Island Greengrocer"] },
        { type: "Scenery", names: ["Bookcase (Etceteria)", "Coal rocks (Miner Magnus)", "Harp (Miscellania)", "Maple tree (Lumberjack Leif)", "Throne Room Door", "Veg stall"] },
        { type: "Music track", names: ["Awful Anthem (music track)", "Etceteria (music track)", "Fruits de Mer", "Goblin Game", "Miscellania (music track)", "Quick Sail"] },
      ] },
      { title: "Other content — 2004-12-06", build: 277, date: "2004-12-06", entities: [
        { type: "Item", names: ["Monkey Madness helper"] },
      ] },
      { title: "Monkey Madness", build: 277, date: "2004-12-06", star: true, entities: [
        { type: "Quest", names: ["Monkey Madness I"] },
        { type: "Location", names: ["Ape Atoll", "Ape Atoll Dungeon", "Banana plantation (Ape Atoll)", "Crash Island", "Marim", "Temple of Marimbo", "Temple of Marimbo Dungeon", "Underground Military Glider Hangar"] },
        { type: "Monster", names: ["Bird", "Jungle Demon", "Jungle spider (Ape Atoll)", "Monkey Archer", "Monkey Guard", "Monkey Guard (ninja)", "Monkey Zombie", "Oipuis", "Ouhai", "Padulah", "Skeleton (Ape Atoll)", "Snake (Ape Atoll)", "Spider (Ape Atoll)", "Uodai", "Uyoro"] },
        { type: "NPC", names: ["Aberab", "Bearded gorilla", "Bonzara", "Bunkdo", "Bunkwicket", "Carado", "Daero", "Daga", "Denadu", "Dugopul", "Elder Guard", "G.L.O. Caranock", "Garkor", "Gorilla (NPC)", "Hafuba", "Hamab", "Ifaba", "Karam", "Kruk", "Large zombie monkey", "Lofu", "Lumdo", "Lumo", "Medium ninja monkey", "Monkey (Monkey Madness I)", "Monkey Child", "Monkey minder", "Muruwoi", "Salenab", "Sleeping Monkey", "Small ninja monkey", "Small zombie monkey", "Solihib", "The Monkey's Aunt", "The Monkey's Uncle", "Trefaji", "Tutab", "Uwogo", "Waydar", "Waymottin", "Weird snake.", "Zooknock"] },
        { type: "Item", names: ["10th squad sigil", "Banana stew", "Bearded gorilla bones", "Bearded gorilla greegree", "Bones (Ape Atoll)", "Enchanted bar", "Eye of gnome", "Eye of gnome (unobtainable item)", "Gnome royal seal", "Gorilla bones", "Gorilla greegree", "Karamjan monkey greegree", "Large zombie monkey bones", "M'amulet mould", "M'speak amulet", "M'speak amulet (unstrung)", "Medium ninja monkey bones", "Monkey bar", "Monkey dentures", "Monkey magic", "Monkey nuts", "Monkey skull", "Monkey talisman", "Monkey wrench", "Narnode's orders", "Ninja monkey greegree (medium)", "Ninja monkey greegree (small)", "Sliding button", "Small ninja monkey bones", "Small zombie monkey bones", "Spare controls", "Zombie monkey greegree (big)", "Zombie monkey greegree (small)"] },
        { type: "Shop", names: ["Daga's Scimitar Smithy", "Hamab's Crafting Emporium", "Ifaba's General Store", "Solihib's Food Stall", "Tutab's Magical Market"] },
        { type: "Scenery", names: ["A rock", "Awowogei", "Bamboo Bed", "Bamboo Bookcase", "Bamboo Desk", "Bamboo Gate", "Bamboo Stool", "Banana tree (Ape Atoll)", "Bush (scenery)", "Crafting stall", "Crate (Spare controls)", "Crate (Temple of Marimbo Dungeon entrance)", "End of bridge", "Exit Sign", "Food Stall", "General Stall", "Gorilla Statue", "Gorilla Statue (Monkey Madness I)", "Jail Door (Ape Atoll)", "Jungle Bush (Ape Atoll)", "Jungle Grass", "Jungle tree", "Jungle tree (scenery)", "Jungle tree stump", "Long grass", "Magic Stall", "Monkey Statue", "Reinitialisation Panel", "Sacrificial Pyre", "Scimitar Stall", "Slight indentations", "Teleportation Device", "Trapdoor (Temple of Marimbo)", "Tropical Leaves", "Wall of flame", "Watchtower Middle"] },
        { type: "Music track", names: ["Anywhere", "Find My Way", "Island Life", "Marooned", "Meanwhile. (Monkey Madness)", "Mission Over (Monkey Madness)", "Monkey Madness (music track)", "Narnode's Theme", "New Chapter (Monkey Madness)", "Showdown", "Suspicious", "Technology", "Temple (music track)"] },
      ] },
      { title: "Various Small Changes.", build: 276, date: "2004-12-06" },
      { title: "More Small Changes", build: 278, date: "2004-12-07" },
      { title: "Castle Wars", build: 279, date: "2004-12-13", star: true, entities: [
        { type: "Activity", names: ["Castle Wars"] },
        { type: "NPC", names: ["Imp (Castle Wars)", "Lanthus", "Rabbit (Castle Wars)", "Sheep (Castle Wars)"] },
        { type: "Item", names: ["Bandages", "Barricade", "Castle wars ticket", "Castlewars manual", "Climbing rope", "Decorative armour (red platebody)", "Decorative armour (red platelegs)", "Decorative helm (red)", "Decorative shield (red)", "Decorative sword (red)", "Explosive potion", "Rock (Castle Wars)", "Saradomin banner", "Saradomin cloak (Castle Wars)", "Toolkit (Castle Wars)", "Zamorak banner", "Zamorak cloak (Castle Wars)"] },
        { type: "Shop", names: ["Castle Wars Ticket Exchange"] },
        { type: "Scenery", names: ["Catapult (Castle Wars)", "Door (Castle Wars)", "Guthix Portal", "Large door (Castle Wars)", "Portal (Castle Wars)", "Saradomin Portal", "Scoreboard (Castle Wars)", "Zamorak Portal"] },
        { type: "Music track", names: ["Castle Wars (music track)", "Draw. (Castle Wars)", "Melodrama", "Ready for Battle", "Slaughtered... (Castle Wars)", "Victory! (Castle Wars)"] },
      ] },
      { title: "Changes to Castle Wars", build: 280, date: "2004-12-15" },
      { title: "Santa, Flax and Castlewars", build: 282, date: "2004-12-21", entities: [
        { type: "NPC", names: ["Santa (historical)"] },
        { type: "Item", names: ["Yo-yo"] },
      ] },
      { title: "The Haunted Mine", build: 282, date: "2004-12-21", entities: [
        { type: "Quest", names: ["Haunted Mine"] },
        { type: "Location", names: ["Abandoned Mine"] },
        { type: "Monster", names: ["Possessed pickaxe", "Skeletal miner", "Treus Dayth"] },
        { type: "NPC", names: ["Corpse", "Haze", "Innocent-looking key", "Loading crane", "Mischievous ghost", "Zealot"] },
        { type: "Item", names: ["Crystal-mine key", "Damp tinderbox", "Glowing fungus", "Salve amulet", "Salve shard", "Zealot's key"] },
        { type: "Scenery", names: ["Ceiling support", "Clay ore vein", "Coal ore vein", "Copper ore vein", "Crystal outcrop", "Depleted vein (Abandoned Mine)", "Glowing fungus (Abandoned Mine)", "Iron ore vein", "Mine cart (Abandoned Mine)", "Mithril ore vein", "Points settings", "Tin ore vein", "Water Valve"] },
        { type: "Music track", names: ["Chamber", "Deep Down", "Haunted Mine (music track)", "Spooky 2"] },
      ] },
      { title: "Troll Romance, Banks and Chat", build: 285, date: "2005-01-05", entities: [
        { type: "Quest", names: ["Troll Romance"] },
        { type: "Location", names: ["Trollweiss Dungeon", "Trollweiss Mountain"] },
        { type: "Monster", names: ["Arrg", "Ice troll", "Ice wolf"] },
        { type: "NPC", names: ["Aga", "Ug"] },
        { type: "Item", names: ["Sled", "Trollweiss", "Wax"] },
        { type: "Scenery", names: ["Cave entrance (Trollweiss Dungeon)", "Ice covered boulder", "Rare Flowers", "Slope", "Tree (snow)"] },
        { type: "Music track", names: ["Hells Bells", "Romancing the Crone", "Scape Santa", "Stranded"] },
      ] },
      { title: "In Search Of The Myreque", build: 288, date: "2005-01-10", entities: [
        { type: "Quest", names: ["In Search of the Myreque"] },
        { type: "Location", names: ["Myreque Hideout", "The Hollows"] },
        { type: "Monster", names: ["Skeleton Hellhound"] },
        { type: "NPC", names: ["Curpile Fyod", "Cyreg Paddlehorn", "Harold Evans", "Ivan Strom", "Mist", "Polmafi Ferdygris", "Radigad Ponfit", "Sani Piliu", "Stranger (In Search of the Myreque)", "Vanstrom Klause", "Veliaf Hurtz"] },
        { type: "Scenery", names: ["Cave entrance (The Hollows)", "Swamp Boaty", "Trapdoor (Canifis)", "Tree (The Hollows)", "Wall (The Hollows)"] },
        { type: "Music track", names: ["Stillness"] },
      ] },
      { title: "Trawler Game Update", build: 288, date: "2005-01-10" },
      { title: "Karamja Dungeon", build: 289, entities: [
        { type: "Location", names: ["Brimhaven Dungeon"] },
        { type: "Monster", names: ["Baby red dragon", "Bronze dragon", "Iron dragon", "Steel dragon", "Wild dog"] },
        { type: "NPC", names: ["Saniboch"] },
        { type: "Item", names: ["Dragon platelegs"] },
        { type: "Scenery", names: ["Dungeon entrance (Brimhaven Dungeon)", "Fire (scenery)", "Floor spikes (Ape Atoll)", "Log balance (Brimhaven Dungeon)", "Pile of bricks", "Pipe (Brimhaven Dungeon entrance)", "Pipe (Brimhaven Dungeon)", "Rope bridge (The Hollows)", "Stepping stone (western Brimhaven Dungeon)", "Vines (Brimhaven Dungeon)"] },
        { type: "Music track", names: ["7th Realm", "Karamja Jam", "Pathways"] },
      ] },
    ],
  },
  {
    build: 291, from: 290, date: "2005-01-31", status: "planned", uncertain: true,
    items: [
      { title: "Slayer Skill", build: 290, date: "2005-01-26", star: true, entities: [
        { type: "Skill", names: ["Slayer"] },
        { type: "Location", names: ["Fremennik Slayer Dungeon", "Slayer Tower"] },
        { type: "Monster", names: ["Aberrant spectre", "Abyssal demon", "Banshee", "Basilisk", "Basilisk (unused)", "Bloodveld", "Cave crawler", "Cockatrice", "Cockatrice (unused)", "Crawling Hand", "Death spawn", "Gargoyle", "Infernal Mage", "Jelly", "Kurask", "Nechryael", "Pyrefiend", "Rockslug", "Smokedevil", "Turoth"] },
        { type: "NPC", names: ["Chaeldar", "Duradel", "Mazchna", "Turael", "Turoth (unused)", "Wizard Sinina"] },
        { type: "Item", names: ["Adamant boots", "Bag of salt", "Black boots", "Broad arrows", "Bronze boots", "Earmuffs", "Enchanted gem", "Facemask", "Iron boots", "Leaf-bladed spear", "Leaf-bladed spear (unobtainable item)", "Mirror shield", "Mithril boots", "Mystic boots", "Mystic boots (dark)", "Mystic boots (light)", "Mystic gloves", "Mystic gloves (dark)", "Mystic gloves (light)", "Mystic hat", "Mystic hat (dark)", "Mystic hat (light)", "Mystic robe bottom", "Mystic robe bottom (dark)", "Mystic robe bottom (light)", "Mystic robe top", "Mystic robe top (dark)", "Mystic robe top (light)", "Nose peg", "Rock hammer", "Rune boots", "Slayer's staff", "Steel boots"] },
        { type: "Spell", names: ["Magic Dart"] },
        { type: "Shop", names: ["Magic Guild Store (Mystic Robes)", "Slayer Equipment (shop)"] },
        { type: "Scenery", names: ["Chest (Slayer Tower)", "Heap of bricks", "Statue (Kurask)"] },
        { type: "Music track", names: ["Masquerade", "Slayer Level Up!", "Slayer Level Up! (Unlocks)", "The Slayer", "The Terrible Tower"] },
      ] },
      { title: "Creature of Fenkenstrain", build: 291, entities: [
        { type: "Quest", names: ["Creature of Fenkenstrain"] },
        { type: "Location", names: ["Experiment cave", "Fenkenstrain's Castle", "Mausoleum", "Werewolf Agility Course", "Werewolf Skullball"] },
        { type: "Monster", names: ["Experiment"] },
        { type: "NPC", names: ["Agility Boss", "Agility Trainer", "Dr Fenkenstrain", "Gardener Ghost", "Lord Rologarth", "Skullball", "Skullball Boss", "Skullball Trainer", "Werewolf (Werewolf Agility Course)"] },
        { type: "Item", names: ["Arms", "Cavern key", "Conductor", "Conductor mould", "Decapitated head", "Extended brush", "Garden brush", "Garden cane", "Helper (Werewolf Agility Arena)", "Journal (Creature of Fenkenstrain)", "Legs", "Letter (Creature of Fenkenstrain)", "Marble amulet", "Mouth grip", "Obsidian amulet", "Pickled brain", "Ring of charos", "Shed key", "Star amulet", "Stick (item)", "Torso", "Tower key"] },
        { type: "Scenery", names: ["Bookcase (Fenkenstrain's Castle)", "Bridge (Mausoleum)", "Chest (Creature of Fenkenstrain)", "Cupboard (Creature of Fenkenstrain)", "Fireplace (Fenkenstrain's Castle)", "Fireplace surround", "Grave (Creature of Fenkenstrain)", "Grave (Haunted Woods)", "Hurdle", "Lightning conductor", "Memorial (Experiment cave)", "Pile of canes", "Pipe (Werewolf Agility Course)", "Signpost (Creature of Fenkenstrain)", "Skull slope (Werewolf Agility Course)", "Stepping stone (Werewolf Agility Course)", "Trapdoor (Werewolf Agility Course)", "Zip line (Werewolf Agility Course)"] },
        { type: "Music track", names: ["Barking Mad", "Body Parts", "Fenkenstrain's Refrain", "Skullball Goal!"] },
      ] },
    ],
  },
  {
    build: 295, from: 292, date: "2005-02-15", status: "planned", uncertain: true,
    items: [
      { title: "Roving Elves", build: 292, date: "2005-02-07", entities: [
        { type: "Quest", names: ["Roving Elves"] },
        { type: "Monster", names: ["Moss Guardian"] },
        { type: "NPC", names: ["Eluned", "Islwyn"] },
        { type: "Item", names: ["Cadarn lineage", "Consecration seed", "Crystal bow (historical)", "Crystal shield (historical)", "Crystal weapon seed", "New crystal bow (unobtainable item)", "New crystal shield (unobtainable item)"] },
        { type: "Scenery", names: ["Crystal growth"] },
      ] },
      { title: "Ghosts Ahoy and Slayer Update", build: 295, star: true, entities: [
        { type: "Quest", names: ["Ghosts Ahoy"] },
        { type: "Location", names: ["Dragontooth Island", "Ectofuntus", "Port Phasmatys", "Port Phasmatys bank"] },
        { type: "Monster", names: ["Giant lobster (Ghosts Ahoy)", "Tortured soul", "Undead chicken", "Undead cow"] },
        { type: "NPC", names: ["Ak-Haranu", "Ghost (?)", "Ghost banker", "Ghost captain", "Ghost captain (ghostship)", "Ghost disciple", "Ghost farmer", "Ghost guard", "Ghost innkeeper", "Ghost sailor", "Ghost shopkeeper", "Ghost villager", "Goopy snake", "Gravingas", "Necrovarus", "Old crone", "Old man", "Robin", "Velorina"] },
        { type: "Item", names: ["Abyssal whip", "Baby dragon bonemeal", "Bat bonemeal", "Bearded gorilla bonemeal", "Bedsheet", "Big bonemeal", "Bone key (Ghosts Ahoy)", "Bonemeal (bones)", "Book of Haricanto", "Bucket of slime", "Burnt bonemeal", "Burnt jogre bonemeal", "Chest key (Ghosts Ahoy)", "Cooked chicken (undead)", "Cooked meat (undead)", "Cup of tea (Ghosts Ahoy)", "Cup of tea (milky nettle)", "Cup of tea (nettle)", "Dragon bonemeal", "Ecto-token", "Ectophial", "Gorilla bonemeal", "Granite maul", "Jogre bonemeal", "Large zombie monkey bonemeal", "Map scrap", "Medium ninja bonemeal", "Model ship", "Monkey bonemeal", "Mystical robes", "Nettle tea", "Nettle tea (milky)", "Nettle-water", "Nettles", "Petition form", "Porcelain cup", "Puddle of slime", "Raw beef (undead)", "Raw chicken (undead)", "Signed oak bow", "Skeleton bonemeal", "Small ninja bonemeal", "Small zombie monkey bonemeal", "Translation manual", "Treasure map", "Wolf bonemeal"] },
        { type: "Shop", names: ["Port Phasmatys General Store", "The Green Ghost"] },
        { type: "Scenery", names: ["Bone grinder (historical)", "Broken Door", "Captain's Table", "Chair (Port Phasmatys)", "Coffin (Necrovarus)", "Ectofuntus (small)", "Energy Barrier (Port Phasmatys)", "Jewellery stall (Zanaris)", "Market stall (Port Phasmatys)", "Mast (Ghosts Ahoy)", "Pirate Captain", "Pool of Slime", "Rock (wrecked ghost ship)", "Statue of Saradomin (Dragontooth Island)", "Trapdoor (Ectofuntus)", "Wheelbarrow"] },
        { type: "Music track", names: ["Dragontooth Island (music track)", "Phasmatys", "Shipwrecked", "The Other Side"] },
      ] },
    ],
  },
  {
    build: 299, from: 296, date: "2005-03-01", status: "planned",
    items: [
      { title: "Wilderness Capes, and Changes", build: 296, date: "2005-02-22", entities: [
        { type: "Location", names: ["H.A.M. Hideout"] },
        { type: "Monster", names: ["Cow calf", "H.A.M. Guard"] },
        { type: "NPC", names: ["Crow", "Darren", "Edmond (merchant)", "Edward", "H.A.M. Deacon", "H.A.M. Member", "H.A.M. Member (seated)", "Ian", "Ilfeen", "Jimmy the Chisel", "Johanhus Ulsbrecht", "Larry (merchant)", "Neil", "Richard (merchant)", "Sam (merchant)", "Simon", "William"] },
        { type: "Item", names: ["Crystal singing for beginners", "Ham boots", "Ham cloak", "Ham gloves", "Ham hood", "Ham logo", "Ham robe", "Ham shirt", "Team-1 cape", "Team-10 cape", "Team-11 cape", "Team-12 cape", "Team-13 cape", "Team-14 cape", "Team-15 cape", "Team-16 cape", "Team-17 cape", "Team-18 cape", "Team-19 cape", "Team-2 cape", "Team-20 cape", "Team-21 cape", "Team-22 cape", "Team-23 cape", "Team-24 cape", "Team-25 cape", "Team-26 cape", "Team-27 cape", "Team-28 cape", "Team-29 cape", "Team-3 cape", "Team-30 cape", "Team-31 cape", "Team-32 cape", "Team-33 cape", "Team-34 cape", "Team-35 cape", "Team-36 cape", "Team-37 cape", "Team-38 cape", "Team-39 cape", "Team-4 cape", "Team-40 cape", "Team-41 cape", "Team-42 cape", "Team-43 cape", "Team-44 cape", "Team-45 cape", "Team-46 cape", "Team-47 cape", "Team-48 cape", "Team-49 cape", "Team-5 cape", "Team-50 cape", "Team-6 cape", "Team-7 cape", "Team-8 cape", "Team-9 cape"] },
        { type: "Shop", names: ["Darren's Wilderness Cape Shop.", "Edmond's Wilderness Cape Shop.", "Edward's Wilderness Cape Shop.", "Ian's Wilderness Cape Shop.", "Larry's Wilderness Cape Shop.", "Neil's Wilderness Cape Shop.", "Richard's Wilderness Cape Shop.", "Sam's Wilderness Cape Shop.", "Simon's Wilderness Cape Shop.", "William's Wilderness Cape Shop."] },
        { type: "Organisation", names: ["Humans Against Monsters"] },
        { type: "Scenery", names: ["Aggie's Cauldron", "Big vase", "Chair (Lumbridge Castle)", "Church pew", "Dock leaf plant", "Door (H.A.M. Hideout Jail)", "Drawers (Lumbridge Castle)", "Dry stone wall", "Hanging tapestry", "Ned's Table", "Rat-hole", "Standing torch (H.A.M. Hideout)", "Statue (bust)", "Toy Stall", "Trapdoor (H.A.M. Hideout)", "Water barrel", "Water wheel (Lumbridge)"] },
        { type: "Music track", names: ["Monster Melee"] },
      ] },
      { title: "Wilderness Capes Change", build: 297, date: "2005-02-23" },
      { title: "One Small Favour", build: 298, date: "2005-02-28", star: true, entities: [
        { type: "Quest", names: ["One Small Favour"] },
        { type: "Monster", names: ["Dwarf gang member", "Slagilith"] },
        { type: "NPC", names: ["Gnormadium Avlafrim", "Hammerspike Stoutbeard", "Petra Fiyed", "Phantuwti Fanstuwi Farsight", "Seth Groats", "Tassie Slipcast", "Tindel Marchant"] },
        { type: "Item", names: ["Airtight pot", "Animate rock scroll", "Antique lamp (One Small Favour)", "Blunt axe", "Bowl of hot water", "Breathing salts", "Broken vane part", "Chicken cage", "Comfy mattress", "Cup of hot water", "Cup of water", "Directionals", "Guthix rest", "Herb tea mix", "Herbal tincture", "Iron oxide", "Ornament", "Pot lid", "Red mahogany log", "Ruined herb tea", "Sharpened axe", "Steel key ring", "Stodgy mattress", "Unfired pot lid", "Weather report", "Weathervane pillar"] },
        { type: "Scenery", names: ["Antiques Shop Stall", "Flashing landing light", "Gnome landing light", "Sculpture", "Seers weathervane", "Swordshop Sign", "Weather vane"] },
        { type: "Music track", names: ["Petra Freed (One Small Favour)"] },
      ] },
      { title: "Bug in Guthix Rest Tea", build: 299 },
    ],
  },
  {
    build: 304, from: 300, date: "2005-03-21", status: "planned", uncertain: true,
    items: [
      { title: "Mountain Daughter and Changes", build: 300, date: "2005-03-07", entities: [
        { type: "Quest", names: ["Mountain Daughter"] },
        { type: "Location", names: ["Kendal's Lair", "Mountain Camp", "Shining pool"] },
        { type: "Monster", names: ["Camp dweller", "The Kendal"] },
        { type: "NPC", names: ["Asleif Hamalsdotter", "Bald Headed Eagle", "Guard (Mountain Camp)", "Hamal the Chieftain", "Jokul", "Mountain Goat (Mountain Camp)", "Ragnar", "Svidi"] },
        { type: "Item", names: ["Asleif's necklace", "Bearhead", "Broken pole", "Castlewars cloak (Saradomin)", "Castlewars cloak (Zamorak)", "Castlewars hood (Saradomin)", "Castlewars hood (Zamorak)", "Corpse of woman", "Decorative armour (gold platebody)", "Decorative armour (gold platelegs)", "Decorative armour (white platebody)", "Decorative armour (white platelegs)", "Decorative helm (gold)", "Decorative helm (white)", "Decorative shield (gold)", "Decorative shield (white)", "Decorative sword (gold)", "Decorative sword (white)", "Half a rock", "Mud", "Muddy rock", "Pole", "Pole (animation item)", "Pole (unobtainable item)", "Rope (animation item)", "Safety guarantee", "White pearl", "White pearl seed"] },
        { type: "Organisation", names: ["Mountain Tribe"] },
        { type: "Scenery", names: ["Ancient Rock", "Boulder (Mountain Camp)", "Burial cairn", "Burial mound", "Cave entrance (The Kendal's Lair)", "Cave exit (The Kendal's Lair)", "Clump of rocks", "Dead tree (Mountain Daughter)", "Flat stone", "Rockslide (Mountain Camp)", "Shining pool (scenery)", "Standing spears", "Stool (Mountain Camp)", "Tall tree (Mountain Daughter)", "Tent door", "Thorny bushes", "Tree stump (Mountain Daughter)"] },
        { type: "Music track", names: ["Cave of Beasts", "Echo of Beauty (Mountain Daughter)", "Settlement"] },
      ] },
      { title: "Lumbridge Swamp Caves", build: 303, date: "2005-03-14", entities: [
        { type: "Location", names: ["Lumbridge Swamp Caves"] },
        { type: "Monster", names: ["Big frog", "Cave bug", "Cave goblin (monster)", "Cave slime", "Giant frog", "Wall beast"] },
        { type: "NPC", names: ["Candle seller", "Cave bug larva"] },
        { type: "Item", names: ["Bullseye lantern", "Bullseye lantern (empty)", "Bullseye lantern (unf)", "Candle lantern", "Empty candle lantern", "Empty oil lamp", "Empty oil lantern", "Giant frog legs", "Lantern lens", "Oil lamp", "Oil lantern", "Oil lantern frame", "Spiny helmet"] },
        { type: "Scenery", names: ["Connected stalagmites", "Dark hole (A Soul's Bane)", "Dark hole (Lumbridge Swamp)", "Gas hole (Lumbridge Swamp Caves)", "Lamp oil still", "Large stalagmite", "Stepping stone (Lumbridge Swamp Caves)"] },
        { type: "Music track", names: ["Cave of the Goblins"] },
      ] },
      { title: "Magic and Wilderness Updates", build: 303, date: "2005-03-14", entities: [
        { type: "Spell", names: ["Tele Block", "Teleother Camelot", "Teleother Falador", "Teleother Lumbridge"] },
        { type: "Scenery", names: ["Lever (Mage Arena bank)", "Lever (Mage Arena)"] },
      ] },
      { title: "Other content — 2005-03-21", build: 304, entities: [
        { type: "Item", names: ["Telescope dummy"] },
      ] },
      { title: "Between a Rock...", build: 304, entities: [
        { type: "Quest", names: ["Between a Rock..."] },
        { type: "Location", names: ["Dondakan's mine", "River Kelda"] },
        { type: "Monster", names: ["Arzinian Avatar of Magic", "Arzinian Avatar of Ranging", "Arzinian Avatar of Strength"] },
        { type: "NPC", names: ["Arzinian Being of Bordanzan", "Derni", "Dernu", "Dondakan the Dwarf", "Dwarven Boatman (ore hauler)", "Dwarven Engineer", "Dwarven Ferryman", "Khorvak, a dwarven engineer", "Miodvetnir", "Rolad"] },
        { type: "Item", names: ["Base schematics", "Book page 1", "Book page 2", "Book page 3", "Cannon ball (Between a Rock...)", "Dwarven lore", "Gold helmet", "Pages", "Pages (unobtainable item)", "Schematic (complete)", "Schematic (Dondakan)", "Schematics (Dwarf Engineer)", "Schematics (Khorvak)"] },
        { type: "Scenery", names: ["Armour (scenery)", "Blue Fire", "Boiler (Keldagrim)", "Cannonballs (Dondakan's Rock)", "Clothes stall", "Dwarf mirror", "Dwarf MultiCannon (Between a Rock...)", "Dwarven Consortium Table", "Gold cannonball", "Gold vein", "Poor Bed", "Spinning Machine"] },
        { type: "Music track", names: ["Claustrophobia", "In Between", "Making Sense of Dwarven Schematics (Between a Rock)", "Ready to Fire! (Between a Rock)", "Time to Mine"] },
      ] },
      { title: "The Easter Bunny", build: 304, entities: [
        { type: "NPC", names: ["Easter Bunny (historical)"] },
        { type: "Item", names: ["Chocolate egg (2005 Easter event)", "Rubber chicken"] },
        { type: "Music track", names: ["Scape Scrambled (Easter 2005)"] },
      ] },
    ],
  },
  {
    build: 306, from: 305, date: "2005-04-04", status: "planned", uncertain: true,
    items: [
      { title: "Weapons Update", build: 305, date: "2005-03-29", entities: [
        { type: "NPC", names: ["Brian (Rimmington)", "Monkey boy"] },
        { type: "Item", names: ["Dragon plateskirt", "Dragon scimitar"] },
        { type: "Shop", names: ["Brian's Archery Supplies."] },
      ] },
      { title: "Ali Morrisane and Pollnivneach", build: 306, entities: [
        { type: "Quest", names: ["The Feud"] },
        { type: "Location", names: ["Pollnivneach"] },
        { type: "Monster", names: ["Bandit (Pollnivneach)", "Bandit champion", "Menaphite Thug", "Snake (desert)", "Tough Guy"] },
        { type: "NPC", names: ["Ali Morrisane", "Ali the Barman", "Ali the Camel", "Ali the Camel Man", "Ali the Hag", "Ali the Kebab seller", "Ali the Mayor", "Ali the Operator", "Ali the Snake Charmer", "Bandit Leader", "Cowardly Bandit", "Drunken Ali", "Market seller", "Menaphite Leader", "Snake (The Asp & Snake Bar)", "Street urchin", "Villager"] },
        { type: "Item", names: ["Broken plate", "Desert disguise", "Fake beard", "Hag's poison", "Jewels", "Karidian disguise", "Keys", "Kharidian headpiece", "Note (Fibonacci)", "Note (numbers)", "Oak blackjack", "Receipt (The Feud)", "Red hot sauce", "Snake basket", "Snake basket full", "Snake charm", "Spinning plate", "Super kebab", "Ugthanki dung", "Ugthanki dung (unobtainable item)", "Willow blackjack"] },
        { type: "Shop", names: ["Ali's Discount Wares.", "Pollnivneach general store.", "The Asp & Snake Bar."] },
        { type: "Scenery", names: ["Bed (The Feud)", "Cactus (The Feud)", "Dung (scenery)", "Golden cage", "Landscape (The Feud)", "Money Pot", "Stop!", "Study desk (The Feud)"] },
        { type: "Music track", names: ["Dynasty", "Snake Charming (The Feud)"] },
      ] },
      { title: "Dragon Scimitar Change", build: 306 },
    ],
  },
  {
    build: 308, from: 307, date: "2005-04-18", status: "planned", uncertain: true,
    items: [
      { title: "The Golem", build: 307, date: "2005-04-11", entities: [
        { type: "Quest", names: ["The Golem"] },
        { type: "Location", names: ["Ruins of Uzer", "Thammaron's throne room", "Uzer mine"] },
        { type: "NPC", names: ["Clay golem", "Desert Phoenix", "Elissa"] },
        { type: "Item", names: ["Black dye", "Black mushroom", "Display cabinet key", "Golem program", "Letter (The Golem)", "Phoenix feather", "Phoenix quill pen", "Statuette (The Golem)", "Strange implement", "Varmen's notes"] },
        { type: "Scenery", names: ["Black mushrooms", "Bookcase (Exam Centre)", "Door (Ruins of Uzer)", "Golem arm", "Golem body", "Golem foot", "Golem head", "Portal (The Golem)", "Root (Spirits of the Elid)", "Skeleton (Thammaron)", "Statue (guy with a hammer)", "Statue (reclining lady)", "Statuette in alcove", "Throne (Thammaron's throne room)"] },
        { type: "Music track", names: ["Forgotten", "Scape Main", "The Adventurer", "The Golem (music track)", "Throne of the Demon"] },
      ] },
      { title: "Castle Wars Change", build: 308 },
      { title: "Desert Treasure", build: 308, star: true, entities: [
        { type: "Quest", names: ["Desert Treasure I"] },
        { type: "Location", names: ["Ancient Pyramid", "Bandit Camp (Kharidian Desert)", "Draynor Sewers", "Graveyard", "Ice Path", "Shadow Dungeon", "Smoke Dungeon"] },
        { type: "Monster", names: ["Bandit (Bandit Camp)", "Damis", "Dessous", "Dust devil", "Fareed", "Giant skeleton (Shadow Dungeon)", "Kamil", "Mummy (Ancient Pyramid sarcophagus)", "Mummy (Ancient Pyramid)", "Scarabs", "Shadow Hound", "Stranger"] },
        { type: "NPC", names: ["Asgarnia Smith", "Azzanadra", "Bandit (The Big Heist Lodge)", "Bandit shopkeeper", "Bartender (The Big Heist Lodge)", "Eblis", "Ice block", "Ice troll (Desert Treasure I)", "Malak", "Mummy ashes", "Rasolo", "Ruantun", "Troll child", "Troll father", "Troll mother"] },
        { type: "Item", names: ["Ancient staff", "Bandit (interface item)", "Bandit's brew", "Blessed pot", "Blood diamond", "Etchings", "Fire (unobtainable item)", "Garlic powder", "Gilded cross", "Ice diamond", "Ring of visibility", "Shadow diamond", "Silver pot (Desert Treasure I)", "Smoke diamond", "Translation", "Warm key"] },
        { type: "Spell", names: ["Annakarl Teleport", "Blood Barrage", "Blood Blitz", "Blood Burst", "Blood Rush", "Carrallanger Teleport", "Dareeyak Teleport", "Ghorrock Teleport", "Ice Barrage", "Ice Blitz", "Ice Burst", "Ice Rush", "Kharyrll Teleport", "Lassar Teleport", "Paddewwa Teleport", "Senntisten Teleport", "Shadow Barrage", "Shadow Blitz", "Shadow Burst", "Shadow Rush", "Smoke Barrage", "Smoke Blitz", "Smoke Burst", "Smoke Rush"] },
        { type: "Shop", names: ["Bandit Bargains", "Rasolo the Wandering Merchant", "The Big Heist Lodge"] },
        { type: "Game mechanic", names: ["Chill", "Smoke (game mechanic)"] },
        { type: "Scenery", names: ["Altar (Ancient Pyramid)", "Bakery stall (Sophanem)", "Burnt chest", "Cave entrance (Ice Path)", "Cave exit (Ice Path)", "Chair (Sophanem)", "Fur stall (Sophanem)", "Gem stall (Sophanem)", "Icy rock", "Mystical mirror", "Sarcophagus (Ancient Pyramid)", "Secure chest", "Silk stall (Sophanem)", "Smokey well", "Spice stall (Sophanem)", "Standing Torch (Smoke Dungeon)", "Suntrap", "Tea stall (Sophanem)", "Trapdoor (Draynor Sewers)"] },
        { type: "Music track", names: ["Bone Dry", "City of the Dead", "Down Below", "Frostbite", "Path of Peril", "Sarcophagus (music track)", "Scarab", "Sphinx (music track)"] },
      ] },
    ],
  },
  {
    build: 316, from: 309, date: "2005-06-06", status: "planned",
    items: [
      { title: "Desert Month Finale", build: 309, date: "2005-04-26", entities: [
        { type: "Quest", names: ["Icthlarin's Little Helper"] },
        { type: "Location", names: ["Agility Pyramid mine", "Draynor island", "Great Temple", "Jalsavrah Pyramid", "Klenter's Pyramid", "Menaphos", "River Elid", "Sophanem", "Temple of the Lesser Gods"] },
        { type: "Monster", names: ["Apparition", "Crocodile", "Jackal", "Locust", "Mummy (Klenter's Pyramid)", "Plague frog", "Possessed Priest", "Scarab Swarm"] },
        { type: "NPC", names: ["Amascut", "Carpenter", "Embalmer", "High Priest (Sophanem)", "Icthlarin", "Klenter", "Neite", "Plague cow", "Priest (Sophanem)", "Raetul", "Siamun", "Sphinx", "Wanderer", "Worker (Sophanem)"] },
        { type: "Item", names: ["Bucket of saltwater", "Bucket of sap", "Canopic jar", "Catspeak amulet", "Embalming manual", "Gold leaf (unobtainable item)", "Holy symbol (Icthlarin's Little Helper)", "Linen (Icthlarin's Little Helper)", "Pile of salt", "Sphinx's token", "Unholy symbol (Icthlarin's Little Helper)"] },
        { type: "Shop", names: ["Raetul and Co's Cloth Store.", "The Spice Is Right."] },
        { type: "Scenery", names: ["Altar (Sophanem)", "Ceremonial table", "Closed chest (Klenter's Pyramid)", "Hole (Sophanem)", "Pit (Klenter's Pyramid)", "Rock (Agility Pyramid)", "Sarcophagus (Klenter's Pyramid)", "Wall (Klenter's Pyramid)", "Wall Crusher"] },
        { type: "Music track", names: ["Hypnotised", "Icthlarin's Little Puzzle", "Mirage"] },
      ] },
      { title: "Earthquake Rocks Lumbridge", build: 310, date: "2005-05-04", entities: [
        { type: "Quest", names: ["Tears of Guthix"] },
        { type: "Activity", names: ["Tears of Guthix (minigame)"] },
        { type: "Location", names: ["Chasm of Tears"] },
        { type: "NPC", names: ["Juna", "Light creature"] },
        { type: "Item", names: ["Magic scroll (unobtainable item)", "Magic stone (Tears of Guthix)", "Sapphire lantern", "Stone bowl"] },
        { type: "Scenery", names: ["Magical rocks", "Weeping wall"] },
        { type: "Music track", names: ["A Light Flight (Tears of Guthix)", "Tears of Guthix (music track)", "The Power of Tears"] },
      ] },
      { title: "Barrows", build: 312, date: "2005-05-09", star: true, entities: [
        { type: "Activity", names: ["Barrows"] },
        { type: "Monster", names: ["Ahrim the Blighted", "Bloodworm", "Crypt rat", "Crypt spider", "Dharok the Wretched", "Giant crypt rat", "Giant crypt spider", "Guthan the Infested", "Karil the Tainted", "Skeleton (Barrows)", "Torag the Corrupted", "Verac the Defiled"] },
        { type: "NPC", names: ["Strange Old Man"] },
        { type: "Item", names: ["Ahrim's hood", "Ahrim's robeskirt", "Ahrim's robetop", "Ahrim's staff", "Bolt rack", "Crumbling tome", "Dharok's greataxe", "Dharok's helm", "Dharok's platebody", "Dharok's platelegs", "Guthan's chainskirt", "Guthan's helm", "Guthan's platebody", "Guthan's warspear", "Karil's coif", "Karil's crossbow", "Karil's leatherskirt", "Karil's leathertop", "Torag's hammers", "Torag's helm", "Torag's platebody", "Torag's platelegs", "Verac's brassard", "Verac's flail", "Verac's helm", "Verac's plateskirt"] },
        { type: "Shop", names: ["Ak-Haranu's Exotic Shop."] },
        { type: "Scenery", names: ["Chest (Barrows)", "Ladder (Barrows)", "Sarcophagus (Barrows)", "Standing torch (Barrows)", "Warning sign (Barrows)"] },
        { type: "Music track", names: ["Dance of the Undead", "Dangerous Way", "Grave Robber (Barrows)"] },
      ] },
      { title: "Barrows Changes and Other Tweaks", build: 313, date: "2005-05-17", entities: [
        { type: "Item", names: ["Black spear"] },
      ] },
      { title: "Zogre Flesh Eaters", build: 313, date: "2005-05-17", entities: [
        { type: "Quest", names: ["Zogre Flesh Eaters"] },
        { type: "Location", names: ["Jiggig", "Jiggig Dungeon"] },
        { type: "Monster", names: ["Skogre", "Slash Bash", "Zogre", "Zombie (Zogre Flesh Eaters)"] },
        { type: "NPC", names: ["Gargh", "Grish", "Grug", "Gruh", "Irwin Feaselbaum", "Ogre guard (Jiggig)", "Pilg", "Scarg", "Sithik Ints", "Uglug Nar", "Zavistic Rarve"] },
        { type: "Item", names: ["Adamant brutal", "Adamantite nails", "Black brutal", "Black nails", "Black prism", "Book of 'H.A.M'", "Book of portraiture", "Bronze brutal", "Bronze nails", "Comp ogre bow", "Cup of tea (Zogre Flesh Eaters)", "Dragon inn tankard", "Fayrg bonemeal", "Fayrg bones", "Iron brutal", "Iron nails", "Mithril brutal", "Mithril nails", "Necromancy book", "Ogre artefact", "Ogre coffin key", "Ogre gate key", "Ourg bonemeal", "Ourg bones", "Raurg bonemeal", "Raurg bones", "Relicym's balm", "Ruined backpack", "Rune brutal", "Rune nails", "Signed portrait", "Sithik portrait", "Steel brutal", "Strange potion", "Torn page", "Unfinished potion (Rogue's Purse)", "Unstrung comp bow", "Zogre bonemeal", "Zogre bones"] },
        { type: "Shop", names: ["~ Uglug's stuffsies ~"] },
        { type: "Scenery", names: ["An ogre standard", "Bell (Wizards' Guild)", "Bookcase (Necromancer Tower)", "Broken lectern", "Crushed barricade", "Cupboard (Zogre Flesh Eaters)", "Drawers (Zogre Flesh Eaters)", "Fungus pattern", "Ogre barricade", "Ogre Coffin", "Ogre Coffin (Zogre Flesh Eaters)", "Ogre Drums", "Ogre fire", "Signpost (Jiggig)", "Stand (Zogre Flesh Eaters)", "Standing torch (Jiggig)", "Wardrobe (Zogre Flesh Eaters)"] },
        { type: "Music track", names: ["Romper Chomper", "Wayward", "Zogre Dance"] },
      ] },
      { title: "Keldagrim - The Dwarven City", build: 314, date: "2005-05-31", star: true, entities: [
        { type: "Quest", names: ["The Giant Dwarf"] },
        { type: "Activity", names: ["Keldagrim tasks"] },
        { type: "Location", names: ["Keldagrim", "Keldagrim bank", "Keldagrim Library", "Keldagrim north-east mine", "Keldagrim Palace", "Keldagrim south-west mine", "Trade Octagon", "Wemund's Wrench Warehouse"] },
        { type: "Monster", names: ["Black Guard Berserker", "Guard (dwarf)"] },
        { type: "NPC", names: ["Agmundi", "Assistant", "Audmann", "Banker (Keldagrim)", "Barmaid", "Barman (King's Axe Inn)", "Bentamir", "Blasidar the sculptor", "Blue Opal Director", "Blue Opal Secretary", "Brown Engine Director", "Brown Engine Secretary", "Cart conductor", "Cart conductor (Dwarven Mine)", "Cart conductor (unused)", "Cart conductor (White Wolf Mountain)", "Commander Veldaban", "Customer", "Customer (Dwarf)", "Dromund", "Dromund's cat", "Drunken Dwarf (Keldagrim)", "Dwarven Boatman", "Dwarven Miner", "Factory Manager", "Factory Worker", "Gauss", "Gnome emissary", "Gnome traveller", "Green Gemstone Director", "Green Gemstone Secretary", "Gulldamar", "Gunslik", "Haera", "Hegir", "Hervi", "Inn Keeper", "Karl", "Kjut", "Librarian", "Myndill", "Nolar", "Odmar", "Purple Pewter Director", "Purple Pewter Secretary", "Randivor", "Red Axe Cat", "Red Axe Director", "Red Axe Secretary", "Reinald", "Riki the sculptor's model", "Rind the gardener", "Rowdy dwarf", "Runvastr", "Santiri", "Saro", "Secretary", "Silver Cog Director", "Silver Cog Secretary", "Sune", "Supreme Commander", "Tati", "Tombar", "Trade Referee", "Trader (The Blue Opal)", "Trader (The Brown Engine)", "Trader (The Green Gemstone)", "Trader (The Purple Pewter)", "Trader (The Red Axe)", "Trader (The Silver Cog)", "Trader (The White Chisel)", "Trader (The Yellow Fortune)", "Ulifed", "Vermundi", "Vigr", "Wemund", "White Chisel Director", "White Chisel Secretary", "Yellow Fortune Director", "Yellow Fortune Secretary"] },
        { type: "Item", names: ["Book on costumes", "Dwarf (The Giant Dwarf)", "Dwarven battleaxe", "Dwarven battleaxe (animation item)", "Exquisite boots", "Exquisite clothes", "Left boot", "Meeting notes", "Minecart ticket", "Right boot", "Shirt (brown)", "Shirt (lilac)", "Shirt (yellow)", "Shorts (blue)", "Shorts (brown)", "Shorts (yellow)", "Skirt (blue)", "Skirt (brown)", "Skirt (lilac)", "Trousers (blue)", "Trousers (brown)", "Trousers (lilac)", "Woven top (blue)", "Woven top (brown)", "Woven top (yellow)"] },
        { type: "Shop", names: ["Agmundi Quality Clothes", "Carefree Crafting Stall", "Green Gemstone Gems", "Gunslik's Assorted Items", "Keldagrim's Best Bread", "King's Axe Inn", "Kjut's Kebabs", "Laughing Miner Pub", "Pickaxe-Is-Mine", "Quality Armour Shop", "Quality Weapons Shop", "Silver Cog Silver Stall", "Vermundi's Clothes Stall", "Vigr's Warhammers"] },
        { type: "Organisation", names: ["Consortium", "Dwarven Black Guard", "The Blue Opal", "The Brown Engine", "The Green Gemstone", "The Purple Pewter", "The Red Axe", "The Silver Cog", "The White Chisel", "The Yellow Fortune"] },
        { type: "Scenery", names: ["Almost a Statue", "Bank table (Keldagrim)", "Cart Track", "Cave entrance (Keldagrim cave)", "Cupboard (Keldagrim)", "Desk (Keldagrim)", "Giant Dwarf (statue)", "Market Stall (Keldagrim)", "Statue (Entrance to Keldagrim)", "Statue (Keldagrim)", "Statue (Unfinished)", "Weapon Rack (Keldagrim)"] },
        { type: "Music track", names: ["Crest of a Dwarven Wave", "Land of the Dwarves", "Tale of Keldagrim", "The Consortium (music track)", "The Face of a King (The Giant Dwarf)"] },
      ] },
      { title: "New Appointment in Lumbridge", build: 314, date: "2005-05-31", entities: [
        { type: "Quest", names: ["The Lost Tribe"] },
        { type: "Location", names: ["Dorgesh-Kaan mine"] },
        { type: "Monster", names: ["Cave goblin guard", "Cave goblin miner"] },
        { type: "NPC", names: ["Kazgar", "Mistag", "Sigmund", "Ur-tag"] },
        { type: "Item", names: ["Bone club", "Bone spear", "Brooch", "Burnt cave eel", "Cave eel", "Frog spawn", "Goblin symbol book", "Key (The Lost Tribe)", "Mining helmet", "Peace treaty", "Raw cave eel", "Silverware"] },
        { type: "Scenery", names: ["Bone Crane", "Bookcase (The Lost Tribe)", "Chest (The Lost Tribe)", "Crate (H.A.M. Hideout)", "Hole (Lumbridge Castle cellar)", "Hole (Lumbridge Swamp Caves)", "Trapdoor (Lumbridge Castle)"] },
        { type: "Music track", names: ["Dorgeshuun Treaty", "The Lost Melody", "The Lost Tribe (music track)"] },
      ] },
      { title: "New Emotes And Other Tweaks", build: 314, date: "2005-05-31", entities: [
        { type: "Emote", names: ["Goblin Bow", "Goblin Salute", "Headbang", "Jig", "Jump for Joy", "Panic", "Raspberry", "Salute", "Shrug", "Spin", "Yawn"] },
      ] },
      { title: "New fishing skill and more cooking", build: 314, date: "2005-05-31", entities: [
        { type: "NPC", names: ["Fishing spot (frogspawn)", "Fishing spot (Piscatoris Fishing Colony)"] },
      ] },
      { title: "Farming", build: 316, star: true, entities: [
        { type: "Skill", names: ["Farming"] },
        { type: "Activity", names: ["Brewing"] },
        { type: "Location", names: ["Alice's farm"] },
        { type: "NPC", names: ["Alain", "Alice", "Blandebir", "Bolongo", "Dantaera", "Dreven", "Ellena", "Elstan", "Fayeth", "Francis", "Gardener (unused)", "Garth", "Gileth", "Heskel", "Iago", "Kragen", "Lyra", "Metarialus", "Rhazien", "Rhonen", "Richard (Ardougne)", "Rooster (South Falador Farm)", "Sarah", "Selena", "Taria", "Torrell", "Treznor", "Treznor (unused)", "Vanessa", "Vasquen"] },
        { type: "Item", names: ["Ale yeast", "Amulet of nature", "Antidote+", "Antidote+ (unf)", "Antidote++", "Antidote++ (unf)", "Apple mush", "Apple sapling", "Apple seedling", "Apples", "Asgarnian ale (keg)", "Asgarnian ale(m)", "Asgarnian ale(m) (keg)", "Asgarnian hops", "Axeman's folly", "Axeman's folly (keg)", "Axeman's folly(m)", "Axeman's folly(m) (keg)", "Banana sapling", "Banana seedling", "Bananas", "Barley", "Barley malt", "Basket", "Burnt sweetcorn", "Cabbages", "Cactus spine", "Calquat fruit", "Calquat keg", "Calquat sapling", "Calquat seedling", "Chef's delight", "Chef's delight (keg)", "Chef's delight(m)", "Chef's delight(m) (keg)", "Cider", "Cider (keg)", "Cider(m) (keg)", "Coconut", "Coconut milk", "Coconut shell", "Compost", "Cooked sweetcorn", "Curry leaf", "Curry sapling", "Curry seedling", "Dragon bitter (keg)", "Dragon bitter(m)", "Dragon bitter(m) (keg)", "Dwarven stout (keg)", "Dwarven stout(m)", "Dwarven stout(m) (keg)", "Empty plant pot", "Empty sack", "Filled plant pot", "Gardening trowel", "Greenman's ale(m)", "Greenmans ale (keg)", "Greenmans ale(m) (keg)", "Grimy snapdragon", "Grimy toadflax", "Half coconut", "Hammerstone hops", "Hay sack", "Jute fibre", "Krandorian hops", "Leaves", "Magic leaves", "Magic roots", "Magic sapling", "Magic seedling", "Magic string", "Maple leaves", "Maple roots", "Maple sapling", "Maple seedling", "Marigolds", "Mature cider", "Mature wmb", "Mind bomb (keg)", "Mind bomb(m) (keg)", "Moonlight mead (keg)", "Moonlight mead(m)", "Moonlight mead(m) (keg)", "Mushroom", "Nasturtiums", "Oak leaves", "Oak roots", "Oak sapling", "Oak seedling", "Onions", "Orange sapling", "Orange seedling", "Oranges", "Palm sapling", "Palm seedling", "Papaya fruit", "Papaya sapling", "Papaya seedling", "Pineapple sapling", "Pineapple seedling", "Plant cure", "Poison ivy berries", "Potatoes", "Pre-nature amulet", "Rake handle", "Rake head", "Rosemary", "Rotten potato", "Scarecrow", "Shaikahan bonemeal", "Slayer's respite", "Slayer's respite (keg)", "Slayer's respite(m)", "Slayer's respite(m) (keg)", "Spade handle", "Spade head", "Spirit roots", "Spirit sapling", "Spirit seedling", "Stool (animation item)", "Strawberries", "Strawberry", "Supercompost", "Sweetcorn", "Tomatoes", "Unfired plant pot", "Watermelon", "Watermelon slice", "Weapon poison(+)", "Weapon poison(++)", "Weapon poison+ (unf)", "Weapon poison++ (unf)", "Weeds", "Wildblood hops", "Willow branch", "Willow leaves", "Willow roots", "Willow sapling", "Willow seedling", "Yanillian hops", "Yew leaves", "Yew roots", "Yew sapling", "Yew seedling"] },
        { type: "Shop", names: ["Alice's Farming shop.", "Richard's Farming shop.", "Sarah's Farming shop.", "Vanessa's Farming shop."] },
        { type: "Scenery", names: ["Apple Press", "Apple tree", "Asgarnian Ale (barrel)", "Asgarnian Hops (plant)", "Avantoe (plant)", "Axeman's Folly (barrel)", "Banana tree (Farming)", "Barley (plant)", "Barrel (brewing)", "Belladonna", "Bittercap Mushrooms", "Cabbages (plant)", "Cactus (Farming)", "Cadantine (plant)", "Cadavaberry bush", "Calquat tree", "Chef's Delight (barrel)", "Cider (barrel)", "Compost Bin", "Dead herbs", "Diseased herbs (historical)", "Dragon Bitter (barrel)", "Dwarf weed (plant)", "Dwarven Stout (barrel)", "Dwellberry bush", "Fermenting Vat", "Fermenting Vat (asgarnian ale)", "Fermenting Vat (axeman's folly)", "Fermenting Vat (chef's delight)", "Fermenting Vat (cider)", "Fermenting Vat (dragon bitter)", "Fermenting Vat (dwarven stout)", "Fermenting Vat (greenman's ale)", "Fermenting Vat (moonlight mead)", "Fermenting Vat (slayer's respite)", "Fermenting Vat (wizard's mind bomb)", "Greenmans Ale (barrel)", "Guam leaf (plant)", "Hammerstone Hops (plant)", "Harralander (plant)", "Irit leaf (plant)", "Jangerberry bush", "Jute (plant)", "Krandorian Hops (plant)", "Kwuarm (plant)", "Lantadyme (plant)", "Limpwurt plant", "Magic tree (Farming)", "Maple tree (Farming)", "Marigold", "Marrentill (plant)", "Mature Asgarnian Ale (barrel)", "Mature Axeman's Folly (barrel)", "Mature Chef's Delight (barrel)", "Mature Cider (barrel)", "Mature Dragon Bitter (barrel)", "Mature Dwarven Stout (barrel)", "Mature Greenmans Ale (barrel)", "Mature Moonlight Mead (barrel)", "Mature Slayer's Respite (barrel)", "Mature Wizards Mind Bomb (barrel)", "Moonlight Mead (barrel)", "Oak tree (Farming)", "Onion plant", "Orange tree", "Palm tree", "Papaya tree", "Pineapple plant", "Poison Ivy bush", "Potato plant", "Ranarr weed (plant)", "Redberry bush", "Rosemary (plant)", "Slayer's Respite (barrel)", "Snapdragon (plant)", "Spirit Tree (Farming)", "Sweetcorn plant", "Tarromin (plant)", "Toadflax (plant)", "Tomato plant", "Torstol (plant)", "Valve (brewing)", "Watermelons", "Whiteberry bush", "Wildblood Hops (plant)", "Willow tree (Farming)", "Wizards Mind Bomb (barrel)", "Woad plant", "Yanillian Hops (plant)", "Yew tree (Farming)"] },
        { type: "Music track", names: ["A Healthy Cactus", "Audience of Nature", "Farming Level Up!", "Farming Level Up! (Unlocks)", "Scape Ground"] },
      ] },
      { title: "Seeds, Bankspace And Advisors", build: 316, entities: [
        { type: "Activity", names: ["Wise Old Man tasks"] },
        { type: "Monster", names: ["Market Guard (Draynor)", "Thing under the bed"] },
        { type: "NPC", names: ["Donie", "Gee", "Lumbridge Guide", "Master Farmer", "Olivia", "Pig", "Piglet", "Wise Old Man"] },
        { type: "Item", names: ["Acorn", "Apple tree seed", "Asgarnian seed", "Avantoe seed", "Banana tree seed", "Barley seed", "Belladonna seed", "Bird nest (egg)", "Bird nest (empty)", "Bird nest (ring)", "Bird nest (seeds, 2005-2019)", "Bird's egg", "Book of folklore", "Cabbage seed", "Cactus seed", "Cadantine seed", "Cadavaberry seed", "Calquat tree seed", "Curry tree seed", "Dwarf weed seed", "Dwellberry seed", "Gardening boots", "Guam seed", "Hammerstone seed", "Harralander seed", "Irit seed", "Jangerberry seed", "Jute seed", "Krandorian seed", "Kwuarm seed", "Lantadyme seed", "Limpwurt seed", "Magic seed", "Maple seed", "Marigold seed", "Marrentill seed", "Master farmer (interface item)", "Mushroom spore", "Nasturtium seed", "Old man's message", "Onion seed", "Orange tree seed", "Palm tree seed", "Papaya tree seed", "Pineapple seed", "Plant pot (unobtainable item)", "Poison ivy seed", "Potato seed", "Rake", "Ranarr seed", "Redberry seed", "Rosemary seed", "Secateurs", "Seed dibber", "Snapdragon seed", "Spirit seed", "Strange book", "Strawberry seed", "Sweetcorn seed", "Tarromin seed", "Toadflax seed", "Tomato seed", "Torstol seed", "Watering can", "Watermelon seed", "Whiteberry seed", "Wildblood seed", "Willow seed", "Woad seed", "Yanillian seed", "Yew seed"] },
        { type: "Shop", names: ["Draynor Seed Market"] },
        { type: "Scenery", names: ["Curry tree", "Hanging cape", "Nasturtium", "Seed Stall", "Strawberry plant", "Suit of armour (Saradomin)", "Telescope (Wise Old Man)"] },
        { type: "Music track", names: ["A Thing Under the Bed!"] },
      ] },
    ],
  },
  {
    build: 317, from: 317, date: "2005-06-13", status: "planned", uncertain: true,
    items: [
      { title: "Rune Shop Changes", build: 317 },
      { title: "RuneCraft Update and Tweaks", build: 317, entities: [
        { type: "Miniquest", names: ["Enter the Abyss"] },
        { type: "Location", names: ["Abyss", "Abyssal Space"] },
        { type: "Monster", names: ["Abyssal guardian", "Abyssal leech", "Abyssal walker"] },
        { type: "NPC", names: ["Dark Mage (Abyss)", "Mage of Zamorak"] },
        { type: "Item", names: ["Abyssal book", "Air tiara", "Binding necklace", "Body tiara", "Chaos tiara", "Cosmic tiara", "Dust rune", "Earth tiara", "Elemental talisman", "Fire tiara", "Giant pouch", "Large pouch", "Lava rune", "Law tiara", "Medium pouch", "Mind tiara", "Mist rune", "Mud rune", "Nature tiara", "Scrying orb", "Small pouch", "Smoke rune", "Soul tiara", "Steam rune", "Tiara", "Tiara mould", "Water tiara"] },
        { type: "Shop", names: ["Battle Runes"] },
        { type: "Organisation", names: ["Zamorak Magical Institute"] },
        { type: "Scenery", names: ["Abyssal Rift", "Air rift", "Blockage (Abyss)", "Blood rift", "Body rift", "Boil", "Chaos rift", "Cosmic rift", "Death rift", "Earth rift", "Eyes (Abyss)", "Fire rift", "Gap (Abyss)", "Law rift", "Mind rift", "Nature rift", "Passage (Abyss)", "Rock (Abyss)", "Soul rift", "Tendrils (Abyss)", "Water rift"] },
        { type: "Music track", names: ["Into the Abyss"] },
      ] },
    ],
  },
  {
    build: 318, from: 318, date: "2005-06-22", status: "planned",
    items: [
      { title: "Rogues Den + Tweaks", build: 318, star: true, entities: [
        { type: "Activity", names: ["Rogues' Den"] },
        { type: "NPC", names: ["Brian O'Richard", "Emerald Benedict", "Martin Thwait", "Rogue Guard", "Spin Blades"] },
        { type: "Item", names: ["Broken tiara", "Flash powder", "Gear (unobtainable item)", "Mystic jewel", "Rogue boots", "Rogue gloves", "Rogue kit", "Rogue mask", "Rogue top", "Rogue trousers", "Stethoscope", "Tiles (Rogues' Den)"] },
        { type: "Shop", names: ["Martin Thwait's Lost and Found."] },
        { type: "Scenery", names: ["Blade (Rogues' Den)", "Contortion Bars", "Corpse (Rogues' Den)", "Door (Rogues' Den lobby)", "Door (Rogues' Den shortcut)", "Door (Rogues' Den viewing gallery)", "Door (Rogues' Den)", "Doorway (Rogues' Den)", "Floor (Rogues' Den)", "Grill (Rogues' Den)", "Ladder (Rogues' Den)", "Ledge (Rogues' Den)", "Passageway (Rogues' Den)", "Pendulum", "Spinning blades (Rogues' Den)", "Trapdoor (Rogues' Den)", "Wall (Rogues' Den)", "Wall safe", "Wall safe (lobby)"] },
        { type: "Music track", names: ["Moody Organ", "Safe Cracked (Rogues' Den)", "Spooky Organ", "The Far Side", "The Rogues' Den"] },
      ] },
    ],
  },
  {
    build: 319, from: 319, date: "2005-06-27", status: "planned",
    items: [
      { title: "Recruitment Drive", build: 319, star: true, entities: [
        { type: "Quest", names: ["Recruitment Drive"] },
        { type: "Monster", names: ["Sir Leye"] },
        { type: "NPC", names: ["Lady Table", "Miss Cheevers", "Ms. Hynn Terprett", "Sir Kuam Ferentse", "Sir Ren Itchood", "Sir Spishyus", "Sir Tiffy Cashien", "Sir Tinley"] },
        { type: "Item", names: ["??? mixture", "Acetic acid", "Alchemical notes", "Bronze key (Recruitment Drive)", "Bronze wire (Recruitment Drive)", "Chicken (Recruitment Drive)", "Chisel (Recruitment Drive)", "Cupric ore powder", "Cupric sulfate", "Fox (Recruitment Drive)", "Grain (Recruitment Drive)", "Gypsum", "Hourglass (Recruitment Drive)", "Initiate cuisse", "Initiate hauberk", "Initiate sallet", "Knife (Recruitment Drive)", "Magnet (Recruitment Drive)", "Makeover voucher", "Metal spade", "Nitrous oxide", "Shears (Recruitment Drive)", "Sodium chloride", "Tin (Recruitment Drive)", "Tin ore powder", "Vial of liquid"] },
        { type: "Shop", names: ["Initiate Temple Knight Armoury"] },
        { type: "Scenery", names: ["Bunsen burner", "Chair (Recruitment Drive)", "Chest (Recruitment Drive)", "Crate (Recruitment Drive)", "Door (Recruitment Drive)", "Key (Recruitment Drive)", "Old Bookshelf (Recruitment Drive)", "Portal (Recruitment Drive)", "Precarious bridge", "Red fungi", "Shelves (Recruitment Drive)", "Statue (Recruitment Drive)", "Stone Door (Recruitment Drive)", "Table (Recruitment Drive)", "Trapdoor (Port Phasmatys)", "Wardrobe (skeleton, tidy)", "Warning Sign (Recruitment Drive)"] },
        { type: "Music track", names: ["Improvisation (Recruitment Drive)", "Logic (Recruitment Drive)", "Memory (Recruitment Drive)", "Observation (Recruitment Drive)", "Order (Recruitment Drive)", "Patience (Recruitment Drive)", "The Chosen", "Wisdom (Recruitment Drive)"] },
      ] },
    ],
  },
  {
    build: 321, from: 320, date: "2005-07-07", status: "planned",
    items: [
      { title: "Magic Carpet Ride", build: 320, date: "2005-07-05", entities: [
        { type: "NPC", names: ["Monkey (magic carpet)", "Rug Merchant", "Rug Station Attendant"] },
        { type: "Item", names: ["Magic carpet (animation item)"] },
        { type: "Scenery", names: ["Carpet Exhibit", "Hookah", "Little tent", "Rolled up rug", "Rolled up rugs", "Rug (magic carpet)"] },
        { type: "Music track", names: ["Magic Carpet Ride"] },
      ] },
    ],
  },
  {
    build: 325, from: 322, date: "2005-07-19", status: "planned",
    items: [
      { title: "Plague City Series Continued", build: 325, entities: [
        { type: "Quest", names: ["Mourning's End Part I"] },
        { type: "Location", names: ["Lletya", "Lletya bank", "Lletya shrine", "Mourner Tunnels"] },
        { type: "Monster", names: ["Elf Archer", "Elf Warrior", "Mourner"] },
        { type: "NPC", names: ["Arvel", "Banker (Lletya)", "Dalldav", "Eoin", "Eudav", "Gethin", "Gnome (Mourner Headquarters)", "Goreu", "Head mourner (removed)", "Iona", "Kelyn", "Mawrth", "Mourner (Mourner Tunnels)", "Oronwen", "Ysgawyn"] },
        { type: "Item", names: ["Apple barrel", "Bloody mourner top", "Blue dye bellows", "Blue toad", "Broken device", "Crystal teleport seed", "Eastern discovery", "Eastern settlement", "Elf (interface item)", "Fixed device", "Green dye bellows", "Green toad", "Mourner boots", "Mourner cloak", "Mourner gloves", "Mourner letter", "Mourner top", "Mourner trousers", "Naphtha apple mix", "Prifddinas' history", "Red dye bellows", "Red toad", "Ripped mourner trousers", "Rotten apples", "Sieve", "Tarnished key", "Tegid's soap", "Teleport crystal", "The great divide", "Toxic naphtha", "Toxic powder", "Worn key", "Yellow dye bellows", "Yellow toad"] },
        { type: "Shop", names: ["Lletya Archery Shop", "Lletya Food Store", "Lletya General Store", "Lletya Seamstress"] },
        { type: "Scenery", names: ["Altar (Seren)", "Apple Tree (scenery)", "Ardougne Wall Door", "Bookcase (Lletya)", "Chair (Tirannwn)", "Closed Chest (broken device)", "Desk (Mourner Headquarters)", "Laundry Basket", "Rack (Mourner Headquarters)", "Rotten Apple Pile", "Trapdoor (Mourner Headquarters)"] },
        { type: "Music track", names: ["Far Away", "Fight or Flight"] },
      ] },
    ],
  },
  {
    build: 326, from: 326, date: "2005-07-26", status: "planned",
    items: [
      { title: "The Forgettable Tale...", build: 326, entities: [
        { type: "Quest", names: ["Forgettable Tale..."] },
        { type: "Miniquest", names: ["Curse of the Empty Lord"] },
        { type: "NPC", names: ["Chaos dwarf (Forgettable Tale...)", "Colonel Grimsson", "Dhalak", "Grunsh", "Kharrim", "Lennissa", "Rennard", "Valdez", "Viggora"] },
        { type: "Item", names: ["A chair", "Beer glass (Forgettable Tale...)", "Ghostly boots", "Ghostly cloak", "Ghostly gloves", "Ghostly hood", "Ghostly robe (bottom)", "Ghostly robe (top)", "Kelda hops", "Kelda seed", "Kelda stout", "Letter (Forgettable Tale...)", "Square stone"] },
        { type: "Organisation", names: ["The Magenta Accordion"] },
        { type: "Scenery", names: ["Box (Forgettable Tale...)", "Dwarven machinery", "Fermenting Vat (kelda stout)", "Kelda Hops (plant)", "Kelda Stout (barrel)"] },
        { type: "Music track", names: ["A Forgettable Puzzle... (Forgettable Tale...)", "A Tale... (Forgettable Tale...)", "Beer & Kebabs... (Forgettable Tale...)", "Drunken Dwarf (music track)", "Forgettable Melody", "Kebabsh... (Forgettable Tale...)", "Right on Track"] },
      ] },
    ],
  },
  {
    build: 327, from: 327, date: "2005-08-01", status: "planned", uncertain: true,
    items: [
      { title: "48 more bank slots for members", build: 327 },
      { title: "Waterbirth Island", build: 327, star: true, entities: [
        { type: "Activity", names: ["Kiss the frog", "Lost and Found"] },
        { type: "Location", names: ["Waterbirth Island", "Waterbirth Island Dungeon"] },
        { type: "Monster", names: ["Dagannoth (Waterbirth Island)", "Dagannoth spawn", "Evil Chicken", "Giant Rock Crab", "Pheasant", "Wallasalki"] },
        { type: "NPC", names: ["Door-support", "Egg (Dagannoth)", "Freaky Forester", "Frog (Kiss the frog)", "Frog Prince", "Frog Princess", "Giant bat (Brimhaven Agility Arena)", "Jarvald", "Quiz Master", "Rick Turpentine"] },
        { type: "Item", names: ["Circular hide", "Dagannoth hide", "Fibula piece", "Flattened hide", "Frog mask", "Frog token", "Hex edit detected", "Lederhosen hat", "Lederhosen shorts", "Lederhosen top", "Mystery box", "Raw pheasant (historical)", "Ribcage piece", "Rock-shell boots", "Rock-shell chunk", "Rock-shell gloves", "Rock-shell helm", "Rock-shell legs", "Rock-shell plate", "Rock-shell shard", "Rock-shell splinter", "Royal frog blouse", "Royal frog leggings", "Royal frog skirt", "Royal frog tunic", "Skeletal boots", "Skeletal bottoms", "Skeletal gloves", "Skeletal helm", "Skeletal top", "Skull piece", "Spined body", "Spined boots", "Spined chaps", "Spined gloves", "Spined helm", "Stretched hide"] },
        { type: "Scenery", names: ["Cave entrance (Askeladden)", "Cave entrance (Waterbirth Dungeon)", "Exit portal (Freaky Forester)", "Fremennik boat", "Portal (Evil Bob)", "Standing Torch (Waterbirth Island Dungeon)", "Tree (Freaky Forester)"] },
        { type: "Music track", names: ["Frogland", "Pheasant Peasant", "The Desolate Isle", "The Monsters Below", "The Quizmaster"] },
      ] },
    ],
  },
  {
    build: 330, from: 328, date: "2005-08-23", status: "planned", uncertain: true,
    items: [
      { title: "Massive minigame - Fight Pits", build: 328, date: "2005-08-09", star: true, entities: [
        { type: "Activity", names: ["TzHaar Fight Pit"] },
        { type: "Location", names: ["Mor Ul Rek", "Mor Ul Rek north bank", "North Mor Ul Rek mine"] },
        { type: "Monster", names: ["Tok-Xil", "Tz-Kek", "Tz-Kih", "TzHaar-Hur", "TzHaar-Ket", "TzHaar-Mej", "TzHaar-Xil"] },
        { type: "NPC", names: ["TzHaar-Hur-Koz", "TzHaar-Hur-Lek", "TzHaar-Hur-Tel", "TzHaar-Ket-Zuh", "TzHaar-Mej-Jal", "TzHaar-Mej-Kah", "TzHaar-Mej-Roh"] },
        { type: "Item", names: ["Tokkul", "Toktz-ket-xil", "Toktz-mej-tal", "Toktz-xil-ak", "Toktz-xil-ek", "Toktz-xil-ul", "Tzhaar-ket-em", "Tzhaar-ket-om"] },
        { type: "Shop", names: ["TzHaar-Hur-Lek's Ore and Gem Store", "TzHaar-Hur-Tel's Equipment Store", "TzHaar-Mej-Roh's Rune Store"] },
        { type: "Scenery", names: ["Cave entrance (to Mor Ul Rek)", "Cave exit (Mor Ul Rek)", "Egg (TzHaar)", "Hot vent door", "Lava forge", "Sulphur vent", "TzHaar statue", "Viewing orb (TzHaar Fight Pit)"] },
        { type: "Music track", names: ["Fire and Brimstone", "In the Pits", "Last Man Standing! (Fight Pits)", "Loss (Keldagrim Trading)", "Profit (Keldagrim Trading)", "TzHaar!"] },
      ] },
      { title: "Tai Bwo Wannai Clean-Up", build: 328, date: "2005-08-09", entities: [
        { type: "Activity", names: ["Capt' Arnav's Chest", "Certer", "Jekyll and Hyde", "Tai Bwo Wannai Cleanup"] },
        { type: "Location", names: ["Hardwood Grove", "ScapeRune"] },
        { type: "Monster", names: ["Broodoo victim", "Bush snake", "Large mosquito", "Mosquito swarm"] },
        { type: "NPC", names: ["Cap'n Hand", "Capt' Arnav", "Dr Ford", "Dr Jekyll", "Evil Bob", "Fanellaman", "Gabooty", "Jagbakoba", "Karaday", "Layleen", "Mamma Bufetta", "Murcaily", "Rionasta", "Safta Doc", "Servant (ScapeRune)", "Sharimika"] },
        { type: "Item", names: ["Broodoo shield (combat)", "Broodoo shield (disease)", "Broodoo shield (poison)", "Burnt spider", "Fishlike thing", "Gout tuber", "Jade machete", "Mahogany logs", "Mahogany pyre logs", "Man speak amulet", "Opal machete", "Proboscis", "Raw fishlike thing", "Red topaz machete", "Skewer stick", "Small fishing net (Evil Bob)", "Snake hide", "Snakeskin", "Snakeskin bandana", "Snakeskin body", "Snakeskin boots", "Snakeskin chaps", "Snakeskin vambraces", "Spider carcass", "Spider on shaft", "Spider on shaft (burnt)", "Spider on shaft (raw)", "Spider on stick", "Spider on stick (raw)", "Teak logs", "Teak pyre logs", "Thatch spar dense", "Thatch spar light", "Thatch spar med", "Trading sticks", "Tribal mask (combat)", "Tribal mask (disease)", "Tribal mask (poison)", "Tribal top (blue)", "Tribal top (brown)", "Tribal top (pink)", "Tribal top (yellow)", "Villager armband (blue)", "Villager armband (brown)", "Villager armband (pink)", "Villager armband (yellow)", "Villager hat (blue)", "Villager hat (brown)", "Villager hat (pink)", "Villager hat (yellow)", "Villager robe (blue)", "Villager robe (brown)", "Villager robe (pink)", "Villager robe (yellow)", "Villager sandals (blue)", "Villager sandals (brown)", "Villager sandals (pink)", "Villager sandals (yellow)"] },
        { type: "Shop", names: ["Gabooty's Tai Bwo Wannai Cooperative.", "Gabooty's Tai Bwo Wannai Drinky Store."] },
        { type: "Scenery", names: ["Dense Jungle", "Fishing spot (ScapeRune)", "Gout Tuber Plant", "Light Jungle", "Mahogany tree", "Medium fence", "Medium Jungle", "Partial fence", "Rotten village fence", "Short fence", "Teak tree", "Tree stump (mahogany)", "Tree stump (teak)", "Uncooking pot", "Village fence"] },
        { type: "Music track", names: ["Athletes Foot", "Brew Hoo Hoo!", "Evil Bob's Island", "Faster Than Gnome! (Speedy Gnome)", "Too Slow! (Speedy Gnome)"] },
      ] },
      { title: "Rogue Trader", build: 329, date: "2005-08-15", entities: [
        { type: "NPC", names: ["Ali the dyer", "Blackjack seller"] },
        { type: "Item", names: ["Desert legs", "Desert robes", "Desert top", "Desert top (overcoat)", "Fez", "Maple blackjack", "Maple blackjack(d)", "Maple blackjack(o)", "Menaphite purple hat", "Menaphite purple kilt", "Menaphite purple robe", "Menaphite purple top", "Menaphite red hat", "Menaphite red kilt", "Menaphite red robe", "Menaphite red top", "Oak blackjack(d)", "Oak blackjack(o)", "Willow blackjack(d)", "Willow blackjack(o)"] },
        { type: "Scenery", names: ["Ali M's Market", "Crate of rune caskets", "Dye pots", "Hanging dye"] },
        { type: "Music track", names: ["Dead Can Dance", "Rune Casket Open! (Rogue Trader)", "The Cellar Dwellers", "Wild Side"] },
      ] },
      { title: "Other content — 2005-08-23", build: 330, entities: [
        { type: "Item", names: ["9mm revolver", "Fishmonger (unobtainable item)", "Mobile phone", "Sine wave", "Sphinx baby", "Tax relief"] },
        { type: "Music track", names: ["Mined Out"] },
      ] },
      { title: "Blast Furnace", build: 330, star: true, entities: [
        { type: "Activity", names: ["Blast Furnace"] },
        { type: "NPC", names: ["1337sp34kr", "Adamantite ore (Blast Furnace)", "Bank guard", "Banker (Draynor Bank Robbery)", "Blast Furnace Foreman", "Coal (Blast Furnace)", "Cool Mom227", "Copper ore (Blast Furnace)", "Elfinlocks", "Gold ore (Blast Furnace)", "Iron ore (Blast Furnace)", "Jorzik", "Mithril ore (Blast Furnace)", "Ordan", "Perfect gold ore (Blast Furnace)", "Purepker895", "Qutiedoll", "Runite ore (Blast Furnace)", "Silver ore (Blast Furnace)", "Tin ore (Blast Furnace)"] },
        { type: "Item", names: ["Blue partyhat (Draynor Bank Robbery)", "Spadeful of coke"] },
        { type: "Shop", names: ["Armour store.", "Ore seller."] },
        { type: "Scenery", names: ["Bar dispenser", "Candelabrum", "Chair (Wise Old Man)", "Chart (Wise Old Man)", "Cogs (Blast Furnace)", "Coke", "Conveyor belt (Blast Furnace)", "Drive belt", "Gear box", "Globe of Gielinor", "Gold Screen", "Golden lantern", "Melting Pot", "Old Bookshelf (Wise Old Man)", "Pedals", "Pipes (Blast Furnace)", "Pump (Blast Furnace)", "Saradomin staff (Wise Old Man)", "Scrolls (Wise Old Man)", "Sink (Blast Furnace)", "Smoke (Blast Furnace)", "Stove (Blast Furnace)", "Study Desk (Wise Old Man)", "Suit of armour (Gold Saradomin)", "Temperature gauge", "Wall (Draynor Village bank)"] },
        { type: "Music track", names: ["Have a Blast", "Jungle Troubles"] },
      ] },
    ],
  },
  {
    build: 332, from: 331, date: "2005-09-01", status: "planned", uncertain: true,
    items: [
      { title: "Garden Of Tranquillity", build: 331, date: "2005-08-30", entities: [
        { type: "Quest", names: ["Garden of Tranquillity"] },
        { type: "NPC", names: ["Bernald", "Billy, a guard of Falador", "Bob, another guard of Falador", "Brother Althric", "PKMaster0036", "Queen Ellamaria", "Trolley (empty)", "Trolley (king)", "Trolley (Saradomin)"] },
        { type: "Item", names: ["Compost potion", "Delphinium seed", "List", "Orchid seed (pink)", "Orchid seed (yellow)", "Pink rose seed", "Plant cure (Garden of Tranquillity)", "Red rose seed", "Rune dust", "Rune shards", "Snowdrop seed", "Trolley", "Vine seed", "White rose seed", "White tree fruit", "White tree sapling", "White tree shoot"] },
        { type: "Scenery", names: ["Delphinium patch", "Delphiniums", "Grapevines", "Orchids (pink)", "Pink rose bush patch", "Plantpot (Garden of Tranquillity)", "Red rose bush patch", "Rose bush", "Rose bush (pink)", "Rose bush (red)", "Rose bush (white)", "Snowdrop patch", "Snowdrops", "Vine patch (Garden of Tranquillity)", "Vines (Garden of Tranquillity)", "White rose bush patch", "White Tree patch", "Yellow orchids"] },
        { type: "Music track", names: ["Billy & Bob (Garden of Tranquillity, early version 1)", "Billy & Bob (Garden of Tranquillity, early version 2)", "Billy & Bob (Garden of Tranquillity, early version 3)", "Billy & Bob (Garden of Tranquillity)", "Garden Tour (Garden of Tranquillity)"] },
      ] },
    ],
  },
  {
    build: 333, from: 333, date: "2005-09-06", status: "planned",
    items: [
      { title: "New shortcuts and prayers", build: 333, entities: [
        { type: "Prayer", names: ["Redemption", "Retribution", "Smite"] },
        { type: "Scenery", names: ["Crevice (Fremennik Slayer Dungeon)", "Fence (Varrock)", "Jutting wall (Zanaris)", "Log balance (East Ardougne)", "Log balance (Fremennik Province)", "Narrow crevice (Dwarven Mine)", "Obstacle pipe (Edgeville Dungeon)", "Obstacle pipe (Taverley Dungeon)", "Ornate railing", "Rat wheel", "Rocks (Al Kharid)", "Rocks (Tirannwn)", "Rocks (Tree Gnome Stronghold)", "Rocks (Trollheim advanced)", "Rocks (Trollheim easy)", "Rocks (Trollheim hard)", "Rocks (Trollheim very easy)", "Rocks (Wilderness, Trollheim)", "Spikey chain (Slayer Tower)", "Stepping stone (Champions' Guild)", "Stile (South Falador Farm)", "Strange floor (Fremennik Slayer Dungeon)", "Strange floor (Taverley Dungeon)", "Underwall tunnel (Falador)", "Underwall tunnel (Grand Exchange)", "Underwall tunnel (Yanille)", "Weathered wall"] },
      ] },
    ],
  },
  {
    build: 336, from: 334, date: "2005-09-19", status: "planned",
    items: [
      { title: "Cook-X", build: 334, date: "2005-09-12" },
      { title: "Security feature - Bank PIN", build: 336, star: true, entities: [
        { type: "Scenery", names: ["Bank Deposit Box"] },
      ] },
    ],
  },
  {
    build: 337, from: 337, date: "2005-09-26", status: "planned", uncertain: true,
    items: [
      { title: "A Tail of Two Cats", build: 337, entities: [
        { type: "Quest", names: ["A Tail of Two Cats"] },
        { type: "Location", names: ["Dragonkin Castle"] },
        { type: "NPC", names: ["Beite", "Dragonkin (A Tail of Two Cats)", "Love Cats", "Odysseus", "R4ng3rNo0b889", "Robert the Strong"] },
        { type: "Item", names: ["Antique lamp (A Tail of Two Cats)", "Catspeak amulet(e)", "Chores", "Doctor's hat", "Mouse toy", "Nurse hat", "Present", "Recipe"] },
        { type: "Scenery", names: ["Bed (A Tail of Two Cats)", "Bookcase (A Tail of Two Cats)", "Closed chest (Unferth's house)", "Fireplace (A Tail of Two Cats)", "Potato plants (A Tail of Two Cats)", "Table (A Tail of Two Cats)", "Unferth's patch"] },
        { type: "Music track", names: ["Bob's on Holiday", "Strange Place"] },
      ] },
      { title: "New graphics for Port Sarim, Rimmington and Thurgo's Peninsula", build: 337, entities: [
        { type: "Location", names: ["Lone oak island"] },
        { type: "Monster", names: ["Air wizard", "Anja", "Black knight (Port Sarim jail)", "Earth wizard", "Fire wizard", "Guard (Port Sarim jail)", "Hengel", "Seagull", "Water wizard"] },
        { type: "NPC", names: ["Ahab", "Betty (unused)", "Crab (Beach)", "Frog (Makeover Mage)", "Gerrant (unused)", "Ghost (Malignius Mortifer)", "Grum (unused)", "Guard (Port Sarim, sleeping)", "Guard (Port Sarim)", "Jack Seagull", "Longbow Ben", "Malignius Mortifer", "Miss Schism", "Skeleton (Malignius Mortifer)", "Skeleton mage (Malignius Mortifer)", "Wydin (unused)", "Zombie (Malignius Mortifer)"] },
        { type: "Item", names: ["Ahab's beer"] },
        { type: "Organisation", names: ["Draynor Manor Restoration Fund"] },
        { type: "Scenery", names: ["Anchor (scenery)", "Betty's cauldron", "Bucket (Port Sarim jail)", "Bucket (toppled)", "Chair (Betty)", "Chair (Rimmington)", "Door (Port Sarim jail)", "Easel (scenery)", "Fungus (Malignius Mortifer)", "Hammock (Mudskipper Point)", "Range chimney", "Wheelbarrow (Rimmington mine)"] },
      ] },
      { title: "TzHaar reworks and mage arena changes", build: 337 },
    ],
  },
  {
    build: 339, from: 338, date: "2005-10-04", status: "planned",
    items: [
      { title: "TzHaar Fight Caves", build: 339, star: true, entities: [
        { type: "Activity", names: ["TzHaar Fight Cave"] },
        { type: "Monster", names: ["Ket-Zek", "TzTok-Jad", "Yt-HurKot", "Yt-MejKot"] },
        { type: "Item", names: ["Amulet of fury", "Fire cape", "Obsidian cape", "Onyx", "Onyx amulet", "Onyx amulet (u)", "Onyx necklace", "Onyx ring", "Ring of stone", "Uncut onyx"] },
        { type: "Spell", names: ["Lvl-6 Enchant"] },
        { type: "Scenery", names: ["Cave entrance (from TzHaar Fight Caves)", "Cave entrance (to TzHaar Fight Caves)"] },
        { type: "Music track", names: ["The Fight Continues (Fight Cave)"] },
      ] },
    ],
  },
  {
    build: 340, from: 340, date: "2005-10-17", status: "planned",
    items: [
      { title: "Mourning's Ends Pt II", build: 340, star: true, entities: [
        { type: "Quest", names: ["Mourning's End Part II"] },
        { type: "Location", names: ["Mourner Tunnels mine", "Temple of Light"] },
        { type: "Monster", names: ["Dark beast", "Shadow (Temple of Light)"] },
        { type: "NPC", names: ["Slave (Mourner Tunnels)", "Thorgel"] },
        { type: "Item", names: ["Blackened crystal", "Blue crystal (Mourning's End Part II)", "Colour wheel", "Crystal trinket", "Cyan crystal (Mourning's End Part II)", "Death talisman", "Death tiara", "Edern's journal", "Fractured crystal (Mourning's End Part II)", "Green crystal (Mourning's End Part II)", "Hand mirror", "Item list", "Magenta crystal (Mourning's End Part II)", "New key", "Newly made crystal", "Red crystal (Mourning's End Part II)", "Yellow crystal (Mourning's End Part II)"] },
        { type: "Scenery", names: ["Closed chest (2 mirrors)", "Closed chest (blue crystal)", "Closed chest (cyan crystal, 2 mirrors)", "Closed chest (fractured crystal, 2 mirrors)", "Closed chest (fractured crystal, 3 mirrors)", "Crystal dispenser (Mourning's End Part II)", "Death Altar", "Door (Mourner Basement)", "Elven pictogram", "Final Pillar", "Guard (Nissyen Edern)", "Ladder (Temple of Light)", "Light door", "Low wall (Temple of Light)", "Pillar of Light (Mourning's End Part II, unused)", "Pillar of Light (Mourning's End Part II)", "Rope (Temple of Light)", "Trap (Temple of Light)", "Wall support (Temple of Light)"] },
        { type: "Music track", names: ["La Mort", "Temple of Light (music track)", "The Chest of Light (Mourning's End Part II)"] },
      ] },
      { title: "Wanted!", build: 340, entities: [
        { type: "Quest", names: ["Wanted!"] },
        { type: "Monster", names: ["Black Knight (Wanted!)", "Solus Dellagar"] },
        { type: "NPC", names: ["Ranger", "Savant", "Woman (Wanted!)"] },
        { type: "Item", names: ["Commorb", "Solus's hat", "White 2h sword", "White battleaxe", "White boots", "White chainbody", "White claws", "White dagger", "White full helm", "White gloves", "White halberd", "White kiteshield", "White longsword", "White mace", "White magic staff", "White med helm", "White platebody", "White platelegs", "White plateskirt", "White scimitar", "White sq shield", "White sword", "White warhammer"] },
        { type: "Shop", names: ["White Knight Armoury"] },
        { type: "Scenery", names: ["Tree (Draynor guard)"] },
      ] },
    ],
  },
  {
    build: 343, from: 341, date: "2005-11-08", status: "planned",
    items: [
      { title: "Mogres, Lizards, Pet Fish, Potions and Potatoes!", build: 341, date: "2005-10-24", entities: [
        { type: "Miniquest", names: ["Skippy and the Mogres"] },
        { type: "Activity", names: ["Drill Demon", "Pillory"] },
        { type: "Location", names: ["Mudskipper Point"] },
        { type: "Monster", names: ["Desert Lizard", "Lizard", "Mogre", "Small Lizard"] },
        { type: "NPC", names: ["A pile of broken glass", "Ali the Farmer", "Ali the Guard", "Ali the Smith", "Ali the Tailor", "Ellis", "Fishbowl (pet)", "Gnome Coach", "Pillory Guard", "Sergeant Damien", "Skippy", "Tramp (pillory)"] },
        { type: "Item", names: ["Baked potato", "Broken fishing rod", "Burnt potato", "Camo bottoms", "Camo bottoms (unobtainable item)", "Camo helmet", "Camo helmet (unobtainable item)", "Camo top", "Camo top (unobtainable item)", "Crushed nest", "Empty fish food box", "Fishbowl", "Fishbowl and net", "Fishing explosive", "Flippers", "Forlorn boot", "Ground guam", "Ground seaweed", "Guam in a box", "Guam in a box?", "Ice cooler", "Mudskipper hat", "Null amulet", "Pat of butter", "Potato with butter", "Potato with cheese", "Saradomin brew", "Seaweed in a box", "Seaweed in a box?", "Tiny net"] },
        { type: "Shop", names: ["Pelters' Veg Stall"] },
        { type: "Scenery", names: ["Anchor (Mogre Camp)", "Aquarium", "Cage (Pillory)", "Crate (Pelters' Veg Stall)", "Dairy churn", "Exercise mat", "Obstacle net (Drill Demon)", "Ominous Fishing Spot", "Sign (Drill Demon)", "Signpost (Mudskipper Point)", "Target (Drill Demon)"] },
        { type: "Music track", names: ["Corporal Punishment", "Mudskipper Melody"] },
      ] },
      { title: "Halloween & Death Mechanics", build: 342, date: "2005-10-31", entities: [
        { type: "Emote", names: ["Scared"] },
      ] },
      { title: "Halloween Update!!", build: 342, date: "2005-10-31", entities: [
        { type: "NPC", names: ["Child (2005 Halloween event)", "Half-Zombie", "Most of a Zombie", "Other Half-Zombie", "Zombie (2005 Halloween event)", "Zombie Head (2005 Halloween event)"] },
        { type: "Item", names: ["Blue sweets", "Deep blue sweets", "Green sweets", "Pink sweets", "Purple sweets (2005 Halloween event)", "Red sweets", "White sweets", "Zombie head"] },
      ] },
      { title: "Rum Deal", build: 342, date: "2005-10-31", entities: [
        { type: "Quest", names: ["Rum Deal"] },
        { type: "Location", names: ["Braindeath Island", "Braindeath Island Volcano"] },
        { type: "Monster", names: ["Evil spirit", "Fever spider", "Zombie pirate (Braindeath Island)", "Zombie swab"] },
        { type: "NPC", names: ["50% Luke", "Brewer", "Captain Braindeath", "Captain Donnie", "Davey", "Fishing spot (Braindeath Island)", "Karamthulhu (unused NPC)", "Karamthulhu (unused pet)", "Pirate Pete", "Zombie protester"] },
        { type: "Item", names: ["Blindweed", "Blindweed seed", "Bucket of water (Rum Deal)", "Fever spider body", "Holy wrench", "Karamthulhu", "Karamthulhu (unobtainable item)", "Rusty scimitar", "Slayer gloves", "Sluglings", "Unsanitary swill", "Wrench"] },
        { type: "Scenery", names: ["Blindweed Patch", "Brewer's Barrel", "Chimney pipe (Braindeath island)", "Cupboard (Rum Deal)", "Hopper (Rum Deal)", "Output Tap", "Pirate Sign", "Pressure Barrel", "Pressure Lever", "Sink (Braindeath Island)", "Stagnant Lake", "Trashed Patch"] },
        { type: "Music track", names: ["Aye Car Rum Ba", "Blistering Barnacles", "Captain Braindeath (Rum Deal)", "Rum for the Dumb (Rum Deal)"] },
      ] },
    ],
  },
  {
    build: 345, from: 344, date: "2005-11-22", status: "planned",
    items: [
      { title: "Shadow of the Storm", build: 344, date: "2005-11-14", entities: [
        { type: "Quest", names: ["Shadow of the Storm"] },
        { type: "Monster", names: ["Agrith Naar"] },
        { type: "NPC", names: ["Denath", "Eric", "Evil Dave", "Father Badden", "Father Reen", "Jennifer", "Matthew", "Patrick", "Sand storm", "Tanya"] },
        { type: "Item", names: ["Black desert robe", "Black desert shirt", "Darklight", "Demonic sigil", "Demonic sigil mould", "Demonic tome"] },
        { type: "Scenery", names: ["Portal (Shadow of the Storm)"] },
        { type: "Music track", names: ["Evil Introduction (Shadow of the Storm)", "Grip of the Talon", "Incantation"] },
      ] },
      { title: "Making History and minor changes", build: 345, entities: [
        { type: "Quest", names: ["Making History"] },
        { type: "Miniquest", names: ["The Enchanted Key"] },
        { type: "Location", names: ["Outpost"] },
        { type: "NPC", names: ["Blanin", "Droalak", "Dron", "Jorral", "Melina"] },
        { type: "Item", names: ["Chest (Making History)", "Enchanted key", "Guthix mjolnir", "Journal (Making History)", "Letter (Jorral)", "Letter (King Lathas)", "Saradomin mjolnir", "Scroll (Making History)", "Zamorak mjolnir"] },
        { type: "Scenery", names: ["Bookcase (Outpost)", "Large Display", "Shield Display"] },
        { type: "Music track", names: ["The Outpost (Making History)"] },
      ] },
    ],
  },
  {
    build: 346, from: 346, date: "2005-11-28", status: "planned",
    items: [
      { title: "Rat Catchers and Rat Pits!", build: 346, entities: [
        { type: "Quest", names: ["Ratcatchers"] },
        { type: "Activity", names: ["Rat Pits"] },
        { type: "Location", names: ["Ratcatchers Mansion"] },
        { type: "NPC", names: ["Anleif", "Barman (Ratpit bar)", "Bellemorde", "Bones (kitten)", "Captain Tom", "Claude", "Felkrash", "Fior", "Gamer", "Grimesquit", "Guard (Ratcatchers)", "Hooknosed Jack", "Jimmy Dazzler", "King rat", "Lazy cat", "Loki", "Mittens", "Oxi", "Phingspet", "Pox", "Pusskins", "Rat (Rat Pits)", "Rauborn", "Sagira", "Smokin' Joe", "The Beast", "The Face", "Topsy", "Treacle", "Turbogroomer", "Vaeringk", "Wily cat"] },
        { type: "Item", names: ["Book (Ratpits)", "Cat antipoison", "Directions", "Menaphite thug (interface item)", "Music scroll", "Poisoned cheese", "Pot of weeds", "Rat pole", "Smouldering pot"] },
        { type: "Shop", names: ["Ratpit bar (Keldagrim)", "Ratpit bar (Port Sarim)", "Ratpit bar (Varrock)"] },
        { type: "Scenery", names: ["Gates", "Manhole (Rat Pits)", "Rat trap", "Stool (Rat Pits)"] },
        { type: "Music track", names: ["Bubble and Squeak", "Cat gets Lazy", "Cat gets Wily", "Catch Me If You Can", "King Rat Is Dead! (Ratcatchers)", "Long Live The Rat King (Ratcatchers)", "Pied Piper (Ratcatchers)", "Rat a Tat Tat", "Rat Beats Cat (Rat Pits)", "Rat Goes Splat (Rat Pits)", "Rat Hunt", "Sarim's Vermin", "The Noble Rodent"] },
      ] },
    ],
  },
  {
    build: 347, from: 347, date: "2005-12-05", status: "planned",
    items: [
      { title: "Nardah, Tool Sheds & Spirits of the Elid", build: 347, entities: [
        { type: "Quest", names: ["Spirits of the Elid"] },
        { type: "Location", names: ["Nardah", "Nardah bank", "Water Ravine Dungeon"] },
        { type: "Monster", names: ["Black golem", "Grey golem", "Poltenip", "Radat", "Target", "Tarik (Nardah)", "White golem"] },
        { type: "NPC", names: ["Ali the Carter", "Awusah the Mayor", "Garai", "Genie (Spirits of the Elid)", "Ghaslor the Elder", "Habibah", "Hallak", "Kazemde", "Meskhenet", "Nardah Banker", "Nirrie", "Nkuku", "Rokuh", "Seddu", "Shiratti the Custodian", "Tirrie", "Tool Leprechaun", "Usi", "Zahra", "Zahur"] },
        { type: "Item", names: ["Ancestral key", "Ballad", "Choc-ice", "Lamp (Spirits of the Elid)", "Robe of elidinis (bottom)", "Robe of elidinis (top)", "Shoes", "Sole", "Statuette (Spirits of the Elid)", "Torn robe (bottom)", "Torn robe (top)"] },
        { type: "Shop", names: ["Nardah General Store.", "Rok's Chocs Box.", "Seddu's Adventurer's Store."] },
        { type: "Scenery", names: ["Barrel (Ali)", "Cart (Ali)", "Cave exit (Water Ravine Dungeon)", "Chair (Nardah)", "Choc-Ice Stall", "Clay oven", "Crates (Nardah)", "Crevice (Spirits of the Elid)", "Elidinis Statuette", "Rock Chair", "Stone Pew", "Tapestry (Nardah)"] },
        { type: "Music track", names: ["Desert Heat (music track)", "Over to Nardah", "Spirits of the Elid (music track)", "The Genie"] },
      ] },
    ],
  },
  {
    build: 349, from: 348, date: "2005-12-19", status: "planned",
    items: [
      { title: "Champions, Wyverns and Granite", build: 348, date: "2005-12-12", entities: [
        { type: "Activity", names: ["Champions' Challenge"] },
        { type: "Monster", names: ["Earth Warrior Champion", "Ghoul Champion", "Giant Champion", "Goblin Champion", "Hobgoblin Champion", "Imp Champion", "Jogre Champion", "Leon d'Cour", "Lesser Demon Champion", "Skeletal Wyvern", "Skeleton Champion", "Zombies Champion"] },
        { type: "NPC", names: ["Larxus", "Mystery figure"] },
        { type: "Item", names: ["Earth warrior champion scroll", "Fur", "Ghoul champion scroll", "Giant champion scroll", "Goblin champion scroll", "Granite legs", "Hobgoblin champion scroll", "Imp champion scroll", "Jogre champion scroll", "Leon's champion scroll", "Lesser demon champion scroll", "Skeleton champion scroll", "Wyvern bonemeal", "Wyvern bones", "Zombie champion scroll"] },
        { type: "Scenery", names: ["Champion Statue", "Portcullis (Champions' Guild)", "Trapdoor (Champions' Guild)"] },
        { type: "Music track", names: ["A New Champion! (Champion's Challenge)", "Title Fight", "Victory is Mine", "Woe of the Wyvern"] },
      ] },
      { title: "Christmas update for all players", build: 349, entities: [
        { type: "NPC", names: ["Hooded Stranger"] },
        { type: "Item", names: ["Blue marionette", "Bobble hat", "Bobble scarf", "Green marionette", "Jester hat", "Jester scarf", "Red marionette", "Tri-jester hat", "Tri-jester scarf", "Woolly hat", "Woolly scarf"] },
        { type: "Scenery", names: ["Trapdoor (Diango's Workshop)"] },
        { type: "Music track", names: ["Diango's Little Helpers"] },
      ] },
      { title: "Devious Minds", build: 349, entities: [
        { type: "Quest", names: ["Devious Minds"] },
        { type: "NPC", names: ["Assassin", "Dead Monk", "Monk (Devious Minds)"] },
        { type: "Item", names: ["Bow-sword", "Large pouch (Devious Minds)", "Orb (Devious Minds)", "Relic (Devious Minds)", "Slender blade"] },
        { type: "Scenery", names: ["Altar (Entrana)", "Doric's Whetstone"] },
        { type: "Music track", names: ["Assassin Attack! (Devious Minds)"] },
      ] },
    ],
  },
  {
    build: 350, from: 350, date: "2006-01-04", status: "planned",
    items: [
      { title: "Mage Training Arena", build: 350, star: true, entities: [
        { type: "Activity", names: ["Mage Training Arena"] },
        { type: "NPC", names: ["Alchemy Guardian", "Charmed Warrior", "Enchantment Guardian", "Entrance Guardian", "Flying Book", "Graveyard Guardian", "Maze Guardian", "Pizazz Hat", "Rewards Guardian (Mage Training Arena)", "Telekinetic Guardian"] },
        { type: "Item", names: ["Adamant kiteshield (Mage Training Arena)", "Adamant med helm (Mage Training Arena)", "Animals' bones", "Apprentice wand", "Arena book", "Beginner wand", "Cube", "Cylinder", "Dragonstone (Mage Training Arena)", "Emerald (Mage Training Arena)", "Guardian statue", "Icosahedron", "Infinity boots", "Infinity bottoms", "Infinity gloves", "Infinity hat", "Infinity top", "Leather boots (Mage Training Arena)", "Mage's book", "Master wand", "Orb", "Peach", "Pentamid", "Progress hat", "Rune longsword (Mage Training Arena)", "Teacher wand"] },
        { type: "Spell", names: ["Bones to Peaches"] },
        { type: "Currency", names: ["Pizazz points"] },
        { type: "Scenery", names: ["Alchemists Teleport", "Bones (Creature Graveyard)", "Chair (Mage Training Arena)", "Coin Collector", "Cube Pile", "Cupboard (Alchemist's Playground)", "Cylinder Pile", "Enchanters Teleport", "Exit Teleport", "Food chute", "Graveyard Teleport", "Hole (Enchanting Chamber)", "Icosahedron Pile", "Pentamid Pile", "Statue (Mage Training Arena)", "Telekinetic Teleport"] },
        { type: "Music track", names: ["Golden Touch", "Mind over Matter", "Roll the Bones", "The Enchanter"] },
      ] },
    ],
  },
  {
    build: 355, from: 351, date: "2006-01-23", status: "planned",
    items: [
      { title: "The Hand in the Sand", build: 351, date: "2006-01-10", entities: [
        { type: "Quest", names: ["The Hand in the Sand"] },
        { type: "Location", names: ["Sandy's Sand Corp (location)"] },
        { type: "NPC", names: ["Balloon Animal", "Bert", "Blaec", "Guard Captain", "Mazion", "Prison Pete", "Reeso", "Sandwich lady", "Sandy"] },
        { type: "Item", names: ["A magic scroll", "Baguette", "Beer soaked hand", "Bert's rota", "Bottled water", "Magical orb", "Pink cape", "Pink dye", "Prison key (Prison Pete)", "Redberry juice", "Roll", "Rose-tinted lens", "Sand", "Sandy hand", "Sandy's rota", "Square sandwich", "Triangle sandwich", "Truth serum", "Wizard's head"] },
        { type: "Organisation", names: ["Sandy's Sand Corp"] },
        { type: "Scenery", names: ["Sandy's Coffee Mug", "Sandy's Desk", "Waste Paper Bin"] },
        { type: "Music track", names: ["Autumn in Bridgelum", "Bert's Lovely Sand (Hand in the Sand)", "Freedom at Last! (Prison Pete)", "In the Clink", "Wrong Key! (Prison Pete)"] },
      ] },
      { title: "Agility Pyramid", build: 353, date: "2006-01-16", entities: [
        { type: "Location", names: ["Agility Pyramid"] },
        { type: "NPC", names: ["Pyramid block (Agility Pyramid)", "Simon Templeton"] },
        { type: "Item", names: ["Pyramid top"] },
        { type: "Scenery", names: ["Climbing rocks (Agility Pyramid entrance)", "Climbing rocks (Agility Pyramid)", "Doorway (Agility Pyramid)", "Gap (Agility Pyramid)", "Ledge (Agility Pyramid)", "Low wall (Agility Pyramid)", "Plank (Agility Pyramid)", "Stone block (Agility Pyramid)"] },
        { type: "Music track", names: ["Pharaoh's Tomb", "Top of the Pyramid!"] },
      ] },
      { title: "Agility Pyramid tweaks", build: 354, date: "2006-01-19" },
      { title: "Other content — 2006-01-23", build: 355, entities: [
        { type: "Item", names: ["Waste disposal"] },
      ] },
      { title: "Enakhra's Lament", build: 355, entities: [
        { type: "Quest", names: ["Enakhra's Lament"] },
        { type: "Location", names: ["Enakhra's Temple", "Quarry"] },
        { type: "NPC", names: ["Akthanakos", "Al the Camel", "Alice the Camel", "Aristarchus", "Boneguard", "Cam the Camel", "Crust of ice", "Desert Spirit", "Elly the Camel", "Enakhra", "Furnace grate", "Knight (Enakhra's Lament)", "Lazim", "Neferti the Camel", "Ollie the Camel", "Pentyn", "Pile of bones", "Skeleton (Enakhra's Lament)"] },
        { type: "Item", names: ["Camel mask", "Camel mould (p)", "Camulet", "Chisel (animation item)", "Granite", "K sigil", "M sigil", "R sigil", "Sandstone", "Sandstone (20kg)", "Sandstone (32kg)", "Sandstone base", "Sandstone body", "Stone head", "Stone head (Cavity)", "Stone left arm", "Stone left leg", "Stone right arm", "Stone right leg", "Z sigil"] },
        { type: "Scenery", names: ["Bone grinder", "Brazier (Enakhra's Lament)", "Demonic symbol (historical)", "Fallen statue", "Flat ground", "Furnace (Enakhra's Lament)", "Granite rocks", "Headless statue", "Magic barrier", "Magic spell", "Pedestal (Enakhra's Lament)", "Rock (pickaxe)", "Rubble (Enakhra's Lament)", "Sandstone rocks", "Secret entrance", "Statue (Enakhra's Lament)"] },
        { type: "Music track", names: ["A Temple For My Lord (Enakhra's Lament)", "Akthanakos Freed (Enakhra's Lament)", "Entrapment (Enakhra's Lament)", "Failed Weapons (Enakhra's Lament)", "Lament", "The Avarrockians (Enakhra's Lament)", "Zamorkian Lie (Enakhra's Lament)"] },
      ] },
    ],
  },
  {
    build: 356, from: 356, date: "2006-01-30", status: "planned",
    items: [
      { title: "New Look Hiscores", build: 356 },
      { title: "Runesquares, Harpie Bugs and new potato recipes!", build: 356, entities: [
        { type: "Monster", names: ["Harpie Bug Swarm"] },
        { type: "Item", names: ["Bug lantern", "Burnt egg", "Burnt mushroom", "Burnt onion", "Chilli con carne", "Chilli potato", "Chopped garlic", "Chopped tuna", "Egg and tomato", "Egg potato", "Fried mushrooms", "Fried onions", "Minced meat", "Mushroom & onion", "Mushroom potato", "Scrambled egg", "Sliced mushrooms", "Spicy sauce", "Sweetcorn (bowl)", "Tuna and corn", "Tuna potato", "Uncooked egg"] },
      ] },
    ],
  },
  {
    build: 357, from: 357, date: "2006-02-07", status: "planned",
    items: [
      { title: "Cabin Fever", build: 357, entities: [
        { type: "Quest", names: ["Cabin Fever"] },
        { type: "Location", names: ["Mos Le'Harmless", "Mos Le'Harmless bank"] },
        { type: "NPC", names: ["Banker (Mos Le'Harmless)", "Bill Teach", "Charley", "Joe", "Mama", "Mike", "Pirate (Mos Le'Harmless)", "Smith"] },
        { type: "Item", names: ["Book o' Piracy", "Braindeath 'rum'", "Broken cannon", "Canister", "Canister (animation item)", "Cannon ball (Cabin Fever)", "Cannon balls (unobtainable item)", "Cannon barrel (Cabin Fever)", "Fuse (Cabin Fever)", "Gunpowder", "Harry's cutlass", "Lucky cutlass", "Pirate bandana (blue)", "Pirate bandana (brown)", "Pirate bandana (red)", "Pirate bandana (white)", "Pirate boots", "Pirate leggings (beige)", "Pirate leggings (blue)", "Pirate leggings (brown)", "Pirate leggings (red)", "Plunder", "Ramrod", "Rapier", "Repair plank", "Repair plank (animation item)", "Rope (Cabin Fever)", "Stripy pirate shirt (beige)", "Stripy pirate shirt (blue)", "Stripy pirate shirt (brown)", "Stripy pirate shirt (red)", "Tacks", "Tinderbox (Cabin Fever)", "Whoopsie"] },
        { type: "Shop", names: ["Dodgy Mike's Second Hand Clothing.", "Harpoon Joe's House of 'Rum'.", "Smithing Smith's Shop.", "The Other Inn.", "Two Feet Charley's Fish Shop."] },
        { type: "Organisation", names: ["Ali Morrisane Commercial Enterprises Ltd."] },
        { type: "Scenery", names: ["Ancient Pillar", "Boulders (Mos Le'Harmless)", "Cannon (Cabin Fever)", "Closed chest (Cabin Fever)", "Plunder Storage"] },
        { type: "Music track", names: ["Cabin Fever (music track)", "In the Brine"] },
      ] },
    ],
  },
  {
    build: 362, from: 358, date: "2006-02-22", status: "planned",
    items: [
      { title: "Updates, updates and more updates...", build: 360, date: "2006-02-20", entities: [
        { type: "Location", names: ["Killerwatt plane"] },
        { type: "Monster", names: ["Barbarian", "Black Guard", "Chaos Elemental", "Cuffs", "Drunken man", "Guard (Doric's hut)", "Jeff", "Killerwatt", "Narf", "Rusty", "Skeleton (Draynor Manor)", "Woman (historical)"] },
        { type: "NPC", names: ["Apprentice workman", "Black swan", "Cecilia", "Emily", "Engineer", "Engineering assistant", "Gadrin", "Hunding", "Kaylee", "Mourner (Plague City)", "Norman", "Pious Pete", "Raccoon", "Romily Weaklax", "Squirrel", "Storm Cloud", "Swan", "Sweeper", "Taper", "Tina", "Workman"] },
        { type: "Item", names: ["Adamant shield (h1)", "Adamant shield (h2)", "Adamant shield (h3)", "Adamant shield (h4)", "Adamant shield (h5)", "Admiral pie", "Black boater", "Black shield (h1)", "Black shield (h2)", "Black shield (h3)", "Black shield (h4)", "Black shield (h5)", "Blue boater", "Blue d'hide body (g)", "Blue d'hide body (t)", "Blue d'hide chaps (g)", "Blue d'hide chaps (t)", "Blue firelighter", "Blue logs", "Blue skirt (g)", "Blue skirt (t)", "Blue wizard hat (g)", "Blue wizard hat (t)", "Blue wizard robe (g)", "Blue wizard robe (t)", "Burnt chompy", "Burnt rabbit", "Clue scroll (easy) - North of Falador.", "Clue scroll (easy) - Search the crates in Canifis", "Clue scroll (hard) - 04.41N 03.09W", "Clue scroll (hard) - 06.00S 21.48E", "Clue scroll (hard) - 13.46N 21.01E", "Clue scroll (hard) - 16.35N 27.01E", "Clue scroll (hard) - 17.50N 08.30E", "Clue scroll (hard) - 18.22N 16.33E", "Clue scroll (hard) - And so on, and so on, and so on", "Clue scroll (hard) - BY LOOK", "Clue scroll (hard) - C ON GAME HOC", "Clue scroll (hard) - Covered in shadows", "Clue scroll (hard) - His head might be hollow", "Clue scroll (hard) - If you look closely enough", "Clue scroll (hard) - It seems to have reached the end of the line", "Clue scroll (hard) - O BIRDZ A ZANY EN PC", "Clue scroll (hard) - Probably filled with books on magic", "Clue scroll (hard) - South of the Legends' Guild", "Clue scroll (hard) - South-east of the Wilderness Agility Course", "Clue scroll (hard) - The cheapest water for miles around", "Clue scroll (hard) - This village has a problem with cartloads of the undead", "Clue scroll (hard) - When you get tired of fighting", "Clue scroll (hard) - You have all of the elements available to solve this clue", "Clue scroll (medium) - 00.20S 23.15E", "Clue scroll (medium) - 01.18S 14.15E", "Clue scroll (medium) - 03.35S 13.35E", "Clue scroll (medium) - 05.20S 04.28E", "Clue scroll (medium) - 09.48N 17.39E", "Clue scroll (medium) - 14.54N 09.13E", "Clue scroll (medium) - 22.30N 03.01E", "Clue scroll (medium) - ARC O LINE", "Clue scroll (medium) - At the entrance to the Ourania Cave", "Clue scroll (medium) - Between Seers' Village and Rellekka", "Clue scroll (medium) - DT RUN B", "Clue scroll (medium) - Go to this building to be illuminated", "Clue scroll (medium) - GOT A BOY", "Clue scroll (medium) - HICK JET", "Clue scroll (medium) - LARK IN DOG", "Clue scroll (medium) - Miscellania", "Clue scroll (medium) - Mort Myre Swamp", "Clue scroll (medium) - NOD MED", "Clue scroll (medium) - Probably filled with wizards socks", "Clue scroll (medium) - South-east of the Lighthouse", "Clue scroll (medium) - The dead, red dragon watches over this chest", "Clue scroll (medium) - This crate holds a better reward than a broken arrow", "Clue scroll (medium) - This crate is mine, all mine, even if it is in the middle of the desert", "Clue scroll (medium) - Try not to step on any aquatic nasties while searching this crate", "Cooked chompy (roasted)", "Dragon 2h sword", "Enchanted hat", "Enchanted robe", "Enchanted top", "Fish pie", "Garden pie", "Green boater", "Green d'hide body (g)", "Green d'hide body (t)", "Green d'hide chaps (g)", "Green d'hide chaps (t)", "Green firelighter", "Green logs", "Insulated boots", "Iron spit", "Mud pie", "Orange boater", "Part admiral pie (salmon)", "Part admiral pie (tuna)", "Part fish pie (cod)", "Part fish pie (trout)", "Part garden pie (onion)", "Part garden pie (tomato)", "Part mud pie (compost)", "Part mud pie (water)", "Part summer pie (strawberry)", "Part summer pie (watermelon)", "Part wild pie (raw bear meat)", "Part wild pie (raw chompy)", "Pie recipe book", "Raw admiral pie", "Raw fish pie", "Raw garden pie", "Raw mud pie", "Raw summer pie", "Raw wild pie", "Red boater", "Red firelighter", "Red logs", "Roast rabbit", "Rune shield (h1)", "Rune shield (h2)", "Rune shield (h3)", "Rune shield (h4)", "Rune shield (h5)", "Skewered chompy", "Skewered rabbit", "Studded body (g)", "Studded body (t)", "Studded chaps (g)", "Studded chaps (t)", "Summer pie", "Wild pie"] },
        { type: "Shop", names: ["Pie Shop"] },
        { type: "Scenery", names: ["Bed (Dwarven)", "Blacksmiths' tools", "Bookcase (Desert Mining Camp)", "Cabbage (Draynor Manor, scenery)", "Canary", "Chair (Falador Hairdresser)", "Creature (scenery)", "Dead tree (Draynor Manor)", "Dug hole", "Dwarf bath", "Gallows", "Heater", "Notice board (Bank PIN)", "Old Bookshelf (Desert Mining Camp)", "Picnic table", "Picture (Falador Hairdresser)", "Portal Home", "Portal machine", "Rack (Flynn's Mace Market.)", "Sinister barrel", "Spinning pole", "Standing stone", "Statue (white knight)", "Stone signpost", "Strange machine (Ernest the Chicken)", "Suit of Armour (White Knight)", "Trapdoor (Dwarven Mine)", "Treadmill"] },
        { type: "Music track", names: ["Storm Brew"] },
      ] },
    ],
  },
  {
    build: 363, from: 363, date: "2006-02-27", status: "planned",
    items: [
      { title: "A Fairy Tale Part I - Growing Pains", build: 363, entities: [
        { type: "Quest", names: ["Fairytale I - Growing Pains"] },
        { type: "Location", names: ["Shady grove"] },
        { type: "Monster", names: ["Baby tanglefoot", "Tanglefoot"] },
        { type: "NPC", names: ["Co-ordinator", "Fairy chef", "Fairy Godfather", "Fairy Nuff", "Fat Rocco", "Frog (Zanaris)", "Gatekeeper", "Martin the Master Gardener", "Sheep (Zanaris)", "Slim Louie", "Storm cloud (Zanaris)", "Zanaris choir", "Zandar Horfyre"] },
        { type: "Item", names: ["Draynor skull", "Magic secateurs", "Queen's secateurs", "Symptoms list"] },
        { type: "Organisation", names: ["Fairy Mafia", "Group of Advanced Gardeners"] },
        { type: "Scenery", names: ["A gap through the wall", "A wall", "Certificate of healing", "Chicken Shrine", "Cow wheel", "Fairy fountain", "Fairy Queen throne", "Fairy workbench", "G.A.G. banner", "Healing certificate", "Magic door (Zanaris)", "Mushroom torch", "Water Trough"] },
      ] },
    ],
  },
  {
    build: 365, from: 364, date: "2006-03-15", status: "planned",
    items: [
      { title: "Canoeing, Zygomites and a Mole!", build: 364, date: "2006-03-07", entities: [
        { type: "Location", names: ["Mole Hole", "Varrock crypt"] },
        { type: "Monster", names: ["Giant Mole", "Zygomite"] },
        { type: "NPC", names: ["Baby Mole (NPC)", "Barfy Bill", "Cave Scenery", "Cavemouth", "Draul Leptoc", "Hari", "Jeremy Clerksin", "Martina Scorsby", "Phillipa", "Sigurd", "Tarquin"] },
        { type: "Item", names: ["Bird nest (Wyson, 2006–2016)", "Fungicide", "Fungicide spray", "Mole claw", "Mole skin", "Paddle"] },
        { type: "Scenery", names: ["Canoe Station", "Mole hill", "Sinking canoe"] },
        { type: "Music track", names: ["Cadava Potion (Romeo & Juliet)", "Romeo Falls in Love (Romeo & Juliet)", "The Mad Mole"] },
      ] },
      { title: "Hundredth Quest - Recipe for Disaster!", build: 365, star: true, entities: [
        { type: "Quest", names: ["Recipe for Disaster", "Recipe for Disaster/Another Cook's Quest", "Recipe for Disaster/Defeating the Culinaromancer", "Recipe for Disaster/Freeing Evil Dave", "Recipe for Disaster/Freeing King Awowogei", "Recipe for Disaster/Freeing Pirate Pete", "Recipe for Disaster/Freeing Sir Amik Varze", "Recipe for Disaster/Freeing Skrach Uglogwee", "Recipe for Disaster/Freeing the Goblin generals", "Recipe for Disaster/Freeing the Lumbridge Guide", "Recipe for Disaster/Freeing the Mountain Dwarf"] },
        { type: "Activity", names: ["Gravedigger"] },
        { type: "Location", names: ["Ape Atoll Agility Course", "Basement of Doom", "Crash Island Dungeon", "Evil Chicken's Lair", "Evil Chicken's Lair mine", "Mogre Camp"] },
        { type: "Monster", names: ["Agrith-Na-Na", "Baby black dragon", "Big Snake", "Crab", "Culinaromancer", "Dessourt", "Evil Chicken (Recipe for Disaster)", "Flambeed", "Gelatinnoth Mother", "Icefiend", "Jubbly bird", "Karamel", "Mudskipper"] },
        { type: "NPC", names: ["? ? ? ?", "Doris", "Fish (angel fish)", "Fish (black moor fantail)", "Fish (discus)", "Fish (harlequin)", "Fish (neon tetra)", "Fish (paradise)", "Fish (pearl danio)", "Fish (red fantail)", "Goblin Cook", "Hell-Rat", "Hellcat", "Iwazaru", "K'klik", "Kikazaru", "Leo", "Mizaru", "Mogre Guard", "Mountain Dwarf", "Nung", "Ogre boat", "Rohak", "Skrach Uglogwee"] },
        { type: "Item", names: ["Adamant gloves", "Antique lamp (Recipe for Disaster)", "Asgoldian ale", "Balloon toad", "Barrows gloves", "Black gloves", "Book on chickens", "Breadcrumbs", "Broken crab claw", "Broken crab shell", "Bronze gloves", "Brown spice", "Brulee (egg)", "Brulee (raw)", "Brulee (vanilla)", "Brulee supreme", "Burnt fishcake", "Burnt giant crab meat", "Burnt jubbly", "Cake of guidance", "Cinnamon", "Cleaver", "Coffin", "Cooked fishcake", "Cooked giant crab meat", "Cooked jubbly", "Cornflour", "Cornflour mixture", "Crab claw", "Crab helmet", "Crab meat (unobtainable item)", "Dirty blast", "Diving apparatus", "Dragon gloves", "Dragon token", "Dwarven rock cake", "Dyed orange", "Egg whisk", "Empty spice shaker", "Enchanted egg", "Enchanted flour", "Enchanted milk", "Evil chicken's egg", "Fishbowl helmet", "Fresh crab claw", "Fresh crab shell", "Frying pan", "Giant crab meat", "Ground cod", "Ground giant crab meat", "Ground kelp", "Hardleather gloves", "Iron gloves", "Kelp", "Kitchen knife", "Meat tenderiser", "Milky mixture", "Mithril gloves", "Mudskipper hide", "Odd stuffed snake", "Orange spice", "Pot of cornflour", "Raw fishcake", "Raw guide cake", "Raw jubbly", "Raw stuffed snake", "Red banana", "Red spice", "Rock (Mogre Camp)", "Rolling pin", "Rune gloves", "Skewer", "Sliced red banana", "Slop of compromise", "Snake corpse", "Snake over-cooked", "Soggy bread", "Spatula", "Spicy maggots", "Spicy stew", "Spork", "Steel gloves", "Stuffed snake", "Tchiki monkey nuts", "Tchiki nut paste", "Vanilla pod", "Wooden spoon", "Yellow spice", "Zombie boots", "Zombie gloves", "Zombie mask", "Zombie shirt", "Zombie trousers"] },
        { type: "Spell", names: ["Ape Atoll Teleport (standard)"] },
        { type: "Emote", names: ["Zombie Dance", "Zombie Walk"] },
        { type: "Shop", names: ["Culinaromancer's Chest"] },
        { type: "Organisation", names: ["Lumbridge Secret Council"] },
        { type: "Scenery", names: ["Awowogei (Recipe for Disaster)", "Banana tree (red banana)", "Bank table (Lumbridge Castle)", "Bookcase (Wizards' Tower)", "Bush (Tchiki monkey nuts)", "Cauldron (Goblin Kitchen)", "Cellar stairs", "Chair (Recipe for Disaster)", "Chest (Culinaromancer's)", "Chest (Goblin Village)", "Coral Reef", "Crude boat", "Cupboard (Goblin Kitchen)", "Dragon egg", "Dwarf (Recipe for Disaster)", "Evil Dave (Recipe for Disaster)", "General Bentnoze (Recipe for Disaster)", "General Wartface (Recipe for Disaster)", "Grave (Gravedigger)", "Gravestone (Gravedigger)", "Hole (tchiki monkey nuts)", "Kelp (scenery)", "Lumbridge Guide (Recipe for Disaster)", "Mausoleum (Gravedigger)", "Monkeybars (Ape Atoll Agility Course)", "Pen Door", "Pile of Rock", "Pirate Pete (Recipe for Disaster)", "Pit (Crash Island)", "Portal (Evil Chicken Lair)", "Portal (Recipe for Disaster)", "Rock (snake cooker)", "Rope (Ape Atoll Agility Course)", "Rope (Crash Island Dungeon)", "Signpost (Ape Atoll Agility Course)", "Sir Amik Varze (Recipe for Disaster)", "Skeleton (Evil Chicken's Lair)", "Skrach Uglogwee (Recipe for Disaster)", "Skull slope (Ape Atoll Agility Course)", "Skulls", "Stepping stone (Ape Atoll Agility Course)", "Stool (Goblin Village Kitchen)", "Temp Stone 4 Zip", "Trapdoor (Basement of Doom)", "Tree (Freeing Skrach Uglogwee)", "Tree stump (Gravedigger)", "Tropical tree (Ape Atoll Agility Course)", "Tunnel entrance (Evil Chicken's Lair)", "Underwater Cavern Entrance", "Vanilla plant"] },
        { type: "Music track", names: ["A Diving Sail (Recipe for Disaster - Freeing Pirate Pete)", "An Ogre Sail", "Chef Surprise", "Chickened Out", "Correct! (Recipe for Disaster - Lumbridge Guide)", "Davy Jones' Locker", "Hawaii 5 Ogre (Recipe for Disaster - Skrach Uglogwee)", "Mastermindless", "The Banquet (Recipe for Disaster)", "The Fairy Dragon", "The Fairy Dragon Appears! (Recipe for Disaster - Sir Amik Varze)", "The Guests are Free! (Recipe for Disaster)", "Too Many Cooks..."] },
      ] },
    ],
  },
  {
    build: 367, from: 366, date: "2006-03-22", status: "planned", uncertain: true,
    items: [
      { title: "In Aid of the Myreque", build: 367, entities: [
        { type: "Quest", names: ["In Aid of the Myreque"] },
        { type: "Location", names: ["Burgh de Rott", "Burgh de Rott bank", "Myreque's Rest"] },
        { type: "Monster", names: ["Gadderanks", "Tentacle (Temple Trekking)", "Vampyre Juvenile", "Vampyre Juvinate"] },
        { type: "NPC", names: ["Aurel", "Benjamin", "Calin", "Catalina", "Cornelius", "Elisabeta", "Emilia", "Florin", "Gabriela", "Grigore", "Helena", "Ileana", "Ivan", "Liam", "Luminata", "Luscion", "Marius", "Miala", "Mihail", "Nicoleta", "Radu", "Razvan", "Sergiu", "Sheep (penguins)", "Simona", "Sorin", "Teodor", "Valeria", "Vasile", "Verak", "Victor", "Vladimir", "Wiskit"] },
        { type: "Item", names: ["Bucket of rubble", "Crate (In Aid of the Myreque)", "Dusty scroll (In Aid of the Myreque)", "Gadderhammer", "Guthix balance", "Guthix balance (unf)", "Histories of the hallowland", "Modern day morytania", "Plaster fragment", "Rod dust", "Rod mould", "Rod of ivandis", "Silver dust", "Silvthrill rod", "Temple library key", "The sleeping seven"] },
        { type: "Shop", names: ["Aurel's Supplies"] },
        { type: "Scenery", names: ["Bookcase (Paterdomus Library)", "Broken Roof", "Broken wall (Burgh de Rott)", "Cave entrance (from Ivandis Tomb)", "Chair (Fred)", "Coffin (Ivandis)", "Empty clothes", "Exit path", "Furnace (Burgh de Rott)", "Keyhole (Paterdomus)", "Open chest (In Aid of the Myreque)", "Plaque (Burgh de Rott)", "Repaired Roof", "Repaired wall", "Rubble (In Aid of the Myreque)", "Rubble Pile", "Trapdoor (Burgh de Rott)", "Trapdoor (Paterdomus Library)"] },
        { type: "Music track", names: ["Distant Land", "Fangs for the Memory", "Gadderanks... (In Aid of the Myreque)", "The Last Sail (In Search of the Myreque)", "Vampyre Assault (In Aid of the Myreque)"] },
      ] },
    ],
  },
  {
    build: 368, from: 368, date: "2006-03-28", status: "planned", uncertain: true,
    items: [
      { title: "Temple Trekking", build: 368, star: true, entities: [
        { type: "Activity", names: ["Temple Trekking"] },
        { type: "Monster", names: ["Asyn shadow (Temple Trekking)", "Giant snail", "Head (Temple Trekking)", "Riyl shadow (Temple Trekking)", "Shade (Temple Trekking)", "Swamp snake", "Zombie (Temple Trekking)"] },
        { type: "NPC", names: ["Abidor Crank", "Dalcian Fang (easy)", "Fyiona Fray (easy)", "Jayene Kliyn (medium)", "Rolayne Twickit (hard)", "Smiddi Ryak (hard)", "Swamp creature", "Valantay Eppel (medium)"] },
        { type: "Item", names: ["Agility tome", "Bow and arrow", "Branch (Temple Trekking)", "Firemaking tome", "Fishing tome", "Long vine", "Mining tome", "Moonlight mead (player-owned house)", "Paintbrush", "Reward token (unobtainable item)", "Short vine", "Slayer tome", "Snail shell", "Snake hide (swamp)", "Thieving tome", "Woodcutting tome", "Yin yang amulet"] },
        { type: "Scenery", names: ["Backpack", "Ripples", "Spiny bush", "Trollheim Portal (historical)"] },
        { type: "Music track", names: ["Danger Evaded (Temple Trekking)", "Dangers of Morytania (Temple Trekking)", "Spy Games", "Trek Continues (Temple Trekking)", "Trek Destination (Temple Trekking)"] },
      ] },
    ],
  },
  {
    build: 369, from: 369, date: "2006-04-03", status: "planned",
    items: [
      { title: "A Soul's Bane", build: 369, entities: [
        { type: "Quest", names: ["A Soul's Bane"] },
        { type: "Location", names: ["Tolna's rift"] },
        { type: "Monster", names: ["Angry bear", "Angry giant rat", "Angry goblin", "Angry unicorn", "Confusion beast", "Fear reaper", "Hopeless creature"] },
        { type: "NPC", names: ["Brana", "Launa", "Tolna"] },
        { type: "Item", names: ["Ancient mjolnir", "Anger battleaxe", "Anger mace", "Anger spear", "Anger sword"] },
        { type: "Scenery", names: ["Confusing door", "Grass (Tolna's rift)", "Rift (Tolna's rift)", "Warning sign (Tolna's rift)", "Weapon rack (Tolna's rift)"] },
        { type: "Music track", names: ["A Monster (A Soul's Bane)", "Angry (A Soul's Bane)", "Confused (A Soul's Bane)", "Fear (A Soul's Bane)", "Fear and Loathing", "Hopeless (A Soul's Bane)", "Method of Madness", "No Way Out", "Wrath and Ruin"] },
      ] },
    ],
  },
  {
    build: 372, from: 370, date: "2006-04-12", status: "planned",
    items: [
      { title: "Easter bunnies infest RuneScape!", build: 371, date: "2006-04-10", entities: [
        { type: "NPC", names: ["Austri", "Vestri"] },
        { type: "Item", names: ["Easter ring"] },
        { type: "Emote", names: ["Rabbit Hop"] },
        { type: "Music track", names: ["Funny Bunnies"] },
      ] },
      { title: "Rag and Bone Man", build: 371, date: "2006-04-10", entities: [
        { type: "Quest", names: ["Rag and Bone Man I", "Rag and Bone Man II"] },
        { type: "Monster", names: ["Ram", "Vulture"] },
        { type: "NPC", names: ["Ali the Leaflet Dropper", "Bones (NPC)", "Fortunato", "Odd Old Man"] },
        { type: "Item", names: ["Al kharid flyer", "Baby dragon bone", "Basilisk bone", "Bat wing", "Bear ribs", "Big frog leg", "Bone in vinegar", "Bonesack", "Bottle of wine", "Cave goblin skull", "Dagannoth ribs", "Desert lizard bone", "Empty wine bottle", "Experiment bone", "Fire giant bone", "Ghoul bone", "Giant bat wing", "Giant rat bone", "Goblin skull", "Ice giant ribs", "Jackal bone", "Jogre bone", "Jug of vinegar", "Mogre bone", "Monkey paw", "Moss giant bone", "Ogre ribs", "Pot of vinegar", "Rabbit bone", "Ram skull", "Ram skull helm", "Rat bone", "Seagull wing", "Snake spine", "Terrorbird wing", "Troll bone", "Undead cow ribs", "Unicorn bone", "Vulture wing", "Werewolf bone", "Wolf bone", "Zogre bone", "Zombie bone"] },
        { type: "Shop", names: ["Wine Shop."] },
        { type: "Scenery", names: ["Bonzo's Table", "Box of bones", "Chair (Grandpa Jack)", "Fishing Contest Banner", "Market stall (wine)", "Massive ribs", "Pot-boiler", "Wish-list"] },
      ] },
    ],
  },
  {
    build: 373, from: 373, date: "2006-04-18", status: "planned",
    items: [
      { title: "Pest Control", build: 373, star: true, entities: [
        { type: "Activity", names: ["Pest Control"] },
        { type: "Location", names: ["Pest Control Island", "Void Knights' Outpost", "Void Knights' Outpost bank"] },
        { type: "Monster", names: ["Brawler", "Defiler", "Portal (Pest Control)", "Ravager", "Shifter", "Spinner", "Splatter", "Torcher", "Void Knight (Pest Control)"] },
        { type: "NPC", names: ["Squire (Novice)", "Squire (Void Knights banker)", "Squire (Void Knights general store)", "Squire (Void Knights magic shop)", "Squire (Void Knights ranged shop)", "Squire (Void Knights smith)", "Squire (Void Knights)", "Void Knight"] },
        { type: "Item", names: ["Field ration"] },
        { type: "Shop", names: ["Void Knight Archery Store", "Void Knight General Store", "Void Knight Magic Store", "Void Knights' Reward Options"] },
        { type: "Currency", names: ["Void Knight commendation points"] },
        { type: "Organisation", names: ["Void Knights"] },
        { type: "Scenery", names: ["Bank chest (Void Knight Outpost)", "Banner (Void Knight)", "Barricade (Pest Control)", "Counter (Void Knight's Outpost)", "Crates (Void Knights' Outpost)", "Gate (Pest Control)", "Intermediate Flag", "Lander hatch", "Novice Flag", "Score board (Pest Control)", "Tree (Pest Control)", "Veteran Flag"] },
        { type: "Music track", names: ["Null and Void", "Pest Control (music track)", "Pest Controlled (Pest Control)", "Void Knight Defeated... (Pest Control)"] },
      ] },
    ],
  },
  {
    build: 374, from: 374, date: "2006-04-20", status: "planned",
    items: [
      { title: "Rune Essence adjustment", build: 374, entities: [
        { type: "Item", names: ["Bob (unobtainable item)", "Pure essence"] },
        { type: "Scenery", names: ["Bones (Dragonkin)", "Low fence"] },
      ] },
    ],
  },
  {
    build: 376, from: 375, date: "2006-04-25", status: "planned",
    items: [
      { title: "Pure Essence now craftable on free servers", build: 375, date: "2006-04-24" },
      { title: "Wilderness graphical update", build: 375, date: "2006-04-24", entities: [
        { type: "Location", names: ["Blighted Volcano"] },
        { type: "Monster", names: ["Gnome Archer", "Gnome Driver", "Gnome Mage", "Tortoise"] },
        { type: "NPC", names: ["Captain Wimto", "Gillie Groats", "Lieutenant Schepbur", "Millie Miller", "Postie Pete", "Trainer Nacklepen"] },
        { type: "Item", names: ["Tortoise shell"] },
        { type: "Scenery", names: ["Cave entrance (south-east Wilderness)", "Chest (Rogues' Castle, inside)", "Magical symbol", "Tree (Wilderness, unused)", "Wilderness Obelisk", "Wilderness Sign"] },
        { type: "Music track", names: ["Everlasting Fire", "It's Pete! (Postie Pete)"] },
      ] },
    ],
  },
  {
    build: 377, from: 377, date: "2006-05-02", status: "planned",
    items: [
      { title: "Return of the Wise Old Man!", build: 377, entities: [
        { type: "Quest", names: ["Swan Song"] },
        { type: "Location", names: ["Piscatoris bank", "Piscatoris falconry area", "Piscatoris Fishing Colony", "Piscatoris mine"] },
        { type: "Monster", names: ["Ogre shaman (Swan Song)", "Sea troll", "Sea Troll Queen"] },
        { type: "NPC", names: ["Arnold Lydspor", "Devin Mendelberg", "Franklin Caranos", "George Laxmeister", "Herman Caranos", "Kathy Corkat", "Ramara du Croissant", "Sea Troll General", "Skeleton Mage (Bone Seed)"] },
        { type: "Item", names: ["Bone seeds", "Burnt monkfish", "Burnt shrimp", "Fresh monkfish", "Herman's book", "Iron sheet", "Monkfish", "Raw monkfish"] },
        { type: "Shop", names: ["Arnold's Eclectic Supplies."] },
        { type: "Scenery", names: ["Broken wall (Piscatoris Fishing Colony)", "Bronze axe (Piscatoris Fishing Colony)", "Bronze pickaxe (Piscatoris Fishing Colony)", "Cogs (Piscatoris Fishing Colony)", "Colony gate", "Firebox", "Fishing spot (Swan Song)", "Fishing weights", "Herman's desk", "Junk (Piscatoris Fishing Colony)", "Large Barrel", "Metal Press", "Net", "Patched wall", "Perch", "Sack (Wilderness)", "Sink (Piscatoris Fishing Colony)", "Small furnace (Piscatoris Fishing Colony)", "Stile (Piscatoris falconry area)", "Washbasin"] },
        { type: "Music track", names: ["Last Stand (music track)", "Making Waves", "Tale of the Wise Old Man (Swan Song)"] },
      ] },
    ],
  },
];
