class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer;
    }
}


const musicList = [
    new Music("Prelude in C major", "Bach","3.jpg","Bach.mp3"),    
    new Music("Für Elise", "Beethoven","2.jpg","Beethoven.mp3"),    
    new Music("40th Symphony", "Mozart","1.jpg","Mozart.mp3"),    
    new Music("The Memory Remains","Metallica","4.jpg","Metallica.mp3"),
    new Music("Kuzu Kuzu","Tarkan","5.jpg","Tarkan.mp3")
];
