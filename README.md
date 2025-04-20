# Discord server checker
Discord server checker is a tool that will give you a lot of informations about a discord server with its invite link.
The base of the project simply do a request to `https://discordapp.com/api/v6/invites/{invite link}`, then take the json to finally give you a pretty output of the following things:

### Link infos:
- When does the link expires
- What's the code of the link
- Who invited you (avatar, banner, name, id, username)

### Server infos:
- What is the welcome channel, with its id and name
- What's the server name and its id
- What's the server logo, banner, color, badge and banner
- What's the server description
- What's its features
- The id, activity level and activity score of the games activities
- The member count, with online members, total members
- The boost levels and count of the server
- The traits of the server

