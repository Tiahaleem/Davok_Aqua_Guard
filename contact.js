emailjs.init({
  publicKey: "rMovMEzHT8P53wnQI",
});

function showMessage(text, type) {
  const oldMessage = document.querySelector(".custom_message");

  if (oldMessage) {
    oldMessage.remove();
  }

  const msg = document.createElement("div");
  msg.className = `custom_message ${type}`;
  msg.innerText = text;

  document.body.appendChild(msg);

  setTimeout(() => {
    msg.classList.add("show");
  }, 100);

  setTimeout(() => {
    msg.classList.remove("show");

    setTimeout(() => {
      msg.remove();
    }, 300);
  }, 3000);
}

function sendMail() {
  const name = document.getElementById("name_inp").value.trim();
  const phone = document.getElementById("phone_inp").value.trim();
  const email = document.getElementById("email_inp").value.trim();
  const service = document.getElementById("service_inp").value.trim();
  const message = document.getElementById("msg_inp").value.trim();
  const sendBtn = document.getElementById("sendBtn");

  if (!name || !phone || !email || !service || !message) {
    showMessage("⚠️ Please fill all fields", "warning");
    return;
  }

  const params = {
    from_name: name,
    phone: phone,
    reply_to: email,
    service: service,
    message: message,
  };

  const serviceID = "service_s575oxe";
  const templateID = "template_2a5t3eq";
  const autoReplyTemplateID = "template_autoreply";

  sendBtn.disabled = true;
  sendBtn.innerText = "Sending...";

  emailjs
    .send(serviceID, templateID, params)
    .then(() => {
      emailjs.send(serviceID, autoReplyTemplateID, params);

      showMessage("✅ Message sent successfully!", "success");

      document.getElementById("name_inp").value = "";
      document.getElementById("phone_inp").value = "";
      document.getElementById("email_inp").value = "";
      document.getElementById("service_inp").value = "";
      document.getElementById("msg_inp").value = "";

      sendBtn.disabled = false;
      sendBtn.innerText = "Send Message";
    })
    .catch((error) => {
      console.log("EmailJS Error:", error);

      showMessage("❌ Failed to send message. Please try again.", "error");

      sendBtn.disabled = false;
      sendBtn.innerText = "Send Message";
    });
}