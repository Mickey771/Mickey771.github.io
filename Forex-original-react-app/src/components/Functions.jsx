export function ActiveLink(active) {
    return document.getElementById(active + "-link").classList.add("active");
}

export function Capitalize(letter) {
    var words = letter.split(" ");
    words.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ");
}