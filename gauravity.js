import Table from 'cli-table'
import me from './me.json'

export default class Gauravity {
  static heading(title) {
    let o = `\n${title}`;
    o += '\n============================================\n'
    return o;
  }
  static name() {
    return this.heading("Full Name") + me.name
  }

  static about() {
    return this.heading("About Me") + me.about.join('\n\n')
  }

  static title() {
    return this.heading("My Current Job Title") + me.title
  }

  static hobbies() {
    let table = new Table({
      head: ['Hobbies']
      , colWidths: [40]
    })

    me.hobbies.map((m) => {
      table.push([m])
    })
    return this.heading("My Hobbies")  + table.toString()
  }

  static priorities() {
    let table = new Table({
      head: ['Priorities']
      , colWidths: [20]
    })

    me.priorities.map((m) => {
      table.push([m])
    })
    return this.heading("My Priorities in Life") + table.toString()
  }

  static work() {
    let table = new Table({
      head: ['Work']
      , colWidths: [40]
    })

    me.work.map((w) => {
      table.push([w])
    })
    return this.heading("Currently working at ") + table.toString()
  }

  static tech() {
    let table = new Table({
      head: ['Languages ']
      , colWidths: [20]
    })

    me.tech.map((w) => {
      table.push([w])
    })
    return this.heading("Technoloies i love to work on ") + table.toString()
  }


  static social() {
    let table = new Table({
      head: ['Social Accounts', '                                  ']
      , colWidths: [20, 60]
    })

    for(let s in me.social) {
      table.push([s, me.social[s]])
    }
    return this.heading("Social Accounts") + table.toString()
  }
}
