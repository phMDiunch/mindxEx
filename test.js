function findOppositeNumber(n,inputNumber){
    let n_ = n / 2;
    let temp = 0;
    if (inputNumber >= n_) {
        temp = inputNumber - n_
        return temp;
    } else {
        temp = inputNumber
        return n_ + temp;
    }
}

console.log(findOppositeNumber(10,2));
console.log(findOppositeNumber(10,6));
console.log(findOppositeNumber(10,4));
console.log(findOppositeNumber(20,10));


function merge2String(str1,str2) {
    let maxLength = 0;
    if (str1.length > str2.length){
        maxLength = str1.length;
    } else {
        maxLength = str2.length;
    }
    let res = "";
    for (let i=0; i<maxLength; i++){
        if (str1[i] !== undefined) {res = res.concat(str1[i])};
        if (str2[i] !== undefined) {res = res.concat(str2[i])};
    }
    return res;
}

console.log(merge2String('abc', '123'));
console.log(merge2String('abc', '0123'));
console.log(merge2String('abcde', '123'));


let btn = document.getElementById('btn');
let soTrungThuong = Math.floor(Math.random()*9+1);
console.log(soTrungThuong)
let soLanDoan = 0;

btn.onclick = function () {
    let soDuDoan = document.getElementById('soDuDoan').value;
    if (soDuDoan < 1 || soDuDoan > 10){
        alert('Vui lòng nhập số từ 1 đến 10');
    } else {
        if (soDuDoan == soTrungThuong) {
            alert("Chúc mừng bạn đã đoán trúng");
            reset();
        } else {
            soLanDoan++;
            alert("Đoán sai")
            console.log(soLanDoan)
            document.getElementById('soDuDoan').value = ""
        }
    }
    
    if (soLanDoan === 3){
        alert("Rất tiếc, bạn đã đoán saisai 3 lần.\nSố trúng thưởng là: " + soTrungThuong)
        reset();
    }
};

function reset(){
    soLanDoan = 0;
    soTrungThuong = Math.floor(Math.random()*9+1);
    console.log(soTrungThuong)
}
