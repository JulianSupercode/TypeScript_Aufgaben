const artworks :string [] = ["Die Sternennacht - Vincent van Gogh",
"Guernica - Pablo Picasso",
"Die Geburt der Venus - Sandro Botticelli",
"Die Nachtwache - Rembrandt",
"Die Mona Lisa - Leonardo da Vinci",
"Die Kartoffelesser - Vincent van Gogh",
"Die Schrei - Edvard Munch",
"Das letzte Abendmahl - Leonardo da Vinci",
"Die freudige Botschaft - James Tissot",
"Der Garten der Lüste - Hieronymus Bosch"]

const artworkDates :string[]=["Die Sternennacht - 1889",
"Guernica - 1937",
"Die Geburt der Venus - 1486",
"Die Nachtwache - 1642",
"Die Mona Lisa - 1503",
"Die Kartoffelesser - 1885",
"Die Schrei - 1893",
"Das letzte Abendmahl - 1495",
"Die freudige Botschaft - 1885",
"Der Garten der Lüste - 1505"
]

function suche(artworkName: string){
    const ergSucheArtwork = artworks.find((artwork : string)=> artwork.startsWith(artworkName))
    const ergSucheArtworkDate = artworkDates.find((artworkDate : string)=> artworkDate.startsWith(artworkName))

    console.log(ergSucheArtwork, ergSucheArtworkDate);
    if(ergSucheArtwork && ergSucheArtworkDate){
        let sucheArtworkSplit = ergSucheArtwork.split("-")
        let kuenstlerName = sucheArtworkSplit[1]

        let sucheArtworkDateSplit = ergSucheArtworkDate.split("-")
        let artworkDate = sucheArtworkDateSplit[1]

        console.log(sucheArtworkSplit[0] + " wurde von" + kuenstlerName + " im Jahre" + artworkDate + " gemalt");

    }
    else{
        console.log("Artwork "+artworkName+" not found" );
    }
}
suche('Die Geburt');

