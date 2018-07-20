const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You do not have permission to do that!");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Please mention a user, and try again!");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Please pecify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("That role does not exsist!");

  if(rMember.roles.has(gRole.id)) return message.reply("They already have that role!");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Congrats, you have been given the role ${gRole.name}`)
  }catch(e){
    message.channel.send(`Congrats to <@${rMember.id}>, they have been given the role ${gRole.name}. We tried to DM them, but their DMs are locked.`)
  }
}

module.exports.help = {
  name: "addrole"
}