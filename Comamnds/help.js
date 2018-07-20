module.exports.run = async (bot, message, args) => {

    var fs = require('fs')
    var commandsList = fs.readFileSync('Storage/Commands.txt', 'utf8');
    message.channel.send(commandsList)


}
module.exports.help = {
    name: "help"
}   