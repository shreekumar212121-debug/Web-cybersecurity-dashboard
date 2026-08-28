document.addEventListener("DOMContentLoaded", () => {
    const scanBtn = document.getElementById('scanBtn');
    const output = document.getElementById('output');

    scanBtn.addEventListener('click', async () => {
        scanBtn.disabled = true;
        scanBtn.innerText = "SCANNING...";
        output.textContent = "[+] Connecting to Termux Backend Engine...\n";
        output.textContent += "[+] Dispatching parallel ping requests across subnet interface...\n";

        try {
            const response = await fetch('/api/scan');
            if (!response.ok) throw new Error(`HTTP Error Status: ${response.status}`);
            
            const data = await response.json();

            output.textContent += `[+] Target Interface: ${data.subnet}\n`;
            output.textContent += `--------------------------------------------------\n`;

            if (!data.devices || data.devices.length === 0) {
                output.textContent += "[!] Scan complete. No other public network nodes found.\n";
                output.textContent += "[*] Tip: Mobile hotspots often isolate clients (AP Isolation active).\n";
            } else {
                data.devices.forEach(device => {
                    output.textContent += `📍 Alive IP: ${device.ip} │ 🖥 * Host: ${device.name}\n`;
                });
            }

            output.textContent += `--------------------------------------------------\n`;
            output.textContent += `[📊 RECON REPORT COMPLETE]: Active sweep finalized.\n`;

        } catch (err) {
            output.textContent += `[!] Critical Error: ${err.message}\n`;
            output.textContent += `[!] Verify that app.py is running inside Termux.\n`;
        } finally {
            scanBtn.disabled = false;
            scanBtn.innerText = "LAUNCH NETWORK SWEEP";
        }
    });
});
