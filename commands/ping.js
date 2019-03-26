module.exports = {
	name: 'ping',
	cooldown: 5,
	aliases: ['p'],
	description: 'Ping!',
	execute(message, args) {
		message.channel.send('Pong.');
	},
};