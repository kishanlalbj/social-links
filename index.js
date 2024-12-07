const links = [
  { name: "Github", href: "https://github.com" },
  { name: "Frontend Mentor", href: "https://frontendmentor.io" },
  { name: "Linkedin", href: "https://linkedin.com" },
  { name: "Twitter", href: "https://x.com" },
  { name: "Instagram", href: "https://instagram.com" }
];

function addLinks() {
  const linksContainer = document.getElementById("links-container");

  for (let i = 0; i < links.length; i++) {
    const data = links[i];

    const link = document.createElement("a");
    link.href = data.href;
    link.innerText = data.name;
    link.target = "_blank";
    link.className = "button";

    linksContainer.appendChild(link);
  }
}

document.addEventListener("DOMContentLoaded", addLinks);
