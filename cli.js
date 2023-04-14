const mdLinks = require('./index');
const { totalLinks, brokenLinks, uniqueLinks } = require('./api');
const chalk = require('chalk');
const process = require('process');
const path = process.argv[2];
const validate = process.argv.includes('--validate') || (process.argv.includes('--v'));
const stats = process.argv.includes('--stats') || process.argv.includes('--s');
const help = process.argv.includes('--help') || process.argv.includes('--h');

const cli = () => {

    if (!path || help) {
        console.log(chalk.magentaBright.bold('✦  '), chalk.green('Welcome to the Markdown Links Library'), chalk.magentaBright.bold(' ✦\n'));
        console.log('Markdown Links is a library where you can verify the status of your links within a Markdown file.');
        console.log('Please introduce the path of your .md file.');
        console.log('You can use the following commands:\n');
        console.log("To get an array with your link's status use --validate or --v");
        console.log('To get the total and unique number of links residing in your .md file use --stats or --s');
        console.log('To get the number of the broken links use --validate --stats or --v --s');
    }
    else if (!validate && !stats) {
        return mdLinks(path, { validate: false }).then((link) => {

            for (let i = 0; i < link.length; i++) {
                console.log(chalk.magentaBright('      ——————     '));
                console.log(chalk.magentaBright.bold('✦ '), ('href: '), chalk.greenBright(link[i].href));
                console.log(chalk.magentaBright.bold('✦ '), ('text: '), (link[i].text));
                console.log(chalk.magentaBright.bold('✦ '), ('file: '), (link[i].file));
            }
            process.exit(0);
        }).catch(console.error)
    }
    else if (validate && !stats) {
        return mdLinks(path, { validate: true }).then((link) => {
            for (let i = 0; i < link.length; i++) {
                if (link[i].ok === 'Forbidden' || link[i].ok === 'Not Found') {
                    console.log(chalk.magentaBright('      ——————     '));
                    console.log(chalk.magentaBright.bold('✦ '), ('href: '), chalk.greenBright(link[i].href));
                    console.log(chalk.magentaBright.bold('✦ '), ('text: '), (link[i].text));
                    console.log(chalk.magentaBright.bold('✦ '), ('file: '), (link[i].file));
                    console.log(chalk.magentaBright('✦ '), chalk.red('status:', link[i].status));
                    console.log(chalk.magentaBright('✦ '), chalk.red('ok:', link[i].ok));
                }
                else {
                    console.log(chalk.magentaBright('      ——————     '));
                    console.log(chalk.magentaBright.bold('✦ '), ('href: '), chalk.greenBright(link[i].href));
                    console.log(chalk.magentaBright.bold('✦ '), ('text: '), (link[i].text));
                    console.log(chalk.magentaBright.bold('✦ '), ('file: '), (link[i].file));
                    console.log(chalk.magentaBright('✦ '), chalk.green('status:', link[i].status));
                    console.log(chalk.magentaBright('✦ '), chalk.green('ok:', link[i].ok));
                }
            }
            process.exit(0);
        }).catch(console.error);
    }
    else if (validate && stats) {
        return mdLinks(path, { validate: true, stats }).then((link) => {

            console.log(chalk.magentaBright('✦ '), ('total: '), (totalLinks(link)));
            console.log(chalk.magentaBright('✦ '), ('unique: '), (uniqueLinks(link)));
            console.log(chalk.magentaBright('✦ '), ('broken: '), (chalk.red(brokenLinks(link))));
            process.exit(0);
        }).catch(console.error);
    }
}
cli();
