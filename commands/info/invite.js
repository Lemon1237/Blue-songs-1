const {
    Client,
    Message,
    MessageActionRow,
    MessageButton,
    MessageEmbed,
} = require("discord.js");
 

module.exports = {
   name: "invite",
   aliases: ["i", "inv"],
   description: "Shows invite links",
   botpermissions: ["ADMINISTRATOR"],
   usage: "",
   category: "Info",
   cooldowns: 2000,
   developersOnly: false,
   toggleOff: false,
run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setTitle("Invite & Support Link!")
            .addField("**Invite Link**", `[Click here to invite me](https://discord.com/api/oauth2/authorize?client_id=948647188366503946&permissions=8&scope=bot%20applications.commands)`)
           

            const row = new MessageActionRow().addComponents(
                new MessageButton()
            .setLabel("Invite Me")
            .setURL("https://discord.com/api/oauth2/authorize?client_id=948647188366503946&permissions=8&scope=bot%20applications.commands")
            .setStyle("LINK"),

    
            );

            message.channel.send({ embeds: [embed], components: [row]  });

    }
}
