const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
        message.delete().catch();
        message.channel.send('Pinging...')
        .then((newMsg) => {
            newMsg.edit('**' + 'Pong!' + '**' + message.author + `It took **${Math.abs(newMsg.createdTimestamp - message.createdTimestamp)} ms**.`);
        });
    }

module.exports.help = {
    name: "ping"
}   