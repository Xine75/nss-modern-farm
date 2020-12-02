import { createPlan } from "./plan.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants} from "./harvester.js"
import { Catalog } from "./catalog.js"

const yearlyPlan = createPlan();

plantSeeds(yearlyPlan);
console.log(usePlants())
const plantsToHarvest = usePlants();

const harvest = harvestPlants(plantsToHarvest)
console.log("Harvester", harvest)

console.log("Yearly Plan!", yearlyPlan);


testing = Catalog()
console.log(testing)

// // testing asparagus

// import { createAsparagus } from "./seeds/asparagus.js"

// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)

// // testing corn

// import { createCorn } from "./seeds/corn.js"

// const cornSeed = createCorn()
// console.log(cornSeed)

// // testing potato

// import { createPotato } from "./seeds/potato.js"

// const potatoSeed = createPotato()
// console.log(potatoSeed)

// // testing soybean

// import { createSoybean } from "./seeds/soybean.js"

// const soybeanSeed = createSoybean()
// console.log(soybeanSeed)

// // testing sunflower

// import { createSunflower } from "./seeds/sunflower.js"

// const sunflowerSeed = createSunflower()
// console.log(sunflowerSeed)

// // testing wheat

// import { createWheat } from "./seeds/wheat.js"

// const wheatSeed = createWheat()
// console.log(wheatSeed)

// // importing addPlant and usePlants and testing with wheatSeed

// import { addPlant } from "./field.js"
// addPlant(wheatSeed);


// // const plantSeed = usePlants()




// // console.log(plantSeed)


