const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `invite`,
  description: `Gives an Dorami bot invite link.`,
  aliases: ["add"],
  cooldown: 3,
  edesc: "Type this command to get an invite link for the Bot, thanks for every Invite",
  execute(message, args, client) {
    //react with approve emoji
    message.react("805819470487617636");
    //send the invite embed
    message.reply(new MessageEmbed().setColor("#c219d8").setTitle(":heart: Please Invite me: ").setDescription("https://discord.com/oauth2/authorize?client_id=805745585097277440&permissions=37080128&scope=bot")
    .setFooter("And enjoy listening to music!", "https://cdn.discordapp.com/attachments/805764806224510977/815565682347212830/PicsArt_02-28-08.46.34.jpg"));

  }
}
