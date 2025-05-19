var linkedin = "https://www.linkedin.com/in/davide-temelie-581b27319/";
var github = "https://github.com/cemoni4";
var sudo = "https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1";
var email = "mailto:temdav2356@gmail.com";

let banner = [
  `<div id="banner-section" class="banner">
 Welcome to my portfolio! — Type <span class="command">help</span> for a list of supported commands.
  </div>`,
];

let aboutme = [
  "<br>",
  `<div id="aboutme-section">`,
  `<span class='underline'>Hey, I'm Davide Temelie! 👋</span>`,
  "<br>",
  `<li>🛡️ Cybersecurity student @ ITS Alto Adriatico, passionate about hacking & digital defense.</li>`,
  `<li>⚙️ Skilled in Linux, networking, privilege escalation, and vulnerability assessment.</li>`,
  `<li>🎯 Active on TryHackMe & Hack The Box — always chasing flags and new challenges.</li>`,
  `<li>💻 Experience with Python, Bash, HTML/CSS/JS and offensive security tools.</li>`,
  `<li>📁 Use the <span class="command">projects</span> command to explore my GitHub & CTF work!</li>`,
  `<li>🤝 Open to collaborating on red team, penetration testing or research projects.</li>`,
  `<li>📬 Reach me at: <a href="mailto:temdav2356@gmail.com">temdav2356@gmail.com</a></li>`,
  "</div>",
  "<br>",
];


let social = [
  "<br>",
  'linkedin       <a href="' +
    linkedin +
    '" target="_blank">linkedin/davideTemelie</a>',
  'github         <a href="' +
    github +
    '" target="_blank">github/cemoni4</a>',
  "<br>",
];

let help = [
  `<br><div id="help-section"><pre class="whitespace-pre-wrap">
<span class="command">aboutme</span>
↳ Displays who I am?
<span class="command">social</span>
↳ Lists social networks.
<span class="command">projects</span>
↳ View coding projects.
<span class="command">email</span>
↳ To send me an email.
<span class="command">history</span>
↳ View command history.
<span class="command">help</span>
↳ Displays this help message.
<span class="command">sudo</span>
↳ Try it out for yourself.
<span class="command">snake</span>
↳ Run Snake Game.
<span class="command">clear</span>
↳ Clear the terminal.
</pre></div><br>`,
];
let projects = [
  "<br>",
  `<div id="projects-section">`,

  `<a href="https://github.com/cemoni4/KeyNet-Monitor" target="_blank"><span class='underline'>KeyNet-Monitor</span></a>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
Python-based security tool combining keylogging, packet interception, and SIEM-like reporting to monitor user activity and network traffic.
Built With:
- Python
- Scapy
- NetfilterQueue
</pre>`,

  `<a href="https://github.com/cemoni4/arpPoisoning" target="_blank"><span class='underline'>ARP Poisoning Tool</span></a>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
Python script utilizing the Scapy library to perform ARP spoofing attacks, enabling interception of network traffic between two hosts.
Built With:
- Python
- Scapy
</pre>`,

  `<a href="https://github.com/cemoni4/DNS_Spoofer" target="_blank"><span class='underline'>DNS Spoofer</span></a>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
Python-based DNS spoofing tool that intercepts DNS traffic and injects forged responses for specified domains.
Built With:
- Python
- Scapy
</pre>`,

  `<a href="https://github.com/cemoni4/FTPgrabCredentials" target="_blank"><span class='underline'>FTP Credentials Grabber</span></a>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
Python script to monitor and analyze FTP traffic, capturing credentials transmitted in clear text using NetfilterQueue.
Built With:
- Python
- NetfilterQueue
</pre>`,

  `<a href="https://github.com/cemoni4/VigenereBruteForce" target="_blank"><span class='underline'>Custom Vigenère Decryption Tool</span></a>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
Brute-force decryption tool using a personalized Vigenère cipher table and RockYou wordlist to identify the key.
Built With:
- Python
</pre>`,

  `<a href="https://github.com/cemoni4/CTF-Challenge-Platform" target="_blank"><span class='underline'>CTF Challenge Platform (ITS Final Project)</span></a>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
Designed and deployed a CTF environment featuring SSH login, flag discovery, and privilege escalation. Included a custom shell with time-limited access and restricted commands for security.
Built With:
- Linux
- Bash
- Python
</pre>`,

  `<a href="https://github.com/cemoni4/file_Redirect_Injector" target="_blank"><span class='underline'>HTTP Spoofing Interceptor</span></a>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
Python script to intercept HTTP requests for '.exe' files on port 80 and spoof the response with a local file using HTTP 302 redirection.
Built With:
- Python
- Scapy
</pre>`,

  `<a href="https://github.com/cemoni4/Personal-Portfolio" target="_blank"><span class='underline'>Personal Portfolio Website</span></a>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
Hacker-style personal website using HTML, CSS, and JavaScript, hosted on Oracle Cloud to showcase projects and CV.
Built With:
- HTML
- CSS
- JavaScript
</pre>`,

  "</div>",
  "<br>",
];

