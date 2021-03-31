const video = document.querySelector("video");
        const button = document.querySelector("button");

        function MediaPlayer(config) {
            this.media = config.el;
        };

        MediaPlayer.prototype.play = function () {
            this.media.play();
        };

        MediaPlayer.prototype.pause = function () {
            this.media.pause();
        };

        MediaPlayer.prototype.isPlayed = false;

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
