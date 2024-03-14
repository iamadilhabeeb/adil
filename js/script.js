// Add custom JavaScript here
function runTypingEffect() {
  const text = 'I am Adil';
  const addText = document.getElementById('typing-text');

  typeText(text, addText);

};

function typeText(text, addText) {
  for (let i = 0; i < text.length; i++){
    setTimeout(() => {
      addText.textContent += text.charAt(i);
    }, 150*i);
  }
}

document.addEventListener('DOMContentLoaded', runTypingEffect);