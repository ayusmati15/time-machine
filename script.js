let countdownInterval;
let totalLocked = 0;
let totalRevealed = 0;
let messages = []; 
function lockMessage() {
  const msg = document.getElementById("messageInput").value.trim();
  const delay = parseInt(document.getElementById("delay").value);

  const msgBox = document.getElementById("revealMessage");
  const countdown = document.getElementById("countdown");
  const timeline = document.getElementById("entries");

  if (!msg) {
    alert("Please write a message first.");
    return;
  }
  totalLocked++;
  document.getElementById("totalLocked").textContent = totalLocked;

  messages.push({ text: msg, delay: delay });

  document.querySelector(".form-area").style.display = "none";
  msgBox.classList.add("hidden");
  msgBox.innerText = "";
  countdown.innerText = `⏳ Opening your message in ${delay} seconds...`;

  let timeLeft = delay;

  countdownInterval = setInterval(() => {
    timeLeft--;
    countdown.innerText = `⏳ Opening your message in ${timeLeft} seconds...`;

    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      countdown.innerText = "📬 Here's your message:";
      msgBox.innerText = `💌 ${msg}`;
      msgBox.classList.remove("hidden");

      totalRevealed++;
      document.getElementById("totalRevealed").textContent = totalRevealed;

      const step = totalRevealed;
      const entry = document.createElement("div");
      entry.className = "entry";
      entry.innerHTML = `<strong>Step ${step}:</strong> ${msg} (Delay: ${delay}s)`;
      timeline.appendChild(entry);

      timeline.parentElement.style.display = "block";

      document.querySelector(".form-area").style.display = "block";
    }
  }, 1000);
}