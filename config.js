const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "fE5B0bxa#D7DrMHoUxwA3nyIM2VF2kP1-fUgVp7iHc4Z_ZjORPOo",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Sithumranawaka/ROMIO-WhatsApp-Bot/blob/main/images/Gemini_Generated_Image_kzywxnkzywxnkzyw.png?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 ROMIO-MD Is Alive Now😍*",
BOT_OWNER: '94776121326',  // Replace with the owner's phone number



};
