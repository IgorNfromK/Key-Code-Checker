//select element
const keyData = document.getElementById("insert");
//display data of key pressed
const displayKeyData = (e) => {
  keyData.innerHTML = `
    <div class="key">
    ${e.key === "" ? "Space" : e.key}
            <small>event.key</small>
        </div>
          <div class="key">${e.keyCode}
            <small>event.keyCode</small>
        </div>
          <div class="key">${e.code}
            <small>event.code</small>
        </div>
    `;
};
//handling key press
window.addEventListener("keydown", displayKeyData);
