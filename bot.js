// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.channel.id === '720598748001992777' && msg.content.substring(0,5) == 'busco') {
        msg.reply('Anuncio de busqueda de tripulacion creado en el canal de <#721356815643967590>');
        //ID del usuario
        user = msg.author.id;
        //Enviar mensaje a un canal
        //Poner entre corchetes con @ el ID de usuario y con @& si es un rol
        const channel = client.channels.cache.get('721356815643967590');
        channel.send('Hey! <@' + user + '>' + ' busca tripulación para ' + msg.content.substring(6) + ' <@&719917491672842281>');

    } else if (msg.channel.id === '720599069642457109' && msg.content.substring(0, 5) == 'busco') {
        msg.reply('Anuncio de busqueda de equipo creado en el canal de <#721358528953974835>');
        //ID del usuario
        user = msg.author.id;
        //Enviar mensaje a un canal
        //Poner entre corchetes con @ el ID de usuario y con @& si es un rol
        const channel = client.channels.cache.get('721358528953974835');
        channel.send('Hey! <@' + user + '>' + ' busca equipo para ' + msg.content.substring(6) + ' <@&720254372415668286>');

    } else if (msg.channel.id === '720740073301344346' && msg.content.substring(0, 5) == 'busco') {
        msg.reply('Anuncio de busqueda de equipo creado en el canal de <#721408023565697024>');
        //ID del usuario
        user = msg.author.id;
        //Enviar mensaje a un canal
        //Poner entre corchetes con @ el ID de usuario y con @& si es un rol
        const channel = client.channels.cache.get('721408023565697024');
        channel.send('Hey! <@' + user + '>' + ' busca equipo para ' + msg.content.substring(6) + ' <@&719980683430461592>');

    }
});

client.login(process.env.DISCORD_TOKEN);