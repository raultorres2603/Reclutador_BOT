// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const avatar_url = 'https://lh3.googleusercontent.com/proxy/SK3HurdymtUsSf0_L1WDPrheXaWfhjrN47PWdbven_BimSP1jqmBGg1L9qnadsku_TxR51tCXHHLD6fcZC345_uKpuRr1_hzb4RtVr0hpyGiLhduFCBJQRDmwTYCbkiNnDamZMsw3braMKbMLVrYUEQOP7j53a0';
const ytdl = require('ytdl-core');
var connection;
var link;
var dispatcher;
var videos = [];
var YOUTUBE_CRED = `${process.env.YOUTUBE_API}`;
var YouTube = require("discord-youtube-api");
var posicion_videos = 0;

var youtube = new YouTube(`${YOUTUBE_CRED}`);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('BOT oficial Torres');
});

// NECESIDAD DE CANAL DE COMANDOS ESPECÍFICO

client.on('message', async msg => {
    // Si estamos en el canal de comandos
    if (msg.channel.id === '719920516378657028' && (msg.content.startsWith('!') || msg.content.startsWith('?'))) {
        if (msg.member.voice.channel) {
            // Unir al bot

            if (msg.content.startsWith('!unete')) {
                // Only try to join the sender's voice channel if they are in one themselves
                connection = await msg.member.voice.channel.join();
                link = msg.content.substring(7);
                let url = await searchYouTubeAsync(link);
                if (posicion_videos == 0 && videos.length == 0) {
                    videos.push(url);
                    let stream = ytdl(url, { filter: 'audioonly' });
                    dispatcher = connection.play(stream, { volume: '0.5' });
                    // Hay que poner finish en vez de end, ni puto caso a la documentación oficial
                    // https://stackoverflow.com/questions/61050918/discord-js-bot-unable-to-leave-voice-channel
                    dispatcher.on('finish', () => {
                        if (posicion_videos == videos.length) {
                            dispatcher = undefined;
                            videos = [];
                            posicion_videos = 0;
                            msg.member.voice.channel.leave();
                        } else {
                            posicion_videos++;
                            let stream = ytdl(videos[posicion_videos], { filter: 'audioonly' });
                            dispatcher = connection.play(stream, { volume: '0.5' });
                        }
                    })
                    msg.reply(`Se ha añadido tu canción y se reproducirá ahora: ${url}`);
                } else {
                    videos.push(url);
                    msg.reply(`Se ha añadido tu canción: ${url}`);
                }
                /*
                let stream = ytdl(url, { filter: 'audioonly' });
                dispatcher = connection.play(stream);
                */

            }
            if (msg.content.startsWith('!vete')) {
                if (typeof dispatcher != undefined) {
                    dispatcher = undefined;
                    videos = [];
                    posicion_videos = 0;
                }
                msg.member.voice.channel.leave();
            } if (msg.content.startsWith('!stop')) {
                dispatcher = undefined;
                videos = [];
                posicion_videos = 0;
            }

            if (msg.content.startsWith('!skip')) {
                if (posicion_videos == videos.length) {
                    msg.reply("No hay más canciones, esta es la última.");
                } else {
                    posicion_videos++;
                    let stream = ytdl(videos[posicion_videos], { filter: 'audioonly' });
                    dispatcher = connection.play(stream, { volume: '0.5' });
                    msg.reply(`Se ha pasado a la siguiente canción: ${videos[posicion_videos]}`);
                }
            }

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
                            .setAuthor(client.user.username, avatar_url)
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
                            .setAuthor(client.user.username, avatar_url)
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
                            .setAuthor(client.user.username, avatar_url)
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
                            .setAuthor(client.user.username, avatar_url)
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

async function searchYouTubeAsync(args) {
    var video = await youtube.searchVideos(args.toString().replace(/,/g, ' '));
    console.log(video.url);
    console.log(typeof String(video.url));
    return String(video.url);
}

client.login(process.env.DISCORD_TOKEN);