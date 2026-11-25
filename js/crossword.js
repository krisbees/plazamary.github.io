function startCrossword() {
    const layout = [
        "......H.",
        "......I.",
        "KRISTEN.",
        ".O..Y.G.",
        ".C..L.E.",
        ".K..E...",
        ".Y.BREAD",
        ".....L..",
        ".....L..",
        "....MAY."
    ];

    const numbers = {
        "0,6": 1,
        "2,0": 2,
        "2,1": 3,
        "2,4": 4,
        "6,3": 5,
        "6,5": 6,
        "9,4": 7
    };

    const container = document.getElementById("game-container");

    container.innerHTML = `
        <h1>The Beginning ♡</h1>
        <p>Complete the crossword to unlock a surprise!</p>

        <div id="crossword" style="
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            gap: 2px;
            max-width: 360px;
            margin: 25px auto;
        "></div>

        <div style="
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
            text-align: left;
            font-size: 16px;
        ">
            <div>
                <h3>Across</h3>
                <p>2. Who loves you the mostest??</p>
                <p>5. First baked good I made for you</p>
                <p>7. The month we met</p>
            </div>
            <div>
                <h3>Down</h3>
                <p>1. Where we met</p>
                <p>3. Amaze! Amaze!</p>
                <p>4. Who said I love you first</p>
                <p>6. The name of Kristen's Pillow Pet</p>
            </div>
        </div>

        <dialog id="reward">
            <h2>You did it! ♡</h2>
            <img src="assets/images/IMG_4007.jpeg"
                 style="width: 100%; max-width: 350px;">
            <p>Cheers!</p>
            <button onclick="this.closest('dialog').close(); goToLevel('puzzle')">
                Next Level ♡
            </button>
        </dialog>
    `;

    const grid = document.getElementById("crossword");
    const inputs = [];

    layout.forEach((line, row) => {
        [...line].forEach((letter, col) => {
            const square = document.createElement("div");

            square.style.cssText = `
                aspect-ratio: 1;
                position: relative;
                min-width: 0;
                box-sizing: border-box;
            `;

            if (letter !== ".") {
                square.style.border = "1px solid #c77d91";
                square.style.background = "#fffaf8";

                const number = numbers[`${row},${col}`];

                if (number) {
                    const label = document.createElement("span");
                    label.textContent = number;
                    label.style.cssText = `
                        position: absolute;
                        top: 2px;
                        left: 3px;
                        font-size: 10px;
                        pointer-events: none;
                    `;
                    square.appendChild(label);
                }

                const input = document.createElement("input");
                input.maxLength = 1;
                input.autocomplete = "off";
                input.dataset.answer = letter;

                input.style.cssText = `
                    width: 100%;
                    height: 100%;
                    box-sizing: border-box;
                    border: none;
                    background: transparent;
                    text-align: center;
                    font-size: 22px;
                    color: #603d4b;
                    padding: 5px 0 0;
                `;

                input.addEventListener("input", () => {
                    input.value = input.value
                        .replace(/[^a-z]/gi, "")
                        .toUpperCase();

                    const solved = inputs.every(cell =>
                        cell.value === cell.dataset.answer
                    );

                    if (solved) {
                        document.getElementById("reward").showModal();
                    }
                });

                inputs.push(input);
                square.appendChild(input);
            }

            grid.appendChild(square);
        });
    });
}