const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "hi" ;  
global.video= "video" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923346690239";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923346690239";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923346690239";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923346690239";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_17_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDkyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDQ3LFxuICAgICAgICA4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDM0LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIwLFxuICAgICAgICA2MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4MixcbiAgICAgICAgMjA1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3MixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg0LFxuICAgICAgICAwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDc3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNCxcbiAgICAgICAgODMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxLFxuICAgICAgICA5OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDcsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODYsXG4gICAgICAgIDMzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjU0LFxuICAgICAgICAzMixcbiAgICAgICAgNDUsXG4gICAgICAgIDI1LFxuICAgICAgICAyNixcbiAgICAgICAgNzAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAyLFxuICAgICAgICA4MixcbiAgICAgICAgMjIzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDg1LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyLFxuICAgICAgICA2NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTk2LFxuICAgICAgICA1MixcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAxLFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDUxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDExMixcbiAgICAgICAgNzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUwLFxuICAgICAgICA2MixcbiAgICAgICAgOTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwib3poYnc4b2NsNE1ha2laREVpWjJSa0dTUjdpbFNXRElvVjM2YUxJRUpmUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiam02bnFGNUVTTUNiU0pmQVdBRXJFd1wiLFxuICBcInBob25lSWRcIjogXCI3NTcyM2E1ZC0yNzg4LTRmOTgtYTUwNi1mOWQyMzUxOGRhOTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMsXG4gICAgICA2MixcbiAgICAgIDk1LFxuICAgICAgMTAyLFxuICAgICAgMjcsXG4gICAgICAxNzgsXG4gICAgICAxODMsXG4gICAgICAxMDksXG4gICAgICA5LFxuICAgICAgMjQwLFxuICAgICAgMTM1LFxuICAgICAgMjMsXG4gICAgICA0MCxcbiAgICAgIDExNCxcbiAgICAgIDQ0LFxuICAgICAgMTIxLFxuICAgICAgMTY1LFxuICAgICAgMTk4LFxuICAgICAgMzYsXG4gICAgICAxMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjYsXG4gICAgICAyMTYsXG4gICAgICAyMDksXG4gICAgICAyMjksXG4gICAgICAxMDIsXG4gICAgICAyMjksXG4gICAgICAyMyxcbiAgICAgIDI0NixcbiAgICAgIDE4MCxcbiAgICAgIDYxLFxuICAgICAgMTU2LFxuICAgICAgMjMsXG4gICAgICA0MyxcbiAgICAgIDc0LFxuICAgICAgNzAsXG4gICAgICAxOCxcbiAgICAgIDM3LFxuICAgICAgNCxcbiAgICAgIDUyLFxuICAgICAgNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQTVCMVI3WEZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzM0NjY5MDIzOTo3OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk11c2thblwiLFxuICAgIFwibGlkXCI6IFwiMjYzNDg4MDczMTIxOTEwOjc5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pXL3FaSUNFTGVCdmJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWHllQ2ZNekM2L0hZTVZDTmhwVnJPQWJnYlFWcFFVbVREYnJ2ZmFGcTZVQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJES1BOQVlJcDFJeFlnZ1NZVlpyS1R6TTUwU2xMeWxJN2syUXJPeS91dmVkd3VvUzY5c3oyODRzaUFwNjlLQ1JmQXN0cmRWYmw0NTZQSWtKK2NDL2NCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWeTdDSWVRcE8zdDRRei9nSDhCS0xqL3l6cFFQYXZUam54NUdSVzFodlNNRm00aG1PVS9TZ3BOZ1dGeXFUR2Q1enNXN1BZUjlYdXcvNFhhclBiTjRpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzNDY2OTAyMzk6NzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDY2NDI1MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUliVlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWJWLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNzUvN3BZbHd0Y2xSSEhLbnZVUVIyeXIxYU5zWUU5dCtTald1UHVNRHZETT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NzUyOTk0NzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDY2NDI1NTU1NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "malik",
  packname: process.env.PACK_NAME || "malik",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "malik ,


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
