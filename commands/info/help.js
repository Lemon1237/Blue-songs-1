const config = require('../../botconfig/config.json');
const ee = require('../../botconfig/embed.json');
const Discord = require('discord.js')
const {
    MessageEmbed,
    MessageActionRow,
    MessageSelectMenu,
    MessageButton
} = require('discord.js');

module.exports = {
  name: "help", //the command name for execution & for helpcmd [OPTIONAL]
  category: "Info",
  usage: "help [cmdname]",
  aliases: ["h", "halp", "helpme"],
  description: "Returns all Commmands, or one specific command", //the command description for helpcmd [OPTIONAL]
  cooldown: 10,
  userPermissions: [],
  botPermissions: [],

  run: async (client, message, args, prefix) => {
    try {

    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;

    //message.reply({embeds: [new MessageEmbed()
    // .setColor(ee.color)
    // .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
    // .setTimestamp()
    // .setImage(ee.helpgif)
     //.setFooter(ee.footertext, ee.footericon)
    // .setTitle(`š° __**HELP MENU**__ š°`)
    // .setDescription(`š° | __**INFORMATION**__\n> \`help\`, \`botinfo\`, \`stats\`, \`ping\`, \`uptime\`, \`version\`\n\nš¶ __**| MUSIC**__\n> \`play\`, \`skip\`, \`stop\`, \`volume\`, \`loop\`, \`addrelated\`, \`autoplay\`, \`mix\`, \`playskip\`, \`playtop\`\n\nš | __**QUEUE**__\n> \`clearqueue\`,\`jump\`, \`list\`, \`move\`, \`previous\`, \`remove\`, \`shuffle\`, \`status\`, \n\nā | __**FILTER**__\n> \`addfilter\`, \`clearfilter\`, \`custombassboost\`, \`customspeed\`, \`filters\`, \`removefilter\`, \`setfilter\`\n\nš__**STATS**__\n> āļø **${client.commands.size} Commands**\n> š on **${client.guilds.cache.size} Guilds**\n> āļø \`${days} Days\`, \`${hours} Hrs\`, \`${minutes} Mins\`, \`${seconds} Secs\` **Uptime**\n> š¶ \`${client.ws.ping}ms\` **Ping**`)
    // .addField("Important Links:", ` ā¢ [Invite Me](${process.env.INVITE}) ā¢ [Website](${process.env.WEBSITE}) ā¢ `, true)]})

        const embed = new MessageEmbed()
            .setTitle("__**ŁŲ§Ų¦ŁŲ© Ų§ŁŁŲ³Ų§Ų¹ŲÆŲ©**__")
            .setThumbnail(client.user.displayAvatarURL({
                dynamic: true
            }))
            .setDescription(`**[Invite Me](https://discord.com/api/oauth2/authorize?client_id=948647188366503946&permissions=8&scope=bot%20applications.commands) Powered By Lemon \n**\n** Ų§ŲŖŲ±ŁŲÆ Ų§ŁŁŲ³Ų§Ų¹ŲÆŲ©Ų Ų§Ų®ŲŖŲ± ŁŁ Ų£ŲÆŁŲ§Ł ŁŲ§ ŲŖŲ±ŁŲÆ .
**`)

        const embed1 = new MessageEmbed()
            .setDescription(`__**Ų§ŁŁŲ¹ŁŁŁŲ§ŲŖ**__\n\n : \`help\` |  Ų§ŁŁŲ³Ų§Ų¹ŲÆŲ©\n ,  \`ping\` | Ų³Ų±Ų¹Ų© Ų§ŁŲ§Ų³ŲŖŲ§Ų¬ŲØŲ©\n ,  \`version\` |Ų§ŁŲ„ŲµŲÆŲ§Ų±\n ,  \`set-prefix\`| ŲŖŲŗŁŲ± Ų§ŁŲØŲ±ŁŁŁŲ³ Ų§ŁŲ®Ų§Ųµ ŲØŲ§ŁŲØŁŲŖ`)
            .setColor(ee.color)
            .setThumbnail(client.user.displayAvatarURL({
                dynamic: true
            }))

        const embed3 = new MessageEmbed()
            .setDescription(`<a:emoji_110:956688446657822730>ļø±__**Ų§ŁŁŁŲ³ŁŁŁ**__\n\n : \`play\` |ŲŖŲ“ŲŗŁŁ Ų§ŁŁŁŲ³ŁŁŁ\n , \`skip\` | ŲŖŲ®Ų·Ł Ų§ŁŁŁŲ³ŁŁŁ\n , \`stop\` | Ų§ŁŁŲ§Ł Ų§ŁŁŁŲ³ŁŁŁ\n , \`volume\` |ŲŖŲŗŁŲ± ŲÆŲ±Ų¬Ų© Ų§ŁŲµŁŲŖ\n , \`loop\` | ŲŖŁŲ±Ų§Ų± Ų§ŁŁŁŲ³ŁŁŁ\n , \`autoplay\`| Ų§ŁŲŖŲ“ŲŗŁŁ Ų§ŁŲŖŁŁŲ§Ų¦Ł`)
            .setColor(ee.color)
            .setThumbnail(client.user.displayAvatarURL({
                dynamic: true
            }))

        const embed4 = new MessageEmbed()
            .setDescription(`<:filters:956564272710824028>ļø±__**Ų§ŁŁŁŲ§ŲŖŲ±**__\n\n : \`addfilter\` | Ų„Ų¶Ų§ŁŲ© ŁŁŲŖŲ±\n , \`clearfilter\` | Ų„Ų²Ų§ŁŲ© Ų§ŁŁŁŲ§ŲŖŲ± ŁŁ Ų§ŁŲ§ŲŗŁŁŲ©\n ,\`setfilter\` | Ų„Ų¶Ų§ŁŲ© Ų§ŁŁŁŲŖŲ± Ų§ŁŁ Ų§ŁŲ§ŲŗŁŁŲ©\n , **Supported filters :** _clear, purebass, 8d, vaporwave, nightcore, phaser, tremolo, vibrato, reverse, treble_`)
            .setColor(ee.color)
            .setThumbnail(client.user.displayAvatarURL({
                dynamic: true
            }))

        const embed5 = new MessageEmbed()   
      .setDescription(`<:ItemMusicNote:915553560358420510>ļø±__**ŁŲ§Ų¦ŁŲ© Ų§ŁŲ„ŁŲŖŲøŲ§Ų±**__\n\n : \`clearqueue\` |Ų­Ų°Ł ŁŲ§Ų¦ŁŲ© Ų§ŁŲ§ŁŲŖŲøŲ§Ų±\n , \`jump\` | ŲŖŲŗŁŁŲ± Ų§ŁŲ§ŲŗŁŁŲ©\n , \`list\` | Ų§ŁŁŲ§Ų¦ŁŲ©\n , \`previous\` |Ų§ŁŲ£ŲŗŁŁŲ© Ų§ŁŲ³Ų§ŲØŁŲ©\n , \`shuffle\` | ŲÆŁŲ¬ Ų§ŁŲ£ŲŗŁŁŲ©\n, \`status\` | Ų­Ų§ŁŲ© Ų§ŁŲ£ŲŗŁŁŲ© Ų§ŁŲŖŁ ŁŲŖŁ ŲŖŲ“ŲŗŁŁŁŲ§ Ų§ŁŲ¢Ł\n`)
            .setColor(ee.color)
            .setThumbnail(client.user.displayAvatarURL({
                dynamic: true
            }))

        const embed6 = new MessageEmbed()
            .setDescription(`__**Ų§ŁŲ„ŲØŁŲ§Ųŗ**__\n\n : \`report-bug\`| Ų„ŲØŁŲ§Ųŗ Ų¹Ł Ų®Ų·Ų£\n , \`feedback\`| Ų§ŁŁŲ±Ų§Ų¬Ų¹Ų©\n , \`suggest\`| Ų§ŁŲŖŲ±Ų§Ų­`)
            .setColor(ee.color)
            .setThumbnail(client.user.displayAvatarURL({
                dynamic: true
            }))

        const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                .setCustomId('select')
                // .setMaxValues(2)
                // .setMinValues(1)
                .setPlaceholder('Ų§ŁŁŲ± ŁŁŲ§ ŁŲ¹Ų±Ų¶ ŲµŁŲ­Ų§ŲŖ ŁŲ§Ų¦ŁŲ© Ų§ŁŲŖŲ¹ŁŁŁŲ§ŲŖ!')
                .addOptions([{
                        label: 'Information',
                        description: 'Ų§ŁŁŲ¹ŁŁŁŲ§ŲŖ',
                        value: 'second',
                        emoji: '<a:yellowbook:935930732516356096>',
                    },
                    {
                        label: 'Music',
                        description: 'Ų§ŁŁŁŲ³ŁŁŁ',
                        value: 'fourth',
                        emoji: '<a:emoji_110:956688446657822730>',
                    },
                    {
                        label: 'Filter',
                        description: 'Ų§ŁŁŁŲ§ŲŖŲ±',
                        value: 'fifth',
                        emoji:
'<:filters:956564272710824028>',
                    },
                    {
                        label: 'Queue',
                        description: 'ŁŲ§Ų¦ŁŲ© Ų§ŁŲ§ŁŲŖŲøŲ§Ų±',
                        value: 'sixth',
                        emoji: '<:ItemMusicNote:915553560358420510>',
                    },
                    {
                        label: 'Report',
                        description: 'Ų§ŁŲ„ŲØŁŲ§Ųŗ',
                        value: 'seven',
                        emoji: '<:reported:915553516578287657>',
                    },
                ]),
            )

         //const invite = new MessageActionRow()
             //.addComponents(
             //    new MessageButton()
             //    .setLabel('Invite Me')
             //    .setStyle('LINK')
             //    .setEmoji('916022409402937435')
             //    .setURL(process.env.INVITE)
           //  )

        // const website = new MessageActionRow()
           //     .addComponents(
           //      new MessageButton()
           //      .setLabel('Website')
           //      .setStyle('LINK')
           //      .setEmoji('915553546496258148')
           //      .setURL(process.env.WEBSITE)
           //  )

         //const support = new MessageActionRow()
           //  .addComponents(
           //      new MessageButton()
           //      .setLabel('Support')
           //     .setStyle('LINK')
           //     .setEmoji('915576166268686336')
            //     .setURL(process.env.SUPPORT)
           //  )


          // await message.reply({
          //   content: 'ć¤',
          //   ephemeral: true,
          //  embeds: [embed],
          //   components: [row, invite, website, support]
        // });
        let theMsg = await message.reply({
            content: 'ć¤',
            ephemeral: true,
            embeds: [embed],
            components: [row]
        });


        // const filter = (interaction) => interaction.user.id === message.author.id;
        const collector = message.channel.createMessageComponentCollector({
            filter: interaction => (interaction.isButton() || interaction.isSelectMenu()) && interaction.message.author.id == client.user.id,
            time: 100000
        })

        collector.on("collect", async (interaction) => {
            const value = interaction.values[0]
            if (value === "first") {
                interaction.reply({
                    embeds: [embed],
                    ephemeral: true
                })
            }
            if (value === "second") {
                interaction.reply({
                    embeds: [embed1],
                    ephemeral: true
                })
            }
            if (value === "third") {
                interaction.reply({
                    embeds: [embed2],
                    ephemeral: true
                })
            }
            if (value === "fourth") {
                interaction.reply({
                    embeds: [embed3],
                    ephemeral: true
                })
            }
            if (value === "fifth") {
                interaction.reply({
                    embeds: [embed4],
                    ephemeral: true
                })
            }
            if (value === "sixth") {
                interaction.reply({
                    embeds: [embed5],
                    ephemeral: true
                })
            }if (value === "seven") {
                interaction.reply({
                    embeds: [embed6],
                    ephemeral: true
                })
            }        })

        


    } catch (err) {
      console.log(err)
    }
  }
}