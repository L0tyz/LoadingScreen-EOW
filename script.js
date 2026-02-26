// ── Chargement ────────────────────────────────────────────────────────────────
var count     = 0;
var thisCount = 0;

const handlers = {
    startInitFunctionOrder(data) {
        count = data.count;
    },
    initFunctionInvoking(data) {
        setProgress(data.idx / count);
    },
    startDataFileEntries(data) {
        count = data.count;
    },
    performMapLoadFunction() {
        ++thisCount;
        setProgress(thisCount / count);
    },
};

function setProgress(ratio) {
    document.querySelector('.progressBar').style.width = (ratio * 100) + '%';
}

window.addEventListener('message', function (e) {
    (handlers[e.data.eventName] || function () {})(e.data);
});

// ── Lecteur musical ───────────────────────────────────────────────────────────
var currentIndex = 0;

const audio        = document.getElementById('music');
const playPauseBtn = document.getElementById('playPauseBtn');
const volumeSlider = document.getElementById('volumeSlider');
const volIcon      = document.getElementById('volIcon');
const playerToggle = document.getElementById('playerToggle');
const playerBody   = document.getElementById('playerBody');
const playerArrow  = document.getElementById('playerArrow');
const trackList    = document.getElementById('trackList');

// Volume initial à 50 %
audio.volume = 0.5;

// ── Construction de la playlist depuis songs.js ───────────────────────────────
function buildTrackList() {
    trackList.innerHTML = '';

    SONGS.forEach(function (song, index) {
        var item = document.createElement('div');
        item.className = 'track-item' + (index === 0 ? ' active' : '');
        item.dataset.index = index;

        var thumbHtml = song.cover
            ? '<img src="' + song.cover + '" class="track-thumb" alt="">'
            : '<div class="track-thumb-placeholder">&#9834;</div>';

        item.innerHTML =
            thumbHtml +
            '<div class="track-item-info">' +
                '<span class="track-item-name">' + song.name   + '</span>' +
                '<span class="track-item-author">' + song.author + '</span>' +
            '</div>';

        item.addEventListener('click', function () {
            selectTrack(parseInt(this.dataset.index, 10));
        });

        trackList.appendChild(item);
    });
}

// ── Sélection d'une piste ─────────────────────────────────────────────────────
function selectTrack(index) {
    currentIndex = index;
    var song = SONGS[index];

    // Mise à jour de l'affichage actif dans la playlist
    document.querySelectorAll('.track-item').forEach(function (t) {
        t.classList.toggle('active', parseInt(t.dataset.index, 10) === index);
    });

    // Lecture
    audio.src = song.src;
    audio.play();
    playPauseBtn.innerHTML = '&#9646;&#9646;';

    // Mise à jour du header
    updatePlayerHeader(song);
}

function updatePlayerHeader(song) {
    document.getElementById('trackName').textContent   = song.name;
    document.getElementById('trackAuthor').textContent = song.author;

    var coverEl = document.getElementById('playerCover');
    if (song.cover) {
        coverEl.innerHTML = '<img src="' + song.cover + '" alt="' + (song.album || '') + '" title="' + (song.album || '') + '">';
        coverEl.classList.remove('no-cover');
    } else {
        coverEl.innerHTML = '<span class="cover-placeholder">&#9834;</span>';
        coverEl.classList.add('no-cover');
    }
}

// ── Play / Pause ──────────────────────────────────────────────────────────────
playPauseBtn.addEventListener('click', function () {
    if (audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = '&#9646;&#9646;';
    } else {
        audio.pause();
        playPauseBtn.innerHTML = '&#9654;';
    }
});

// ── Volume ────────────────────────────────────────────────────────────────────
volumeSlider.addEventListener('input', function () {
    var v = parseInt(this.value, 10);
    audio.volume = v / 100;
    volIcon.innerHTML = v === 0 ? '&#10005;' : '&#9834;';
});

// ── Toggle playlist ───────────────────────────────────────────────────────────
var panelOpen = false;

playerToggle.addEventListener('click', function () {
    panelOpen = !panelOpen;
    playerBody.style.display = panelOpen ? 'block' : 'none';
    playerArrow.innerHTML = panelOpen ? '&#9650;' : '&#9660;';
});

// ── Aléatoire ─────────────────────────────────────────────────────────────────
function randomIndex() {
    if (SONGS.length === 1) return 0;
    var next;
    do {
        next = Math.floor(Math.random() * SONGS.length);
    } while (next === currentIndex);
    return next;
}

// Piste suivante aléatoire à la fin d'un morceau
audio.addEventListener('ended', function () {
    selectTrack(randomIndex());
});

// ── Initialisation ────────────────────────────────────────────────────────────
buildTrackList();
selectTrack(Math.floor(Math.random() * SONGS.length));
