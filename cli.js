#!/usr/bin/env node
import figlet from 'figlet'
import clear from 'clear'
import Gaurav from './gauravity'
import program from 'commander'
import Gauravity from './gauravity';

clear()
figlet('gauravity', (err, data) => {
    console.log(data)

    program.parse(process.argv)
})

program
  .version('1.0.0')
  .description('Optional params to know more about me.')

program
  .command('about')
  .alias('a')
  .description('Learn More about me')
  .action(() => {
    console.log(Gauravity.about())
  })


program
  .command('title')
  .alias('t')
  .description('My current job title')
  .action(() => {
    console.log(Gauravity.title())
  })

program
  .command('work')
  .alias('w')
  .description('Currently working at')
  .action(() => {
    console.log(Gauravity.work())
  })

program
  .command('social')
  .alias('s')
  .description('My social account')
  .action(() => {
    console.log(Gauravity.social())
  })

program
  .command('hobbies')
  .alias('h')
  .description('My hobbies')
  .action(() => {
    console.log(Gauravity.hobbies())
  })

program
  .command('priorities')
  .alias('p')
  .description('My priorities')
  .action(() => {
    console.log(Gauravity.priorities())
  })

program
  .command('tech')
  .alias('th')
  .description('Technoloies i love to work on ')
  .action(() => {
    console.log(Gauravity.tech())
  })
