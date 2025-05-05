const inputs = document.querySelectorAll("input");
const div = document.getElementById("theDiv");
let sp = document.getElementById("sp");
function updatePreview() {
  const n1v = n1.value || 0;
  const n2v = n2.value || 0;
  const n3v = n3.value || 0;
  const n4v = n4.value || 0;
  //   const n5v = n5.value || 0;
  //   const n6v = n6.value || 0;
  //   const n7v = n7.value || 0;
  //   const n8v = n8.value || 0;

  div.style.borderRadius = `${n1v}px ${n2v}px ${n3v}px ${n4v}px `;
  sp.innerText = `border-radius: ${n1v}px ${n2v}px ${n3v}px ${n4v}px`;
}

sp.addEventListener("click", (e) => {
  navigator.clipboard.writeText(sp.innerText).then(() => {
    alert("CSS Copied");
  });
});

inputs.forEach((input) => {
  input.addEventListener("input", updatePreview);
});

updatePreview(); // initial call
