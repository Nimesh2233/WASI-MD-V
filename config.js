//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUJYeDIrT0hMRjVTOFZTdTNwMC9yOFBNQ1Bvc0UxK3hjaTIxeDhocFowbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1pOL1NTZlZVK0FDdUxSaXI2ZUlEVDlYSDdaK0IybXgzVGdYVlNXN0VIOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZS1JoR2FxZmdvdEY4RzBPbW14czJUZVo0dHordWVxczlTbzExZ2NUWGxJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqajN5eENBaFQ5ekVUM0U3S0FYVS9wbWhLL3dMZEcwd2ozbm0zM0lqWUFRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdKVTN3NEtwMFd0eHdFbnZmWUI0bGNWbWJLeFhIQVZ0eEFWZTdXNmNjbXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVmOWZKWDZ1RE05WUFvM1FsbG1JbHc2Mjh3ZFFVUkpDMUxSSGdrb0JWRUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0V2NllCaWxucU90UFpDbk1IeTZ3empMdXQ2VUEwTVR4cXN3L3hma0pFaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFUzNEhkWEJ5N0NGZHZ2K25WZXhtMlNqeGt3LzNZN1ZKcEcrb2NBM1IzWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im04K3RPS0IyblFSMVlmZVdMVk50UUhncndWc0lkQVVRN0xkTExiR2xYQnQ3WVRWSDJwaW9Ya21sNnkxeW5IOE1ReTFaYlJUaStRbktReWpNbEd6dmlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMxLCJhZHZTZWNyZXRLZXkiOiI2eVVoMm1JZUs1Qkdwdko5YSsybElEUVVKSFJXK2doVjBZV0VsQi8xNFBBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzQxMTc5MTM0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBQzI5MDE3MDk1ODU4NDVDRTJCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzAxOTk1MjN9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzQxMTc5MTM0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBREFEQUM2NDlFQkU5MzI4MEIzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzAxOTk1MjV9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzQxMTc5MTM0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBMjE0MTY1RTA4RkZFRUE4NjlDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzAxOTk1Mjd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkppRWk3UUlUUjJpVk1NLVJRTUJlX2ciLCJwaG9uZUlkIjoiZjc3OTQ5NDUtMWNjMi00NTFmLTgwMmQtZTQyZGJjMmRlYmJjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkI4M2FxbVFKL0Q5MVB1UmFDc1BiVWJZSWhsWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiQzNFWlc4VkxwU3FUdHpqS2tPbkVVNUxmR009In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWDEzSFRTNzciLCJtZSI6eyJpZCI6Ijk0NzQxMTc5MTM0OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTmltZXNoIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLM2Q3TDhCRU5UL2dya0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI0QUExQTFsWkRCcnVHaUpSOWFDYU1VcG9wbGwzOXIzRGVLckp3V3ZQODI0PSIsImFjY291bnRTaWduYXR1cmUiOiJSNGlrMlFQNnhnU3ZOTWVjM3U1dFRpM2Mra1NYbkR6c1lwcVh4Q3M4ek12UTNqdGpEb25xTWliaWNZWjdhdzV4MEJxZTRHSjdnQXpNU2diMVZiNWtqQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQjNQeXIrTzhISGl6eWZtNkFLMlVyWE1XeWIwRDgwd1FKak1OWHRlcEtQL1RIaFpkSEwzdFJSb0plYTNaQzBiQVBrd1VrSmFQNEVmMXNUSVQwckVUanc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc0MTE3OTEzNDoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVBQU5RTlpXUXdhN2hvaVVmV2dtakZLYUtaWmQvYTl3M2lxeWNGcnovTnUifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzAxOTk1MjEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTFI3In0=";
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
