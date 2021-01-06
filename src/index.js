import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hi Ethan</h1>
<div>
 <h2>Enjoy Your Day!!</h2>
</div>
`;
// let initialValue = 1;
// while (initialValue <= 6) {
//   console.log(`pesawat no.${initialValue} berjalan dengan baik`);
//   initialValue++;
// }
// for (let i = initialValue; i <= 10; i++) {
//   console.log(`pesawat no.${i} rusak`);
// }

// console.log(
//   "--------------------------------------------------------------------------------"
// );

// let noPesawat = 1;
// while (noPesawat <= 10) {
//   if (noPesawat <= 6) {
//     if (noPesawat === 5) {
//       console.log(`pesawat no.${noPesawat} lembur`);
//     } else {
//       console.log(`pesawat no.${noPesawat} berjalan dengan baik`);
//     }
//   } else {
//     if (noPesawat === 8) {
//       console.log(`pesawat no.${noPesawat} lembur`);
//     } else {
//       console.log(`pesawat no.${noPesawat} rusak`);
//     }
//   }

//   noPesawat++;
// }
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// for (let nomorPesawat = 1; nomorPesawat <= 10; nomorPesawat++) {
//   if (nomorPesawat <= 6) {
//     console.log(`pesawat no.${nomorPesawat} berjalan dengan baik`);
//   } else {
//     console.log(`pesawat no.${nomorPesawat} rusak`);
//   }
// }

//
// const Bus = function (
//   driverName,
//   pasengerName,
//   destination,
//   cash,
//   passengerGettingOn,
//   passengerGettingOff
// ) {
//   (this.driverName = driverName),
//     (this.pasengers = function(){
//       let pass =[];
//       for(let pas =0; pas<pass.length; pas++){
//         if(pass.length >= 0){
//           pass.push(pasengerName)
//         }
//       }
//     }),
//     (this.destination = []),
//     (this.cash = cash),
//     (this.passengerGettingOn = passengerGettingOn),
//     (this.passengerGettingOff = passengerGettingOff);
// };
// let Bis = {
//   namaSupir: "bahlul",
//   trayek: ["medaan", "pekanbaru", "kp rambutan"],
//   cash: 0,
//   paraPenumpang: [],
//   penumpangNaik: function (namaPenumangNaik) {
//     for (let i = 0; i <= this.paraPenumpang.length; i++) {
//       this.paraPenumpang.push(namaPenumangNaik);
//       return this.paraPenumpang;
//     }
//   },
//   penumpangTurun: function (namaPenumpangTurun, ongkos) {
//     for (let i = 0; i < this.paraPenumpang.length; i++) {
//       if (this.paraPenumpang[i] === namaPenumpangTurun) {
//         this.paraPenumpang.splice(i, 1, null);
//         this.cash += ongkos;
//         return this.paraPenumpang;
//       }
//     }
//   }
// };
// console.log(Bis.penumpangNaik("intan"));
// console.log(Bis.penumpangNaik("lalu"));
// // console.log(Bis.penumpangNaik("rangga"));
// // console.log(Bis.penumpangTurun("rangga", 6000));
// // console.log(Bis.penumpangTurun("lalu", 3000));
// console.log(Bis.cash);

// console.log(Bis.penumpangNaik("intan"));
// console.log(Bis.penumpangNaik("lalu"));
// // console.log(Bis.penumpangNaik("rangga"));
// // console.log(Bis.penumpangTurun("rangga", 6000));
// // console.log(Bis.penumpangTurun("lalu", 3000));
// console.log(Bis.cash);
class Bis {
  constructor(namaSupir, trayek, cash, penumpang) {
    this.namaSupir = namaSupir;
    this.trayek = trayek;
    this.cash = cash;
    this.penumpang = penumpang;
  }
  penumpangNaik(namaPenumangNaik) {
    for (let i = 0; i <= this.penumpang.length; i++) {
      if (this.penumpang.length < 4) {
        this.penumpang.push(namaPenumangNaik);
        return this.penumpang;
      } else {
        console.log("maaf taxi sudah penuh");
      }
    }
  }
  penumpangTurun(namaPenumpangTurun, ongkos) {
    if (this.penumpang.length === 0) {
      console.log("ga ada penumpang");
    }
    for (let i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] === namaPenumpangTurun) {
        this.penumpang.splice(i, 1, null);
        this.cash += ongkos;
        return this.penumpang;
      }
    }
  }
}
const bus1 = new Bis("mahmud", ["jakarta", "bandung", "tegal"], 0, []);
console.log(bus1.penumpangNaik("desi"));
console.log(bus1.penumpangNaik("rambutan"));
console.log(bus1.penumpangNaik("rambutan"));
console.log(bus1.penumpangNaik("rambutan"));
console.log(bus1.penumpangNaik("rambutan"));
// console.log(bus1.penumpangTurun("desi", 5000));
console.log(bus1.cash);

//-----------------------------------------
