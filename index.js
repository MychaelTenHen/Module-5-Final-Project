//template_4dqplxr
//service_4gm7z1n
//zR-THbpDpBHlifJe2


function contact(event){
    event.preventDefault();
    const loading = document.querySelector(".loading");
    const success = document.querySelector(".success");
    loading.classList += " loading--visible";
    emailjs
      .sendForm(
        "service_4gm7z1n",
        "template_4dqplxr",
        event.target,
        "zR-THbpDpBHlifJe2"
    )
    .then(() => {   
        loading.classList.remove("loading--visible");
        success.classList += " success--visible";

    }).catch(() =>{
        loading.classList.remove("loading--visible");
        alert(
            "There was an error sending your message. Please try again later."
        );
    })

}

const loading = document.querySelector(".loading");

setTimeout(() => {

}, 1000);



function toggleModal() {
    document.body.classList += ('modal--open');
    isModalOpen = !isModalOpen;
    if (isModalOpen) {
        return document.body.classList.remove('modal--open');
    }
    
}
    