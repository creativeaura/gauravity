#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const options = {
	padding: 1,
	margin: 1,
  borderStyle: "round",
  borderColor: "green"
};

let output = `
      ${chalk.yellow.bold('   _________   __  ______  ___ _    __       _____   __________ ___    __ ')}
      ${chalk.yellow.bold('  / ____/   | / / / / __ \\//   | |  / /      / /   | / ___/ ___//   |  / / ')}
      ${chalk.yellow.bold(' / / __/ /| |/ / / / /_/ / /| | | / /  __  / / /| | \\__ \\\\__ \\// /| | / /  ')}
      ${chalk.yellow.bold('/ /_/ / ___ / /_/ / _, _/ ___ | |/ /  / /_/ / ___ |___/ /__/ / ___ |/ /___')}
      ${chalk.yellow.bold('\\____/_/  |_\\____/_/ |_/_/  |_|___/   \\____/_/  |_/____/____/_/  |_/_____/')}


∙ Lead Full Stack Developer at @affinioninternational
∙ React and React Native Specialist

  https://${chalk.blue("twitter")}.com/${chalk.yellow("igauravity")}
              https://${chalk.yellow("https://gaurav.jassal")}.me
   https://${chalk.blue("github")}.com/${chalk.yellow("creativeaura")} 
 https://${chalk.blue("linkedin")}.com/${chalk.yellow("gjassal")}
                      ${chalk.yellow("gauravjassal")}@${chalk.blue("gmail")}.com
                $ npx ${chalk.yellow("gauravity")}`;

const [firstLine, ...trimmed] = output.split('\n');
console.log(chalk.white(boxen(trimmed.join('\n'), options)));
