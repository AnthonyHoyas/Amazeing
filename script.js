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



  clear = () =>  {  
    let x = document.getElementById('maze')
    x.remove()
    // let main = document.querySelector('main')
    // for (let i = 4; i >=1 ; i--) {
    //     console.log('hi');
    //     x.remove()
        
    // }
}


    createMaze = () => {
        let main = document.querySelector('main')
        let maze = document.createElement('div')
        maze.setAttribute('id', 'maze')
        main.append(maze)
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
            maze.append(divx)
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
                    clear()
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
                    clear()
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

        
        for (const elementParent of LEVEL_1) {
            for (const element of elementParent) {
                let xofS = elementParent.indexOf('S')
                if (element === "S" ) {
                    console.log(LEVEL_1[LEVEL_1.indexOf(elementParent) + 2][xofS]);
                    if ((LEVEL_1[LEVEL_1.indexOf(elementParent) + 1][xofS]) === '*') {
                        //createMaze()
                        break
                    } else {
                        LEVEL_1[LEVEL_1.indexOf(elementParent) + 1].splice(xofS, 1, 'S')
                        elementParent.splice(xofS, 1, '.')
                        clear()
                    createMaze()
                    return
                    }
                }

            }
        }

    }
})


// going up


window.addEventListener('keydown', (event) => {
    if( event.key === 'ArrowUp') {
        clear()

        for (const elementParent of LEVEL_1) {
            for (const element of elementParent) {
                let xofS = elementParent.indexOf('S')
                if (element === "S") {
                    LEVEL_1.indexOf(elementParent)
                    console.log(LEVEL_1[LEVEL_1.indexOf(elementParent) - 1][xofS]);
                    if (LEVEL_1[LEVEL_1.indexOf(elementParent) - 1][xofS] === "*") {
                        createMaze()

                        return
                    } else {
                        elementParent.splice(xofS, 1, '.')
                    LEVEL_1[LEVEL_1.indexOf(elementParent) - 1].splice(xofS, 1, 'S')
                    console.log(xofS);
                    //clear()
                    createMaze()
                    return
                    }
                }

            }
        }

    }
})

window.addEventListener('keydown', (event) => {
    if( event.key === " ") {
    } 
})