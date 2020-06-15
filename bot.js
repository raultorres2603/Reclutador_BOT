// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    // Si estamos en el canal de comandos
    if (msg.channel.id === '719920516378657028') {
        if (msg.member.voice.channel) {
        // Comandos para buscar equipos //
        if (msg.content.substring(0, 9) == '!buscoSOT') {
            msg.reply('Anuncio de busqueda de tripulación creado en el canal de <#721356815643967590>');
            //ID del usuario
            user = msg.author.id;
            //Enviar mensaje a un canal
            //Poner entre corchetes con @ el ID de usuario y con @& si es un rol
            const channel = client.channels.cache.get('721356815643967590');
            channel.send('Hey! <@' + user + '>' + ' busca ' + msg.content.substring(10) + ' en el canal ' + '[LINK](https://discordapp.com/719910754383298572/' + msg.member.voice.channel.id + ')');

        } else if (msg.content.substring(0, 9) == '!buscoLOL') {
            msg.reply('Anuncio de busqueda de equipo creado en el canal de <#721358528953974835>');
            //ID del usuario
            user = msg.author.id;
            //Enviar mensaje a un canal
            //Poner entre corchetes con @ el ID de usuario y con @& si es un rol
            const channel = client.channels.cache.get('721358528953974835');
            channel.send('Hey! <@' + user + '>' + ' busca ' + msg.content.substring(10) + ' en el canal ' + msg.author.voiceChannel.id + ' <@&720254372415668286>');

        } else if (msg.content.substring(0, 9) == '!buscoVAL') {
            msg.reply('Anuncio de busqueda de equipo creado en el canal de <#721408023565697024>');
            //ID del usuario
            user = msg.author.id;
            //Enviar mensaje a un canal
            //Poner entre corchetes con @ el ID de usuario y con @& si es un rol
            const channel = client.channels.cache.get('721408023565697024');
            channel.send('Hey! <@' + user + '>' + ' busca ' + msg.content.substring(10) + ' <@&719980683430461592>');

        } else if (msg.content.substring(0, 10) == '!buscoCSGO') {
            msg.reply('Anuncio de busqueda de escuadron creado en el canal de <#721471394671755368>');
            //ID del usuario
            user = msg.author.id;
            //Enviar mensaje a un canal
            //Poner entre corchetes con @ el ID de usuario y con @& si es un rol
            const channel = client.channels.cache.get('721471394671755368');
            channel.send('Hey! <@' + user + '>' + ' busca ' + msg.content.substring(11) + ' <@&721470409303654492>');
        }
    } else if (!msg.member.voice.channel && !msg.author.bot) {
        msg.reply('Primero tienes que ir a un canal de voz para usar los comandos de busqueda de equipo!');
    }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    } else if (msg.channel.id != '719920516378657028' && !msg.author.bot && (msg.content.substring(0,1) == '!' || msg.content.substring(0,1) == '?')) {
        msg.reply('Éste canal no admite comandos, visita <#719920516378657028>');
    } 
});

client.login(process.env.DISCORD_TOKEN);