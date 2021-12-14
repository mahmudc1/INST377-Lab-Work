document.addEventListener('DOMContentLoaded,' () => {
    const bird = document.querySelector('.bird')
    const gameDisplay = document.querySelector('.game-container')
    const ground = document.querySelector('.ground')

    let birdLeft = 220
    let birdBottom = 100
    let gravity = 2
    let isGameOver = false
    let gap = 600

    function startFame() {
        birdBottom -= gravity
        bird.style.bottom = birdBottom + 'px'
        bird.style.left = birdLeft + 'px'
    }
    let gameTimerID = setInterval (startGame, 20)

    function control(e) { 
        if (birdBottom <500) birdBottom += 50
        bird.style.bottom = birdBottom + 'px'
        console.log(birdBottom)
    }
    document.addEventListener('keyup', control)
    function generateObsteacle() {
        let obstacleleft = 500
        let randomHeight =math.random() * 60
        let obstaclebottom = randomHeight
        const obstacle = document.createElement('div')
        const topObstacle = document.createElementNS('div')
        if (!isGameover) {
            obstacle.classList.add('obstacle')
            topObstacle.classList.add('topObstacle')
        }
    gamedisplay.appendchild(obstacle)
    gamedisplay.appendchild(topObstacle)
    obstacle.style.left=obstacleleft + 'px'
    top0bstacle.style.left = obstacleleft+ 'px'
    obstacle.style.bottom = obstaclebottom + 'px'
    top0obstacle.style.bottom = obstaclebottom + gap + 'px'

    function move0obstacle(){
        obstacleleft -=2
        obstacle.style.left = obstacleleft + 'px'

        if (obstacleleft === -60) {
            clearInterval(timerID)
            gamedisplay.removechild(obstacle)
            gamedisplay.removechild(topObstacle)
        }

        if (obstacleleft > 200 && obstacleleft < 280 && birdleft === 220 && 
            (birdbottom < obstaclebottom + 153 || birdbottom>obstaclebottom + gap - 200)||
            birdbottom ===0){
                gameover()
                clearInterval(timedrid)
            }
        }
        let timerid=setinterval(moveObstacle, 20)
        if(!isgameover) settimeout(generateObstacle, 3000)
    }
    generationObstacle()

    function gameOver()
        clearInterval(gametimerID)
        isgameover = true;
        document.removeeventlistener('keyup', control)
    }
})
