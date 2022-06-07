const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'guildMemberAdd',
    execute(member) {
        const emb = new MessageEmbed()
            .setColor('#ffcb3d')
            .setTitle('Welcome to the server, ' + member.user.username + '!')
            .setDescription('You\'re member #' + member.guild.memberCount.toString() + '.')
            .setThumbnail(member.user.avatarURL({ dynamic: true }))
            .setImage('https://i.imgur.com/JX1Q4La.png')
            .setTimestamp();

        member.guild.channels.fetch('983484201099747429')
            .then(channel => channel.send({ embeds: [emb] }))
            .catch(console.error);
    },
};