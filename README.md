# 🛡️ Full-Stack Network Reconnaissance & Security Scanner Dashboard
An asynchronous, multi-threaded local network discovery tool and security hub built natively on an Android architecture using **Python, Flask, Shell Subprocesses, and Vanilla JavaScript**.

## 🚀 Project Overview
This repository contains a mobile-first, full-stack network utility tool designed to map out active IP nodes across a local subnet interface concurrently. Built entirely on an Android mobile ecosystem using **Termux (Linux Terminal Environment)**, this project demonstrates how to bridge system-level networking shell commands with a modern web dashboard interface.

---

## 🛠️ Tech Stack & Architecture
- **Backend Core**: Python 3.x, Flask Web Framework
- **Networking Logic**: Multi-threaded Shell Subprocesses (`ping` engine parsing), Socket API
- **Frontend Panel**: Semantic HTML5, Custom CSS3 Matrix Dark Theme, Asynchronous JavaScript (Fetch API Engine)
- **Deployment Platform**: Android OS Linux Ecosystem via Termux

---

## ✨ Features
- **Parallel Network Sweeping**: Spawns concurrent background threads to scan the entire Class C local subnet (`1-254`) simultaneously, dropping execution latency under 5 seconds.
- **Dynamic Interface Detection**: Automatically resolves the current gateway interface architecture to bind onto the correct host IP range seamlessly.
- **Asynchronous Live Terminal UI**: Leverages JavaScript Promise streams to handle user interaction blocks and update the custom console wrapper without single-page reload loops.
- **Device Hostname Resolution**: Attempts reverse socket identification layers to map active node device names.

---

## 📊 How It Works (System Architecture)
[ Browser Frontend UI ]
│ (Async HTTP Fetch Request)
▼[ Flask API Layer (app.py) ] ──► [ Local Gateway Socket Discovery ]
│
▼  (Concurrent Thread Pooling)[ Android Shell Engine (ping -c 1) ] ──► [ Parse Response Codes ]
│
▼  (JSON Serialization payload)[ Target Array Rendered on Terminal Box ]

---

## 💻 Code Snippets & System Highlights

### ⚡ Fast Subprocess Ping Sweeper Loop (Python Backbone)
```python
def ping_ip(ip):
    res = subprocess.run(["ping", "-c", "1", "-W", "1", ip], stdout=subprocess.DEVNULL)
    if res.returncode == 0:
        # Node successfully recognized on the gateway channel
        devices.append({"ip": ip, "name": "Active Node Interface"})
```

### 📡 Non-Blocking Frontend Pipeline (JavaScript UI Link)
```javascript
const response = await fetch('/api/scan');
const data = await response.json();
data.devices.forEach(device => {
    output.textContent += `📍 Alive IP: ${device.ip} │ 🖥️ Host: ${device.name}\n`;
});
```

---

## 👤 Developer Profile
- **SHREE KUMAR KESHARWANI** : 3rd Year BCA (Bachelor of Computer Applications) Student
- **Core Focus**: Full-Stack Web Applications, Android Tool Chains, Linux Server Environments, and Ethical Hacking.
