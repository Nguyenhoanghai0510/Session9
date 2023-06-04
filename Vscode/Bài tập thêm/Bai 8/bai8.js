const PI = 3.14;
let radius = Number(prompt('Nhập bán kính hình tròn'));
let perimeter = 2 * radius * PI;
let acreage = Math.pow(radius,2) * PI;
document.write('Chu vi hình tròn là: '+perimeter+ '<br>')
document.write('Diện tích hình tròn là: '+acreage)
