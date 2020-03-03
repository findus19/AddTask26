window.addEventListener("DOMContentLoaded", function() {

  const btnRu = document.querySelector("#btnRU"),
  btnEng = document.querySelector("#btnENG"),
  input = document.querySelector("#input"),
  output = document.querySelector("#ru") ;

  btnRu.addEventListener("click", function() {
    const request = new XMLHttpRequest(),
      text = encodeURIComponent(input.value),
      key = "trnsl.1.1.20200303T172033Z.ed3764d1057efed4.fbad7d191696ae293c7f6927516dc6084d5da61f",
      url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key="+key+"&text="+text+"&lang=en-ru&format=plain&options=1";

    request.open('GET', url, true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        const data = JSON.parse(request.responseText);
        output.value = data.text;
      }
    };
    request.send();
  });

  btnEng.addEventListener("click", function() {
    const request = new XMLHttpRequest(),
      text = encodeURIComponent(input.value),
      key = "trnsl.1.1.20200303T172033Z.ed3764d1057efed4.fbad7d191696ae293c7f6927516dc6084d5da61f",
      url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key="+key+"&text="+text+"&lang=ru-en&format=plain&options=1";

    request.open('GET', url, true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        const data = JSON.parse(request.responseText);
        output.value = data.text;
      }
    };
    request.send();
  });

});