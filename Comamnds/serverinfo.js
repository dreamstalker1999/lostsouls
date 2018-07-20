const Discord = require("discord.js");
const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });

module.exports.run = async (bot, message, args) => {
let nonAnimatedEmojis = message.guild.emojis.filter(emoji => !emoji.animated);
let guildEmojis = nonAnimatedEmojis.size > 0 ? nonAnimatedEmojis.size > 25 ? `${nonAnimatedEmojis.map(e => `<:${e.name}:${e.id}>`).splice(0, 25).join(' ')} and ${nonAnimatedEmojis.size - 25} more.` : nonAnimatedEmojis.map(e => `<:${e.name}:${e.id}>`).join(' ') : '-';

        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
            .setTitle("Server Information", true)
            .setColor(randomColor)
            .setImage(sicon)
            .setThumbnail(sicon)
            .addField("Server Name", message.guild.name, true)
            .addField("Server ID", message.guild.id, true)
            .addField("Owner", message.guild.owner.user.tag, true)
            .addField("Created On", message.guild.createdAt.toUTCString(), true)
            .addField("You Joined", message.member.joinedAt, true)
            .addField("Total Members", `${message.guild.members.filter(m => !m.user.bot).size} Users\n${message.guild.members.filter(m => m.user.bot).size} BOTs`, true)
            .addField("Server Roles", message.guild.roles.size - 1, true)
            .addField("Server Emojis", guildEmojis, true)
            .addField("Voice Channels", message.guild.channels.filter(channel => channel.type === `voice`).size, true)
            .addField("Text Channels", message.guild.channels.filter(channel => channel.type === 'text').size, true)
            .addField("Region", message.guild.region.toUpperCase(), true)
            .setImage(message.guild.iconURL);
    
            message.delete().catch();
        return message.channel.send(serverembed);
    }
    
module.exports.help = {
    name: "serverinfo"
}
    