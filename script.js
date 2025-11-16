// ===================================
// 1. SANAT JA VIHJEET (YLI 100 PARIA)
// ... (Sanat pysyvät ennallaan)
// ===================================

const sanat = [
    { sana: "Pizza", vihje: "Juusto" },
    { sana: "Aurinko", vihje: "Valo" },
    { sana: "Tietokone", vihje: "Näyttö" },
    { sana: "Jääkaappi", vihje: "Kylmä" },
    { sana: "Banaani", vihje: "Keltainen" },
    { sana: "Sade", vihje: "Pilvet" },
    { sana: "Metsä", vihje: "Puut" },
    { sana: "Auto", vihje: "Rengas" },
    { sana: "Kello", vihje: "Aika" },
    { sana: "Kirja", vihje: "Sivut" },
    { sana: "Puhelin", vihje: "Soitto" },
    { sana: "Kahvi", vihje: "Muki" },
    { sana: "Meri", vihje: "Vesi" },
    { sana: "Lumi", vihje: "Talvi" },
    { sana: "Talo", vihje: "Seinät" },
    { sana: "Omena", vihje: "Hedelmä" },
    { sana: "Tuoli", vihje: "Istuin" },
    { sana: "Pöytä", vihje: "Taso" },
    { sana: "Lasi", vihje: "Juoma" },
    { sana: "Sukat", vihje: "Jalka" },
    { sana: "Kynä", vihje: "Kirjoitus" },
    { sana: "Lamppu", vihje: "Valaisin" },
    { sana: "Sänky", vihje: "Nukkuminen" },
    { sana: "Peili", vihje: "Kuva" },
    { sana: "Hattu", vihje: "Pää" },
    { sana: "Leipä", vihje: "Vilja" },
    { sana: "Kissa", vihje: "Miau" },
    { sana: "Koira", vihje: "Haukku" },
    { sana: "Lintu", vihje: "Siipi" },
    { sana: "Kukka", vihje: "Terälehdet" },
    { sana: "Joki", vihje: "Virta" },
    { sana: "Silta", vihje: "Ylitys" },
    { sana: "Tie", vihje: "Asfaltti" },
    { sana: "Kauppa", vihje: "Ostos" },
    { sana: "Pankki", vihje: "Raha" },
    { sana: "Sairaala", vihje: "Hoito" },
    { sana: "Koulu", vihje: "Oppiminen" },
    { sana: "Lentokone", vihje: "Taivas" },
    { sana: "Juna", vihje: "Raiteet" },
    { sana: "Bussi", vihje: "Julkinen" },
    { sana: "Pyörä", vihje: "Poljin" },
    { sana: "Avain", vihje: "Lukko" },
    { sana: "Sakset", vihje: "Leikkaus" },
    { sana: "Harja", vihje: "Siivous" },
    { sana: "Saippua", vihje: "Pesu" },
    { sana: "Hammasharja", vihje: "Hampaat" },
    { sana: "Maito", vihje: "Lehmä" },
    { sana: "Peruna", vihje: "Kasvis" },
    { sana: "Kala", vihje: "Uinti" },
    { sana: "Liha", vihje: "Proteiini" },
    { sana: "Makeinen", vihje: "Sokeri" },
    { sana: "Viini", vihje: "Rypäle" },
    { sana: "Olut", vihje: "Humala" },
    { sana: "Suklaa", vihje: "Kaakao" },
    { sana: "Tähti", vihje: "Yötaivas" },
    { sana: "Kuu", vihje: "Satelliitti" },
    { sana: "Planeetta", vihje: "Kiertorata" },
    { sana: "Tulivuori", vihje: "Laava" },
    { sana: "Aavikko", vihje: "Hiekka" },
    { sana: "Jäävuori", vihje: "Kylmyys" },
    { sana: "Robotti", vihje: "Kone" },
    { sana: "Patsas", vihje: "Muistomerkki" },
    { sana: "Maalaus", vihje: "Taide" },
    { sana: "Musiikki", vihje: "Ääni" },
    { sana: "Tanssi", vihje: "Liike" },
    { sana: "Teatteri", vihje: "Lava" },
    { sana: "Runo", vihje: "Sanat" },
    { sana: "Kartta", vihje: "Sijainti" },
    { sana: "Kompassi", vihje: "Suunta" },
    { sana: "Kamera", vihje: "Valokuva" },
    { sana: "Mikrofoni", vihje: "Tallennus" },
    { sana: "Kitara", vihje: "Soitin" },
    { sana: "Rummut", vihje: "Rytmi" },
    { sana: "Lompakko", vihje: "Kortit" },
    { sana: "Sormus", vihje: "Koru" },
    { sana: "Hanskat", vihje: "Kädet" },
    { sana: "Takki", vihje: "Vaate" },
    { sana: "Housut", vihje: "Lahkeet" },
    { sana: "Kenka", vihje: "Pohja" },
    { sana: "Pilli", vihje: "Äänimerkki" },
    { sana: "Ankkuri", vihje: "Vene" },
    { sana: "Ruori", vihje: "Ohjaus" },
    { sana: "Lippu", vihje: "Kangas" },
    { sana: "Kruunu", vihje: "Kuningas" },
    { sana: "Miekka", vihje: "Ase" },
    { sana: "Kilpi", vihje: "Suoja" },
    { sana: "Noidankattila", vihje: "Keittäminen" },
    { sana: "Loitsu", vihje: "Taika" },
    { sana: "Aarre", vihje: "Kulta" },
    { sana: "Metsästäjä", vihje: "Saalis" },
    { sana: "Kalastaja", vihje: "Onki" },
    { sana: "Kokki", vihje: "Resepti" },
    { sana: "Palomies", vihje: "Sammutus" },
    { sana: "Poliisi", vihje: "Laki" },
    { sana: "Opettaja", vihje: "Luokka" },
    { sana: "Tutkija", vihje: "Laboratorio" },
    { sana: "Urheilija", vihje: "Kunto" },
    { sana: "Valokuvaaja", vihje: "Linssi" },
    { sana: "Toimittaja", vihje: "Uutiset" },
    { sana: "Malli", vihje: "Poseeraus" },
    { sana: "Tanssija", vihje: "Esitys" },
    { sana: "Runoilija", vihje: "Rytmi" },
    { sana: "Kuningatar", vihje: "Valtaistuin" }
];

// ===================================
// 2. PELIN MUUTTUJAT
// ===================================

let pelaajamaara = 0;
let impostorMaara = 0;
let roolit = [];           
let valittuSana = '';
let valittuVihje = '';
let nykyinenPelaaja = 1;
// UUSI MUUTTUJA
let aloittavaPelaaja = 0; 


// ===================================
// 3. HTML-ELEMENTIT
// ... (HTML-elementit pysyvät ennallaan)
// ===================================

const setupKontti = document.getElementById('setup-kontti');
const peliKontti = document.getElementById('peli-kontti');
const gameTimeKontti = document.getElementById('game-time-kontti');
const resultsKontti = document.getElementById('results-kontti');
const pelaajaMaaraInput = document.getElementById('pelaaja-maara');
const impostorMaaraInput = document.getElementById('impostor-maara');
const aloitaPeliNappi = document.getElementById('aloita-peli-nappi');
const handoffKontti = document.getElementById('handoff-kontti');
const handoffTeksti = document.getElementById('handoff-teksti');
const jatkaNappi = document.getElementById('jatka-nappi');
const rooliNäyttö = document.getElementById('rooli-näyttö');
const rooliTeksti = document.getElementById('rooli-teksti');
const seuraavaNappi = document.getElementById('seuraava-nappi');
const paljastaRoolitNappi = document.getElementById('paljasta-roolit-nappi');
const aloitaUudelleenNappi = document.getElementById('aloita-uudelleen-nappi');


// ===================================
// 4. FUNKTIOT
// ===================================

function setupGame() {
    pelaajamaara = parseInt(pelaajaMaaraInput.value);
    impostorMaara = parseInt(impostorMaaraInput.value);

    // Tarkistukset
    if (isNaN(pelaajamaara) || pelaajamaara < 3 || pelaajamaara > 15) {
        alert("Pelaajien määrän täytyy olla 3-15.");
        return;
    }
    if (isNaN(impostorMaara) || impostorMaara < 1) {
        alert("Impostoreja on oltava vähintään 1.");
        return;
    }
    if (impostorMaara >= pelaajamaara) {
         alert("Impostorien määrä ei voi olla yhtä suuri tai suurempi kuin pelaajien kokonaismäärä.");
         return;
    }
    if (sanat.length === 0) {
        alert("Sanasto on tyhjä! Lisää sanoja 'sanat'-taulukkoon.");
        return;
    }

    // 1. Sanan valinta
    const valinta = sanat[Math.floor(Math.random() * sanat.length)];
    valittuSana = valinta.sana;
    valittuVihje = valinta.vihje;

    // 2. Roolien jako
    let roolilista = Array(pelaajamaara).fill("Kansalainen");

    // Arvotaan Impostorit
    for (let i = 0; i < impostorMaara; i++) {
        let index;
        do {
            index = Math.floor(Math.random() * pelaajamaara);
        } while (roolilista[index] === "Impostori");
        roolilista[index] = "Impostori";
    }

    // 3. Lopullinen roolirakenne
    roolit = roolilista.map(rooli => ({
        rooli: rooli,
        data: rooli === "Impostori" ? valittuVihje : valittuSana
    }));
    
    // Arvotaan aloittaja heti pelin alussa (1 ja pelaajamaara välillä)
    aloittavaPelaaja = Math.floor(Math.random() * pelaajamaara) + 1;

    goToRevealPhase();
}

/**
 * Näyttää pelaajan roolin ja sanan/vihjeen.
 * MUUTETTU: Kansalainen näkee oman pelaajanumeronsa roolin sijaan.
 */
function showRoleScreen() {
    handoffKontti.style.display = 'none';
    jatkaNappi.style.display = 'none';
    
    const pelaajanRooli = roolit[nykyinenPelaaja - 1];

    if (pelaajanRooli.rooli === 'Impostori') {
        // Impostori näkee edelleen oman roolinsa
        rooliTeksti.innerHTML = `
            <div class="impostor">OLET IMPOSTORI!</div>
            <p>Salainen Vihje:</p>
            <div class="sana">${pelaajanRooli.data}</div>
            <p>(Älä paljasta vihjettäsi!)</p>
        `;
    } else {
        // Kansalainen näkee vain pelaajanumeronsa ja sanan
        rooliTeksti.innerHTML = `
            <div class="crewmate">Pelaaja ${nykyinenPelaaja}</div>
            <p>Salainen Sana:</p>
            <div class="sana">${pelaajanRooli.data}</div>
        `;
    }

    rooliNäyttö.style.display = 'block';
    seuraavaNappi.style.display = 'block';
}

function nextPlayer() {
    rooliNäyttö.style.display = 'none';
    seuraavaNappi.style.display = 'none';

    nykyinenPelaaja++;

    if (nykyinenPelaaja > pelaajamaara) {
        goToGameTimePhase();
    } else {
        showHandoffScreen();
    }
}

/**
 * Siirtyy keskusteluvaiheeseen.
 * MUUTETTU: Näyttää arvotun aloittavan pelaajan numeron.
 */
function goToGameTimePhase() {
    peliKontti.style.display = 'none';
    
    // Näytetään kuka aloittaa
    gameTimeKontti.innerHTML = `
        <h2>Kortit katsottu!</h2>
        <p>Aloittakaa keskustelu ja yrittäkää paljastaa Impostorit.</p>
        <hr>
        <h3>Keskustelun aloittaa:</h3>
        <div class="sana" style="font-size: 60px;">Pelaaja ${aloittavaPelaaja}</div>
        <button id="paljasta-roolit-nappi" class="danger-button">Paljasta Roolit</button>
    `;
    
    // Lisätään event listener uudelleen, koska innerHTML ylikirjoitti sen
    document.getElementById('paljasta-roolit-nappi').addEventListener('click', showResults);
    
    gameTimeKontti.style.display = 'block';
}


function showResults() {
    // ... (Lopputulos funktio pysyy lähes ennallaan)
    gameTimeKontti.style.display = 'none';
    
    let resultsHTML = '<h2>Pelin Lopputulos</h2>';
    resultsHTML += `<p>Salainen sana oli: <strong>${valittuSana}</strong></p><ul>`;

    roolit.forEach((pelaaja, index) => {
        const rooliClass = pelaaja.rooli === 'Impostori' ? 'impostor-text' : 'crewmate-text';
        const dataInfo = pelaaja.rooli === 'Impostori' ? `(Vihje: ${pelaaja.data})` : `(Sana: ${pelaaja.data})`;
        
        resultsHTML += `<li>Pelaaja ${index + 1}: <span class="${rooliClass}">${pelaaja.rooli}</span> ${dataInfo}</li>`;
    });
    resultsHTML += '</ul>';

    // Lisätään "Aloita Uudelleen" -nappi dynaamisesti
    resultsHTML += '<button id="aloita-uudelleen-nappi">Aloita Uudelleen</button>';

    resultsKontti.innerHTML = resultsHTML;
    resultsKontti.style.display = 'block';

    // Lisätään event listener tulosten luomisen jälkeen
    document.getElementById('aloita-uudelleen-nappi').addEventListener('click', resetGame);
}

function resetGame() {
    // ... (Resetointi pysyy ennallaan)
    peliKontti.style.display = 'none';
    gameTimeKontti.style.display = 'none';
    resultsKontti.style.display = 'none';

    setupKontti.style.display = 'block';

    pelaajamaara = 0;
    impostorMaara = 0;
    roolit = [];
    valittuSana = '';
    valittuVihje = '';
    nykyinenPelaaja = 1;
    aloittavaPelaaja = 0; // Nollataan myös tämä
}

// ===================================
// 5. TAPAHTUMANKÄSITTELIJÄT
// ... (Tapahtumankäsittelijät pysyvät ennallaan)
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    aloitaPeliNappi.addEventListener('click', setupGame);
    jatkaNappi.addEventListener('click', showRoleScreen);
    seuraavaNappi.addEventListener('click', nextPlayer);
    // Huom: paljastaRoolitNappi lisätään gameTimeKonttiin dynaamisesti
});