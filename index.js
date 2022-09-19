const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");
let input = document.getElementById("input-field");
generateBtn.addEventListener("click", () => {
  const characters =
    "aAbBcCdDeEfFgGhHiIjJkK1234567890lLmMnNoOp@!#$*PqQrRsStTuUvVwWxXyYzZ";
  let password = "";
  for (let i = 1; i <= 8; i++) {
    password += characters[Math.floor(Math.random() * 67)];
  }
  input.value = password;
  copyBtn.innerHTML = "Copy";
});

copyBtn.addEventListener("click", () => {
  input.select();
  navigator.clipboard.writeText(input.value);
  copyBtn.innerHTML = "Copied";
});
