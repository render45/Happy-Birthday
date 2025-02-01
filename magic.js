// 🔹 Set "true" to work freely, "false" to enable timer
const devMode = false;

// 🔹 Set open and close times (IST converted to UTC)
const openTime = new Date("2025-02-02T06:30:00Z"); // 12:00 PM IST
const closeTime = new Date("2025-02-02T06:35:00Z"); // 12:05 PM IST

function updateCountdown() {
    if (devMode) {
        // 🔹 DEVELOPMENT MODE: Always show Shayari content
        document.getElementById('countdown').style.display = 'none';
        document.getElementById('shayari-container').style.display = 'block';
        document.getElementById('expired-message').style.display = 'none';
        return;
    }

    // 🔹 LIVE MODE: Apply time restrictions
    const now = new Date();

    if (now < openTime) {
        // Before 12:00 PM - Show countdown
        const timeDiff = openTime - now;
        const hours = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML = `Wait Honey: ${hours} घंटे ${minutes} मिनट ${seconds} सेकंड में`;
        document.getElementById('shayari-container').style.display = 'none';
        document.getElementById('expired-message').style.display = 'none';

    } else if (now >= openTime && now < closeTime) {
        // Between 12:00 PM and 12:05 PM - Show Shayari content
        document.getElementById('countdown').style.display = 'none';
        document.getElementById('shayari-container').style.display = 'block';
        document.getElementById('expired-message').style.display = 'none';

    } else {
        // After 12:05 PM - Show "Missed it" message
        document.getElementById('countdown').style.display = 'none';
        document.getElementById('shayari-container').style.display = 'none';
        document.getElementById('expired-message').style.display = 'block';
    }
}

// 🔹 Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// 🔹 Run once immediately to prevent delay
updateCountdown();
