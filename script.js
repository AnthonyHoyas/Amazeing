const LEVEL_1 = [
    ["*","*","*","*","*","*","*","*","*","*","*",".","*"],
    ["*","S",".",".",".",".",".","*","*",".","*",".","T"],
    ["*","*","*","*","*",".",".",".",".",".","*",".","*"],
    ["*","*","*","*","*",".","*","*","*",".","*",".","*"],
    ["*","*","*","*","*",".","*","*","*","*","*",".","*"],
    ["*","*","*","*","*",".","*","*","*","*","*",".","*"],
    ["*","*","*","*","*",".",".",".",".",".",".",".","*"],
    ["*","*","*","*","*",".","*","*","*","*","*","*","*"],
    ["*",".",".",".",".",".",".",".",".",".","*","*","*"],
    ["*",".","*","*","*","*","*","*",".",".",".","*","*"],
    ["*",".",".",".",".","*","*","*","*","*","*","*","*"],
    ["*","*","*","*","*","*","*","*","*","*","*","*","*"]
  ]
  
  const LEVEL_2 = [
    ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],
    ["*",".",".","S",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","*"],
    ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*",".","*"],
    ["*",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","*"],
    ["*",".","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],
    ["*",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","T"],
    ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"]
  ]
  
  const LEVEL_3 = [
    ["*","*","*","*","*","*","*","*"],
    ["*","*","*","*","S","*","*","*"],
    ["*","*","*","*",".","*","*","*"],
    ["*","*","*","*",".","*","*","*"],
    ["*","*","*","*",".","*","*","*"],
    ["*",".",".",".",".",".",".","*"],
    ["*",".","*","*","*","*",".","*"],
    ["*",".",".","*","*","*",".","*"],
    ["*",".",".","*","*","*",".","*"],
    ["*","*",".","*","*","*","*","*"],
    ["*","T",".","*","*","*","*","*"],
    ["*","*","*","*","*","*","*","*"]
  ]


    createMaze = () => {
        let main = document.querySelector('main')
        n = 0
        LEVEL_1.forEach(element => {
            let divx = document.createElement('div')
            divx.setAttribute('class', "divX")
        
                LEVEL_1[n].forEach(element => {
                    let divy = document.createElement('p')
                    divx.append(divy)
                    //divy.append(element)
                    if (element === '*') {
                        divy.setAttribute('class', 'wall')
                    } else if ( element === '.') {
                        divy.setAttribute('class', 'path')
                    } else if ( element === 'S') {
                        divy.setAttribute('class', 'hero')
                    } else {
                        divy.setAttribute('class', 'treasure')
                    }
                });
            main.append(divx)
            n += 1
        });
    }
    createMaze()

// going to Right

window.addEventListener('keydown', (event) => {
    if( event.key === 'ArrowRight') {
        for (const elementParent of LEVEL_1) {
            //console.log(elementParent);
            for (const element of elementParent) {
                //console.log(element);
                let xofS = elementParent.indexOf('S')
                if (element === "S") {
                    //console.log('S');
                    elementParent.splice(xofS+1, 1, "S")
                    elementParent.splice(xofS, 1, '.')
                    createMaze()
                    //console.log(elementParent[xofS+2]);
                    break
                }
                else if (elementParent[xofS+1] === "*") {
                    break;
                } 
            }
        }

    }
})

//Going To Left

window.addEventListener('keydown', (event) => {
    if( event.key === 'ArrowLeft') {
        for (const elementParent of LEVEL_1) {
            //console.log(elementParent);
            for (const element of elementParent) {
                //console.log(element);
                let xofS = elementParent.indexOf('S')
                if (element === "S") {
                    //console.log('S');
                    elementParent.splice(xofS-1, 1, "S")
                    elementParent.splice(xofS, 1, '.')
                    createMaze()
                    //console.log(elementParent[xofS+2]);
                    break
                }
                else if (elementParent[xofS-1] === "*") {
                    break;
                } 
            }
        }

    }
})

// going down


window.addEventListener('keydown', (event) => {
    if( event.key === 'ArrowDown') {
        // let hero = document.querySelector('.hero')
        
        for (const elementParent of LEVEL_1) {
            for (const element of elementParent) {
                //console.log(element);
                let xofS = elementParent.indexOf('S')
                if (element === "S" && LEVEL_1[LEVEL_1.indexOf(elementParent) - 1][1] != '*' ) {
                    console.log(xofS)
                    LEVEL_1.indexOf(elementParent)
                    elementParent.splice(xofS, 1, '.')
                    LEVEL_1[LEVEL_1.indexOf(elementParent) + 1].splice(xofS, 1, 'S')
                    console.log(LEVEL_1[LEVEL_1.indexOf(elementParent) - 1][1])
                    createMaze()
                    break
                }
                // else if ( LEVEL_1[LEVEL_1.indexOf(elementParent) - 1][1] === "*") {
                //     break;
                // } 
            }
        }

    }
})


// going up


window.addEventListener('keydown', (event) => {
    if( event.key === 'ArrowUp') {
        // let hero = document.querySelector('.hero')
        
        for (const elementParent of LEVEL_1) {
            for (const element of elementParent) {
                //console.log(element);
                let xofS = elementParent.indexOf('S')
                if (element === "S") {
                    // console.log(xofS)
                    LEVEL_1.indexOf(elementParent)
                    elementParent.splice(xofS, 1, '.')
                    console.log(LEVEL_1[LEVEL_1.indexOf(elementParent) - 1][xofS]);
                    if (LEVEL_1[LEVEL_1.indexOf(elementParent) - 1][xofS] === "*") {
                        break
                    } else {
                    LEVEL_1[LEVEL_1.indexOf(elementParent) - 1].splice(xofS, 1, 'S')
                    //console.log(LEVEL_1[LEVEL_1.indexOf(elementParent) - 1][1])
                    console.log(xofS);
                    createMaze()
                    }
                }

            }
        }

    }
})

// window.addEventListener('keydown', (event) => {
//     if( event.key === 'ArrowUp') {
//         array = []
//         for (const elementParent of LEVEL_1) {
//            // console.log(elementParent);
//             x = 0
//           //  console.log(elementParent[x+1]);
//             array.push(elementParent[x+1])
//             console.log(array.length);
//             for (const element of array) {
                
//                 let xofS = array.indexOf('S')
//                 console.log(xofS);
                
//                 if (element === "S" && array.length === 12) {
//                      console.log('S');
//                     array.splice(xofS, 1, '.')
//                     array.splice(xofS+1, 1, "S")
//                 // console.log(elementParent[0]);
//             //         elementParent.splice(xofS, 1, '.')
//                       createMaze()
//                       xofS += 1
//             //     //     //console.log(elementParent[xofS+2]);
//             //     //     break
//             //     // }
//             //     // else if (elementParent[xofS-1] === "*") {
//             //     //     break;
//               } 
//             }
//         }
//         x += 1

//     }
// })