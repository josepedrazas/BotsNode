var builder = require('botbuilder');

var connector = new builder.ChatConnector({
    appId: 'd507dcbf-435d-4ff7-a97f-c504f6e19ab7',
    appPassword: 'DsTtrr3Vws3m8ebV8VuPBJA'
});

var bot = new builder.UniversalBot(connector);

bot.dialog('/', [
    function(session)
    {
       builder.Prompts.text(session,'Como te llamas?');
    },
    function(session,results){
        let msj = results.response;
        session.send(`Hola ${msj}`);
    }
]);