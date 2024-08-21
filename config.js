//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUNtbEQwMFpGaGJEd1hSY2ZLNW9QOEdXS2VPRWJkT0x2V3p5T1Qxd0ZHMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUFPckU2K2I1Um9WRCtHUUl2MFd0WWtYUXF2WW9YSW1zQVNFMEFERnIwWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjTjV3NFJjdlhnOFYwd3Vvb2xLaEhrbHVwUC9DaTIxYmdRNEZFVTZINVhzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEWGtvWWVDOSt3ek56S0o3dWVpaVVvYVFDdktOM1YzSGJLeEw1WFJDS0JBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllQUXllTnZ0a1ByRXFzdk9WTWtTWVE1VTd3Tkt5VXJOTXZrQ3BkcXZjbjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjR4bUVuVjJRSWRhUW5kL1ZnVVFOdmxOQS9MdjZBV2RTQU5FU1JIZ2Zta289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUNHcEhXc1JhNndHL3JuNURKcXVEdWgzbFBHSlQ0UFpjZmRheVB1SGMxdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNThBT1VVMGZRa1JrMVhUcjZjK2VRK3pPTWs0dkJRVHZzN0haK3NCQkN6bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkwwVmJvZGYrSmUvMkEzeVlaT1JCQ2NERDQ5TTZoN3VSbVF4eXJpVnpXNE9BcnkvUUJhVEJoRW8rNjZ3UG41cjE3ZWJPY2RZMmM4TXFQM0JzeWFxekRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk1LCJhZHZTZWNyZXRLZXkiOiJ6S09Ub1BoQjQyUURBUFcwTGRFUmNDZjZWWXo5cHRqS0ZveGVNTi9iSDEwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzIsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMiwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJUYThMRFZyRlRNdWZBMTRubUFRckt3IiwicGhvbmVJZCI6ImVlOWYwNjJiLTg1MjktNGM4Yy04ZWY0LTJmMmY0ZTlhZTI3YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2Mi9Sa0E5VWtYMzNHM1dUWWNrSFprVExUeFk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiajIwYkhWV0RJR01pWGlsV3ZER2FUSWhFeWdRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRZTlNZOUg2IiwibWUiOnsiaWQiOiIyMzQ3MDczNzkyNzY1OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiU2hhZG93In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPcU9obzBHRU5TL2w3WUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJkcDhnWStrbEkvam4wakVqQi82U0dIWnc4bk1yOGpWN1pLbm1lZEhLQzNZPSIsImFjY291bnRTaWduYXR1cmUiOiJ3VnQ4T0NrNlVmUXp1WkpKMGIzR3VrRkRITHB2akVJS1k0NktzN2FEOElDbnlpemlyL1lkOUVkQnoycmJFVElVcHdhTlpVY1l4RHFDMDdRc3ZPbFdBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZDdMelBEV2V3UDZkYXBTNlg3N0R3aEg1RnMrZlQ2VlZBYTNidGYzcTBTRXlsNGtNWml0TENhcElLY1lKTlM4dFoyNUU5YllGWUpybE5xZXJTb2ZUREE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDczNzkyNzY1OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWGFmSUdQcEpTUDQ1OUl4SXdmK2toaDJjUEp6Sy9JMWUyU3A1bm5SeWd0MiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDI0MzkzOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBeEkifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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
