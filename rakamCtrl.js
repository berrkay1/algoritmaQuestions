
function rakamlariBolmeKontrolu(sayilar) {

    let cevapArr = [];
  
    for (let i = 0; i < sayilar.length; i++) {
      let sayi = sayilar[i];
      let sayiToStr = sayi.toString();
      let count = 0;
  
      for (let j = 0; j < sayiToStr.length; j++) {
        let rakam = parseInt(sayiToStr[j]);
  
        if (sayi % rakam === 0) {
          count++;
        } else {
          count = count;
         
        }
      }
  
      cevapArr.push(count);
    }
  
    return cevapArr;
  }
  

  const Gonderilensayilar =  [1257, 554, 68921, 78521, 123];
  const sonuc = rakamlariBolmeKontrolu(Gonderilensayilar);
  console.log(sonuc,'her bir sayının tam bolen adedi'); 
  // cıktı = [1, 0, 1, 1, 2] 'her bir sayının tam bolen adedi
  
