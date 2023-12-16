// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
    links.classList.toggle("show-links");
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        // prevent default
        e.preventDefault();
        links.classList.remove("show-links");

        const id = e.target.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        //
        let position = element.offsetTop - 62;

        window.scrollTo({
            left: 0,
            // top: element.offsetTop,
            top: position,
            behavior: "smooth",
        });
    });
});

let message = "Number of visits to this page - ";
let countVisitsElement = document.querySelector("#countPageViews");
let countVisits;

// first check if local storage exists, then next return the value for the pageViews key if exists
function numVisits() {
    if (typeof Storage !== "undefined") {
        countVisits = window.localStorage.getItem("pageViews");
        return countVisits;
    } else {
        document.getElementById("pageView").remove();
        return false;
    }
}

// actual code that updates the visitor count
function visitCount() {
    if (typeof numVisits() === "object") {
        window.localStorage.setItem("pageViews", String(1));
        countVisitsElement.innerHTML = `${message} 1`;
    } else {
        countVisits = Number(countVisits) + 1;
        countVisitsElement.innerHTML = `${message} ${countVisits}`;
        window.localStorage.setItem("pageViews", countVisits);
    }
}

resetbtn.addEventListener("click", () => {
    countVisits = 1;
    countVisitsElement.innerHTML = `${message} ${countVisits}`;
    window.localStorage.setItem("pageViews", countVisits);
});

function websiteVisits(response) {
    document.querySelector("#visits").textContent = response.value;
}

$("#pageViewCountAPI a").on("click", function (event) {
    event.preventDefault();

    $.ajax(
        this.href,
        {
            success: function (data) {},
        },
        error,
        function () {}
    );
});
