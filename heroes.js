function registerForHeroes(arr) {
    class Hero {
        constructor(name, level, inventory) {
            this.name = name;
            this.level = level;
            this.inventory = inventory
        }
    }
    let list = [];
    for (let i = 0; i < arr.length; i++) {
        let splited = arr[i].split(' / ');
        let items = splited[2].split(', ')
            .sort((a, b) => a.localeCompare(b))
            .join(', ');
        let hero = new Hero(splited[0], splited[1], items);
        list.push(hero);
    }
    list.sort((a,b) => a.level - b.level);
    list.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.inventory}`);
    })
}

registerForHeroes([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
])