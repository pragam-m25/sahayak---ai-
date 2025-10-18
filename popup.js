// Important: Replace "YOUR_API_KEY" with the actual key from the hackathon

const MODEL_NAME = "gemini-1.0-pro-latest";

document.addEventListener('DOMContentLoaded', function() {
  const askButton = document.getElementById('askButton');
  const promptInput = document.getElementById('promptInput');
  const responseDiv = document.getElementById('response');
  const loader = document.getElementById('loader'); // Loader ko pakdo

  askButton.addEventListener('click', async function() {
    const userInput = promptInput.value; // User ka sawaal
    if (!userInput) {
      responseDiv.textContent = "Please enter a question first.";
      return;
    }

    // Check karo ki asli API Key daali gayi hai ya nahi
    if (API_KEY === "YOUR_API_KEY") {
      responseDiv.textContent = "API Key not found. Please wait for the hackathon to begin.";
      return;
    }

    // UI ko update karo: Purana jawab chhupao, loader dikhao
    responseDiv.style.display = 'none';
    loader.style.display = 'block';

    // ## PROMPT ENGINEERING: Yahan hum AI ko secret instructions de rahe hain ##
    // ## ADVANCED PROMPT ENGINEERING ##
    const finalPrompt = `
      You are 'Sahayak', an expert AI assistant specializing in emergency response.
      Your single most important goal is to provide clear, calm, and actionable life-saving instructions.

      A user in a dangerous situation has asked: "${userInput}"

      **CRITICAL RULES TO FOLLOW:**
      1.  **Identify Resources:** Carefully read the user's message. Identify ANY items, tools, or resources they have mentioned (e.g., "fire extinguisher," "heavy table," "water bottle," "towel").
      2.  **Prioritize Resources:** Your instructions MUST, above all else, prioritize using the items the user has.
      3.  **Be Direct and Step-by-Step:** Give numbered, step-by-step instructions. Start with the most critical action.
      4.  **Be Concise:** Keep instructions short and easy to understand. No long paragraphs.

      **Example:**
      - If user says: "I am trapped in a room, fire is spreading, I have a fire extinguisher."
      - Your response MUST start with instructions on how to use that fire extinguisher (e.G., "1. Use the fire extinguisher immediately. Pull the pin. Aim at the base of the fire. Squeeze the lever...")

      Now, analyze the user's request and provide the life-saving steps.
    `;

    try {
      // API call bhejo (Google ke internet wale AI ko)
      const apiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "contents": [{ "parts": [{ "text": finalPrompt }] }] // Hum naya, behtar prompt bhej rahe hain
        })
      });

      if (!apiResponse.ok) {
        throw new Error(`Google API error! status: ${apiResponse.status}`);
      }

      const data = await apiResponse.json();
      
      // AI ka jawab extract karo
      const aiText = data.candidates[0].content.parts[0].text;
      
      // UI ko update karo: Loader chhupao, naya jawab dikhao
      loader.style.display = 'none';
      responseDiv.style.display = 'block';
      responseDiv.textContent = aiText;

    } catch (error) {
      console.error("Error:", error);
      // Error aane par bhi UI ko theek karo
      loader.style.display = 'none';
      responseDiv.style.display = 'block';
      responseDiv.textContent = "Sorry, something went wrong. Please check the console.";
    }
  });
});