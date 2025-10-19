// เลือก element ทั้งหมด
const parentBox = document.querySelector('.box-parent');
const childBox = document.querySelector('.box-child');
const resetButton = document.querySelector('.reset');

// เมื่อคลิก parent → เปลี่ยนสีเป็นชมพู
parentBox.addEventListener('click', () => {
    parentBox.style.backgroundColor = 'pink';
});

// เมื่อคลิก child → เปลี่ยนสี child เป็นฟ้า
childBox.addEventListener('click', () => {
    childBox.style.backgroundColor = 'skyblue';
    // ไม่หยุดการ bubbling เพื่อให้ parent ก็เปลี่ยนสีด้วย
    // ถ้าอยากให้หยุด ให้ใส่ event.stopPropagation();
});

// ปุ่ม reset → กลับสู่สีเดิมทั้งหมด
resetButton.addEventListener('click', () => {
    parentBox.style.backgroundColor = 'rgb(192, 192, 192)';
    childBox.style.backgroundColor = 'aliceblue';
});