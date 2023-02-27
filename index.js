// Set your app credentials
const credentials = {
  apiKey: "e0a90871a39b60ca6f474aeef9dc166c518e8f79681ee5ff482d2313acf004bb",
  username: "alexkemboi97",
};

// Initialize the SDK
const AfricasTalking = require("africastalking")(credentials);

// Get the voice service
const voice = AfricasTalking.VOICE;

function makeCall() {
  const options = {
    Content_Type: "application/x-www-form-urlencoded",
    username: "alexkemboi97",
    // Set your Africa's Talking phone number in international format
    callFrom: "+254711082571",
    // Set the numbers you want to call to in a comma-separated list
    callTo: "+254726837210",
    url: "https://voice.africastalking.com/call",
  };

  // Make the call
  voice.call(options).then(console.log).catch(console.log);
}

makeCall();
