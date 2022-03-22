// Bài 1
function vungUuTien(){
    var areaA = document.getElementById('areaA');
    var areaB = document.getElementById('areaB');
    var areaC = document.getElementById('areaC');
    var areaX = document.getElementById('areaX');
    var area;
    if (areaA.checked){
        area = 2;
    } else if (areaB.checked){
        area = 1;
    } else if (areaC.checked){
        area = 0.5;
    } else if (areaX.checked){
        area = 0;
    }
    return area;
}
function doiTuong(){
    var obj1 = document.getElementById('obj1');
    var obj2 = document.getElementById('obj2');
    var obj3 = document.getElementById('obj3');
    var obj0 = document.getElementById('obj0');
    var obj;
    if (obj1.checked){
        obj = 2.5;
    } else if (obj2.checked){
        obj = 1.5;
    } else if (obj3.checked){
        obj = 1;
    } else if (obj0.checked){
        obj = 0;
    }
    return obj;
}
function tinhDiem(){
    var diem1 = document.getElementById('diem1').value * 1;
    var diem2 = document.getElementById('diem2').value * 1;
    var diem3 = document.getElementById('diem3').value * 1;
    var tongDiem = diem1 + diem2 + diem3;
    return tongDiem;
}
function xetTuyen(){
    var diemChuan = document.getElementById('diemChuan').value * 1;
    if (tinhDiem() + doiTuong() + vungUuTien() >= diemChuan){
        var ketQua = "Chúc mừng bạn đã trúng tuyển vào trường của chúng tôi";
    } else {
        var ketQua = "Rất tiếc! Bạn chưa đạt đủ điều kiện để vào trường, hẹn gặp lại vào năm sau"
    }
    document.getElementById('ketQua').innerHTML = ketQua;
}
// Bài 2
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

