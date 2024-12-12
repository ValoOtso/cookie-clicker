let aloitettu = false
let maara = 0
let kursorienMaara = 0
let kursorienHinta = 15
let extraKursorienMaara = 0
let isoaitienMaara = 0
let isoaidinHinta = 100
let extraIsoaitienMaara = 0
let maatilojenMaara = 0
let maatilanHinta = 1100
let extraMaatilojenMaara = 0
let kaivostenMaara = 0
let kaivoksenHinta = 12000
let extraKaivostenMaara = 0
let tehtaidenMaara = 0
let tehtaanHinta = 130000
let keksiaSekunnissa = 0
let extraTehtaidenMaara = 0
let keksiaSekunnissaKursori = 0
let keksiaSekunnissaIsoaiti = 0
let keksiaSekunnissaMaatila = 0
let keksiaSekunnissaKaivos = 0
let keksiaSekunnissaTehdas = 0

document.getElementById('keksit').innerHTML = Math.round(maara)
document.getElementById('kursorinHinta').innerHTML = Math.round(kursorienHinta)
document.getElementById('kursorienMaara').innerHTML = Math.round(kursorienMaara)
document.getElementById('isoaidinHinta').innerHTML = Math.round(isoaidinHinta)
document.getElementById('isoaitienMaara').innerHTML = Math.round(isoaitienMaara)
document.getElementById('maatilanHinta').innerHTML = Math.round(maatilanHinta)
document.getElementById('maatilojenMaara').innerHTML = Math.round(maatilojenMaara)
document.getElementById('kaivoksenHinta').innerHTML = Math.round(kaivoksenHinta)
document.getElementById('kaivostenMaara').innerHTML = Math.round(kaivostenMaara)
document.getElementById('tehtaanHinta').innerHTML = Math.round(tehtaanHinta)
document.getElementById('tehtaidenMaara').innerHTML = Math.round(tehtaidenMaara)

document.getElementById('kursori2').style.display = 'none'
document.getElementById('kursori3').style.display = 'none'
document.getElementById('kursori4').style.display = 'none'

document.getElementById('isoaiti2').style.display = 'none'
document.getElementById('isoaiti3').style.display = 'none'
document.getElementById('isoaiti4').style.display = 'none'

document.getElementById('maatila2').style.display = 'none'
document.getElementById('maatila3').style.display = 'none'
document.getElementById('maatila4').style.display = 'none'

document.getElementById('kaivos2').style.display = 'none'
document.getElementById('kaivos3').style.display = 'none'
document.getElementById('kaivos4').style.display = 'none'

document.getElementById('tehdas2').style.display = 'none'
document.getElementById('tehdas3').style.display = 'none'
document.getElementById('tehdas4').style.display = 'none'

document.getElementById('keksiaSekunnissa').innerHTML = 'Keksiä sekunnissa: ' + keksiaSekunnissa.toFixed(2)

function ding() {
    var sound = new  Audio('button-30.mp3');
    sound.volume=0.3 
    sound.play();
}

if (aloitettu == false) {
    document.getElementById('peli').style.visibility = 'hidden'
}


function aloita() {
    aloitettu = true
    document.getElementById('peli').style.visibility = 'visible'
    document.getElementById('aloita').style.visibility = 'hidden'
    setInterval(tarkistus, 10)
}

function tarkistus () {

    keksiaSekunnissa = keksiaSekunnissaKursori+keksiaSekunnissaIsoaiti+keksiaSekunnissaMaatila+keksiaSekunnissaKaivos+keksiaSekunnissaTehdas

    //kursori
    if (maara >= kursorienHinta){
        document.getElementById('ostaKursori').style.opacity = '1'
    } else {
        document.getElementById('ostaKursori').style.opacity = '0.7'
    }
    if (kursorienMaara >= 1 && extraKursorienMaara == 0){
        document.getElementById('kursori2').style.display = 'inline'
        document.getElementById('kursori2').style.opacity = '0.7'
    } 
    if (kursorienMaara >= 1 && extraKursorienMaara == 2){
        document.getElementById('kursori3').style.display = 'inline'
        document.getElementById('kursori3').style.opacity = '0.7'
    }
    if(maara >= 100 && kursorienMaara >= 1){
        document.getElementById('kursori2').style.opacity = '1'
    }
    if(maara >= 500 && kursorienMaara >= 1){
        document.getElementById('kursori3').style.opacity = '1'
    }
    if(kursorienMaara >= 10 && extraKursorienMaara == 4){
        document.getElementById('kursori4').style.display = 'inline'
        document.getElementById('kursori4').style.opacity = '0.7'
    }
    if(maara >= 10000 && kursorienMaara >= 10){
        document.getElementById('kursori3').style.opacity = '1'
    }
    //isoäiti
    if (maara >= isoaidinHinta){
        document.getElementById('ostaIsoaiti').style.opacity = '1'
    } else {
        document.getElementById('ostaIsoaiti').style.opacity = '0.7'
    }
    if(isoaitienMaara >= 1 && extraIsoaitienMaara == 0){
        document.getElementById('isoaiti2').style.display = 'inline'
        document.getElementById('isoaiti2').style.opacity = '0.7'
    }
    if(maara >= 1000 && isoaitienMaara >= 1){
        document.getElementById('isoaiti2').style.opacity = '1'
    }
    if(isoaitienMaara >= 5 && extraIsoaitienMaara == 2){
        document.getElementById('isoaiti3').style.display = 'inline'
        document.getElementById('isoaiti3').style.opacity = '0.7'
    }
    if(maara >= 5000 && isoaitienMaara >= 5){
        document.getElementById('isoaiti3').style.opacity = '1'
    }
    if(isoaitienMaara >= 25 && extraIsoaitienMaara == 4){
        document.getElementById('isoaiti4').style.display = 'inline'
        document.getElementById('isoaiti4').style.opacity = '0.7'
    }
    if(maara >= 50000 && isoaitienMaara >= 25){
        document.getElementById('isoaiti4').style.opacity = '1'
    }
    //maatila
    if (maara >= maatilanHinta){
        document.getElementById('ostaMaatila').style.opacity = '1'
    } else {
        document.getElementById('ostaMaatila').style.opacity = '0.7'
    }
    if(maatilojenMaara >= 1 && extraMaatilojenMaara == 0){
        document.getElementById('maatila2').style.display = 'inline'
        document.getElementById('maatila2').style.opacity = '0.7'
    }
    if(maara >= 11000 && maatilojenMaara >= 1){
        document.getElementById('maatila2').style.opacity = '1'
    }
    if(maatilojenMaara >= 5 && extraMaatilojenMaara == 2){
        document.getElementById('maatila3').style.display = 'inline'
        document.getElementById('maatila3').style.opacity = '0.7'
    }
    if(maara >= 55000 && maatilojenMaara >= 5){
        document.getElementById('maatila3').style.opacity = '1'
    }
    if(maatilojenMaara >= 25 && extraMaatilojenMaara == 4){
        document.getElementById('maatila4').style.display = 'inline'
        document.getElementById('maatila4').style.opacity = '0.7'
    }
    if(maara >= 550000 && maatilojenMaara >= 25){
        document.getElementById('maatila4').style.opacity = '1'
    }
    //kaivos
    if (maara >= kaivoksenHinta){
        document.getElementById('ostaKaivos').style.opacity = '1'
    } else {
        document.getElementById('ostaKaivos').style.opacity = '0.7'
    }
    if(kaivostenMaara >= 1 && extraKaivostenMaara == 0){
        document.getElementById('kaivos2').style.display = 'inline'
        document.getElementById('kaivos2').style.opacity = '0.7'
    }
    if(maara >= 120000 && kaivostenMaara >= 1){
        document.getElementById('kaivos2').style.opacity = '1'
    }
    if(kaivostenMaara >= 5 && extraKaivostenMaara == 2){
        document.getElementById('kaivos3').style.display = 'inline'
        document.getElementById('kaivos3').style.opacity = '0.7'
    }
    if(maara >= 600000 && kaivostenMaara >= 5){
        document.getElementById('kaivos3').style.opacity = '1'
    }
    if(kaivostenMaara >= 25 && extraKaivostenMaara == 4){
        document.getElementById('kaivos4').style.display = 'inline'
        document.getElementById('kaivos4').style.opacity = '0.7'
    }
    if(maara >= 6000000 && kaivostenMaara >= 25){
        document.getElementById('kaivos4').style.opacity = '1'
    }
    //tehdas
    if (maara >= tehtaanHinta){
        document.getElementById('ostaTehdas').style.opacity = '1'
    } else {
        document.getElementById('ostaTehdas').style.opacity = '0.7'
    }
    if(tehtaidenMaara >= 1 && extraTehtaidenMaara == 0){
        document.getElementById('tehdas2').style.display = 'inline'
        document.getElementById('tehdas2').style.opacity = '0.7'
    }
    if(maara >= 1300000 && tehtaidenMaara >= 1){
        document.getElementById('tehdas2').style.opacity = '1'
    }
    if(tehtaidenMaara >= 5 && extraTehtaidenMaara == 2){
        document.getElementById('tehdas3').style.display = 'inline'
        document.getElementById('tehdas3').style.opacity = '0.7'
    }
    if(maara >= 6500000 && tehtaidenMaara >= 5){
        document.getElementById('tehdas3').style.opacity = '1'
    }
    if(tehtaidenMaara >= 25 && extraTehtaidenMaara == 4){
        document.getElementById('tehdas4').style.display = 'inline'
        document.getElementById('tehdas4').style.opacity = '0.7'
    }
    if(maara >= 65000000 && tehtaidenMaara >= 25){
        document.getElementById('tehdas4').style.opacity = '1'
    }
}

function klikkaus() {
    if (maara.length = 0){
        maara = 1
    } else if(extraKursorienMaara == 0) {
        maara = maara + 1
    } else if(extraKursorienMaara > 0){
        maara = maara + (1*extraKursorienMaara)
    }
    document.getElementById('keksit').innerHTML = Math.round(maara)
}

//kursori
function kursori() {
    if (extraKursorienMaara == 0){
        maara = maara + 1
        document.getElementById('keksit').innerHTML = Math.round(maara)

    }
    if (extraKursorienMaara >= 1){
        maara = maara + (1*extraKursorienMaara)
        document.getElementById('keksit').innerHTML = Math.round(maara)
    }
}

function ostaKursori(){
    if (maara >= kursorienHinta && maara != 0){
        kursorienMaara = kursorienMaara + 1
        maara = maara - kursorienHinta
        document.getElementById('keksit').innerHTML = Math.round(maara)
        document.getElementById('kursorienMaara').innerHTML = Math.round(kursorienMaara)
        setInterval(kursori, 10000)
        kursorienHinta = kursorienHinta * 1.5
        document.getElementById('kursorinHinta').innerHTML = Math.round(kursorienHinta)
        keksiaSekunnissaKursori = keksiaSekunnissaKursori + 0.1
        keksiaSekunnissa = keksiaSekunnissaKursori+keksiaSekunnissaIsoaiti+keksiaSekunnissaMaatila+keksiaSekunnissaKaivos+keksiaSekunnissaTehdas
        document.getElementById('keksiaSekunnissa').innerHTML = 'Keksiä sekunnissa: ' + keksiaSekunnissa.toFixed(2)
    }
}

function ostaExtraKursori1(){
    if(maara >= 100){
        extraKursorienMaara = extraKursorienMaara + 2
        document.getElementById('kursori2').style.display = 'none'
        maara = maara - 100
        document.getElementById('keksit').innerHTML = Math.round(maara)
        keksiaSekunnissaKursori = keksiaSekunnissaKursori*2
        keksiaSekunnissa = keksiaSekunnissaKursori+keksiaSekunnissaIsoaiti+keksiaSekunnissaMaatila+keksiaSekunnissaKaivos+keksiaSekunnissaTehdas
        document.getElementById('keksiaSekunnissa').innerHTML = 'Keksiä sekunnissa: ' + keksiaSekunnissa.toFixed(2)
    }
}

function ostaExtraKursori2(){
    if(maara >= 500){
        extraKursorienMaara = extraKursorienMaara + 2
        document.getElementById('kursori3').style.display = 'none'
        maara = maara - 500
        document.getElementById('keksit').innerHTML = Math.round(maara)
        keksiaSekunnissaKursori = keksiaSekunnissaKursori*2
        keksiaSekunnissa = keksiaSekunnissaKursori+keksiaSekunnissaIsoaiti+keksiaSekunnissaMaatila+keksiaSekunnissaKaivos+keksiaSekunnissaTehdas
        document.getElementById('keksiaSekunnissa').innerHTML = 'Keksiä sekunnissa: ' + keksiaSekunnissa.toFixed(2)    
    }
}

function ostaExtraKursori3(){
    if(maara >= 10000){
        extraKursorienMaara = extraKursorienMaara + 2
        document.getElementById('kursori4').style.display = 'none'
        maara = maara - 10000
        document.getElementById('keksit').innerHTML = Math.round(maara)
        keksiaSekunnissaKursori = keksiaSekunnissaKursori*2
        keksiaSekunnissa = keksiaSekunnissaKursori+keksiaSekunnissaIsoaiti+keksiaSekunnissaMaatila+keksiaSekunnissaKaivos+keksiaSekunnissaTehdas
        document.getElementById('keksiaSekunnissa').innerHTML = 'Keksiä sekunnissa: ' + keksiaSekunnissa.toFixed(2)
    }
}

//isoäiti
function isoaiti() {
    if (extraIsoaitienMaara == 0){
        maara = maara + 1
        document.getElementById('keksit').innerHTML = Math.round(maara)

    }
    if (extraIsoaitienMaara >= 1){
        maara = maara + (1*extraIsoaitienMaara)
        document.getElementById('keksit').innerHTML = Math.round(maara)
    }
}

function ostaIsoaiti(){
    if (maara >= isoaidinHinta && maara != 0){
        isoaitienMaara = isoaitienMaara + 1
        maara = maara - isoaidinHinta
        document.getElementById('keksit').innerHTML = Math.round(maara)
        document.getElementById('isoaitienMaara').innerHTML = Math.round(isoaitienMaara)
        setInterval(isoaiti, 1000)
        isoaidinHinta = isoaidinHinta * 1.5
        document.getElementById('isoaidinHinta').innerHTML = Math.round(isoaidinHinta)
        keksiaSekunnissaIsoaiti = keksiaSekunnissaIsoaiti + 1
        keksiaSekunnissa = keksiaSekunnissaKursori+keksiaSekunnissaIsoaiti+keksiaSekunnissaMaatila+keksiaSekunnissaKaivos+keksiaSekunnissaTehdas
        document.getElementById('keksiaSekunnissa').innerHTML = 'Keksiä sekunnissa: ' + keksiaSekunnissa.toFixed(2)
    }
}

function ostaExtraIsoaiti1(){
    if(maara >= 1000){
        extraIsoaitienMaara = extraIsoaitienMaara + 2
        document.getElementById('isoaiti2').style.display = 'none'
        maara = maara - 1000
        document.getElementById('keksit').innerHTML = Math.round(maara)
        keksiaSekunnissaIsoaiti = keksiaSekunnissaIsoaiti*2
        keksiaSekunnissa = keksiaSekunnissaKursori+keksiaSekunnissaIsoaiti+keksiaSekunnissaMaatila+keksiaSekunnissaKaivos+keksiaSekunnissaTehdas
        document.getElementById('keksiaSekunnissa').innerHTML = 'Keksiä sekunnissa: ' + keksiaSekunnissa.toFixed(2)
    }
}

function ostaExtraIsoaiti2(){
    if(maara >= 5000){
        extraIsoaitienMaara = extraIsoaitienMaara + 2
        document.getElementById('isoaiti3').style.display = 'none'
        maara = maara - 5000
        document.getElementById('keksit').innerHTML = Math.round(maara)
        keksiaSekunnissaIsoaiti = keksiaSekunnissaIsoaiti*2
        keksiaSekunnissa = keksiaSekunnissaKursori+keksiaSekunnissaIsoaiti+keksiaSekunnissaMaatila+keksiaSekunnissaKaivos+keksiaSekunnissaTehdas
        document.getElementById('keksiaSekunnissa').innerHTML = 'Keksiä sekunnissa: ' + keksiaSekunnissa.toFixed(2)
    }
}

function ostaExtraIsoaiti3(){
    if(maara >= 50000){
        extraIsoaitienMaara = extraIsoaitienMaara + 2
        document.getElementById('isoaiti4').style.display = 'none'
        maara = maara - 50000
        document.getElementById('keksit').innerHTML = Math.round(maara)
        keksiaSekunnissaIsoaiti = keksiaSekunnissaIsoaiti*2
        keksiaSekunnissa = keksiaSekunnissaKursori+keksiaSekunnissaIsoaiti+keksiaSekunnissaMaatila+keksiaSekunnissaKaivos+keksiaSekunnissaTehdas
        document.getElementById('keksiaSekunnissa').innerHTML = 'Keksiä sekunnissa: ' + keksiaSekunnissa.toFixed(2)
    }
}

//maatila
function maatila() {
    if (extraMaatilojenMaara == 0){
        maara = maara + 8
        document.getElementById('keksit').innerHTML = Math.round(maara)

    }
    if (extraMaatilojenMaara >= 1){
        maara = maara + (8*extraMaatilojenMaara)
        document.getElementById('keksit').innerHTML = Math.round(maara)
    }
}

function ostaMaatila(){
    if (maara >= maatilanHinta && maara != 0){
        maatilojenMaara = maatilojenMaara + 1
        maara = maara - maatilanHinta
        document.getElementById('keksit').innerHTML = Math.round(maara)
        document.getElementById('maatilojenMaara').innerHTML = Math.round(maatilojenMaara)
        setInterval(maatila, 1000)
        maatilanHinta = maatilanHinta * 1.5
        document.getElementById('maatilanHinta').innerHTML = Math.round(maatilanHinta)
        keksiaSekunnissaMaatila = keksiaSekunnissaMaatila + 8
        keksiaSekunnissa = keksiaSekunnissaKursori+keksiaSekunnissaIsoaiti+keksiaSekunnissaMaatila+keksiaSekunnissaKaivos+keksiaSekunnissaTehdas
        document.getElementById('keksiaSekunnissa').innerHTML = 'Keksiä sekunnissa: ' + keksiaSekunnissa.toFixed(2)
    }
}

function ostaExtraMaatila1(){
    if(maara >= 11000){
        extraMaatilojenMaara = extraMaatilojenMaara + 2
        document.getElementById('maatila2').style.display = 'none'
        maara = maara - 11000
        document.getElementById('keksit').innerHTML = Math.round(maara)
        keksiaSekunnissaMaatila = keksiaSekunnissaMaatila*2
        keksiaSekunnissa = keksiaSekunnissaKursori+keksiaSekunnissaIsoaiti+keksiaSekunnissaMaatila+keksiaSekunnissaKaivos+keksiaSekunnissaTehdas
        document.getElementById('keksiaSekunnissa').innerHTML = 'Keksiä sekunnissa: ' + keksiaSekunnissa.toFixed(2)
    }
}

function ostaExtraMaatila2(){
    if(maara >= 55000){
        extraMaatilojenMaara = extraMaatilojenMaara + 2
        document.getElementById('maatila3').style.display = 'none'
        maara = maara - 55000
        document.getElementById('keksit').innerHTML = Math.round(maara)
        keksiaSekunnissaMaatila = keksiaSekunnissaMaatila*2
        keksiaSekunnissa = keksiaSekunnissaKursori+keksiaSekunnissaIsoaiti+keksiaSekunnissaMaatila+keksiaSekunnissaKaivos+keksiaSekunnissaTehdas
        document.getElementById('keksiaSekunnissa').innerHTML = 'Keksiä sekunnissa: ' + keksiaSekunnissa.toFixed(2)
    }
}

function ostaExtraMaatila3(){
    if(maara >= 550000){
        extraMaatilojenMaara = extraMaatilojenMaara + 2
        document.getElementById('maatila4').style.display = 'none'
        maara = maara - 550000
        document.getElementById('keksit').innerHTML = Math.round(maara)
        keksiaSekunnissaMaatila = keksiaSekunnissaMaatila*2
        keksiaSekunnissa = keksiaSekunnissaKursori+keksiaSekunnissaIsoaiti+keksiaSekunnissaMaatila+keksiaSekunnissaKaivos+keksiaSekunnissaTehdas
        document.getElementById('keksiaSekunnissa').innerHTML = 'Keksiä sekunnissa: ' + keksiaSekunnissa.toFixed(2)
    }
}

//kaivos
function kaivos() {
    if (extraKaivostenMaara == 0){
        maara = maara + 47
        document.getElementById('keksit').innerHTML = Math.round(maara)

    }
    if (extraKaivostenMaara >= 1){
        maara = maara + (47*extraMaatilojenMaara)
        document.getElementById('keksit').innerHTML = Math.round(maara)
    }
}

function ostaKaivos(){
    if (maara >= kaivoksenHinta && maara != 0){
        kaivostenMaara = kaivostenMaara + 1
        maara = maara - kaivoksenHinta
        document.getElementById('keksit').innerHTML = Math.round(maara)
        document.getElementById('kaivostenMaara').innerHTML = Math.round(kaivostenMaara)
        setInterval(kaivos, 1000)
        kaivoksenHinta = kaivoksenHinta * 1.5
        document.getElementById('kaivoksenHinta').innerHTML = Math.round(kaivoksenHinta)
        keksiaSekunnissaKaivos = keksiaSekunnissaKaivos + 47
        keksiaSekunnissa = keksiaSekunnissaKursori+keksiaSekunnissaIsoaiti+keksiaSekunnissaMaatila+keksiaSekunnissaKaivos+keksiaSekunnissaTehdas
        document.getElementById('keksiaSekunnissa').innerHTML = 'Keksiä sekunnissa: ' + keksiaSekunnissa.toFixed(2)
    }
}

function ostaExtraKaivos1(){
    if(maara >= 120000){
        extraKaivostenMaara = extraKaivostenMaara + 2
        document.getElementById('kaivos2').style.display = 'none'
        maara = maara - 120000
        document.getElementById('keksit').innerHTML = Math.round(maara)
        keksiaSekunnissaKaivos = keksiaSekunnissaKaivos*2
        keksiaSekunnissa = keksiaSekunnissaKursori+keksiaSekunnissaIsoaiti+keksiaSekunnissaMaatila+keksiaSekunnissaKaivos+keksiaSekunnissaTehdas
        document.getElementById('keksiaSekunnissa').innerHTML = 'Keksiä sekunnissa: ' + keksiaSekunnissa.toFixed(2)
    }
}

function ostaExtraKaivos2(){
    if(maara >= 600000){
        extraKaivostenMaara = extraKaivostenMaara + 2
        document.getElementById('kaivos3').style.display = 'none'
        maara = maara - 600000
        document.getElementById('keksit').innerHTML = Math.round(maara)
        keksiaSekunnissaKaivos = keksiaSekunnissaKaivos*2
        keksiaSekunnissa = keksiaSekunnissaKursori+keksiaSekunnissaIsoaiti+keksiaSekunnissaMaatila+keksiaSekunnissaKaivos+keksiaSekunnissaTehdas
        document.getElementById('keksiaSekunnissa').innerHTML = 'Keksiä sekunnissa: ' + keksiaSekunnissa.toFixed(2)
    }
}

function ostaExtraKaivos3(){
    if(maara >= 6000000){
        extraKaivostenMaara = extraKaivostenMaara + 2
        document.getElementById('kaivos4').style.display = 'none'
        maara = maara - 6000000
        document.getElementById('keksit').innerHTML = Math.round(maara)
        keksiaSekunnissaKaivos = keksiaSekunnissaKaivos*2
        keksiaSekunnissa = keksiaSekunnissaKursori+keksiaSekunnissaIsoaiti+keksiaSekunnissaMaatila+keksiaSekunnissaKaivos+keksiaSekunnissaTehdas
        document.getElementById('keksiaSekunnissa').innerHTML = 'Keksiä sekunnissa: ' + keksiaSekunnissa.toFixed(2)
    }
}

//tehdas
function tehdas() {
    if (extraTehtaidenMaara == 0){
        maara = maara + 260
        document.getElementById('keksit').innerHTML = Math.round(maara)

    }
    if (extraTehtaidenMaara >= 1){
        maara = maara + (260*extraTehtaidenMaara)
        document.getElementById('keksit').innerHTML = Math.round(maara)
    }
}

function ostaTehdas(){
    if (maara >= tehtaanHinta && maara != 0){
        tehtaidenMaara = tehtaidenMaara + 1
        maara = maara - tehtaanHinta
        document.getElementById('keksit').innerHTML = Math.round(maara)
        document.getElementById('tehtaidenMaara').innerHTML = Math.round(tehtaidenMaara)
        setInterval(tehdas, 1000)
        tehtaanHinta = tehtaanHinta * 1.5
        document.getElementById('tehtaanHinta').innerHTML = Math.round(tehtaanHinta)
        keksiaSekunnissaTehdas = keksiaSekunnissaTehdas + 260
        keksiaSekunnissa = keksiaSekunnissaKursori+keksiaSekunnissaIsoaiti+keksiaSekunnissaMaatila+keksiaSekunnissaKaivos+keksiaSekunnissaTehdas
        document.getElementById('keksiaSekunnissa').innerHTML = 'Keksiä sekunnissa: ' + keksiaSekunnissa.toFixed(2)
    }
}

function ostaExtraTehdas1(){
    if(maara >= 1300000){
        extraTehtaidenMaara = extraTehtaidenMaara + 2
        document.getElementById('tehdas2').style.display = 'none'
        maara = maara - 11000
        document.getElementById('keksit').innerHTML = Math.round(maara)
        keksiaSekunnissaTehdas = keksiaSekunnissaTehdas*2
        keksiaSekunnissa = keksiaSekunnissaKursori+keksiaSekunnissaIsoaiti+keksiaSekunnissaMaatila+keksiaSekunnissaKaivos+keksiaSekunnissaTehdas
        document.getElementById('keksiaSekunnissa').innerHTML = 'Keksiä sekunnissa: ' + keksiaSekunnissa.toFixed(2)
    }
}

function ostaExtraTehdas2(){
    if(maara >= 6500000){
        extraTehtaidenMaara = extraTehtaidenMaara + 2
        document.getElementById('tehdas3').style.display = 'none'
        maara = maara - 55000
        document.getElementById('keksit').innerHTML = Math.round(maara)
        keksiaSekunnissaTehdas = keksiaSekunnissaTehdas*2
        keksiaSekunnissa = keksiaSekunnissaKursori+keksiaSekunnissaIsoaiti+keksiaSekunnissaMaatila+keksiaSekunnissaKaivos+keksiaSekunnissaTehdas
        document.getElementById('keksiaSekunnissa').innerHTML = 'Keksiä sekunnissa: ' + keksiaSekunnissa.toFixed(2)
    }
}

function ostaExtraTehdas3(){
    if(maara >= 65000000){
        extraTehtaidenMaara = extraTehtaidenMaara + 2
        document.getElementById('tehdas4').style.display = 'none'
        maara = maara - 550000
        document.getElementById('keksit').innerHTML = Math.round(maara)
        keksiaSekunnissaTehdas = keksiaSekunnissaTehdas*2
        keksiaSekunnissa = keksiaSekunnissaKursori+keksiaSekunnissaIsoaiti+keksiaSekunnissaMaatila+keksiaSekunnissaKaivos+keksiaSekunnissaTehdas
        document.getElementById('keksiaSekunnissa').innerHTML = 'Keksiä sekunnissa: ' + keksiaSekunnissa.toFixed(2)
    }
}


