const { ActivityType } = require ('discord.js');

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Bot Ready!\nLogged in as ${client.user.tag}`);
		client.user.setPresence({
			activities: [{ name: '/info', type: ActivityType.Playing }],
			status: 'online',
		});
	},
};