// Wait until the DOM is fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("musicForm"); // Ensure the form ID matches in HTML
    const successMessage = document.getElementById("successMessage");
    const errorMessage = document.getElementById("errorMessage");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from reloading the page

        // Get the values from the form
        const songName = document.getElementById("songName").value;
        const artist = document.getElementById("artist").value;
        const genre = document.getElementById("genre").value;
        const recommendation = document.getElementById("recommendation").value;

        // Log the form data to the console for debugging
        console.log("Song Name: " + songName);
        console.log("Artist: " + artist);
        console.log("Genre: " + genre);
        console.log("Recommendation: " + recommendation);

        // Show success message
        if (songName && artist && genre && recommendation) {
            successMessage.style.display = "block";  // Show success message
            errorMessage.style.display = "none";  // Hide error message
        } else {
            errorMessage.style.display = "block";  // Show error message if fields are missing
            successMessage.style.display = "none";  // Hide success message
        }
    });
});
