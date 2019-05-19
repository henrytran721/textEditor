const textEntered = document.querySelector('.textEntered');
const boldBtn = document.querySelector('.boldBtn');
const headerBtn = document.querySelector('.headerBtn');
const italicizeBtn = document.querySelector('.italicizeBtn');
const underlineBtn = document.querySelector('.underlineBtn');
const codeBtn = document.querySelector('.codeBtn');
const quoteBtn = document.querySelector('.quoteBtn');
const linkBtn = document.querySelector('.linkBtn');
let text = '';

function highlightText() {

  if(window.getSelection().toString() === '') {
    console.log('nothing');
  } else {
    text = window.getSelection().toString();
    console.log(text[0]);
    return text;
  }
}
function headerText() {
  let headerCounter = false;
  highlightText();
  let uppercase = text.charAt(0).toUpperCase() + text.slice(1);
  if(headerCounter === false) {
    headerCounter = true;
    document.execCommand('formatBlock', false, 'H1');
    document.execCommand('insertHTML', false, uppercase);
    console.log(headerCounter);
  }
}
function boldText() {
  document.execCommand('bold');
}
function italicizeText() {
  document.execCommand('italic');
}
function underlineText() {
  document.execCommand('underline');
}
function codeText() {
  document.execCommand('fontName', false, 'Source Code Pro');
  document.execCommand('fontSize', false, '2');
  document.execCommand('hiliteColor', true, '#d3d3d3');
}
function quoteText() {
  highlightText();
  let quoted = '"' + text + '"';
  document.execCommand('insertHTML', false, quoted);
}
function linkText() {
  document.execCommand('createLink', false, prompt('Please insert a URL'));
}

textEntered.addEventListener('mouseup', function() {
  highlightText();
  boldBtn.addEventListener('click', boldText);
  headerBtn.addEventListener('click', headerText);
  italicizeBtn.addEventListener('click', italicizeText);
  underlineBtn.addEventListener('click', underlineText);
  codeBtn.addEventListener('click', codeText);
  quoteBtn.addEventListener('click', quoteText);
  linkBtn.addEventListener('click', linkText);
});
