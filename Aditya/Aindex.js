
document.addEventListener("DOMContentLoaded", function() {
    const footerData = [
        {
            title: "Support",
            links: [
                "Help Center",
                "AirCover",
                "Anti-discrimination",
                "Disability support",
                "Cancellation option"
            ]
        },
        {
            title: "Hosting",
            links: [
                "Airbnb your home",
                "AirCover for Hosts",
                "Hosting resource",
                "Community forum",
                "Hosting responsibly"
            ]
        },
        {
            title: "Airbnb",
            links: [
                "Newsroom",
                "New features",
                "Careers",
                "Investors",
                "Airbnb.org emergency stays"
            ]
        }
    ];

    const footer = document.createElement("div");
    footer.className = "footer";

    const mainBoxF = document.createElement("div");
    mainBoxF.className = "main-boxF";

    footerData.forEach((section) => {
        const boxF = document.createElement("div");
        boxF.className = "boxF";
        const ul = document.createElement("ul");
        const br = document.createElement("br");
        ul.appendChild(br.cloneNode());

        const liTitle = document.createElement("li");
        liTitle.innerHTML = `<b>${section.title}</b>`;
        ul.appendChild(liTitle);
        ul.appendChild(br.cloneNode());

        section.links.forEach((link) => {
            const liLink = document.createElement("li");
            liLink.textContent = link;
            ul.appendChild(liLink);
            ul.appendChild(br.cloneNode());
        });

        boxF.appendChild(ul);
        mainBoxF.appendChild(boxF);
    });

    footer.appendChild(mainBoxF);

    // Adding the horizontal line
    const hrDiv = document.createElement("div");
    hrDiv.style.height = "4px";
    hrDiv.style.width = "90%";
    hrDiv.style.margin = "auto";
    hrDiv.style.backgroundColor = "rgb(229, 229, 229)";
    footer.appendChild(hrDiv);

    // Footer Bottom Part
    const footerBottom = document.createElement("div");
    footerBottom.className = "footer1";
    footerBottom.innerHTML = `
        <div class="left">
        © 2024 Airbnb, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a> ·
            <a href="#">Sitemap</a> · <a href="#">Company details</a>
        </div>
        <div class="right">
            🌐 English (IN) 💵 INR
            <div class="media">
                <span>
                    follow us on
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-twitter"></i>
                </span>
            </div>
        </div>
    `;

    // Appending the footer bottom to the footer
    footer.appendChild(footerBottom);

    document.body.appendChild(footer);
});
