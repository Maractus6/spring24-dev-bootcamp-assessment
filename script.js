function onButtonClick() {
    switch (Math.floor(Math.random() * 5)) {
        case 0:
            document.getElementById("funFact").innerHTML = 'Joyce has a crippling addiction to mobile games.';
            break;
        case 1:
            document.getElementById("funFact").innerHTML = "Joyce's favorite cake is cheesecake.";
            break;
        case 2:
            document.getElementById("funFact").innerHTML = "Joyce has a two foot tall stuffed Kumamon that she cannot sleep without.";
            break;
        case 3:
            document.getElementById("funFact").innerHTML = "Joyce owns a puffy green coat that she wears anytime it's below 60 degrees.";
            break;
        case 4:
            document.getElementById("funFact").innerHTML = "Joyce has lactose intolerace but pretends it doesn't exist.";
    }
}
