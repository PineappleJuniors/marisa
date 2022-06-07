const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'guildMemberRemove',
    execute(member) {
        const emb = new MessageEmbed()
            .setColor('#ffcb3d')
            .setTitle(`Goodbye, ${member.user.username}!`)
            .setDescription('Come back soon! Or don\'t.')
            .setImage('https://c.tenor.com/JdE1eM_oH7AAAAAM/scary-fumo.gif')
            .setTimestamp();

        member.guild.channels.fetch('983484201099747429')
            .then(channel => channel.send({ embeds: [emb] }))
            .catch(console.error);
    },
};