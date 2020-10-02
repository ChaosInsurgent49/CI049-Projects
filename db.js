var backuped = false;
var projectdb = [
  {
    title:"Terratroid",
    desc:"A Terraria 1.4.0.5 music file that replaces Terraria music with music from the Metroid Series.<hr noshade>I've been putting Metroid music in the places of Terraria music and most of them actually work. There are a few exceptions to that (looking at you, hallow, underground hallow, town day, and town night) but it otherwise sounds kinda nice. Volume warning though.",
    image:"icon.png",
    updatestatus: {
      status: "WIP",
      lastupdate: {
        DD:"19",
        MM:"08",
        YYYY:"2020",
        hh:"22",
        mm:"50"
      },
      version:"0.0.20"
    },
    css:"a{color:#5555ff;font-weight:600;}.mnes{color:#bb7700;}.sm{color:#ffff00;}.mf{color:#00ffff;}.mp{color:#ffaa00;}.mph{color:#ff0000;}.mp2{color:#aaaaaa;}.mp3{color:#00aaff;}.aaron{color:#aa00ff;font-weight:600;}.am2r{color:#aaff00;}.mzm{color:#00ffaa;}.msr{color:#00aa55;}.meme{color:#ff00ff;font-weight:600;}.need-eq{color:#aa0000;font-weight:600;}.thing{background-color:#444444;border-radius:10px;padding:10px;padding-left:52px;}",
    info:'<ol class="thing">{-- class="mp">01-Night: Metroid Prime &amp; Fusion Soundtrack (Prime Side) - Chozo Ruins--}{-- class="mp3">02-Eerie: Metroid Prime 3: Corruption Soundtrack - GFS Valhallah--}{-- class="mp">03-Overworld_Day: Metroid Prime &amp; Fusion Soundtrack (Prime Side) - Planet Tallon IV--}{-- class="mp">04-Boss_1: Metroid Prime &amp; Fusion Soundtrack (Prime Side) - VS. Hive Totem--}{-- class="mnes">05-Old_Title: Metroid OST - Title {{needeq}}--}{-- class="mp">06-Jungle_Day: Metroid Prime &amp; Fusion Soundtrack (Prime Side) - Energy Core--}{-- class="mp3">07-Corruption: Metroid Prime 3: Corruption Soundtrack - Phaaze--}{-- class="mp3">08-Hallow: Metroid Prime 3: Corruption Soundtrack - SkyTown--}{-- class="am2r">09-Underground_Corruption: AM2R Soundtrack - Breeding Grounds--}{-- class="am2r">10-Underground_Hallow: AM2R Soundtrack - Flooded Complex--}{-- class="mp">11-Boss_2: Metroid Prime &amp; Fusion Soundtrack (Prime Side) - VS. Meta Ridley--}{-- class="mp">12-Underground: Metroid Prime &amp; Fusion Soundtrack (Prime Side) - Phazon Mines--}{-- class="mp">13-Boss_3: Metroid Prime &amp; Fusion Soundtrack (Prime Side) - VS. Omega Pirate--}{-- class="mp">14-Snow: Metroid Prime &amp; Fusion Soundtrack (Prime Side) - Ice Valley--}{-- class="mp">15-Space_Night: Metroid Prime &amp; Fusion Soundtrack (Prime Side) - Chozo Chapel of the Elders--}{-- class="mp">16-Crimson: Metroid Prime OST - Space Pirates (Laboratory Gate)--}{-- class="mp">17-Golem: Metroid Prime &amp; Fusion Soundtrack (Prime Side) - VS. Giant Beetle--}{-- class="mp">18-Altenate_Day: Metroid Prime &amp; Fusion Soundtrack (Prime Side) - Tallon Overworld--}{-- class="mp2">19-Rain_Music: Metroid Prime 2: Echoes Soundtrack - Torvus Bog--}{-- class="mp">20-Underground_Snow: Metroid Prime &amp; Fusion Soundtrack (Prime Side) - Ice Valley Phendrana Deep Lake Area--}{-- class="mph">21-Desert: Metroid Prime Hunters OST - Alinos I {{needeq}}--}{-- class="mp">22-Ocean_Day: Metroid Prime &amp; Fusion Soundtrack (Prime Side) - Wrecked Frigate Orpheon--}{-- class="mnes">23-Dungeon: Metroid OST - Kraid {{needeq}}--}{-- class="mp">24-Plantera: Metroid Prime &amp; Fusion Soundtrack (Prime Side) - VS. Parasite Queen--}{-- class="mp">25-Queen_Bee: Metroid Prime &amp; Fusion Soundtrack (Prime Side) - VS. Thardus--}{-- class="mp3">26-Lihzahrd: Metroid Prime 3: Corruption Soundtrack - Bryyo (US Version)--}{-- class="mp">27-Eclipse: Metroid Prime &amp; Fusion Soundtrack (Prime Side) - Ancient Chozo Ruins--}{-->28-Rain_SFX: [Default Terraria Rain Loop]--}{-- class="mp2">29-Glowing_Mushrooms: Metroid Prime 2: Echoes Soundtrack - Sanctuary--}{-- class="mp">30_Pumpkin_Moon: Metroid Prime &amp; Fusion Soundtrack (Prime Side) - Lava Caves (Burning Trail)--}{-- class="mp">31-Alternate_Underground: Metroid Prime &amp; Fusion Soundtrack (Prime Side) - Phazon Mines--}{-- class="mp">32_Frost_Moon: Metroid Prime &amp; Fusion Soundtrack (Prime Side) - Phazon Area--}{-- class="mp">33-Underground_Crimson: Metroid Prime &amp; Fusion Soundtrack (Prime Side) - Space Pirates (Main Lab)--}{-- class="mp">34-Towers: Metroid Prime &amp; Fusion Soundtrack (Prime Side) - VS. Metroid Prime (Spider)--}{-- class="mp3">35-Pirate_Invasion: Metroid Prime 3: Corruption Soundtrack - VS. Space Pirates--}{-- class="mp">36-Underworld: Metroid Prime &amp; Fusion Soundtrack (Prime Side) - Lava Caves--}{-- class="mp3">37-Martian_Invasion: Metroid Prime 3: Corruption Soundtrack - Crisis--}{-- class="mp2">38-Lunar_Boss: Metroid Prime 2: Echoes Soundtrack - VS. Emperor Ing (Spider)--}{-- class="mp">39-Goblin_Invasion: Metroid Prime &amp; Fusion Soundtrack (Prime Side) - VS. Chozo Ghost--}{-- class="mph">40-Sandstorm: Metroid Prime Hunters OST - Multiplayer Alinos {{needeq}}--}{-- class="mph">41-Old_Ones_Army: Metroid Prime Hunters OST - Multiplayer Vesper Defense Outpost {{needeq}}--}{-- class="mp">42-Space_Day: Metroid Prime &amp; Fusion Soundtrack (Prime Side) - Artifact Temple--}{-- class="mp2">43-Ocean_Night: Metroid Prime 2: Echoes Soundtrack - Torvus Catacombs--}{-- class="mf">44-Windy_Day: Metroid Prime &amp; Fusion Soundtrack (Fusion Side) - Sector 1 (SRX) SR388 Simulation Area {{needeq}}--}{-->45-Wind_SFX: [Default Terraria Wind Loop]--}{-- class="meme">46_Town_Day: <a class="meme" href="https://www.youtube.com/watch?v=M2p1Oq4uRgE">i have no clue what to call this</a>--}{-- class="meme">47_Town_Night: <a class="meme" href="https://www.youtube.com/watch?v=fnwOYRpHtgk">CallMeCarsonLIVE outro song</a>--}{-- class="mf">48-Slime_Rain: Metroid Prime &amp; Fusion Soundtrack (Fusion Side) - VS. Zazabi &amp; Varia Core X {{needeq}}--}{-->49-Contest_Winner: [Will NOT be changed due to it being a fan creation]--}{-- class="mzm">50-Title_MusicA: Metroid Zero Mission Soundtrack - Title {{needeq}}--}{-- class="mzm">51-Title_MusicLoop: Metroid Zero Mission Soundtrack - Title {{needeq}}--}{-- class="sm">52-Storm: Super Metroid Soundtrack (GAME RIP) - Crateria Underground (Arrival in Crateria w/o rain and thunder) {{needeq}}--}{-- class="sm">53-Graveyard: Super Metroid Soundtrack (GAME RIP) - Maridia Quicksand Underground Water Area {{needeq}}--}{-- class="sm">54-Underground_Jungle: Super Metroid Soundtrack (GAME RIP) - Brinstar Overgrowth {{needeq}}--}{-- class="msr">55-Jungle_Night: Metroid: Samus Returns Soundtrack - Area 5 (Jungle Caves)--}{-- class="mp2">56-Queen_Slime: Metroid Prime 2: Echoes Soundtrack - VS. Quadraxis--}{-- class="mp3">57-Empress_Of_Light: Metroid Prime 3: Corruption Soundtrack - VS. Gandrayda--}{-- class="sm">58-Duke_Fishron: Super Metroid Soundtrack (GAME RIP) - Big Boss Confrontation (Kraid, Crocomire, Phantoon) {{needeq}}--}{-- class="msr">59_Morning_Rain: Metroid: Samus Returns Soundtrack - Area 7 (Chozo Laboratory)--}{-- class="mp">60-Alternate_Title: Metroid Prime &amp; Fusion Soundtrack (Prime Side) - Menu Select--}{-- class="msr">61-Underground_Desert: Metroid: Samus Returns Soundtrack - Area 6 (Sandy Caves)--}{-->62_Terraria-Otherworld_Rain: [Default Terraria Music]<br><span class="msr">V0.0.21: Metroid: Samus Returns Soundtrack - Surface 2 (Crateria Raining)</span>--}{-->63_Terraria-Otherworld_Day: [Default Terraria Music]<br><span class="msr">V0.0.21: Metroid: Samus Returns Soundtrack - Surface 1 (Main Theme)</span>--}{-->64_Terraria-Otherworld_Night: [Default Terraria Music]<br><span class="msr">V0.0.21: Metroid: Samus Returns Soundtrack - Drained Caves 1 (Ambience)</span>--}{-->65_Terraria-Otherworld_Underground: [Default Terraria Music]<br><span class="msr">V0.0.21: Metroid: Samus Returns Soundtrack - Area 3 (Mining Facility)</span>--}{-->66_Terraria-Otherworld_Desert: [Default Terraria Music]--}{-->67_Terraria-Otherworld_Ocean: [Default Terraria Music]<br><span class="msr">V0.0.21: Metroid: Samus Returns Soundtrack - Surface 1 (Ambience)</span>--}{-->68_Terraria-Otherworld_Mushrooms: [Default Terraria Music]--}{-->69_Terraria-Otherworld_Dungeon: [Default Terraria Music]--}{-->70_Terraria-Otherworld_Space: [Default Terraria Music]</span><br><span class="msr">V0.0.21: Metroid: Samus Returns Soundtrack - Area 5 (Jungle Temple)</span>--}{-->71_Terraria-Otherworld_Underworld: [Default Terraria Music]<br><span class="msr">V0.0.21: Metroid: Samus Returns Soundtrack - Area 2 (Lava Caves)</span>--}{-->72_Terraria-Otherworld_Snow: [Default Terraria Music]--}{-->73_Terraria-Otherworld_Corruption: [Default Terraria Music]--}{-->74_Terraria-Otherworld_Underground_Corruption: [Default Terraria Music]<br><span class="msr">V0.0.21: Metroid: Samus Returns Soundtrack - Area 2 (Submerged Chozo Ruins)</span>--}{-->75_Terraria-Otherworld_Crimson: [Default Terraria Music]--}{-->76_Terraria-Otherworld_Underground_Crimson: [Default Terraria Music]--}{-->77_Terraria-Otherworld_Ice: [Default Terraria Music]<br><span class="msr">V0.0.21: Metroid: Samus Returns Soundtrack - Area 4 (Crystal Mine)</span>--}{-->78_Terraria-Otherworld_Underground_Hallow: [Default Terraria Music--}{-->79_Terraria-Otherworld_Eerie: [Default Terraria Music]--}{-->80_Terraria-Otherworld_Boss_2: [Default Terraria Music]<br><span class="msr">V0.0.21: Metroid: Samus Returns Soundtrack - Boss Battle 7: Vs. Diggernaut</span>--}{-->81_Terraria-Otherworld_Boss_1: [Default Terraria Music]<br><span class="msr">V0.0.21: Metroid: Samus Returns Soundtrack - Boss Battle 3: Vs. Arachnus</span>--}{-->82_Terraria-Otherworld_Invasion: [Default Terraria Music]<br><span class="msr">V0.0.21: Metroid: Samus Returns Soundtrack - Boss Battle 1: Vs. Alpha Metroid</span>--}{-->83_Terraria-Otherworld_The_Towers: [Default Terraria Music]--}{-->84_Terraria-Otherworld_Lunar_Boss: [Default Terraria Music]<br><span class="msr">V0.0.21: Metroid: Samus Returns Soundtrack - Boss Battle 7: Vs. Metroid Queen</span>--}{-->85_Terraria-Otherworld_Plantera: [Default Terraria Music]<br><span class="msr">V0.0.21: Metroid: Samus Returns Soundtrack - Boss Battle 5: Vs. Omega Metroid</span>--}{-->86_Terraria-Otherworld_Jungle: [Default Terraria Music]--}{-->87_Terraria-Otherworld_Wall_Of_Flesh: [Default Terraria Music]<br><span class="msr">V0.0.21: Metroid: Samus Returns Soundtrack - Boss Battle 4: Vs. Zeta Metroid</span>--}{-->88_Terraria-Otherworld_Hallow: [Default Terraria Music]--}</ol><p><span style="color:ff0000;">WARNING</span>: The old title, desert, dungeon, sandstorm, old one\'s army, slime rain, new title tracks, storm, graveyard, underground jungle, and duke fishron tracks are potentially lethal, I haven\'t eq\'d them yet. Use at own risk</p><p>Link to the file: <a href="' + 'https://github.com/AmiableMarker65/MyStuff/raw/master/Wave%20Bank.7z.001' + '">Part 1</a> <a href="' + 'https://github.com/AmiableMarker65/MyStuff/raw/master/Wave%20Bank.7z.002' + '">Part 2</a> <a href="' + 'https://github.com/AmiableMarker65/MyStuff/raw/master/Wave%20Bank.7z.003' + '">Part 3</a> <a href="' + 'https://github.com/AmiableMarker65/MyStuff/raw/master/Wave%20Bank.7z.004' + '">Part 4</a> <a href="' + 'https://github.com/AmiableMarker65/MyStuff/raw/master/Wave%20Bank.7z.005' + '">Part 5</a> <a href="' + 'https://github.com/AmiableMarker65/MyStuff/raw/master/Wave%20Bank.7z.006' + '">Part 6</a></p><p class="mnes">You can find the Metroid OST <a href="https://www.metroid-database.com/game/metroid/#audio">here</a></p><h5>You do need to click on "Metroid OST"</h5><p class="mzm">You can find the Metroid Zero Mission Soundtrack <a href="https://www.metroid-database.com/game/metroid-zero-mission/#audio">here</a></p><h5>You do need to click on "Metroid Zero Mission Soundtrack"</h5><p class="mp">You can find the Metroid Prime &amp; Fusion Soundtrack (Prime Side) <a href="https://www.metroid-database.com/game/metroid-prime/#audio">here</a></p><h5>You do need to cilck on "Prime &amp; Fusion OST: Prime Side"</h5><p class="mph">You can find the Metroid Prime Hunters OST <a href="https://www.metroid-database.com/game/metroid-prime-hunters/#audio">here</a></p><h5>You do need to cilck on "Metroid Prime Hunters OST"</h5><p class="mp2">You can find the Metroid Prime 2: Echoes Soundtrack <a href="https://www.metroid-database.com/game/metroid-prime-2-echoes/#audio">here</a></p><h5>You do need to cilck on "Metroid Prime 2: Echoes Soundtrack"</h5><p class="mp3">You can find the Metroid Prime 3: Corruption Soundtrack <a href="https://www.metroid-database.com/game/metroid-prime-3-corruption/#audio">here</a></p><h5>You do need to cilck on "Metroid Prime 3: Corruption Soundtrack"</h5><p class="msr">You can find the Metroid Samus Returns Soundtrack <a href="https://www.metroid-database.com/game/metroid-samus-returns/#audio">here</a></p><h5>You do need to click on "Metroid Samus Returns Soundtrack"</h5><p class="am2r">You can find the AM2R Soundtrack <a href="https://soundcloud.com/user-64632134/sets/am2r-original-soundtrack">here</a></p><p class="sm">You can find the Super Metroid Soundtrack (GAME RIP) <a href="https://www.metroid-database.com/game/super-metroid/#audio">here</a></p><h5>You do need to cilck on "SUPER METROID SOUNDTRACK (GAME RIP)"</h5><p class="mf">You can find the Metroid Prime &amp; Fusion Soundtrack (Fusion Side) <a href="https://www.metroid-database.com/game/metroid-fusion/#audio">here</a></p><h5>You do need to click on "Prime &amp; Fusion OST: Fusion Side"</h5><p class="aaron">You can find Aaron\'s remixes of terraria music <a href="https://soundcloud.com/aaron-daniel-713950580/sets/aarons-terraria-remix">here</a></p><p>You can find the Default Terraria Music <a href="https://terraria.gamepedia.com/Music">here</a></p><p>If a tracklist name is [number]-[name], then it is most likely finalized.<br>If a tracklist name is [number]_[name], then it is most likely in reconsideration.</p>'
  },
  {
    title:"Minecraft-Metroid-Addon",
    desc:"A Metroid Addon for Minecraft Bedrock (PE)<hr noshade>This is my attempt at combining Minecraft Bedrock with the Metroid Universe. Although the Wasteland part of the addon is constantly broken by minecraft updates, it's playable.",
    updatestatus: {
      status: "WIP, Partly abandoned",
      lastupdate: {
        DD:"XX",
        MM:"XX",
        YYYY:"XXXX",
        hh:"XX",
        mm:"XX"
      },
      version:"X.X.X"
    },
    css:'',
    image:"icon.png",
    info:""
  },
  {
    title:"Terraria-Music-File-Request-001",
    desc:"A Custom Terraria music file. Simple as that.",
    image:"icon.png",
    updatestatus: {
      status: "COMPLETE",
      lastupdate: {
        DD:"30",
        MM:"08",
        YYYY:"2020",
        hh:"18",
        mm:"24"
      },
      version:"1.0"
    },
    css:"a{color:#5555ff;font-weight:600;}.need-eq{color:#aa0000;font-weight:600;}.thing{background-color:#444444;border-radius:10px;padding:10px;padding-left:52px;}",
    info:'<p>Link to the file: <a href="' + 'https://github.com/AmiableMarker65/Terraria-Music-File-Requests/raw/master/request-001/Wave%20Bank.zip.001' + '">Part 1</a> <a href="' + 'https://github.com/AmiableMarker65/Terraria-Music-File-Requests/raw/master/request-001/Wave%20Bank.zip.002' + '">Part 2</a> <a href="' + 'https://github.com/AmiableMarker65/Terraria-Music-File-Requests/raw/master/request-001/Wave%20Bank.zip.003' + '">Part 3</a></p><p>You can find the Default Terraria Music <a href="https://terraria.gamepedia.com/Music">here</a></p><p>You can find the Overworld Day track <a href="https://youtu.be/rHxHqhTcAys">here</a></p><p>You can find the Boss 1 track <a href="https://youtu.be/BmE4NI5KDy8">here</a></p><p>You can find the Boss 2 track <a href="https://youtu.be/dwY9d6NoEak">here</a></p><p>You can find the Boss 3 track <a href="https://youtu.be/2-x3xMBbuJ0">here</a></p><p>You can find the Alt Overworld Day track <a href="https://youtu.be/AyUQj-mHz3s">here</a></p><p>You can find the Plantera track <a href="https://youtu.be/PiEvA7JyAIs">here</a></p><p>You can find the EoL track <a href="https://youtu.be/Rnxej4XAa6g">here</a></p>'
  },
  {
    title:"Terraria-Music-File-Request-002",
    desc:"A Custom Terraria music file. Simple as that.",
    image:"icon.png",
    updatestatus: {
      status: "COMPLETE",
      lastupdate: {
        DD:"02",
        MM:"09",
        YYYY:"2020",
        hh:"12",
        mm:"32"
      },
      version:"1.0"
    },
    css:"a{color:#5555ff;font-weight:600;}.need-eq{color:#aa0000;font-weight:600;}.thing{background-color:#444444;border-radius:10px;padding:10px;padding-left:52px;}",
    info:'<p>Link to the file: <a href="' + 'https://github.com/AmiableMarker65/Terraria-Music-File-Requests/raw/master/request-002/Wave%20Bank.zip.001' + '">Part 1</a> <a href="' + 'https://github.com/AmiableMarker65/Terraria-Music-File-Requests/raw/master/request-002/Wave%20Bank.zip.002' + '">Part 2</a> <a href="' + 'https://github.com/AmiableMarker65/Terraria-Music-File-Requests/raw/master/request-002/Wave%20Bank.zip.003' + '">Part 3</a></p><p>You can find the Default Terraria Music <a href="https://terraria.gamepedia.com/Music">here</a></p><p>Otherworld Invasion track: <a href="https://www.youtube.com/watch?v=PHDycUXzNs0">here</a></p>'
  }
];
var edittricksdb = [
  {
    text:"{{needeq}}",
    replace:'<span class="need-eq">(Possible EQ\'ing required)</span>'
  },
  {
    text:"{--",
    replace:'<li'
  },
  {
    text:"--}",
    replace:'</li>'
  }
];
