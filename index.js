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

// Plant API Fetching and Display

  const API_URL = "https://api.allorigins.win/raw?url=" +
  encodeURIComponent("https://trefle.io/api/v1/plants?token=usr-Ev-NDlIIEK1vVg3uFLFf9lbE79wXTLMG2hekX30MIb4");
  const plantList = document.getElementById("plant-list");

    let allPlants = [];

    function displayPlants(plants) {
        const plantList = document.getElementById("plant-list");
        if (!plantList) return;
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

    }

   
    const button = document.getElementById("search-btn");

    requestAnimationFrame((faspinner) => {
        button.classList.add("not-loading");
    });

  async function getPlants() {
    try {
      const plantList = document.getElementById("plant-list");
      const response = await fetch(API_URL);
      const data = await response.json();
      const plants = data.data;
      allPlants = plants; // Store all plants for searching

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
      const plantList = document.getElementById("plant-list");
      if (plantList) {
        plantList.innerHTML = "<p>Error loading plant data. Please try again later.</p>";
      }
    }
  }

  

 document.addEventListener("DOMContentLoaded", () => {
    getPlants();
});


// -------------------------
// Search BAR
// -------------------------
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

// Filter plants when user clicks search
searchInput.addEventListener("keypress", e => {
  if (e.key === "Enter") searchBtn.click();
});
searchBtn.addEventListener("click", () => {
    // start spinner
    startLoading();
    const query = searchInput.value.toLowerCase().trim();
    const filteredPlants = allPlants.filter(plant =>
        (plant.common_name && plant.common_name.toLowerCase().includes(query)) ||
        (plant.scientific_name && plant.scientific_name.toLowerCase().includes(query))
    );

  // If no matches, show message
    
        if (filteredPlants.length === 0) {
    const plantList = document.getElementById("plant-list");
    plantList.innerHTML = `<p class="no-results">No plants found. Try another name.</p>`;
    stopLoading();
    return; // Exit early
  }

  // Otherwise, display matching plants
  setTimeout(() => {
    displayPlants(filteredPlants);
    stopLoading();
  }, 500);
});

  function startLoading() {
  button.classList.remove("not-loading");
  button.classList.add("loading");
  button.innerHTML = '<i class="fas fa-spinner"></i>'; // show spinner
}

function stopLoading() {
  button.classList.remove("loading");
  button.classList.add("not-loading");
  button.textContent = 'Search'; // restore normal text
}


