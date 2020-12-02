import { harvestPlants } from "./harvester.js"



export const Catalog = () =>{

    let plantIcons = []

    let plantArray = harvestPlants()


    
    for (const plantImage of plantArray){

        let html = ` <section class="plant">${seed.type}</section>`

        plantIcons.push(html)
        
        
    }
    const contentElement = document.querySelector(".container")

    contentElement.innerHTML += plantIcons.join("")
    return contentElement
}

