import * as Matter from "matter-js";
import {engine, boxes} from "./housePhysics";


let debug = false;
// debug = true;
// module aliases
let Engine = Matter.Engine,
    World = Matter.World,
    Vector = Matter.Vector,
    Bodies = Matter.Bodies,
    Render = Matter.Render,
    Composite = Matter.Composite,
    Constraint = Matter.Constraint,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Body = Matter.Body;


function createHouseElement() {
    let {width, height} = {width: 200, height: 40};
    width *= Math.random() + 0.5;
    height *= Math.random() + 0.5;
    
    let roofHeight = height/1.5;
    var stories = Math.floor(Math.random() * 2) + 1;
    
    
    let pos = {
        x: window.innerWidth / 2,
        y: window.innerHeight - height/2 * (stories+1)
    };
    let randomOffset = Math.random() - 0.5;
    pos.x += randomOffset * window.innerWidth * 0.9;

    var houseParts: Body = [];
    for ( var i = 0; i < stories; i++) {

        let story = createRectangle(pos, width, height);
        houseParts.push(story.body);
        pos.y -= height;
    }
    let peakDistance = Math.random() * 0.5 + 0.25;
    let roof = createTriangle(pos, width, roofHeight,peakDistance);
    houseParts.push(roof.body);
    
    
    let houseBody = Body.create( {
        parts: houseParts
    });
    
    
    
    World.add(engine.world, houseBody);

}

function createRectangle(pos, width: number, height: number) {


    let body = Bodies.rectangle(pos.x, pos.y, width, height);

    let newElement = new HouseElement(body, () => {
        const {vertices} = body;

        return `M ${width * -0.5} ${height * -0.5} 
        l ${width} 0 
        l 0 ${height} 
        l ${width} 0 
        z`;
    });
    return newElement;
}

function createTriangle(pos, width: number, height: number, peakDistance :number) {
    var firstVertex = Vector.create(0, 0);
    var secondVertex = Vector.create(width, 0);
    var thirdVertex = Vector.create(width * peakDistance, -height);
    var vertexSets: Array<Array<Matter.Vector>> = [[firstVertex, secondVertex, thirdVertex]];
    

    pos.y += height/2;
    //pos.x += width/4;
    
    let body = Bodies.fromVertices(pos.x, pos.y, vertexSets);

    let newElement = new HouseElement(body, () => {
        const {vertices} = body;
        return `M ${vertices[0].x} ${vertices[0].y} l ${vertices[1].x} ${vertices[1].y} l ${vertices[2].x} ${vertices[2].y} z`;
    });

    return newElement;
}

class HouseElement {

    constructor(public body: Matter.Body, public getSVG: () => string) {
    }

}

export {createHouseElement, HouseElement};