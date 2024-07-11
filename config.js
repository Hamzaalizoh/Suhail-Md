const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "hi" ;  
global.video= "" ;
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_51_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA1NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwLFxuICAgICAgICA2LFxuICAgICAgICAxODQsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzksXG4gICAgICAgIDM4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODIsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTksXG4gICAgICAgIDc4LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMixcbiAgICAgICAgNTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTE1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMwLFxuICAgICAgICA3MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyNixcbiAgICAgICAgMixcbiAgICAgICAgMTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDcyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTg3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjksXG4gICAgICAgIDk2LFxuICAgICAgICAxODksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDI4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY2LFxuICAgICAgICA0MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDI4LFxuICAgICAgICA2OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgODcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTA0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDQzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTI3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJuUEZEU1E4MW44VFFLdmxmUWEwSUdYdDc1NWlTc09Tdmw4RW9nL1pvMlhzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQMkQzWVktM1I2Qy1rQkhsQ2RtLTVBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjYzMzgyMTQ3LTUxNDctNGE1Zi04N2E2LTkwNzM2MzcxNmQzZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyLFxuICAgICAgMTYwLFxuICAgICAgNDMsXG4gICAgICAxMzUsXG4gICAgICAxNzYsXG4gICAgICAxNDQsXG4gICAgICAyMTQsXG4gICAgICAxNDYsXG4gICAgICAyNDksXG4gICAgICAxNTAsXG4gICAgICAxNTcsXG4gICAgICA5OSxcbiAgICAgIDc4LFxuICAgICAgMTUyLFxuICAgICAgMjIsXG4gICAgICAyNDMsXG4gICAgICAxNzEsXG4gICAgICA0MixcbiAgICAgIDIyMixcbiAgICAgIDM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyOCxcbiAgICAgIDEzNSxcbiAgICAgIDE3OSxcbiAgICAgIDIzMyxcbiAgICAgIDE1NSxcbiAgICAgIDUsXG4gICAgICAxMDgsXG4gICAgICA0LFxuICAgICAgMTE5LFxuICAgICAgMzAsXG4gICAgICAyMjYsXG4gICAgICAxNTYsXG4gICAgICAzNSxcbiAgICAgIDkxLFxuICAgICAgMyxcbiAgICAgIDIwMCxcbiAgICAgIDE4MCxcbiAgICAgIDk1LFxuICAgICAgNDIsXG4gICAgICA3N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0VE1RRkZGUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMzQ2NjkwMjM5Ojc2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTXVza2FuXCIsXG4gICAgXCJsaWRcIjogXCIyNjM0ODgwNzMxMjE5MTA6NzZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSksvcVpJQ0VLLzF2TFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYeWVDZk16QzYvSFlNVkNOaHBWck9BYmdiUVZwUVVtVERicnZmYUZxNlVBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjlzUXUwRHRhTnUraS9KYWx6NFpySzh2MDFQdkhsd3p2Q1RZS1NOWFJHcWpQSnpLcHVBK25aeTAxWW5id1dqUG1BT0UvdG4wMU9ZTCtVNGZpZFhkVEN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlV3dk5NQURSdW9uVWhETVNrcDBWd0FuVUZlNmYwaUxxdEpFQzByN0Z4K2V4NFhQY1dKMmNXMEFFS2IrMmJuR01vYWNZYnJtUzVINXF1NElKMEV5ZkN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzM0NjY5MDIzOTo3NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNjYyNzA3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSHc0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIdzQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ6djNta01rSDJ2R3ppcExjcjNhbGxheVFtUlRkeG1pMHJ3TXJQcFFFQ2FZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU3NTI5OTQ2OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDYyMTY2ODMxMVwifSIKfQ=="  // PUT your SESSION_ID 


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
