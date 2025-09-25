$("button").click(function() {
    const h1 = $("h1");
    if (h1.css("color") === "rgb(0, 0, 255)") { 
        h1.css("color", ""); 
    } else {
        h1.css("color", "blue");
    }
});

let originalText = $("h1").text();
let typedText = "";

$(document).keydown(function(event) {
    if (event.key === "Enter") {
        $("h1").text(originalText);
        typedText = "";
    } else if (event.key === "Backspace") {
        typedText = typedText.slice(0, -1);
        $("h1").text(typedText);
        event.preventDefault(); // Prevent default backspace behavior
    } else if (event.key.length === 1) {
        typedText += event.key;
        $("h1").text(typedText);
    }
    console.log(event.key);
});