//template_4dqplxr
//service_4gm7z1n
//zR-THbpDpBHlifJe2

function contact()
{
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    emailjs.sendForm(
        "service_4gm7z1n",
        "template_4dqplxr",
        target,
        "zR-THbpDpBHlifJe2"
    , { 
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function(response){  
        console.log("SUCCESS", response.status, response.text);
        alert("Your message has been sent successfully!");
    }, function(error){
        console.log("FAILED", error);
        alert("There was an error sending your message. Please try again later.");
    });
}

const loading = document.querySelector(".loading");
loading.classList += "modal__content"
setTimeout(() => {
    loading.classList.remove("modal__content")
}, 1000);



function openModal() {
  const modal = document.getElementById('.modal');
  modal.style.display = 'block';
}

const modal = document.querySelector('.modal');
function closeModal() {
  modal.style.display = 'none';

const openButton = document.getElementById('openModalButton');
const closeButton = document.getElementById('closeModalButton');

openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
}

window.addEventListener('click', (event) => {
  if (event.target === myModal) {
    closeModal();
  }
});