let a = Number(prompt('Nhập vào 1 số: '));
let remainder = (a % 3 == 0)? 0: (a % 3 == 1)? 1 :2;
document.write('Số dư là: ' +remainder);