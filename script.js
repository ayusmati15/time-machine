let countdownInterval;

function lockMessage() {
  const msg = document.getElementById("messageInput").value.trim();
  const delay = parseInt(document.getElementById("delay").value);

  const msgBox = document.getElementById("revealMessage");
  const countdown = document.getElementById("countdown");

  if (!msg) {
    alert("Please write a message first.");
    return;
  }


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
    }
  }, 1000);
}
