// bài1
// B1: cho biến day và salary
//B2: cho tiền lương 1 ngày bằng 100000
//B3: sử dụng công thức:Công thức: Lương = Lương 1 ngày * số ngày làm 
//B4: giá trị đầu ra
function enter(){
    var day = document.getElementById("day"),
    salaryOfDay = 100000,
    salary = document.getElementById("salary");
    salary.value = day.value*salaryOfDay;
    console.log( salary.value);
}

//Bài 2
// B1: khởi tạo biến n1 -> n5 
//B2 tạo biến để lấy gá trị từ n1 -> n5
//B3: tính tổng n1 -> n5
//B4: output
function enter1(){
    var n1 = document.getElementById("n1"),
    n2 = document.getElementById("n2"),
    n3 = document.getElementById("n3"),
    n4 = document.getElementById("n4"),
    n5 = document.getElementById("n5"),
    average = document.getElementById("average");
    average.value = (Number(n1.value) + Number(n2.value) + Number(n3.value) + Number(n4.value) + Number(n5.value) ) / 5;
    console.log(average.value);
}
// bài 3
//B1: cho 1 biến USD và VND
//B2: cho giá trị VND = giá trị USD * 23500
//B3: giá trị đầu ra
function enter2(){
    var USD = document.getElementById("USD"),
        VND = document.getElementById("VND");
        VND.value = USD.value * 23500;
        console.log(VND.value);
}
// bài 4
// B1: cho 2 biến dai và rong 
// B2: áp dung công thức
//  -Diện tích = dài * rông
//  -Chu vi = (dài + rộng)*2
//B3: output
function enter3 (){
    var dai = document.getElementById("dai"),
    rong = document.getElementById("rong");
    Dientich.value =dai.value * rong.value;
    Chuvi.value = (Number(dai.value) + Number(rong.value))* 2; 
    console.log(Dientich.value); 
    console.log(Chuvi.value);
}
// bài 5
//B1 tạo các biến... 
//B2: lấy hàng đơn vị và hàng chục
//  -int so_hang_dv = so%10
//  -int so_hang_chuc = so /10
//B3: sử dụng parseInt để trả về số nguyên
//B4: tính tổng hàng đơn vị và hàng chục
//B5: output
function enter4(){
    var num = document.getElementById("num"),
        sum = document.getElementById("sum"),
        so_hang_chuc = document.getElementById("so_hang_chuc"),
        so_hang_dv =document.getElementById("so_hang_dv");
    so_hang_chuc.value = num.value / 10;
    so_hang_dv.value = num.value % 10;
    so_hang_chuc.value = parseInt(so_hang_chuc.value);
    sum.value = Number(so_hang_dv.value) + Number(so_hang_chuc.value);
    console.log(sum.value);
    console.log(Number(so_hang_dv.value));
    console.log("Chuc", so_hang_chuc.value);
    console.log("DV", so_hang_dv.value);
}

var check = "b1", check1 = "bai1";
document.getElementById("bai1").onclick = function () {
    document.getElementById(check).style.display = 'none';
    document.getElementById("b1").style.display = 'block';
    check = "b1";
    document.getElementById(check1).classList.remove('mode');
    check1 = "bai1";
    document.getElementById(check1).classList.add('mode');

}
document.getElementById("bai2").onclick = function () {
    document.getElementById(check).style.display = 'none';
    document.getElementById("b2").style.display = 'block';
    check = "b2";
    document.getElementById(check1).classList.remove('mode');
    check1 = "bai2";
    document.getElementById(check1).classList.add('mode');

}
document.getElementById("bai3").onclick = function () {
    document.getElementById(check).style.display = 'none';
    document.getElementById("b3").style.display = 'block';
    check = "b3";
    document.getElementById(check1).classList.remove('mode');
    check1 = "bai3";
    document.getElementById(check1).classList.add('mode');

}
document.getElementById("bai4").onclick = function () {
    document.getElementById(check).style.display = 'none';
    document.getElementById("b4").style.display = 'block';
    check = "b4";
    document.getElementById(check1).classList.remove('mode');
    check1 = "bai4";
    document.getElementById(check1).classList.add('mode');

}
document.getElementById("bai5").onclick = function () {
    document.getElementById(check).style.display = 'none';
    document.getElementById("b5").style.display = 'block';
    check = "b5";
    document.getElementById(check1).classList.remove('mode');
    check1 = "bai5";
    document.getElementById(check1).classList.add('mode');

}
