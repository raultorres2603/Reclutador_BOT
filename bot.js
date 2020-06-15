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

        // Comandos para buscar equipos //
        
        if (msg.content.substring(0, 9) == '!buscoSOT') {
            //ID del usuario
            user = msg.author.id;
            //Enviar mensaje a un canal
            //Poner entre corchetes con @ el ID de usuario y con @& si es un rol
            const channel = client.channels.cache.get('721356815643967590');
            channel.send('Hey! <@' + user + '>' + ' busca ' + msg.content.substring(10) + ' <@&719917491672842281>');

        } else if (msg.content.substring(0, 9) == '!buscoLOL') {
            msg.reply('Anuncio de busqueda de equipo creado en el canal de <#721358528953974835>');
            //ID del usuario
            user = msg.author.id;
            //Enviar mensaje a un canal
            //Poner entre corchetes con @ el ID de usuario y con @& si es un rol
            const channel = client.channels.cache.get('721358528953974835');
            channel.send('Hey! <@' + user + '>' + ' busca ' + msg.content.substring(10) + ' <@&720254372415668286>');

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

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    } else {
        msg.reply('Éste canal no admite comandos, ves al canal <#719920516378657028> para ejecutar los comandos 😁');
    } 
});

client.login(process.env.DISCORD_TOKEN);