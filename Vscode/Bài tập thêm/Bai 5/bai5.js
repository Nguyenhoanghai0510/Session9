let rate = +prompt('Nhập hệ số lương: ');
let basicSalary = +prompt('Nhập lương cơ bản: ');
let commission = +prompt ('Nhập tỷ lệ hoa hồng: ');
let basic = (rate + commission) * basicSalary;
document.write('Lương của bạn là: ' +basic);