const dom = {
    blcJsonString: document.querySelector(".jsonString"),
    blcJsonParse: document.querySelector(".jsonParse"),
    btn: document.querySelector(".btn"),
    error: document.querySelector(".error"),
  },
  errorMsg = `[format error]`;

let test = [
  {
    id: 1,
    name: "Yevhen",
    age: 39,
  },
  {
    id: 2,
    name: "Irina",
    age: 37,
  },
];

dom.blcJsonString.addEventListener("click", () => (dom.error.innerHTML = ""));

dom.btn.addEventListener("click", () => {
  try {
    let jsonText = JSON.parse(dom.blcJsonString.value);
    dom.blcJsonParse.value = JSON.stringify(jsonText, null, 4);
    dom.error.innerHTML = "";
  } catch (error) {
    dom.error.innerHTML = errorMsg;
    dom.blcJsonParse.value = "";
  }
});
