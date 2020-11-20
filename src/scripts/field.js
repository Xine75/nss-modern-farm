
const fieldArray = [];

export const addPlant = (seedObject) => {
    if (Array.isArray(seedObject) === true) {
        const newCornPlant = fieldArray.push({
            type: "Corn",
            height: 180,
            output: 6
            },
        
            {
            type: "Corn",
            height: 180,
            output: 6
            })
                

        }
        else {
            const newPlant = fieldArray.push(seedObject)
        }
    }

    export const usePlants = () => {
        return fieldArray.slice()
    }
