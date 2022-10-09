let count = 0;

document.getElementById("increment-btn").addEventListener("click", function () {
  count++;
  document.getElementById("count-el").innerText = count;
  console.log(count);
});

document.getElementById("save-btn").addEventListener("click", function () {
  console.log(count);
});

document.getElementById("save-btn").addEventListener("click", function () {
  let paraCount = count + " - ";
  document.getElementById("save-el").innerHTML += paraCount;
  count = 0;
  document.getElementById("count-el").innerText = 0;
});
