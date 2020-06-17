// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('BOT oficial Torres');
});

// NECESIDAD DE CANAL DE COMANDOS ESPECÍFICO

client.on('message', msg => {
    // Si estamos en el canal de comandos
    if (msg.channel.id === '719920516378657028' && (msg.content.startsWith('!') || msg.content.startsWith('?'))) {
        if (msg.member.voice.channel) {
            const invite = msg.member.voice.channel.createInvite()
                .then(invite => {
                    if (msg.content.startsWith('!buscoSOT')) {
                        msg.reply('Anuncio de busqueda de tripulación creado en el canal de <#721356815643967590>');
                        //ID del usuario
                        user = msg.author.id;
                        //Enviar mensaje a un canal
                        //Poner entre corchetes con @ el ID de usuario y con @& si es un rol
                        const channel = client.channels.cache.get('721356815643967590');
                        const embed = new Discord.MessageEmbed()
                            .setColor('#0099ff')
                            .setAuthor(client.user.username)
                            .setTitle('Anuncio')
                            .addField('Notificacion', 'Hey! <@' + user + '>' + ' busca ' + msg.member.voice.channel.userLimit + ' soldados')
                            .addField('Plan', msg.content.substring(10))
                            .addField('Canal', '[<#' + msg.member.voice.channel.id + '>](https://discord.gg/' + invite.code + ')')
                            .setTimestamp()
                            .setFooter('BOT oficial Torres');
                        channel.send(embed)
                            .then(() => channel.send('<@&719917491672842281>'));

                    } else if (msg.content.startsWith('!buscoLOL')) {
                        msg.reply('Anuncio de busqueda de equipo creado en el canal de <#721358528953974835>');
                        //ID del usuario
                        user = msg.author.id;
                        //Enviar mensaje a un canal
                        //Poner entre corchetes con @ el ID de usuario y con @& si es un rol
                        const channel = client.channels.cache.get('721358528953974835');
                        const embed = new Discord.MessageEmbed()
                            .setColor('#0099ff')
                            .setAuthor(client.user.username)
                            .setTitle('Anuncio')
                            .addField('Notificacion', 'Hey! <@' + user + '>' + ' busca ' + msg.member.voice.channel.userLimit + ' invocadores')
                            .addField('Plan', msg.content.substring(10))
                            .addField('Canal', '[<#' + msg.member.voice.channel.id + '>](https://discord.gg/' + invite.code + ')')
                            .setTimestamp()
                            .setFooter('BOT oficial Torres');
                        channel.send(embed)
                            .then(() => channel.send('<@&720254372415668286>'));

                    } else if (msg.content.startsWith('!buscoVAL')) {
                        msg.reply('Anuncio de busqueda de equipo creado en el canal de <#721408023565697024>');
                        //ID del usuario
                        user = msg.author.id;
                        //Enviar mensaje a un canal
                        //Poner entre corchetes con @ el ID de usuario y con @& si es un rol
                        const channel = client.channels.cache.get('721408023565697024');
                        const embed = new Discord.MessageEmbed()
                            .setColor('#0099ff')
                            .setAuthor(client.user.username)
                            .setTitle('Anuncio')
                            .addField('Notificacion', 'Hey! <@' + user + '>' + ' busca ' + msg.member.voice.channel.userLimit + ' soldados')
                            .addField('Plan', msg.content.substring(10))
                            .addField('Canal', '[<#' + msg.member.voice.channel.id + '>](https://discord.gg/' + invite.code + ')')
                            .setTimestamp()
                            .setFooter('BOT oficial Torres');
                        channel.send(embed)
                            .then(() => channel.send('<@&719980683430461592>'));

                    } else if (msg.content.startsWith('!buscoCSGO')) {
                        msg.reply('Anuncio de busqueda de escuadron creado en el canal de <#721471394671755368>');
                        //ID del usuario
                        user = msg.author.id;
                        //Enviar mensaje a un canal
                        //Poner entre corchetes con @ el ID de usuario y con @& si es un rol
                        const channel = client.channels.cache.get('721471394671755368');
                        const embed = new Discord.MessageEmbed()
                            .setColor('#0099ff')
                            .setAuthor(client.user.username)
                            .setTitle('Anuncio')
                            .addField('Notificacion', 'Hey! <@' + user + '>' + ' busca ' + msg.member.voice.channel.userLimit + ' soldados')
                            .addField('Plan', msg.content.substring(11))
                            .addField('Canal', '[<#' + msg.member.voice.channel.id + '>](https://discord.gg/' + invite.code + ')')
                            .setTimestamp()
                            .setFooter('BOT oficial Torres');
                        channel.send(embed)
                            .then(() => channel.send('<@&721470409303654492>'));
                    }
                });
            // Comandos para buscar equipos //

        } else if (!msg.member.voice.channel && !msg.author.bot) {
            msg.reply('Primero tienes que ir a un canal de voz para usar los comandos de busqueda de equipo!');
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    } else if (msg.channel.id != '719920516378657028' && !msg.author.bot && (msg.content.substring(0, 1) == '!' || msg.content.substring(0, 1) == '?')) {
        msg.reply('Éste canal no admite comandos, visita <#719920516378657028>');
    }
});

client.login(process.env.DISCORD_TOKEN);