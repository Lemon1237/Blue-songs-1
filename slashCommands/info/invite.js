const { MessageEmbed, CommandInteraction, Client, MessageButton, MessageActionRow } = require("discord.js")

module.exports = {
    name: "invite",
    description: "get my invite link",

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

    run: async (client, interaction) => {
        await interaction.deferReply({
            ephemeral: false
        });

           
    const row = new MessageActionRow()
    .addComponents(
    new MessageButton()
    .setLabel("Invite")
    .setStyle("LINK")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=948647188366503946&permissions=8&scope=bot%20applications.commands`),
			);

          const mainPage = new MessageEmbed()
            .setAuthor({ name: 'Blue songs', iconURL: 'https://cdn.discordapp.com/attachments/865982100468793354/951153125601984592/46497C97-932F-4635-BEB1-FF1211AADBA8.jpg'})
            .setThumbnail('https://cdn.discordapp.com/attachments/865982100468793354/951153125601984592/46497C97-932F-4635-BEB1-FF1211AADBA8.jpg')
            .setColor('#303236')
            .addField('invite Blue songs', `[Here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot)`, true)
           await interaction.followUp({embeds: [mainPage], components: [row]})
    }
}