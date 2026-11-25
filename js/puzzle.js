
function startPuzzle() {
    const container = document.getElementById("game-container");
    const photo = "assets/images/IMG_5814.jpeg";

    let tiles = Array.from({ length: 9 }, (_, i) => i);
    let selected = null;
    let completed = false;
    let moves = 0;

    // Shuffle the tiles
    do {
        for (let i = tiles.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
        }
    } while (tiles.every((tile, i) => tile === i));

    container.innerHTML = `
        <p>LEVEL 2</p>
        <h1>Put us back together ♡</h1>
        <p>Click two pieces to swap them!</p>

        <div id="photo-puzzle"></div>

        <p id="move-count">Moves: 0</p>

        <div id="puzzle-message" hidden>
            <h2>We're better together ♡</h2>
            <p>No matter what, I'll always find my way back to you.</p>

            <button onclick="goToLevel('final')">
                One last thing... ♡
            </button>
        </div>
    `;

    const board = document.getElementById("photo-puzzle");

    function renderPuzzle() {
        board.innerHTML = "";

        tiles.forEach((tile, index) => {
            const piece = document.createElement("div");

            piece.className = "puzzle-piece";

            piece.style.backgroundImage = `url('${photo}')`;

            piece.style.backgroundPosition = `
                ${(tile % 3) * 50}%
                ${Math.floor(tile / 3) * 50}%
            `;

            if (selected === index) {
                piece.classList.add("selected");
            }

            piece.addEventListener("click", () => {
                selectTile(index);
            });

            board.appendChild(piece);
        });
    }

    function selectTile(index) {
        if (completed) return;

        if (selected === null) {
            selected = index;
        } else if (selected === index) {
            selected = null;
        } else {
            [tiles[selected], tiles[index]] =
                [tiles[index], tiles[selected]];

            selected = null;
            moves++;

            document.getElementById("move-count")
                .textContent = `Moves: ${moves}`;
        }

        renderPuzzle();
        checkPuzzle();
    }

    function checkPuzzle() {
        const solved = tiles.every((tile, i) => tile === i);

        if (solved) {
            completed = true;

            board.classList.add("solved");

            document.getElementById("puzzle-message")
                .hidden = false;
        }
    }

    renderPuzzle();
}
