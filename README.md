# sahayak---ai-
# 🚨 Sahayak AI - Your Emergency Co-pilot

Sahayak AI is a Chrome Extension built for the Google AI Hackathon. It acts as an intelligent, life-saving co-pilot that provides clear, step-by-step guidance during any emergency.

## Problem It Solves
During an emergency (like a fire, earthquake, or medical issue), people panic. They forget simple life-saving steps. Sahayak AI provides instant, calm, and actionable instructions directly in their browser.

## Features
-   **Instant AI Guidance:** Get clear, step-by-step instructions for any situation.
-   **Context-Aware:** The AI is trained (via prompts) to identify available resources (like a fire extinguisher) and give instructions based on them.
-   **Static Info:** Includes quick-access information for major disasters (Volcano, Flood, etc.).
-   **Emergency Contacts:** A ready list of all important national emergency numbers.

## Technology Used
-   **HTML5/CSS3:** For the modern, responsive, and glassmorphism-style UI.
-   **JavaScript (ES6+):** To handle user input, `fetch` API calls, and DOM manipulation.
-   **Google's Gemini AI:** The core brain of the project, accessed via the official API.

---

## 🚀 How to Try It Out (For Judges)

Since this is a Chrome Extension, it cannot be run on a website. Please follow these 5 steps to install and test "Sahayak AI" locally:

### **Step 1: Download the Code**
Click the green **"<> Code"** button on this repository and select **"Download ZIP"**.

### **Step 2: Unzip the File**
Unzip the downloaded folder (`sahayak-ai-chrome-extension-main.zip`) to a safe place on your computer.

### **Step 3: Add the API Key (CRITICAL STEP)**
1.  Inside the unzipped folder, create a new file named `config.js`.
2.  Open this new `config.js` file with any text editor.
3.  Paste the following line into the file. (Please use the official Hackathon API Key provided to you by the organizers).

    `const API_KEY = "PASTE_YOUR_HACKATHON_API_KEY_HERE";`

4.  Save and close the file.

### **Step 4: Load the Extension in Chrome**
1.  Open your Google Chrome browser.
2.  Type `chrome://extensions` in the address bar and press **Enter**.
3.  In the top-right corner, turn on the **"Developer mode"** toggle.
4.  A new menu will appear. Click the **"Load unpacked"** button.
5.  A file dialog will open. Select the **entire unzipped folder** (the one that contains `manifest.json`).

### **Step 5: Run it!**
The "Sahayak AI" icon (a 🚨) will now appear in your browser's extension bar. Click it to run the app! Thank you for judging.
