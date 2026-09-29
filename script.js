function updateTime() {
    const currentTime = new Date().toLocaleString();
    document.querySelector("#timeElement").innerHTML = currentTime;
}

updateTime();
setInterval(updateTime, 1000);


//ALL WINDOW SETUP

setupWindow(
    "notesIcon",
    "notes",
    "notesclose",
    "notesheader"
);

setupWindow(
    "helloIcon",
    "hello",
    "helloclose",
    "helloheader"
);

setupWindow(
    "myMondayIcon",
    "myMonday",
    "myMondayclose",
    "myMondayheader"
);

setupWindow(
    "magicPotionIcon",
    "magicPotion",
    "magicPotionclose",
    "magicPotionheader"
);

setupWindow(
    "MAPIcon",
    "MAP",
    "MAPclose",
    "MAPheader"
);

setupWindow(
    "riseInDangerIcon",
    "riseInDanger",
    "riseInDangerclose",
    "riseInDangerheader"
);

setupWindow(
    "roboEscapeIcon",
    "roboEscape",
    "roboEscapeclose",
    "roboEscapeheader"
);

setupWindow(
    "spaceIcon",
    "space",
    "spaceclose",
    "spaceheader"
);

setupWindow(
    "theDefenderIcon",
    "theDefender",
    "theDefenderclose",
    "theDefenderheader"
);


function setupWindow(iconId, windowId, closeId, headerId) {
    const icon = document.getElementById(iconId);
    const window = document.getElementById(windowId);
    const close = document.getElementById(closeId);
    const header = document.getElementById(headerId);

    //icon select
    icon.addEventListener("click", () => {
        document.querySelectorAll(".desktop-icon").forEach((item) => {
            item.classList.remove(
                "bg-white/30",
                "outline",
                "outline-1",
                "outline-dotted",
                "outline-white"
            );
        });

        icon.classList.add(
            "bg-white/30",
            "outline",
            "outline-1",
            "outline-dotted",
            "outline-white"
        );
    });

    //double click
    icon.addEventListener("dblclick", () => {
        window.classList.remove("hidden");

        bringToFront(window);
    });

    //to front
    window.addEventListener("mousedown", () => {
        bringToFront(window);
    });

    //close
    close.addEventListener("click", () => {
        window.classList.add("hidden");
    });

    dragElement(window, header);
}

let highestZIndex = 10;

function bringToFront(element) {
    highestZIndex++;
    element.style.zIndex = highestZIndex;
}

function dragElement(element, handle) {
    let pos1 = 0;
    let pos2 = 0;
    let pos3 = 0;
    let pos4 = 0;

    handle.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e.preventDefault();

        bringToFront(element);

        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();

        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;

        pos3 = e.clientX;
        pos4 = e.clientY;

        element.style.top =
            element.offsetTop - pos2 + "px";

        element.style.left =
            element.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}