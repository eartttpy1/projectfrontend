const isReady = confirm("คุณพร้อมที่จะเริ่มเกมหรือไม่?");

if (isReady === true) {
  console.log("ผู้ใช้กด OK... เริ่มเกม!");
} else {
  console.log("ผู้ใช้กด Cancel... ไม่เริ่มเกม");
}