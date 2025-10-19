document.addEventListener('DOMContentLoaded', () => {
    const inputBox = document.getElementById('input_box');
    const listContainer = document.getElementById('list_container');

    // 1. กด Enter เพื่อเพิ่มรายการ
    inputBox.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const taskText = inputBox.value.trim();
            if (taskText !== "") {
                addTask(taskText);
                inputBox.value = ''; // เคลียร์ช่อง input
            }
        }
    });

    // ฟังก์ชันสำหรับเพิ่มรายการ
    function addTask(taskText) {
        const deleteIcon = document.createElement('i');
        deleteIcon.className = 'fas fa-trash';
        deleteIcon.style.cursor = 'pointer';

        const li = document.createElement('li');

        const spanText = document.createElement('span');
        spanText.textContent = taskText;

        // 2. คลิกที่ข้อความ -> ขีดฆ่า
        spanText.addEventListener('click', () => {
            li.classList.toggle('checked');
        });

        // 3. คลิกถังขยะ -> ลบรายการ
        deleteIcon.addEventListener('click', () => {
            listContainer.removeChild(li);
        });

        li.appendChild(deleteIcon);
        li.appendChild(spanText);
        listContainer.appendChild(li);
    }
});
