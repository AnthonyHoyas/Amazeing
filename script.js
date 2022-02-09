// cont

const _initTime = Date.now()

let score = document.getElementById('score')

const LEVEL_1 = [
    ["*","*","*","*","*","*","*","*","*","*","*",".","*"],
    ["*","S",".",".",".",".",".","*","*",".","*",".","T"],
    ["*","*","*","*","*",".",".",".",".",".","*",".","*"],
    ["*","*","*","*","*",".","*","*","*",".","*",".","*"],
    ["*","*","*","*","*","P","*","*","*","*","*",".","*"],
    ["*","*","*","*","*",".","*","*","*","*","*",".","*"],
    ["*","*","*","*","*",".",".",".",".",".","P",".","*"],
    ["*","*","*","*","*",".","*","*","*","*","*","*","*"],
    ["*",".",".",".",".",".",".",".",".",".","*","*","*"],
    ["*",".","*","*","*","*","*","*",".","E",".","*","*"],
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




// function
getElapsedTime = () => {
    return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
  }

clear = () =>  {  
    let x = document.getElementById('maze')
    x.remove()
}

goinRightMaze1 = () => {

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
            else if(elementParent[xofS+1] === "T")  {
                console.log('presque');
                alert('Well played ! Thanks to you, Jack will invest all his money in Bitcoin')
                clear()
                maze2()
                let yourTime = document.createElement('div')
                yourTime.setAttribute('class','time')
                let timeText = document.createTextNode(`Well played you did the first stage in ${getElapsedTime()}`)
                score.append(yourTime)
                yourTime.append(timeText)
                console.log(getElapsedTime())
                break
    
            }
        }
    }
}

goingLeftMaze1 = () => {
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

goingDownMaze1 = () => {
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

goingUpMaze1 = () => {
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



maze2 = () => {
    let main = document.querySelector('main')
        let maze = document.createElement('div')
        maze.setAttribute('id', 'maze')
        main.append(maze)

        n = 0
        LEVEL_2.forEach(element => {
            let divx = document.createElement('div')
            divx.setAttribute('class', "divX")
        
                LEVEL_2[n].forEach(element => {
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
        alert('working on lvl2')
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
                    } else if (element === 'T') {
                        divy.setAttribute('class', 'treasure')
                    } else if (element === 'P') {
                        divy.setAttribute('class', 'coin')
                    } else {
                        divy.setAttribute('class', 'skeleton')
                    }
                });
            maze.append(divx)
            n += 1
        });
}
  


//event 


window.addEventListener('keydown', (event) => {
    if( event.key === " ") {
        clear()
    } 
})

window.addEventListener('keydown', (event) => {
    if( event.key === 'ArrowRight') {
        goinRightMaze1()  
    }
})

window.addEventListener('keydown', (event) => {
    if( event.key === 'ArrowLeft') {
        goingLeftMaze1()
    }
})


window.addEventListener('keydown', (event) => {
    if( event.key === 'ArrowDown') {
        goingDownMaze1()
    }
})


window.addEventListener('keydown', (event) => {
    if( event.key === 'ArrowUp') {
        clear()
        goingUpMaze1()
    }
})

window.addEventListener('keydown', (event) => {
    if( event.key === " ") {
        clear()
    } 
})

//funcitons

createMaze()
