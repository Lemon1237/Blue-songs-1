const config = require('../../botconfig/config.json');
const ee = require('../../botconfig/embed.json');
const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "play",
  aliases: ['p'],
  usage: '[song]',
  description: 'plays a song!',
  userPermissions: [],
  botPermissions: [],

  run: async (client, message, args, prefix) => {
		try {
			//console.log(interaction, StringOption)

			//things u can directly access in an interaction!
			const {
				member,
				channelId,
				guildId,
				applicationId,
				commandName,
				deferred,
				replied,
				ephemeral,
				options,
				id,
				createdTimestamp
			} = message;
			const {
				guild
			} = member; 
			const {
				channel
			} = member.voice;
			if (!channel) return message.reply({
				embeds: [
					new MessageEmbed().setColor(ee.wrongcolor)
          .setTitle(` **Please join ${guild.me.voice.channel ? "__my__" : "a"} VoiceChannel First!**`)
				],

			
				});
			if (channel.guild.me.voice.channel && channel.guild.me.voice.channel.id != channel.id) {
				return message.reply({
					embeds: [new MessageEmbed()
						.setColor(ee.wrongcolor)
						.setFooter(ee.footertext, ee.footericon)
						.setTitle(`${client.allEmojis.x} I am already connected somewhere else`)
					],
				});
			}
			if (!args[0]) {
				return message.reply({
					embeds: [new MessageEmbed()
						.setColor(ee.wrongcolor)
						.setFooter(ee.footertext, ee.footericon)
						.setTitle(`**Please add a Search Query!**`)
						.setDescription(`**Usage:**\n> \`${prefix}play <Search/Link>\``)
					],
				});
			}
			//let IntOption = options.getInteger("OPTIONNAME"); //same as in IntChoices //RETURNS NUMBER
      const Text = args.join(" ")
			//update it without a response!
			let newmsg = await message.react("<:green:952266816590336090>").catch(e => {
				console.log(e)
			})
			try {
				let queue = client.distube.getQueue(guildId)
				let options = {
					member: member,
				}
				if (!queue) options.textChannel = guild.channels.cache.get(channelId)
				await client.distube.play(channel, Text, options)
				
			} catch (e) {
				console.log(e.stack ? e.stack : e)
				message.reply({
					embeds: [
						new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setTitle(`${client.allEmojis.x} Error:`)
						.setDescription(`\`\`\`${e}\`\`\``)
					],

				})
			}
		} catch (e) {
			console.log(String(e.stack).bgRed)
		}
	}
}
