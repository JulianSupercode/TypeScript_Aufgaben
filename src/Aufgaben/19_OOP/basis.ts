// import Alien from "./alien";

// const alien1 = new Alien ("alien1", "red",);
// const alien2 = new Alien ("alien2","green");
// const alien3 = new Alien ("alien3","green" );

// alien1.planet = "Mars"
// alien1.galaxy = "Universum"

// alien2.planet ="Jupiter"
// alien2.galaxy ="Universum"

// console.log(`Alien1 : Name = ${alien1.name}`);

import Song from "./song"
import SongWithUnknownArtist from "./songunknown";

const song1 = new Song ("Happy", "Michael")
const song2 = new Song ("Simply the Best", "Tina")

song1.durationSeconds = 120
song2.durationSeconds = 300

const song3 = new SongWithUnknownArtist ("Say Hello")
song3.setArtist ("Julian")

console.log(song3);