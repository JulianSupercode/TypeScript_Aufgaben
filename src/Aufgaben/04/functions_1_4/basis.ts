function showHero(heroName:string,heroPower:string,heroEnemy:string):void {

    const nameOutput = (`Meine:e Lieblingsheld:in ist:${heroName}`);
    const powerOutput = (`Er/sie hat die Fähigkeit:${heroPower}`);
    const enemyOutput = (`Sein/ihr größte/r Gegener:in ist:${heroEnemy}`);

console.log(`${nameOutput}. ${powerOutput}). ${enemyOutput}`);

}

showHero ("Superman","Häuser zu zerstören", "Batmann")