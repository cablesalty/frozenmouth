// contents.js
// Main entry file for the chrome extension "Frozen Mouth"
// Author: cablesalty

console.log("[Frozen Mouth] Extension loaded.");

// Get mute button
const mutebtn = document.querySelector(".ytp-mute-button");

// Check if music is not muted already (if muted skip)
// Really bad looking solution, but localstorage can only store strings so I have to
// parse all the time to get the correct values
if (!JSON.parse(JSON.parse(localStorage.getItem("yt-player-volume")).data).muted) { // Executes when statement is false
    console.log("[Frozen Mouth] Sound is enabled! Pressing mute button...");

    // Mute by clicking the mute button
    mutebtn.click();

    // We check again to ensure the muting was successful
    if (!JSON.parse(JSON.parse(localStorage.getItem("yt-player-volume")).data).muted) { // Executes when statement is false

        // This manually rewrites the localStorage to mute the music

        console.log("[Frozen Mouth] Still not muted! Rewriting localStorage and refreshing...");
        JSON.parse(JSON.parse(localStorage.getItem("yt-player-volume")).data).muted = true;
        location.reload(); // Reload site to apply changes

    }

} else {
    console.log("[Frozen Mouth] Music already muted, ignoring.");
}