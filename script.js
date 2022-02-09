// cont

const _initTime = Date.now()

var LEVEL = 10

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
waitaminute = () => {
    let wait = document.createElement('div')
    let main = document.querySelector('main')
    wait.setAttribute('class','wait')
    main.append(wait)
    main.append('wait papillion pas trop fast')

}
bravo = () => {
    alert('Well played ! Thanks to you, Jack will invest all his money in Bitcoin')
    clear()
    maze2()
    let yourTime = document.createElement('div')
    yourTime.setAttribute('class','time')
    let timeText = document.createTextNode(`Well played you did the first stage in ${getElapsedTime()}`)
    score.append(yourTime)
    yourTime.append(timeText)
    LEVEL = 20

}
maze3 = () => {
    console.log('minute papillion');
}
bravo2 = () => {
    alert('Well played ! Thanks to you, Jack will invest all his money in Bitcoin and Etherum')
    clear2()
    maze3()
    let yourTime = document.createElement('div')
    yourTime.setAttribute('class','time2')
    let timeText = document.createTextNode(`Well played you did the second stage in ${getElapsedTime()}`)
    score.append(yourTime)
    yourTime.append(timeText)
    LEVEL = 30

}
getElapsedTime = () => {
    return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
  }

clear = () =>  {  
    let x = document.getElementById('maze')
    x.remove()
}
clear2 = () =>  {  
    let x = document.getElementById('maze2')
    x.remove()
}

goinRightMaze1 = () => {

    for (const elementParent of LEVEL_1) {
        //console.log(LEVEL_1);
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
                bravo()
            }
        }
    }
}
goinRightMaze2 = () => {

    for (const elementParent of LEVEL_2) {
        //console.log(elementParent);
        for (const element of elementParent) {
            //console.log(element);
            let xofS = elementParent.indexOf('S')
            if (element === "S") {
                //console.log('S');
                elementParent.splice(xofS+1, 1, "S")
                elementParent.splice(xofS, 1, '.')
                clear2()
                maze2()
                //console.log(elementParent[xofS+2]);
                break
            }
            else if (elementParent[xofS+1] === "*") {
                break;
            }
            else if(elementParent[xofS+1] === "T")  {
                bravo2()
                waitaminute()
    
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
goingLeftMaze2 = () => {
    for (const elementParent of LEVEL_2) {
        //console.log(elementParent);
        for (const element of elementParent) {
            //console.log(element);
            let xofS = elementParent.indexOf('S')
            if (element === "S") {
                //console.log('S');
                elementParent.splice(xofS-1, 1, "S")
                elementParent.splice(xofS, 1, '.')
                clear2()
                maze2()
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
goingDownMaze2 = () => {
    for (const elementParent of LEVEL_2) {
        for (const element of elementParent) {
            let xofS = elementParent.indexOf('S')
            if (element === "S" ) {
                console.log(LEVEL_2[LEVEL_2.indexOf(elementParent) + 2][xofS]);
                if ((LEVEL_2[LEVEL_2.indexOf(elementParent) + 1][xofS]) === '*') {
                    //createMaze()
                    break
                } else {
                    LEVEL_2[LEVEL_2.indexOf(elementParent) + 1].splice(xofS, 1, 'S')
                    elementParent.splice(xofS, 1, '.')
                    clear2()
                    maze2()
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
goingUpMaze2 = () => {
    for (const elementParent of LEVEL_2) {
        for (const element of elementParent) {
            let xofS = elementParent.indexOf('S')
            if (element === "S") {
                LEVEL_2.indexOf(elementParent)
                console.log(LEVEL_2[LEVEL_2.indexOf(elementParent) - 1][xofS]);
                if (LEVEL_2[LEVEL_2.indexOf(elementParent) - 1][xofS] === "*") {
                    maze2()
                    return
                } else {
                elementParent.splice(xofS, 1, '.')
                LEVEL_2[LEVEL_2.indexOf(elementParent) - 1].splice(xofS, 1, 'S')
                console.log(xofS);
                //clear2()
                maze2()
                return
                }
            }
        }
    }
}



maze2 = () => {
    let main = document.querySelector('main')
        let maze = document.createElement('div')
        maze.setAttribute('id', 'maze2')
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
                        divy.setAttribute('class', 'wall2')
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
    if( event.key === 'ArrowRight' && LEVEL == 10) {
        goinRightMaze1()  
    } else if( event.key === 'ArrowRight' && LEVEL == 20) {
        goinRightMaze2()
    }
})

window.addEventListener('keydown', (event) => {
    if( event.key === 'ArrowLeft' && LEVEL == 10) {
        goingLeftMaze1()
    } else if ( event.key === 'ArrowLeft' && LEVEL == 20) {
       console.log('hi');
        goingLeftMaze2()
    }
})


window.addEventListener('keydown', (event) => {
    if( event.key === 'ArrowDown' && LEVEL == 10) {
        goingDownMaze1()
    } else if ( event.key === 'ArrowDown' && LEVEL == 20) {
        goingDownMaze2()
     }
})


window.addEventListener('keydown', (event) => {
    if( event.key === 'ArrowUp' && LEVEL == 10 ) {
        clear()
        goingUpMaze1()
    } else if ( event.key === 'ArrowUp' && LEVEL == 20) {
        console.log('heelo there');
        clear2()
        goingUpMaze2()
    }
})

window.addEventListener('keydown', (event) => {
    if( event.key === " ") {
        clear()
    } 
})

//funcitons

createMaze()
