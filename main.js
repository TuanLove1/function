const kwdau = 500;
const kw50_100 = 650;
const kw100_200 = 850;
const kw200_350 = 1100;
const kwconlai = 1300;
const total_50 = 50 * kwdau;
const total_100 = total_50 + 50*kw50_100;
const total_200 = total_100 + 100*kw100_200;
const total_350 = total_200 + 150*kw200_350;
var total = 0;
document.getElementById('btnTinhTienDien').onclick = function () {
    var name = document.getElementById('fullname').value    ;
    var kW = document.getElementById('kilo').value * 1;
    if (kW > 0 && kW <= 50) {
        total = kW * kwdau;
    }
    if (kW > 50 && kW <= 100) {
        total = total_50 + (kW-50)*kw50_100;
    }
    if (kW > 100 && kW <= 200) {
        total = total_100 + (kW-100)*kw100_200;
    }
    if (kW > 200 && kW <= 350) {
        total = total_200 + (kW-200)*kw200_350;
    }
    if (kW > 350) {
        total = total_350 + (kW-350)*kwconlai;
    }
    total = total.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    var kq = document.getElementById('outputTinhTienDien');
    kq.innerHTML = 'Ông/Bà ' + name + ' đã tiêu thụ ' + kW + ' kw và số tiền điện phải tra là: ' + total +' đồng';
}
// function tinhkw1(kw1){
//     var kq;
//     kq = kw1 * 500;
//     return kq;
// }
// function tinhkw2(kw1,kw2){
//     var kq;
//     kq = kw1 * 500 + (kw2-50)*650;
//     return kq;
// }
// function tinhkw3(kw1,kw2,kw3){
//     var kq;
//     kq = kw1 * 500 + kw2*650 + (kw3-100)*850;
//     return kq;
// }
// function tinhkw4(kw1,kw2,kw3,kw4) {
//     var kq;
//     kq = kw1 * 500 + kw2*650 + kw3*850 + (kw4-200) *1100;
//     return kq;
// }
// function tinhkw5(kw1,kw2,kw3,kw4,kw5) {
//     var kq;
//     kq = kw1 * 500 + kw2*650 + kw3*850 + kw4 *1100 + (kw5-350)*1300;
//     return kq;
// }
