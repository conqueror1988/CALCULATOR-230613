const previous = document.querySelector(".previous-display");
const current = document.querySelector(".current-display");
const button = document.querySelector(".buttons-container");

// ! global alan. global alandakileri let ile tanimlayabilirz. cunku tekrar tekrar kullnilabilir. glabal alan da 3 degisken.

let ustSatir = "";
let altSatir = "";
let operator = "";

button.addEventListener("click", (e) => {
  // ! e (event) dinle demek taget ayakala neyi classi icinde num olan class i yakala. asagidaki sayiyi al fonk tur. sayiyi almadan yazdiramayiz. yazdirma isini sadec sayilara yapiyoruz.
  if (e.target.classList.contains("num")) {
    sayiyiAl(e.target.textContent);
    yazdir(); //! yazdirilan alanimiz oluyor.
  }

  // ! bu satirda operatoru almak icin fonk. yazicaz.
  if (e.target.classList.contains("operator")) {
    choose(e.target.textContent); //! opertor fonk cagiracaz.
    yazdir();
  }
  if (e.target.classList.contains("equal")) {
    (e.target.textContent); //! equal kismina geciyoruz
    hesapla();
    yazdir();
  }
  if (e.target.classList.contains("pm")) {
    if (!altSatir) return; //!alt ssatir eger bos degilse return e don. ama alt satir dolu ise kodu calistir.
    altSatir *= -1; //! gelen her sayiyi - yapmak icin.
    yazdir();
  }
  if (e.target.classList.contains("percent")) {
    if (!altSatir) return; //!alt ssatir eger bos degilse return e don.
    altSatir /= 100;
    yazdir();
  }
  if (e.target.classList.contains("ac")) {
    altSatir = "";
    ustSatir = "";
    operator = "";
    yazdir();
  }
});

const sayiyiAl = (num) => {
  if (num === "0" && altSatir === "0") return; //! kullanici 0  ttikladi ise ve alt tarafa 0 girdi ise 00000... yazmayacak. boyle yazmayi engelledik. 0.0 yazamayiz mesela

  if (num !== "." && altSatir === "0") {
    altSatir = num;
    return;
    // ! burada 02  06 gibi sayilar yazamazsiniz. oyuzden usttekini yazdik.
  }

  if (num === "." && altSatir.includes(".")) return; //! basilan tus nokta ise ve altsatir bir nokta iceriyorsa bu durumu return et. bu if satiri varsa sadece bir tane nokta girersiniz.
  if (altSatir.length > 10) return;
  //! sadece 10 tane rakam girmek icin yazdik.
  altSatir += num;
};

const yazdir = () => {
  previous.textContent = `${ustSatir}${operator}`;
  current.textContent = altSatir;

  // ! $ isareti variable oldugu icin konur. COK ONEMLI !!!!
};

const choose = (op) => {
  operator = op; //! operatou yani + - / cagirmak icin fon yazdik , ustte cagirdik.
  ustSatir = altSatir;
  altSatir = ""; //! ust satira alt satiri assgin ettigimiz zaman alt satir 0 olacak.
};

const hesapla = () => {
  let calculation = 0;
  const sayi1 = Number(ustSatir);
  const sayi2 = Number(altSatir);
  console.log(sayi1);
  console.log(sayi2);

  switch (operator) {
    case "+":
      calculation = sayi1 + sayi2;
      console.log(sonuc);
      break;
    case "-":
      calculation = sayi1 - sayi2;
      break;
    case "x":
      calculation = sayi1 * sayi2;
      break;
    case "÷":
      calculation = sayi1 / sayi2;
      break;

    default:
      return;
  }
  altSatir = calculation;
  ustSatir = "";
  operator = "";
};
