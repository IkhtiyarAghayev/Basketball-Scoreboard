let homeBoard = document.querySelector(".displayItem.home");
let guestBoard = document.querySelector(".displayItem.guest");
let homeBtns = document.querySelectorAll('.btnContainer.homeBtns button');
let guestBtns = document.querySelectorAll('.btnContainer.guestBtns button');
let resetBtn = document.querySelector(".mainContainer .resetBtn");
let homeScore = 0;
let guestScore = 0;

function initializeListeners() {
    homeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            increaseByNum(homeBoard, btn.textContent.slice(1));
            showLeadingBoard();
        });
    });
    guestBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            increaseByNum(guestBoard, btn.textContent.slice(1));
            showLeadingBoard();
        });
    });
    resetBtn.addEventListener('click', () => {
        resetBoards();
        showLeadingBoard();
    });
}

initializeListeners();

function increaseByNum(scoreBoard, num) {
    if (scoreBoard.classList.value.includes('home')) {
        homeScore += +num;
        scoreBoard.textContent = homeScore;
    } else {
        guestScore += +num;
        scoreBoard.textContent = guestScore;
    }
}

function resetBoards() {
    homeBoard.textContent = 0;
    guestBoard.textContent = 0;
    homeScore = 0;
    guestScore = 0;
}

function showLeadingBoard() {
    if (homeScore == guestScore) {
        guestBoard.nextElementSibling.classList.add('hidden');
        homeBoard.nextElementSibling.classList.add('hidden');
        return;
    } else if (homeScore > guestScore) {
        guestBoard.nextElementSibling.classList.add('hidden');
        homeBoard.nextElementSibling.classList.remove('hidden');
    } else {
        homeBoard.nextElementSibling.classList.add('hidden');
        guestBoard.nextElementSibling.classList.remove('hidden');
    }
}