const {readFileSync , writeFileSync} =  require('fs')
const first = readFileSync('./Content/first.txt','utf8')
const second =  readFileSync('./Content/Second.txt','utf8')


writeFileSync('./content/result-sync.txt',
    `Here is the result: ${first},${second}`,
    {flag:'a'}
)
console.log('done with this task');
console.log('Starting the next one');