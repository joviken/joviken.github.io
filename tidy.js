   //hentar element frå HTML dokumentet og puttar dei i ein variabel
   var SteinEl = document.querySelector("#Stein");
   var SaksEl = document.querySelector("#Saks");
   var PapirEl = document.querySelector("#Papir");
   var VinnEl = document.querySelector("#vinn")
   var tapEl = document.querySelector("#tap")
   var uavgjortEl = document.querySelector("#Uavgjort")
   var KommentarEl = document.querySelector("#kommentar")
   var AntallEl = document.querySelector("#Antall")
   var NyEl = document.querySelector("#ny")


   //tek bilete og knappar frå dokumentet og legg til funskjonar når dei blir klikka 
   SteinEl.addEventListener("click", Stein);
   SaksEl.addEventListener("click", Saks);
   PapirEl.addEventListener("click", Papir);
   NyEl.addEventListener("click", reload)

   // gjøymar knappen og "VS" når sida blir lasta
   window.onload = function() {
       document.getElementById("ny").style.visibility = "hidden";
       document.getElementById("VS").style.visibility = "hidden";
   }



   //erklærar variablar og verdiar
   var kommentar = "";
   var spel = 0;
   var vinn = 0;
   var tap = 0;
   var uavgjort = 0;

   //laster inn sida på nytt(restart)
   function reload() {
       location.reload();
   }

   //sjølve spel koda hvis du trykk på stein
   function Stein() {
       //visar "start på nytt knappen" og "VS"
       document.getElementById("ny").style.visibility = "visible";
       document.getElementById("VS").style.visibility = "visible";
       //velgar eit tilfeldig tal mellom 0-2(1-3) 0=stein  1=saks  2=papir
       var pc = Math.floor(Math.random() * 3);
       console.log(pc)
           //sjekkar om du har vunnet 5 gongar eller tapt 5 gongar, hvis ein av desse er sanne skrivar den ut ei melding og kan ikkje gå vidare i løkka
       if (vinn >= 5) {
           KommentarEl.innerHTML = "Du fikk 5 fyrst, du vannt!";
       } else if (tap >= 5) {
           KommentarEl.innerHTML = "pc fikk 5 fyrst, du tapte!";
       } else if (pc === 0) {
           //legg på ein i spel, som tellar kor monge omgangar som er spelt
           spel = spel + 1;
           //legg til ein i uavgjort
           uavgjort = uavgjort + 1;
           //endrar på kommentarar og visar vinn/tap verdiane til spelar
           kommentar = "Du valgte stein, PC valgte Stein, resultat uavgjort";
           KommentarEl.innerHTML = "Du valgte stein, PC valgte Stein, resultat uavgjort";
           uavgjortEl.innerHTML = "Antall uavgjort: " + uavgjort;
           AntallEl.innerHTML = "gongar spelt: " + spel;
           //endrar bilete til kva du og PC-en har valgt
           document.getElementById("Spelar").src = "Bilete/8-2-rock-png-picture.png";
           document.getElementById("Datamaskin").src = "Bilete/8-2-rock-png-picture.png";
       } else if (pc === 1) {
           //legg på ein i spel, som tellar kor monge omgangar som er spelt
           spel = spel + 1;
           //legg til ein i vinn
           vinn = vinn + 1;
           //endrar på kommentarar og visar vinn/tap verdiane til spelar
           KommentarEl.innerHTML = "Du valgte stein, PC valgte Saks, du vannt";
           VinnEl.innerHTML = "Antall vinn: " + vinn
           AntallEl.innerHTML = "gongar spelt: " + spel;
           //endrar bilete til kva du og PC-en har valgt
           document.getElementById("Spelar").src = "Bilete/8-2-rock-png-picture.png";
           document.getElementById("Datamaskin").src = "Bilete/10-2-scissor-download-png.png";

       } else if (pc === 2) {
           //legg på ein i spel, som tellar kor monge omgangar som er spelt
           spel = spel + 1;
           //leggg til ein i tap
           tap = tap + 1;
           //endrar på kommentarar og visar vinn/tap verdiane til spelar
           KommentarEl.innerHTML = "Du valgte stein, PC valgte papir, du tapte";
           tapEl.innerHTML = "Antall tap: " + tap
           AntallEl.innerHTML = "gongar spelt: " + spel;
           //endrar bilete til kva du og PC-en har valgt
           document.getElementById("Spelar").src = "Bilete/8-2-rock-png-picture.png";
           document.getElementById("Datamaskin").src = "Bilete/pngwing.com.png";
       }
   }

   function Saks() {
       //visar "start på nytt knappen" og "VS"
       document.getElementById("ny").style.visibility = "visible";
       document.getElementById("VS").style.visibility = "visible";
       //velgar eit tilfeldig tal mellom 0-2(1-3) 0=stein  1=saks  2=papir
       var pc = Math.floor(Math.random() * 3);
       console.log(pc)
           //sjekkar om du har vunnet 5 gongar eller tapt 5 gongar, hvis ein av desse er sanne skrivar den ut ei melding og kan ikkje gå vidare i løkka
       if (vinn >= 5) {
           KommentarEl.innerHTML = "Du fikk 5 fyrst, du vannt!";
       } else if (tap >= 5) {
           KommentarEl.innerHTML = "pc fikk 5 fyrst, du tapte!";
       } else if (pc === 0) {
           //legg på ein i spel, som tellar kor monge omgangar som er spelt
           spel = spel + 1;
           //legg på ein i tap
           tap = tap + 1;
           //endrar på kommentarar og visar vinn/tap verdiane til spelar
           kommentar = "Du valgte Saks, PC valgte Stein, du tapte";
           KommentarEl.innerHTML = "Du valgte Saks, PC valgte Stein, du tapte";
           tapEl.innerHTML = "Antall tap: " + tap
           AntallEl.innerHTML = "gongar spelt: " + spel;
           //endrar bilete til kva du og PC-en har valgt
           document.getElementById("Spelar").src = "Bilete/10-2-scissor-download-png.png";
           document.getElementById("Datamaskin").src = "Bilete/8-2-rock-png-picture.png";

       } else if (pc === 1) {
           //legg på ein i spel, som tellar kor monge omgangar som er spelt
           spel = spel + 1;
           //legg på ein i uavgjort
           uavgjort = uavgjort + 1;
           //endrar på kommentarar og visar vinn/tap verdiane til spelar
           kommentar = "Du valgte saks, PC valgte saks, resultat uavgjort";
           KommentarEl.innerHTML = "Du valgte saks, PC valgte saks, resultat uavgjort";
           uavgjortEl.innerHTML = "Antall uavgjort: " + uavgjort;
           AntallEl.innerHTML = "gongar spelt: " + spel;
           //endrar bilete til kva du og PC-en har valgt
           document.getElementById("Spelar").src = "Bilete/10-2-scissor-download-png.png";
           document.getElementById("Datamaskin").src = "Bilete/10-2-scissor-download-png.png";

       } else if (pc === 2) {
           //legg på ein i spel, som tellar kor monge omgangar som er spelt
           spel = spel + 1;
           //legg på ein i vinn
           vinn = vinn + 1;
           //endrar på kommentarar og visar vinn/tap verdiane til spelar
           KommentarEl.innerHTML = "Du valgte saks, PC valgte papir, du vannt";
           VinnEl.innerHTML = "Antall vinn: " + vinn
           AntallEl.innerHTML = "gongar spelt: " + spel;
           //endrar bilete til kva du og PC-en har valgt
           document.getElementById("Spelar").src = "Bilete/10-2-scissor-download-png.png";
           document.getElementById("Datamaskin").src = "Bilete/pngwing.com.png";
       }
   }

   function Papir() {
       //visar "start på nytt knappen" og "VS"
       document.getElementById("ny").style.visibility = "visible";
       document.getElementById("VS").style.visibility = "visible";
       //velgar eit tilfeldig tal mellom 0-2(1-3) 0=stein  1=saks  2=papir
       var pc = Math.floor(Math.random() * 3);
       console.log(pc)
           //sjekkar om du har vunnet 5 gongar eller tapt 5 gongar, hvis ein av desse er sanne skrivar den ut ei melding og kan ikkje gå vidare i løkka
       if (vinn >= 5) {
           KommentarEl.innerHTML = "Du fikk 5 fyrst, du vannt!";
       } else if (tap >= 5) {
           KommentarEl.innerHTML = "pc fikk 5 fyrst, du tapte!";
       } else if (pc === 0) {
           //legg på ein i spel, som tellar kor monge omgangar som er spelt
           spel = spel + 1;https://html-css-js.com/css/generator/
           //legg på ein i vinn
           vinn = vinn + 1;
           //endrar på kommentarar og visar vinn/tap verdiane til spelar
           KommentarEl.innerHTML = "Du valgte papir, PC valgte stein, du vannt";
           VinnEl.innerHTML = "Antall vinn: " + vinn
           AntallEl.innerHTML = "gongar spelt: " + spel;
           //endrar bilete til kva du og PC-en har valgt
           document.getElementById("Spelar").src = "Bilete/pngwing.com.png";
           document.getElementById("Datamaskin").src = "Bilete/8-2-rock-png-picture.png";
       } else if (pc === 1) {
           //legg til ein i spel, som tel, kor monge omgangar som er spelt
           spel = spel + 1;
           //legg på ein i tap
           tap = tap + 1;
           //endrar på kommentarar og visar vinn/tap verdiane til spelar
           kommentar = "Du valgte papir, PC valgte saks, du tapte";
           KommentarEl.innerHTML = "Du valgte papir, PC valgte saks, du tapte";
           tapEl.innerHTML = "Antall tap: " + tap;
           AntallEl.innerHTML = "gongar spelt: " + spel;
           //endrar bilete til kva du og PC-en har valgt
           document.getElementById("Spelar").src = "Bilete/pngwing.com.png";
           document.getElementById("Datamaskin").src = "Bilete/10-2-scissor-download-png.png";

       } else if (pc === 2) {
           //legg til ein i spel, som tel, kor monge omgangar som er spelt
           spel = spel + 1;
           //legg på ein i uavgjort
           uavgjort = uavgjort + 1;
           //endrar på kommentarar og visar vinn/tap verdiane til spelar
           KommentarEl.innerHTML = "Du valgte papir, PC valgte papir, resultat uavgjort";
           uavgjortEl.innerHTML = "Antall uavgjort: " + uavgjort
           AntallEl.innerHTML = "gongar spelt: " + spel;
           //endrar bilete til kva du og PC-en har valgt
           document.getElementById("Spelar").src = "Bilete/pngwing.com.png";
           document.getElementById("Datamaskin").src = "Bilete/pngwing.com.png";
       }
   }
   document.addEventListener("keypress", function(event) {

   });