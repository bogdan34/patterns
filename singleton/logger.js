const path = require('path');
const fs = require('fs');

class Logger {
    static getInstance() {
        if(!Logger.instance){
            Logger.instance = new Location();
        }
        return Logger.instance;
    }

    constructor(filename){
        this.filename = filename;

        if(!Logger.instance){
            Logger.instance = this
        }

        return Logger.instance;
    }

    read(){
        return fs.readFileSync(this.filename, 'utf-8');
    }

    write(content){
        fs.appendFileSync(this.filename, content + '\n');
    }
}

const logger = new Logger('log.txt');

logger.write('pattern sinleton');
console.log(logger.read());