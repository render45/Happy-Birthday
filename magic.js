// 🔹 Set "true" to work freely, "false" to enable timer
const devMode = true;

// 🔹 Always show Shayari content (No timer)
function updateShayari() {
    document.getElementById('countdown').style.display = 'none';
    document.getElementById('shayari-container').style.display = 'block';
    document.getElementById('expired-message').style.display = 'none';
}

// 🔹 Run once immediately
updateShayari();
