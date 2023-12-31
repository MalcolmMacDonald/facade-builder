import * as Matter from "matter-js";
import { render } from "react-dom";
import {createHouseElement, HouseElement} from "./houseElement";


let debug = true;
// debug = true;
// module aliases
let Engine = Matter.Engine,
    World = Matter.World,
    Vector = Matter.Vector,
    Bodies = Matter.Bodies,
    Render = Matter.Render,
    Constraint = Matter.Constraint,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse;

// create an engine
let engine = Engine.create({
    positionIterations: 5,
    constraintIterations: 5
    //   enableSleeping: true
});
let boxes : HouseElement = [];


let scratchSvg = document.getElementById("scratch");
const textStyle = `font-size: 80px; alignment-baseline: middle; text-anchor: middle;`;



var renderer;
if (debug) {
    // create renderer
    renderer = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: window.innerWidth,
            height: window.innerHeight,
            wireframes: false
        }
    });

    Render.run(renderer);
}
function startPhysics(box) {
    console.log("Testing");
    // add mouse control
       let touch = document.getElementById("touch");
       if (debug) {
           touch.style = "z-index:-4";
       }
       var mouse = Mouse.create(debug ? render.canvas : touch),
           mouseConstraint = MouseConstraint.create(engine, {
               mouse: mouse,
               constraint: {
                   // allow bodies on mouse to rotate
                   angularStiffness: 0,
                   render: {
                       visible: false
                   }
               }
           });

    World.add(engine.world, mouseConstraint);
       // engine.world.gravity.y = 0.3;
   
       // keep the mouse in sync with rendering
       // render.mouse = mouse;
   
   
       let ground = Bodies.rectangle(
           200,
           window.innerHeight + 15,
           window.innerWidth * 3,
           60,
           {
               isStatic: true
           }
       );
       let ceiling = Bodies.rectangle(200, -25, window.innerWidth * 3, 50, {
           isStatic: true
       });
       let leftWall = Bodies.rectangle(-50, 200, 100, 4000, { isStatic: true });
       let rightWall = Bodies.rectangle(window.innerWidth + 50, 200, 100, 4000, {
           isStatic: true
       });
   
       // add all of the bodies to the world
       World.add(engine.world, [ground, ceiling, leftWall, rightWall]);
       //   World.add(engine.world, [ground, leftWall, rightWall]); //, leftRamp, rightRamp]);
   
       // run the engine
       Engine.run(engine);
   
       let radToDeg = r => r * (180 / Math.PI);
       Matter.Events.on(engine, "afterUpdate", () => {
           const paths = boxes.map((houseElement, index) => {
               const {body,getSVG} = houseElement;
               const { vertices, position, angle } = body;
               const pathText = getSVG();
               let fillColor = "rgba(255,230,230)";
               const style = `fill: ${fillColor}; fill-opacity: 0; stroke: grey; stroke-width: 1px; stroke-opacity: 0.5`;
               const degrees = radToDeg(angle);
               const transform = `translate(${position.x}, ${position.y}) rotate(${degrees})`;
               let path = null;
                path = `<path d="${pathText}" style="${style}"></path>`;
               return ` <g transform="${transform}" >
           ${path}
           <text style="${textStyle}"id>AAA</text>
         </g>`;
           });
   
           if (!debug) {
               box.innerHTML = ` ${paths.join("\n")} `;
           }
       });
       return createHouseElement;
     /*  let lastBody;
       return {
           addWord: (word: string) => {
               let { width, height } = renderedTextSize(word);
               // width += 10;
               if (word.length < 1 || word == " ") {
                   width += 30;
                   height += 20;
                   lastBody = undefined;
                   return;
               }
               height *= 0.7;
   
               let pos = {
                   x: window.innerWidth / 4 + Math.random() * 0,
                   y: window.innerHeight * 0.1 + Math.random() * 0
               };
               if (lastBody) {
                   pos = Vector.clone(lastBody.vertices[1]);
                   pos.y += height / 2;
               }
               let body = Bodies.rectangle(pos.x, pos.y, width, height);
               body._width = width;
               body._height = height;
               // body.frictionAir = 0.03;
               body.label = word;
               body.torque = Math.random() - 0.5;
               body.force = { x: -0.1, y: (Math.random() - 0.5) * 0.1 };
               boxes.push(body);
               if (lastBody && word != " ") {
                   var constraint = Constraint.create({
                       bodyA: body,
                       pointA: { x: -body._width / 2, y: -body._height / 2 },
                       bodyB: lastBody,
                       pointB: Vector.sub(lastBody.vertices[1], lastBody.position),
                       // pointB: { x: lastBody._width / 2, y: -body._height / 2 },
                       stiffness: 0.002,
                       damping: 0.9,
                       length: 5
                   });
                   // lastBody.angle = 0;
                   // debugger;
                   var constraint2 = Constraint.create({
                       bodyA: body,
                       pointA: { x: -body._width / 2, y: body._height / 2 },
                       bodyB: lastBody,
                       pointB: Vector.sub(lastBody.vertices[2], lastBody.position),
                       stiffness: 0.002,
                       damping: 0.9,
                       length: 5
                   });
                   body.c1 = constraint;
                   body.c2 = constraint2;
                   World.add(engine.world, [body, constraint, constraint2]);
               } else {
                   World.add(engine.world, [body]);
               }
               lastBody = body;
   
               return body;
           },
           removeWord: () => {
               lastBody = undefined;
               let box = boxes[boxes.length - 1];
               if (!box || !box._width) return;
               //   box.isSleeping = false;
               Matter.Body.setVelocity(box, { x: 0, y: -5 });
               box.pulse = true;
               //   console.log("a");
               // window.setTimeout(() => {
               // console.log("c");
               World.remove(engine.world, box);
   
               boxes = boxes.filter(b => b != box);
               if (box.c1) {
                   World.remove(engine.world, [box.c1, box.c2]);
               }
               // }, 100);
   
               return box.label;
           }
     };*/
}
export { startPhysics, engine, boxes};
