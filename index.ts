

import { startPhysics } from "./src/housePhysics";

let box = document.getElementById("draw-animation") as HTMLCanvasElement;
let createHouseElement = startPhysics(box);


window.addEventListener("keypress", (ev: KeyboardEvent) => {
    let str = ev.key;
    if (ev.key == "Enter") {
        str = " ";
    }
    createHouseElement();
});
/*
// words.slice(0, 10).map(addWord);
*/
