var restify = require('restify');
var builder = require('botbuilder');

var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978,function(){
    console.log('%s listening to %s', server.name, server.url);
});


var connector = new builder.ChatConnector({
    appId: 'd507dcbf-435d-4ff7-a97f-c504f6e19ab7',
    appPassword: 'DsTtrr3Vws3m8ebV8VuPBJA'
});

var bot = new builder.UniversalBot(connector);
server.post('/api/messages',connector.listen());

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