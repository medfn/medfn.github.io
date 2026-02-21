// function for news/announcement/notification
function showNews(message) {
    let newsFeed = document.getElementById("news-feed");
    newsFeed.textContent = message;
    newsFeed.classList.add("show");
    setTimeout(() => {
        newsFeed.classList.remove("show");
    }, 2000); // Show for 2 seconds, then fade out
}
function copyDiscord() {
    const discordUsername = "medfouna";
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard
            .writeText(discordUsername)
            .then(() => {
                showNews("Discord username copied to clipboard!");
            })
            .catch((err) => {
                console.error("Failed to copy: ", err);
                showNews("Failed to copy Discord username.");
            });
    } else {
        // Fallback for insecure context or unsupported clipboard API
        const textArea = document.createElement("textarea");
        textArea.value = discordUsername;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand("copy");
            showNews("Discord username copied to clipboard!");
        } catch (err) {
            console.error("Fallback: Failed to copy: ", err);
            showNews("Failed to copy Discord username.");
        }
        document.body.removeChild(textArea);
    }
}