// Remplacez les exemples ci-dessous par vos informations avant de publier le site.
const portfolioData = {
  name: "[Votre nom]",
  role: "[Votre rôle ou domaine d’activité]",
  intro:
    "Je conçois des expériences utiles, accessibles et soignées. Ici, vous trouverez un aperçu de mon parcours, de mes compétences et de projets qui me tiennent à cœur.",
  tagline:
    "J’aime transformer les idées en réalisations concrètes, avec attention aux détails et aux personnes qui les utilisent.",
  location: "[Votre ville]",
  availability: "[Stage, alternance, missions…]",
  about:
    "Actuellement en [Votre formation ou situation], je m’intéresse particulièrement à [Vos sujets de prédilection]. À travers mes projets, je cherche à apprendre, collaborer et créer un impact positif à mon échelle.",
  skills: [
    {
      title: "[Domaine de compétence]",
      description: "[Quelques mots sur cette compétence]",
      tools: ["[Outil ou méthode]", "[Outil ou méthode]"],
    },
    {
      title: "[Domaine de compétence]",
      description: "[Quelques mots sur cette compétence]",
      tools: ["[Outil ou méthode]", "[Outil ou méthode]"],
    },
    {
      title: "[Domaine de compétence]",
      description: "[Quelques mots sur cette compétence]",
      tools: ["[Outil ou méthode]", "[Outil ou méthode]"],
    },
  ],
  experiences: [
    {
      date: "[Année — aujourd’hui]",
      title: "[Formation ou expérience]",
      place: "[Établissement ou organisation]",
      description: "[Une phrase sur ce que vous apprenez ou apportez.]",
    },
    {
      date: "[Année — année]",
      title: "[Formation ou expérience précédente]",
      place: "[Établissement ou organisation]",
      description: "[Une réalisation ou un apprentissage à mettre en avant.]",
    },
  ],
  projects: [
    {
      year: "[Année]",
      title: "[Nom de votre projet]",
      description:
        "[Décrivez le besoin, votre démarche et le résultat en quelques lignes.]",
      tags: ["[Compétence]", "[Outil]"],
      url: "",
    },
    {
      year: "[Année]",
      title: "[Nom de votre projet]",
      description:
        "[Présentez votre contribution et ce que vous avez appris.]",
      tags: ["[Compétence]", "[Outil]"],
      url: "",
    },
  ],
  contact: {
    email: "",
    linkedin: "",
    github: "",
    // Laissez vide sans CV ; sinon ajoutez votre fichier au dépôt et indiquez son chemin, p. ex. assets/cv-votre-nom.pdf.
    cvPath: "",
  },
};

const html = document.documentElement;
html.classList.add("js");

const createElement = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
};

const renderList = (container, items, renderItem) => {
  if (!container) return;
  container.replaceChildren(...items.map(renderItem));
};

const makeTags = (tags) => {
  const list = createElement("ul", "tag-list");
  for (const tag of tags) list.append(createElement("li", "", tag));
  return list;
};

const renderSkills = () => {
  const container = document.querySelector("#skills-grid");
  renderList(container, portfolioData.skills, (skill, index) => {
    const card = createElement("article", "skill-card");
    card.append(
      createElement("span", "card-index", String(index + 1).padStart(2, "0")),
      createElement("h3", "", skill.title),
      createElement("p", "", skill.description),
      makeTags(skill.tools),
    );
    return card;
  });
};

const renderExperiences = () => {
  const container = document.querySelector("#timeline");
  renderList(container, portfolioData.experiences, (experience) => {
    const item = createElement("article", "timeline-item");
    item.append(
      createElement("p", "timeline-date", experience.date),
    );
    const content = createElement("div", "timeline-content");
    content.append(
      createElement("h3", "", experience.title),
      createElement("p", "timeline-place", experience.place),
      createElement("p", "", experience.description),
    );
    item.append(content, createElement("span", "timeline-marker"));
    return item;
  });
};

const isWebUrl = (value) => {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
};

const renderProjects = () => {
  const container = document.querySelector("#projects-grid");
  renderList(container, portfolioData.projects, (project, index) => {
    const card = createElement("article", "project-card");
    const art = createElement(
      "div",
      `project-art project-art-${index % 2 === 0 ? "one" : "two"}`,
    );
    art.setAttribute("aria-hidden", "true");
    art.append(
      createElement("span", "", String(index + 1).padStart(2, "0")),
      createElement("i", "", index % 2 === 0 ? "✳" : "◌"),
    );

    const content = createElement("div", "project-content");
    const meta = createElement("p", "project-meta");
    meta.append(
      document.createTextNode(`${project.year} `),
      createElement("span", "", "•"),
      document.createTextNode(" Projet exemple"),
    );
    content.append(
      meta,
      createElement("h3", "", project.title),
      createElement("p", "", project.description),
      makeTags(project.tags),
    );

    if (project.url && isWebUrl(project.url)) {
      const link = createElement("a", "project-link", "Voir le projet ↗");
      link.href = project.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      content.append(link);
    } else {
      if (project.url) console.warn(`URL ignorée pour le projet « ${project.title} ».`);
      content.append(
        createElement("span", "placeholder-link", "Lien de démonstration à ajouter"),
      );
    }

    card.append(art, content);
    return card;
  });
};

const renderContact = () => {
  const email = document.querySelector("#contact-email");
  if (portfolioData.contact.email) {
    const emailAddress = portfolioData.contact.email.trim();
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)) {
      const link = createElement("a", "contact-link", emailAddress);
      link.href = `mailto:${emailAddress}`;
      email.replaceChildren(link);
    } else {
      console.warn("Adresse e-mail ignorée : vérifiez portfolioData.contact.email.");
    }
  }

  const socialLinks = document.querySelector("#social-links");
  const socials = [
    ["LinkedIn", portfolioData.contact.linkedin],
    ["GitHub", portfolioData.contact.github],
  ];
  renderList(socialLinks, socials, ([label, url]) => {
    if (url && isWebUrl(url)) {
      const link = createElement("a", "contact-link", `${label} ↗`);
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      return link;
    }
    if (url) console.warn(`URL ignorée pour le profil ${label}.`);
    return createElement("span", "placeholder-link", `${label} — lien à ajouter`);
  });

  const cvPath = portfolioData.contact.cvPath.trim();
  const cvContainer = document.querySelector("#cv-container");
  if (
    cvPath &&
    !/^[a-z][a-z\d+.-]*:/i.test(cvPath) &&
    !cvPath.startsWith("/") &&
    !cvPath.startsWith("\\")
  ) {
    const link = createElement("a", "button button-quiet cv-link", "Télécharger mon CV ↓");
    link.href = cvPath;
    link.setAttribute("download", "");
    cvContainer.append(link);
  } else if (cvPath) {
    console.warn("Chemin de CV ignoré : utilisez un chemin de fichier local relatif.");
  }
};

const renderPortfolio = () => {
  document.title = `${portfolioData.name} — Portfolio`;
  document.querySelector("#hero-name").textContent = portfolioData.name;
  document.querySelector("#hero-role").textContent = portfolioData.role;
  document.querySelector("#hero-intro").textContent = portfolioData.intro;
  document.querySelector("#art-card-name").textContent = portfolioData.name;
  document.querySelector("#art-card-role").textContent = portfolioData.role;
  document.querySelector("#about-tagline").textContent = portfolioData.tagline;
  document.querySelector("#about-copy").textContent = portfolioData.about;
  document.querySelector("#person-location").textContent = portfolioData.location;
  document.querySelector("#person-availability").textContent = portfolioData.availability;
  renderSkills();
  renderExperiences();
  renderProjects();
  renderContact();
};

const themeButton = document.querySelector(".theme-toggle");
const themeLabel = document.querySelector(".theme-label");
const applyTheme = (theme) => {
  html.dataset.theme = theme;
  themeLabel.textContent = theme === "light" ? "Thème sombre" : "Thème clair";
  themeButton.setAttribute(
    "aria-label",
    `Activer le thème ${theme === "light" ? "sombre" : "clair"}`,
  );
};

try {
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme === "light" || savedTheme === "dark") applyTheme(savedTheme);
} catch (error) {
  console.warn("Le thème ne peut pas être mémorisé dans ce navigateur.", error);
}

themeButton.addEventListener("click", () => {
  const nextTheme = html.dataset.theme === "light" ? "dark" : "light";
  applyTheme(nextTheme);
  try {
    localStorage.setItem("portfolio-theme", nextTheme);
  } catch (error) {
    console.warn("Le thème ne peut pas être mémorisé dans ce navigateur.", error);
  }
});

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation-principale");

const setMenuOpen = (isOpen) => {
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.querySelector(".menu-toggle-label").textContent = isOpen ? "Fermer" : "Menu";
  navigation.classList.toggle("is-open", isOpen);
};

menuButton.addEventListener("click", () => {
  setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
});

navigation.addEventListener("click", (event) => {
  if (event.target instanceof Element && event.target.closest("a")) setMenuOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuButton.focus();
  }
});

renderPortfolio();
