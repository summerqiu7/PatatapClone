var audioFiles = ['bubbles.mp3', 'clay.mp3', 'confetti.mp3', 'corona.mp3', 'dotted-spiral.mp3', 'flash-1.mp3', 'flash-2.mp3', 'flash-3.mp3', 'glimmer.mp3', 'moon.mp3', 'pinwheel.mp3', 'piston-1.mp3', 'piston-2.mp3', 'piston-3.mp3', 'prism-1.mp3', 'prism-2.mp3', 'prism-3.mp3', 'splits.mp3', 'squiggle.mp3', 'strike.mp3', 'suspension.mp3', 'timer.mp3', 'ufo.mp3', 'veil.mp3', 'wipe.mp3', 'zig-zag.mp3'];

var keyData = new Map();

for (let i = 0; i < audioFiles.length ; i ++) {
    keyData.set(String.fromCharCode(65+i).toLowerCase(), {
        color: 'pink',
        sound: new Howl({
            srcs: ["sounds/" + audioFiles[i]]
        })
    })
}
