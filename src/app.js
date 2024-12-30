let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function randomRangeNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let quien = who[randomRangeNumber(0, 3)];
let accion = action[randomRangeNumber(0, 3)];
let que = what[randomRangeNumber(0, 2)];
let cuando = when[randomRangeNumber(0, 4)];

let excusa = quien + " " + (accion + " ") + (que + " ") + (cuando + " ");

function myFunction() {
  document.getElementById("excuse").innerHTML = excusa;
  document.getElementById("titulo").innerHTML = "La excusa generada es:";
}

const reload = document.getElementById("reload");
reload.addEventListener("click", _ => {
  location.reload();
});
