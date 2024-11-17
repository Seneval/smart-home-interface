// Initial temperature value
let temperature = 78;

// List of Genshin Impact OST songs
const genshinSongs = [
    "Rite of Battle",
    "Liyue Harbor Theme",
    "Qingce Village Theme",
    "A Day in Mondstadt",
    "Dream Aria",
    "Hutao's Theme",
    "Zhongli's Theme",
    "Inazuma Battle Theme"
];
let currentSongIndex = -1;
let isPlaying = false;

function toggleLights() {
    const lightSwitch = document.getElementById("lightSwitch");
    console.log(lightSwitch.checked ? "Lights turned on" : "Lights turned off");
}

function adjustTemperature(direction) {
    temperature += direction === 'up' ? 1 : -1;
    document.getElementById("temperature-display").innerText = `${temperature}°F`;
    console.log(`Temperature adjusted to ${temperature}°F`);
}

function playPauseMusic() {
    if (!isPlaying) {
        // Play a new random song if not already playing
        playNewSong();
    } else {
        // Toggle pause/play state
        isPlaying = !isPlaying;
        console.log("Music paused");
    }
}

function stopMusic() {
    isPlaying = false;
    document.getElementById("song-display").innerText = "Music stopped";
    console.log("Music stopped");
}

function nextSong() {
    playNewSong();
}

function playNewSong() {
    // Choose a random song index that’s different from the current song
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * genshinSongs.length);
    } while (newIndex === currentSongIndex);

    currentSongIndex = newIndex;
    isPlaying = true;

    const songName = genshinSongs[currentSongIndex];
    document.getElementById("song-display").innerText = `Now Playing: ${songName}`;
    console.log(`Now playing: ${songName}`);
}
