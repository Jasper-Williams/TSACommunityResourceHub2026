console.log("Welcome to the Huntsville Community Resource Hub!");
// -------------------- SEARCH FUNCTION --------------------
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-input");
    const items = document.querySelectorAll(".list-item");

    searchInput.addEventListener("input", function () {
        const value = searchInput.value.toLowerCase().trim();

        items.forEach(item => {
            const categories = (item.dataset.category || "")
                                .toLowerCase()          
                                .split(",")             
                                .map(cat => cat.trim());

            const itemText = item.textContent.toLowerCase();
            const matchesCategory = categories.some(cat => cat.includes(value));

            item.style.display = (itemText.includes(value) || matchesCategory) ? "" : "none";
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


const navLinks = document.querySelectorAll(".nav-link, .nav-page");
const sections = document.querySelectorAll("section.page");
const currentPage = window.location.pathname.split("/").pop();

/* ---------- SCROLL-BASED ACTIVE STATE (Home page sections) ---------- */
if (sections.length > 0) {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");

                    navLinks.forEach(link => {
                        link.classList.toggle(
                            "active",
                            link.getAttribute("href") === `#${id}`
                        );
                    });
                }
            });
        },
        { threshold: 0.6 }
    );

    sections.forEach(section => observer.observe(section));
}

/* ---------- PAGE-BASED ACTIVE STATE (About / References) ---------- */
navLinks.forEach(link => {
    const href = link.getAttribute("href");

    if (href === currentPage) {
        link.classList.add("active");
    }
});
