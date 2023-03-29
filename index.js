import { hideBin } from 'yargs/helpers';
import yargs from 'yargs/yargs';
import ChatBot from './src/ChatBot.js';
import promptSync from 'prompt-sync';
import Markdown from 'markdown-it';



const prompt = promptSync({
    autocomplete: getAutoComplete(['!exit', '!reset']),
});

function getAutoComplete(commands) {
    return function (partial) {
        return commands.filter((c) => c.startsWith(partial));
    };
}

const markdown = new Markdown();

(async function () {
    console.log(`
    Bard - A command-line interface to Google's Bard (https://bard.google.com/)
    Repo: github.com/acheong08/Bard
  
    Enter Ctrl+C or type "!exit" to quit.
  `);

    const argv = yargs(hideBin(process.argv))
        .option('session', {
            describe: '__Secure-1PSID cookie.',
            type: 'string',
            demandOption: true,
        })
        .argv;

    const { session } = argv;
    const chatbot = new ChatBot(session);

    try {
        while (true) {
            console.log('You:');
            const userPrompt = prompt('> ');
            console.log();
            if (userPrompt === '!exit') {
                break;
            } else if (userPrompt === '!reset') {
                chatbot.conversationId = '';
                chatbot.responseId = '';
                chatbot.choiceId = '';
                continue;
            }
            console.log('Google Bard:');
            const response = await chatbot.ask(userPrompt);
            console.log(markdown.render(response.content));
        
        }
    } catch (error) {
        console.error(error.message);
        console.log('Exiting...');
    }
})();