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
    // .setTitle(`🔰 __**HELP MENU**__ 🔰`)
    // .setDescription(`🔰 | __**INFORMATION**__\n> \`help\`, \`botinfo\`, \`stats\`, \`ping\`, \`uptime\`, \`version\`\n\n🎶 __**| MUSIC**__\n> \`play\`, \`skip\`, \`stop\`, \`volume\`, \`loop\`, \`addrelated\`, \`autoplay\`, \`mix\`, \`playskip\`, \`playtop\`\n\n🌀 | __**QUEUE**__\n> \`clearqueue\`,\`jump\`, \`list\`, \`move\`, \`previous\`, \`remove\`, \`shuffle\`, \`status\`, \n\n❔ | __**FILTER**__\n> \`addfilter\`, \`clearfilter\`, \`custombassboost\`, \`customspeed\`, \`filters\`, \`removefilter\`, \`setfilter\`\n\n📈__**STATS**__\n> ⚙️ **${client.commands.size} Commands**\n> 📁 on **${client.guilds.cache.size} Guilds**\n> ⌚️ \`${days} Days\`, \`${hours} Hrs\`, \`${minutes} Mins\`, \`${seconds} Secs\` **Uptime**\n> 📶 \`${client.ws.ping}ms\` **Ping**`)
    // .addField("Important Links:", ` • [Invite Me](${process.env.INVITE}) • [Website](${process.env.WEBSITE}) • `, true)]})

        const embed = new MessageEmbed()
            .setTitle("__**قائمة المساعدة**__")
            .setThumbnail(client.user.displayAvatarURL({
                dynamic: true
            }))
            .setDescription(`**[Invite Me](https://discord.com/api/oauth2/authorize?client_id=948647188366503946&permissions=8&scope=bot%20applications.commands) Powered By Lemon \n**\n** اتريد المساعدة؟ اختر من أدناه ما تريد .
**`)

        const embed1 = new MessageEmbed()
            .setDescription(`__**المعلومات**__\n\n : \`help\` |  المساعدة\n ,  \`ping\` | سرعة الاستاجبة\n ,  \`version\` |الإصدار\n ,  \`set-prefix\`| تغير البريفكس الخاص بالبوت`)
            .setColor(ee.color)
            .setThumbnail(client.user.displayAvatarURL({
                dynamic: true
            }))

        const embed3 = new MessageEmbed()
            .setDescription(`<a:emoji_110:956688446657822730>︱__**الموسيقى**__\n\n : \`play\` |تشغيل الموسيقى\n , \`skip\` | تخطي الموسيقى\n , \`stop\` | ايقاف الموسيقى\n , \`volume\` |تغير درجة الصوت\n , \`loop\` | تكرار الموسيقى\n , \`autoplay\`| التشغيل التلقائي`)
            .setColor(ee.color)
            .setThumbnail(client.user.displayAvatarURL({
                dynamic: true
            }))

        const embed4 = new MessageEmbed()
            .setDescription(`<:filters:956564272710824028>︱__**الفلاتر**__\n\n : \`addfilter\` | إضافة فلتر\n , \`clearfilter\` | إزالة الفلاتر من الاغنية\n ,\`setfilter\` | إضافة الفلتر الى الاغنية\n , **Supported filters :** _clear, purebass, 8d, vaporwave, nightcore, phaser, tremolo, vibrato, reverse, treble_`)
            .setColor(ee.color)
            .setThumbnail(client.user.displayAvatarURL({
                dynamic: true
            }))

        const embed5 = new MessageEmbed()   
      .setDescription(`<:ItemMusicNote:915553560358420510>︱__**قائمة الإنتظار**__\n\n : \`clearqueue\` |حذف قائمة الانتظار\n , \`jump\` | تغيير الاغنية\n , \`list\` | القائمة\n , \`previous\` |الأغنية السابقة\n , \`shuffle\` | دمج الأغنية\n, \`status\` | حالة الأغنية التي يتم تشغيلها الآن\n`)
            .setColor(ee.color)
            .setThumbnail(client.user.displayAvatarURL({
                dynamic: true
            }))

        const embed6 = new MessageEmbed()
            .setDescription(`__**الإبلاغ**__\n\n : \`report-bug\`| إبلاغ عن خطأ\n , \`feedback\`| المراجعة\n , \`suggest\`| اقتراح`)
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
                .setPlaceholder('انقر هنا لعرض صفحات قائمة التعليمات!')
                .addOptions([{
                        label: 'Information',
                        description: 'المعلومات',
                        value: 'second',
                        emoji: '<a:yellowbook:935930732516356096>',
                    },
                    {
                        label: 'Music',
                        description: 'الموسيقى',
                        value: 'fourth',
                        emoji: '<a:emoji_110:956688446657822730>',
                    },
                    {
                        label: 'Filter',
                        description: 'الفلاتر',
                        value: 'fifth',
                        emoji:
'<:filters:956564272710824028>',
                    },
                    {
                        label: 'Queue',
                        description: 'قائمة الانتظار',
                        value: 'sixth',
                        emoji: '<:ItemMusicNote:915553560358420510>',
                    },
                    {
                        label: 'Report',
                        description: 'الإبلاغ',
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
          //   content: 'ㅤ',
          //   ephemeral: true,
          //  embeds: [embed],
          //   components: [row, invite, website, support]
        // });
        let theMsg = await message.reply({
            content: 'ㅤ',
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