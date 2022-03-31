const config = require('../../botconfig/config.json');
const ee = require('../../botconfig/embed.json');
const {
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: "ping",
  aliases: ["latency"],
  usage: '',
  description: "Gives you information on how fast the Bot can respond to you",
  cooldown: 10 ,
  userPermissions: [],
  botPermissions: [],

  run: async (client, message, args) => {
    try {
      message.reply({
				embeds: [new MessageEmbed()
        .setColor(ee.color)
        .setDescription(`🔍 Pinging...`)]}).then(msg => {
        const ping = msg.createdTimestamp - message.createdTimestamp;
        msg.edit({
				embeds: [new MessageEmbed()
          .setAuthor("🏓 Pong!")
          .setColor(ee.color)
          .addField('Ping', client.ws.ping + "ms")
        ]});
      }).catch(e => message.channel.send(e));
    } catch (e) {
      console.log(e)
    }
  },
};