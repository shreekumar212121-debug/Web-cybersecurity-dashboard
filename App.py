from flask import Flask, render_template, jsonify
import subprocess
import socket
import threading

app = Flask(__name__)

def get_local_subnet():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        return ".".join(ip.split(".")[:3]) + "."
    except Exception:
        return "192.168.1."
    finally:
        s.close()

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/scan', methods=['GET'])
def scan_network():
    subnet = get_local_subnet()
    devices = []
    threads = []
    
    def ping_ip(ip):
        try:
            res = subprocess.run(["ping", "-c", "1", "-W", "1", ip], stdout=subprocess.DEVNULL)
            if res.returncode == 0:
                try:
                    hostname = socket.gethostbyaddr(ip)[0]
                except socket.herror:
                    hostname = "Active Device"
                devices.append({"ip": ip, "mac": "Available via Gateway", "name": hostname})
        except Exception:
            pass

    for i in range(1, 255):
        target = subnet + str(i)
        t = threading.Thread(target=ping_ip, args=(target,))
        threads.append(t)
        t.start()

    for t in threads:
        t.join()

    return jsonify({"subnet": subnet + "0/24", "devices": devices})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)
