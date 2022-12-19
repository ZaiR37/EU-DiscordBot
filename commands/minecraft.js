const { SlashCommandBuilder, IntegrationExpireBehavior } = require('discord.js');
const util = require('minecraft-server-util');
const { mcIp } = require('../config.json');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('minecraft-server')
		.setDescription('Information about the minecraft server.'),
	async execute(interaction) {
        const options = {
            timeout: 1000 * 5,
            enableSRV: true
        };

        let info = await util.status(mcIp, 25565, options)
        let embedMessage = {
            title:  'Minecraft Server Info',
            description: `
            IP              : ${mcIp}
            Server version  : ${info.version.name}
            Player Online   : ${info.players.online} 
            Players Max     : ${info.players.max} 
            `
        };
        
        return await interaction.reply({embeds: [embedMessage]})
	},
};