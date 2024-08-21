function toggleDetails(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

document.querySelectorAll('.hobby-item').forEach(item => {
    item.addEventListener('click', () => {
        const content = item.querySelector('.hobby-content');
        if (content.style.opacity === '1') {
            content.style.opacity = '0';
            content.style.visibility = 'hidden';
        } else {
            content.style.opacity = '1';
            content.style.visibility = 'visible';
        }
    });
});
