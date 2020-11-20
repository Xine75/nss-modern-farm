console.log("Welcome to the main module")

import { createPlan } from "./plan.js"
createPlan();

const yearlyPlan = createPlan();

console.log(yearlyPlan);

// testing asparagus

import { createAsparagus } from "./seeds/asparagus.js"

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

// testing corn

import { createCorn } from "./seeds/corn.js"

const cornSeed = createCorn()
console.log(cornSeed)

// testing potato

import { createPotato } from "./seeds/potato.js"

const potatoSeed = createPotato()
console.log(potatoSeed)

// testing soybean

import { createSoybean } from "./seeds/soybean.js"

const soybeanSeed = createSoybean()
console.log(soybeanSeed)

// testing sunflower

import { createSunflower } from "./seeds/sunflower.js"

const sunflowerSeed = createSunflower()
console.log(sunflowerSeed)

// testing wheat

import { createWheat } from "./seeds/wheat.js"

const wheatSeed = createWheat()
console.log(wheatSeed)

import { addPlant } from "./field.js"
addPlant(wheatSeed);

import { usePlants } from "./field.js"
const plantSeed = usePlants()
usePlants();



console.log(plantSeed)


