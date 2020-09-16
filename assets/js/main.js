const ipText = () => {
  const today = new Date();
  let ipText = document.getElementById("ipText");
  ipText.innerHTML = "Copyright " + ipText.innerHTML + " &#169; " + today.getFullYear();
};

ipText();