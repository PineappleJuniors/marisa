const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('purge')
        .setDescription('Bulk delete a certain amount of messages from the current channel (default: 10).')
        .addIntegerOption(option => option.setName('messages').setDescription('The number of messages to delete.').setMinValue(1).setMaxValue(100)),
        async execute(interaction) {
            let messages = interaction.options.getInteger('messages');
            if (!messages) messages = 10;

            interaction.channel.bulkDelete(messages)
                .then((result) => {
                    interaction.reply({ content: `Purged ${result.size} messages.`, ephemeral: true });
                })
                .catch(console.error);
        },
};