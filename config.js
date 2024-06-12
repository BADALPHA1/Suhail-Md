const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349138339038";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_51_06_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2LFxuICAgICAgICAwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTMwLFxuICAgICAgICA3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMixcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MixcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTkyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDcsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTkwLFxuICAgICAgICA1OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzNixcbiAgICAgICAgMjIyLFxuICAgICAgICA0NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA2MixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEyLFxuICAgICAgICA1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjU1LFxuICAgICAgICA1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxLFxuICAgICAgICA5NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTksXG4gICAgICAgIDcxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDc5LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzksXG4gICAgICAgIDc4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgMjUxLFxuICAgICAgICA0MixcbiAgICAgICAgMjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgODgsXG4gICAgICAgIDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDg1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNixcbiAgICAgICAgOTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDM1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4LFxuICAgICAgICA1MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjksXG4gICAgICAgIDYyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDgzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTU5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkWGcvRjZwTEV3Y3ErVjZJcTBIUXRRZTRWMEZ4SGdBUWFBOGJxY0d2WUF3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJWdzJYLVdPVFJxS0dTb0NXSmIzczBBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdmODQ5NmYwLWQ3M2MtNGE0MS04MTJjLWIwODhhZjJiMjk3ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODAsXG4gICAgICA2NCxcbiAgICAgIDY4LFxuICAgICAgMjExLFxuICAgICAgMjUwLFxuICAgICAgOTIsXG4gICAgICAyMjEsXG4gICAgICA2NixcbiAgICAgIDcwLFxuICAgICAgNDEsXG4gICAgICA4NyxcbiAgICAgIDcsXG4gICAgICAxNzQsXG4gICAgICAwLFxuICAgICAgMjQyLFxuICAgICAgMTE4LFxuICAgICAgMTU1LFxuICAgICAgMTM5LFxuICAgICAgNDMsXG4gICAgICAxNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDAsXG4gICAgICAxNSxcbiAgICAgIDIxOCxcbiAgICAgIDI0NixcbiAgICAgIDEwOSxcbiAgICAgIDI2LFxuICAgICAgMTIsXG4gICAgICA0OSxcbiAgICAgIDExMyxcbiAgICAgIDE2LFxuICAgICAgMjE4LFxuICAgICAgMTk5LFxuICAgICAgMTM2LFxuICAgICAgNjMsXG4gICAgICA4OSxcbiAgICAgIDE5OCxcbiAgICAgIDE4MixcbiAgICAgIDIxNyxcbiAgICAgIDIzNixcbiAgICAgIDI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxMTVBQTDZEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTM4MzM5MDM4OjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTWljaGFlbFwiLFxuICAgIFwibGlkXCI6IFwiMjU2NzYyMTcxMTQ2Mjc2OjI4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ovam9ud1Erc3lvc3dZWUJDQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM1RqU1c0MjZuejc3dmptRG5namdmaWNYRDhJRmF6ZnJMdnVtUDdMTS94QT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXbWd6WjdXZVZITEdBTzVTbGI3MlY0NEt0ZW03QmN6VE9YOGs1Uk9hYkpVNVRKWC9US3BFclphdXFSdytocHFUUTlwbTMrME1wdmpnQ1o4WmthN1hEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJsb3VEeU9YNUFVditNT3hyYi9jQkhnRkR4bXRWenNmL2pYZGE4WXpGUGl3TENkU0lUOStFdTJQZVcxN0dQM1EvMUV6Q24vSGpLeHlkWldXaEtQQ01odz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTM4MzM5MDM4OjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4MjMyNzAyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTzg3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPODcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJydFpJRmlNdExaZ3NHUUFHaGJuWGNGaDVwVzNzRFlxNXZ0ZzhJUUU5UFA0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI2MDYxNjYwNixcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgyMDUwNTk2MDdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "BAD☯️ALPHA",
  ownername:process.env.OWNER_NAME|| "It'x Alpha",


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
