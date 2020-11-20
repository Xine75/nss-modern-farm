import { addPlant } from "./field.js"
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"


export const plantSeeds = (planArray) => {
    for (let i = 0; i < planArray.length; i++) {
        for (let j = 0; j < planArray[i].length; j++) {
            let seed = {}
            if (planArray[i][j] === "Potato") {
                 seed = createPotato()
            } else if (planArray[i][j] === "Wheat"){
                 seed = createWheat()
            } else if (planArray[i][j] === "Soybean"){
                 seed = createSoybean()
            } else if (planArray[i][j] === "Sunflower"){
                 seed = createSunflower()
            } else if (planArray[i][j] === "Asparagus"){
                 seed = createAsparagus()
            } else if (planArray[i][j] === "Corn") {
                 seed = createCorn()
            }
            addPlant(seed)
        }

    }


}














// In this module, define and export a plantSeeds function.
// The function must accept the year's planting plan as input (i.e. it must define a parameter).
// The plan is an array. It contains 4 arrays representing the rows in the field to be plants. Figure out how to iterate both the parent array and the child arrays.
// // Example growing plan. Actual plan is bigger.
// [
//     ["Potato", "Soybean", "Soybean", "Corn"],
//     ["Wheat", "Corn", "Wheat", "Asparagus"],
//     ["Asparagus", "Wheat", "Soybean", "Corn"],
//     ["Asparagus", "Soybean", "Potato", "Wheat"]
// ]
// As you iterate the row of food types to be planted, invoke the corresponding factory function (e.g. if the food type is "Asparagus", invoke the createAsparagus function to get an asparagus seed).
// Take that seed and add it to the array of plants in the field module.
// Checking Your Logic
// In the main.js module, invoke the function that plants all of the seeds, 
// and then get the plants array from the fields.js module. Then use console.log() to see if the plants array has been populated correctly.