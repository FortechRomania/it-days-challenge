function closePopups() {
  document
    .querySelectorAll(".popup")
    .forEach((element) => element.parentNode.removeChild(element));
}

function youShallNotPass() {
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.innerHTML = `<div>
  <div class="star-wars subtitle">Patience you must have...</div>
  </div>
  `;
  setTimeout(() => {
    popup.innerHTML = `<div>
      <div class="star-wars subtitle">You shall not pass</div>
      Decryption.................passed<br/><br/>
      It seems there is an error in the source code. It's your job to fix it before it's too late. May the force be with you. 
    <div class="buttons">
      <button class="secondary" onclick="closePopups()">Close</button>
    </div></>`;
  }, 3000);
  document.body.append(popup);
}

function wrongKey() {
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.innerHTML = `<div>
  <div class="star-wars subtitle">There seems to be a disturbance in the force</div>
  <div>It seems you passed the wrong secret message. <br />You might try again.</div>
  <button class="secondary" onclick="closePopups()">Yes. I can handle myself.</div>
  </>
  `;
  document.body.append(popup);
}

function greatJobYoungPadawan() {
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.innerHTML = `<div>
  <div class="star-wars subtitle">Great job young padawan!</div>
  <div>From the people of galaxy, receive our massive thanks! Follow the link below to get a reward.</div>
  <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=YNLHiwewekalM3fJdHhJqoE4fR35tS5CnlOzjnWyuTZUQkgxRkxPUU5RRzRUMlhGVTdNV0UzOEJYWi4u" target="_new"><button class="secondary">Get a reward</button></a></div>
  </>
  `;
  document.body.append(popup);
}

let secret = "U2FsdGVkX1/iI2ZNxApSqAc8ibbJn7PqPL5ZZqp4AA4=";

function decryptSecretMessage(e) {
  if (e.preventDefault) e.preventDefault();
  var decrypted = CryptoJS.AES.decrypt(secretKey.value, secret);
  if (decrypted.toString(CryptoJS.enc.Utf8)) {
    return {
      hasWrongKey: false,
      hasRightKey: true,
    };
  }
  wrongKey();
  return {
    hasWrongKey: true,
    hasRightKey: false,
  };
}

let form = document.getElementById("my-form");
let secretKey = document.getElementById("enter-key");

if (form.attachEvent) {
  form.attachEvent("submit", handleFormSubmit);
} else {
  form.addEventListener("submit", handleFormSubmit);
}
