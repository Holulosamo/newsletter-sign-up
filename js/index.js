const d = document;
const form = d.querySelector('.main__form');
const formContainer = form.children[0];
const inputEmail = d.querySelector('.main__form-email');
const pattern = new RegExp(/^([0-9a-zA-Z]([-\.\+\_\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/);
const errorMessage = d.createElement('h3');
errorMessage.className = 'error-message';
errorMessage.textContent = inputEmail.title;


const handleValidation = () => {
    const inputText = inputEmail.value;
    if (!inputText.match(pattern)) {
      inputEmail.classList.add("error-status");
      formContainer.appendChild(errorMessage);  
    } 
    else {
      inputEmail.classList.remove("error-status");
      if(d.querySelector('.error-message')) formContainer.removeChild(errorMessage);
      return true;
    }
}

const handleSubmit = (e) => {
    e.preventDefault();
    if(handleValidation()){
        // window.location.href = "https://youtube.com"
    }
}

inputEmail.addEventListener('keyup', handleValidation);
form.addEventListener('submit', handleSubmit);

