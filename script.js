console.log("Welcome to the Huntsville Community Resource Hub!");
// -------------------- SEARCH FUNCTION --------------------
document.addEventListener("DOMContentLoaded", function () {
    const searchInputs = document.querySelectorAll(".search-input");

    searchInputs.forEach(input => {
        const items = input.parentElement.querySelectorAll(".search-item");
        if (!items.length) return;

        input.addEventListener("input", function () {
            const searchValue = input.value.toLowerCase().trim();

            items.forEach(item => {
                const itemText = item.textContent.toLowerCase();
                item.style.display = searchValue === "" || itemText.includes(searchValue)
                    ? ""
                    : "none";
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("resourceSearch");
    const items = document.querySelectorAll(".list-item.search-item");

    searchInput.addEventListener("input", function () {
        const value = searchInput.value.toLowerCase().trim();
        items.forEach(item => {
            item.style.display = value === "" || item.textContent.toLowerCase().includes(value)
                ? ""
                : "none";
        });
    });
});
// -------------------- EMAILJS FORM --------------------
if (typeof emailjs !== "undefined") {
    emailjs.init("3WSDRDWGSC7KAdTJ-"); // public key
}

const form = document.getElementById("resourceForm");

if (form) {
    form.onsubmit = function (event) {
        event.preventDefault();

        const name = document.getElementById("resName")?.value || "";
        const email = document.getElementById("resEmail")?.value || "N/A";
        const resourceURL = document.getElementById("resURL")?.value || "";
        const category = document.getElementById("resCategory")?.value || "";
        const description = document.getElementById("resDesc")?.value || "";
        const tags = document.getElementById("resTags")?.value || "";
        const time = new Date().toLocaleString();

        emailjs.send("service_t0kzfg6", "template_zvs2t1u", {
            name,
            email,
            time,
            resource_name: name,
            resource_url: resourceURL,
            category,
            description,
            tags
        })
        .then(() => {
            alert("Resource submitted successfully!");
            form.reset();
        })
        .catch((error) => {
            console.error(error);
            alert("Something went wrong. Please try again.");
        });
    };
}

