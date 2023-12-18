function toggleDropdown() {
    const dropdownContent = document.getElementById("dropdown");
    dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
}

window.onclick = function(event) {
    if (!event.target.matches('#dropdownButton')) {
        const dropdownContent = document.getElementById("dropdown");
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        }
    }
}