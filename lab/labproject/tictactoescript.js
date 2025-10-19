const cells = document.querySelectorAll('.cell');
const result = document.querySelector('.result');
const resetBtn = document.querySelector('.reset');
let board = Array(9).fill('');
let gameOver = false;

const winPatterns = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // แถว
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // คอลัมน์
  [0, 4, 8], [2, 4, 6]             // แนวทแยง
];

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    const index = Number(cell.dataset.index);

    if (board[index] === '' && !gameOver) {
      // ผู้เล่น X ลง
      board[index] = 'X';
      cell.textContent = 'X';

      // ตรวจว่าชนะหรือยัง
      if (checkWin('X')) {
        result.textContent = '🎉 ผู้เล่น X ชนะ!';
        gameOver = true;
        return;
      }

      // ตรวจว่ามีที่เหลือไหม
      if (!board.includes('')) {
        result.textContent = '😐 เสมอกัน!';
        gameOver = true;
        return;
      }

      // ระบบสุ่มลง O
      setTimeout(computerMove, 300);
    }
  });
});

function computerMove() {
  let emptyIndexes = board
    .map((val, i) => (val === '' ? i : null))
    .filter(i => i !== null);

  if (emptyIndexes.length === 0 || gameOver) return;

  const randomIndex = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
  board[randomIndex] = 'O';
  cells[randomIndex].textContent = 'O';

  if (checkWin('O')) {
    result.textContent = '🤖 ระบบ O ชนะ!';
    gameOver = true;
  } else if (!board.includes('')) {
    result.textContent = '😐 เสมอกัน!';
    gameOver = true;
  }
}

function checkWin(player) {
  return winPatterns.some(pattern => 
    pattern.every(index => board[index] === player)
  );
}

// ปุ่มรีเซ็ต
resetBtn.addEventListener('click', () => {
  board.fill('');
  cells.forEach(cell => cell.textContent = '');
  result.textContent = '';
  gameOver = false;
});
