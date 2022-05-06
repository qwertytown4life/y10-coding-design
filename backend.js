
const url = "http://192.168.2.29:5000/fun";





document.getElementById('textbox').addEventListener('keydown', function(e) {
    if (e.key == 'Tab') {
      e.preventDefault();
      var start = this.selectionStart;
      var end = this.selectionEnd;
      this.value = this.value.substring(0, start) + "\t" + this.value.substring(end);
      this.selectionStart = this.selectionEnd = start + 1;
    }
});



document.getElementById('textbox2').addEventListener('keydown', function(e) {
    if (e.key == 'Tab') {
      e.preventDefault();
      var start = this.selectionStart;
      var end = this.selectionEnd;
  
      // set textarea value to: text before caret + tab + text after caret
      this.value = this.value.substring(0, start) +
        "\t" + this.value.substring(end);
  
      // put caret at right position again
      this.selectionStart =
        this.selectionEnd = start + 1;
    }
  });

document.getElementById('textbox3').addEventListener('keydown', function(e) {
    if (e.key == 'Tab') {
      e.preventDefault();
      var start = this.selectionStart;
      var end = this.selectionEnd;
  
      // set textarea value to: text before caret + tab + text after caret
      this.value = this.value.substring(0, start) +
        "\t" + this.value.substring(end);
  
      // put caret at right position again
      this.selectionStart =
        this.selectionEnd = start + 1;
    }
  });
  
  const doRequest = (code) => {
    return axios.post(url, { code });
};
function test(testCases, testAnswers, textBoxId, displayTable, funcName) {
  let j = funcName
  for (let i = 0; i < testCases.length; i++) {

      doRequest(document.getElementById(textBoxId).value + `\nprint(${j}(${testCases[i]}))`).then((r) => {
          let ans = r.data.result
          let value = (ans == testAnswers[i])
          console.log(value)
          document.getElementById(displayTable).rows[i + 1].cells[1].innerHTML = (ans == testAnswers[i]).toString()
          document.getElementById(displayTable).rows[i + 1].cells[1].style.color = (ans == testAnswers[i]) ? 'green': 'red';
      })        
  }
}


function showSolEvery(className) {
    let x = document.getElementsByClassName(className)
    let i;
    if (x[0].style.display == 'block') {
        for (i = 0; i < x.length; ++i) {
            document.getElementsByClassName(className)[i].style.display = 'none';
        }
    }
    else {
        for (i = 0; i < x.length; ++i) {
            document.getElementsByClassName(className)[i].style.display = 'block';
        }
    }
}
