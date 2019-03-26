const discord = require('discord.js');

module.exports = {
	name: 'avatar',
    description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
    aliases: ['icon', 'pfp'],
	execute(message) {
        let img = message.mentions.users.first()
        if (!img) {
            const embed = new discord.RichEmbed()
            .setImage(`${message.author.avatarURL}`)
            .setColor(0x66b3ff)
            .setFooter(`Avatar de ${message.author.username}#${message.author.discriminator}`);
            message.channel.send({ embed });
        } else if (img.avatarURL === null) {
            message.channel.sendMessage("El usuario ("+ img.username +") no tiene avatar!");
        } else {
            const embed = new discord.RichEmbed()
            .setImage(`${img.avatarURL}`)
            .setColor(0x66b3ff)
            .setFooter(`Avatar de ${img.username}#${img.discriminator}`);
            message.channel.send({ embed });
        };
    }		
};