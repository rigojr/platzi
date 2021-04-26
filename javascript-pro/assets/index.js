import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay';

const video = document.querySelector("video");
const button = document.querySelector("button");

const player = new MediaPlayer({ el: video });
button.onclick = () => {
    if (player.isPlayed) {
        player.pause();
        player.isPlayed = false;
    } else {
        player.play();
        player.isPlayed = true;
    }
}
