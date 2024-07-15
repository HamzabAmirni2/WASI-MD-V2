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
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
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
  "{"noiseKey":{"private":{"type":"Buffer","data":"4IEpiBPl9GA/1zz8jOQdKuMA0IJVRZwbrF4EH5f39Uo="},"public":{"type":"Buffer","data":"hsG4mrx+8TAbbFbHgaKhXuqN2cFBBI4NrtQ2yITRtRA="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"MPbZMkt067UMvJx5daaumHx0MZD5NO4HV3a7CJHjLGA="},"public":{"type":"Buffer","data":"OLHhmUQeWrX8lv5vl7gJM+j412W2lqizGnmmrmfNQjI="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"UHdAzIJbOvheWbk2E1Lv6eu569gj7m7+fMYD8Ikn6lc="},"public":{"type":"Buffer","data":"/PqY0UAwHNlcAPIEZeaGcSl7I5xWJL6fEjXDBHLd8zo="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"KPVFwUCYM9BGQEGsPogOPyJDR3gocW+kL4bh6FPwxE8="},"public":{"type":"Buffer","data":"FIvaRg/vyIfOPpRzeAbepvp9g8Zm8hTCK0PQiOVXgyU="}},"signature":{"type":"Buffer","data":"GwIkU9V0ue+FEPRWsmsQv8bZ0mrhj9MpEMySZwItxiFlulPVLZ14yDG7PZ/KrauL0ekcEF7QpBGj2ZAIt60UCw=="},"keyId":1},"registrationId":230,"advSecretKey":"BnMaL/WXtUrHgAiRgXJTgWwYAbm38hXUnF8k0yT27ak=","processedHistoryMessages":[{"key":{"remoteJid":"212612030829@s.whatsapp.net","fromMe":true,"id":"E3E3CACC9FBAE8AB2C19DA4A340F6F44"},"messageTimestamp":1721039484},{"key":{"remoteJid":"212612030829@s.whatsapp.net","fromMe":true,"id":"DB5F7A8F4C4BF9EFF6B563661CC357BB"},"messageTimestamp":1721039484}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"YQZX3jUpQKasH7KnGmHiSg","phoneId":"74d52314-1734-4bf7-8b39-4a51f8bbd1db","identityId":{"type":"Buffer","data":"GLWE5TBgIv6GC+AaDfioi+FTUrE="},"registered":true,"backupToken":{"type":"Buffer","data":"LUPnUmdEIph5hdMmXbkZNNuvW1s="},"registration":{},"pairingCode":"MMSDETD3","me":{"id":"212612030829:1@s.whatsapp.net","name":"amirni"},"account":{"details":"CJTMsPMCEPT007QGGAEgACgA","accountSignatureKey":"abEZESR3Y644Pr8B7qpHC9bn4q90uMz/+fY1e56MsjA=","accountSignature":"YCVZn5vaiqbH4Mn4pWqzUTME56pqU9AAcIwCCzFIVlaY9pcxw66c3u/wLe55Y2FBy6b41uDJAzYxTDsYsvyCAg==","deviceSignature":"zZ6HthQF2p+poiouwa1G9LbLxXFgjxIaaLECR5hAricSGQm0xcIfWxEdzsw94/COIgsgqjoxvexUTEP4PfaXBw=="},"signalIdentities":[{"identifier":{"name":"212612030829:1@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BWmxGREkd2OuOD6/Ae6qRwvW5+KvdLjM//n2NXuejLIw"}}],"platform":"android","lastAccountSyncTimestamp":1721039480,"myAppStateKeyId":"AAAAAI0G"}"
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
