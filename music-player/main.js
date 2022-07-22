const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audi = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

// * Song titles
const songs = ['hey', 'summer', 'ukulele']

// * Keep track of songs
let songIndex = 2

//  * Initially load song info DOM
loadSong(songs[songIndex])


// * Update song details
function loadSong(song) {
    title.innerText = song
    audi.src = `music/${song}.mp3`
    cover.src = `img/${song}.jpg`
}

function playSong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audi.play()
}

function pauseSong() {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audi.pause()
}

function prevSong() {
    songIndex--

    if(songIndex < 0){
        songIndex = songs.length-1
    }

    loadSong(songs[songIndex])

    playSong()
}

function nextSong() {
    songIndex++

    if(songIndex > songs.length - 1){
        songIndex = 0
    }

    loadSong(songs[songIndex])

    playSong()
}

function updateProgress(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
}

function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audi.duration

    audi.currentTime = (clickX / width) * duration
    
}

//  * Event Listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if (isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

// * Change song events
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

audi.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress)

audi.addEventListener('ended', nextSong)