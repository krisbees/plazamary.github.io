
function goToLevel(level) {
    const container = document.getElementById("game-container");

    if (level === "shooting") {
        container.innerHTML = `
            <h1>Level 1</h1>
            <p>Hit the target to continue!</p>
            <button onclick="goToLevel('question')">
                🎯 Target hit!
            </button>
        `;
    }

    if (level === "question") {
        container.innerHTML = `
            <h1>Question 1</h1>
            <p>Where did we first meet?</p>
            <button onclick="goToLevel('memory')">
                Answer A
            </button>
        `;
    }

    if (level === "memory") {
        container.innerHTML = `
            <h1>A little memory ❤️</h1>
            <p>I'll put a picture and a note here!</p>
        `;
    }
}
