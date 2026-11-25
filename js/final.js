
function startFinal() {

    // ===== CUSTOMIZE THIS SECTION =====

    const title = "My favorite person ♡";

    const photos = [
        "assets/images/IMG_4221.jpeg",
        "assets/images/IMG_4396.jpeg",
        "assets/images/IMG_4446.jpeg",
        "assets/images/IMG_4464.jpeg",
        "assets/images/IMG_4569.jpeg",
        "assets/images/IMG_4602.jpeg",
        "assets/images/IMG_4657.jpeg"
    ];

    const captions = [
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ];

    const greeting = "To my love,";

    const note = `
        6 months baby woohoo!!!!

        Before I met you, I thought I had felt what love really feels like. But after being with you, I have come across something I never have before. A guy who cares, is funny, loving, and cares so much about the people around him. I am more grateful for you than words can describe.

        While it's only been some months, I hope we have many many more ahead of us. I want to be a better person for you, and share my life with you. There is no other person I would want by my side. I LOVE YOU A MILLION <3
    `;

    const signature = "Forever yours,\nKristen ♡";

    const ending = "Adventure complete. Our story continues.";

    // ===== END OF CUSTOMIZATION =====

    const container = document.getElementById("game-container");

    container.innerHTML = `
        <div id="final-page">

            <p class="final-label">THE FINAL LEVEL</p>

            <h1 id="final-title"></h1>

            <div id="photo-montage"></div>

            <div class="love-letter">
                <h2 id="letter-greeting"></h2>
                <div id="letter-note"></div>
                <p id="letter-signature"></p>
            </div>

            <div class="final-hearts">♡ ♡ ♡</div>

            <p id="final-ending"></p>

        </div>
    `;

    document.getElementById("final-title").textContent = title;
    document.getElementById("letter-greeting").textContent = greeting;
    document.getElementById("letter-note").textContent = note.trim();
    document.getElementById("letter-signature").textContent = signature;
    document.getElementById("final-ending").textContent = ending;

    const montage = document.getElementById("photo-montage");

    const rotations = [-6, 4, 7, -4, 5, -7, 4];

    photos.forEach((photo, index) => {
        const polaroid = document.createElement("div");

        polaroid.className = "polaroid";

        polaroid.style.setProperty(
            "--rotation",
            `${rotations[index]}deg`
        );

        polaroid.style.animationDelay = `${index * 0.2}s`;

        const image = document.createElement("img");
        image.src = photo;
        image.alt = `Our memory ${index + 1}`;

        const caption = document.createElement("p");
        caption.textContent = captions[index] || "♡";

        polaroid.appendChild(image);
        polaroid.appendChild(caption);

        montage.appendChild(polaroid);
    });

    window.scrollTo(0, 0);
}
