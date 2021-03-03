    //Her defineres teksten der skal loopes.
      let textArr = ["Vi glæder os til at samarbejde!", "Vi ser frem til at udvikle jeres app!", "Vi glæder os til at designe dit website!", "The HoC Way!"];
      //loopTimer er en variabel der bruges senere til at definere tiden for loopet.
      var loopTimer;
      let i = 0;
      //Variablen currentText defineres til textArrs rækkefølge og splitter string til mindre strings.
      var currentText = textArr[i].split("");

      function frameLooper() {
        //Tilføjer den forreste karakter ved hvert loop til HTML elementet
        if (currentText.length > 0) {
          document.getElementById("kontaktkommentar").innerHTML += currentText.shift();
          //Går videre til næste punkt i textArr
        } else if (
          document.getElementById("kontaktkommentar").innerHTML.length === 0
        ) {
          if (i < textArr.length) {
            i++;
            if (i >= textArr.length) {
              i = 0;
              currentText = textArr[0].split("");
            } else {
              currentText = textArr[i].split("");
            }
          }
          //Sletter sidste karakter i HTML elementet
        } else {
          document.getElementById(
            "kontaktkommentar",
          ).innerHTML = document
            .getElementById("kontaktkommentar")
            .innerHTML.slice(0, -1);
        }
        loopTimer = setTimeout("frameLooper()", 100);
      }
      frameLooper();