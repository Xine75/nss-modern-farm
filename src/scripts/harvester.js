



let grossOutput = []
export const harvestPlants = (plantsOutput) => {
    for (let plant of plantsOutput){



    
    if (plant.type === "Corn"){
        let cornHalf = plant.output/2;

        for (let i=0; i < cornHalf; i++){
                grossOutput.push(plant) 
        }
            } else {
                    for (let i=0; i < plant.output; i++){
                        grossOutput.push(plant)
                    }
                
            }

        } 
        return grossOutput
    }
