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


let isModalOpen = false;

function toggleModal() {
    isModalOpen = !isModalOpen;
    if (isModalOpen) {
        document.body.classList.add('modal--open');
    } else {
        document.body.classList.remove('modal--open');
    }
    
}

document.addEventListener("DOMContentLoaded", () => {
  const API_URL = "https://corsproxy.io/?https://trefle.io/api/v1/plants?token=usr-Ev-NDlIIEK1vVg3uFLFf9lbE79wXTLMG2hekX30MIb4";
  const plantList = document.getElementById("plant-list");

  async function getPlants() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      const plants = data.data;

      // Check plantList exists
      if (!plantList) {
        console.error("No element with id 'plant-list' found.");
        return;
      }

      plantList.innerHTML = plants
        .map(
          (plant) => `
          <div class="plant-card">
            <img src="${plant.image_url || 'https://via.placeholder.com/150'}" alt="${plant.common_name || 'No name'}">
            <h3>${plant.common_name || 'Unnamed Plant'}</h3>
            <p><em>${plant.scientific_name || ''}</em></p>
          </div>`
        )
        .join("");
    } catch (error) {
      console.error("Error fetching plant data:", error);
      if (plantList) {
        plantList.innerHTML =
          "<p>Error loading plant data. Please try again later.</p>";
      }
    }
  }

  // Called when user clicks “Find a Plant”
  window.findPlants = function () {
    getPlants();
  };
});



    