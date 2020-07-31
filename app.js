const program = require('commander');
const { prompt } = require('inquirer');

const {
    list,
    add,
    update,
    remove
} = require('./models/index');


const questions =[
    {
        type: 'input',
        activity:'activity',
        message:'activity'
    }
]

program
    .command('add')
    .alias('a')
    .description('add activity')
    .action(() =>{
        prompt(questions).then(answers => add(answers));
    })
    .command('update <_id>')
    .alias('u')
    .description('update activity')
    .action(_id =>{
        prompt(questions).then(answers =>update(_id,answers));
    })
    .command('remove <_id>')
    .alias('r')
    .description('remove activity')
    .action(_id => 
        remove(_id)
        )

    .command('list')
    .alias('l')
    .description('all activity')
    .action(() => list())

    program.parse(process.argv);
