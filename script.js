console.log("Welcome to the Huntsville Community Resource Hub!");

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.querySelector(".search-input");
    const items = document.querySelectorAll(".search-item");

    if (!searchInput || items.length === 0) return;

    searchInput.addEventListener("input", function () {
        const searchValue = searchInput.value.toLowerCase().trim();

        items.forEach(item => {
            const itemText = item.textContent.toLowerCase();

            if (searchValue === "" || itemText.includes(searchValue)) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });
    });

});




//end of search tool




if (searchInput) {
    searchInput.addEventListener('input', handleSearchInput);
}

// EmailJS Form Submission
emailjs.init("3WSDRDWGSC7KAdTJ-"); //public key

let form = document.getElementById("resourceForm");

form.onsubmit = function(event) {
    event.preventDefault(); // Preventing page reload

    // Gather form values
    let name = document.getElementById("resName").value;
    let email = document.getElementById("resEmail") ? document.getElementById("resEmail").value : "N/A";
    let resourceName = name; // Same as name
    let resourceURL = document.getElementById("resURL").value;
    let category = document.getElementById("resCategory").value;
    let description = document.getElementById("resDesc").value;
    let tags = document.getElementById("resTags").value;
    let time = new Date().toLocaleString();

    // EmailJS part
    emailjs.send("service_t0kzfg6", "template_zvs2t1u",{//these are id'
        name: name,
        email: email,
        time: time,
        resource_name: resourceName,
        resource_url: resourceURL,
        category: category,
        description: description,
        tags: tags
    })
    .then(function() {
        alert("Resource submitted successfully!");
        form.reset();
    })
    .catch(function(error) {
        console.log(error);
        alert("Something went wrong. Please try again.");
    });
};
