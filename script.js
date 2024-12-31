function showProjects () {
    alert("Coming soon: A showcase of my awesome projects!")
}
// Array of projects data 

const projects = [
    {
        title: "AI Chatbot",
        description: "A conversational chatbot powered by machine learning.",
        image: "chatbot.jpg",
        link: "https://github.com/YourGitHubUsername/ai-chatbot"
    },
    {
        title: "Data Visualization Tool",
        description: "An interactive tool for visualizing complex datasets.",
        image: "dataviz.jpg",
        link: "https://github.com/YourGitHubUsername/data-viz-tool"
    },
    {
        title: "Recommendation System",
        description: "A movie recommendation system using collaborative filtering.",
        image: "recommendation.jpg",
        link: "https://github.com/YourGitHubUsername/recommendation-system"
    }
];


// Generate project cards
function loadProjects() {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = ""; // Clear existing content

    projects.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" />
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;

        gallery.appendChild(card);
    });
}

// Initialize the gallery on page load
document.addEventListener("DOMContentLoaded", loadProjects);

