let a = Number(prompt('Nhập vào một số có ba chữ số: '));
let hundreds = Math.floor(a / 100);
let dozens = Math.floor((a%100) /10);
let units = a % 10;
document.write('Số đảo ngược là: ' +units + dozens + hundreds);