class Prefix {
    /**
     * 
     * @param {String | Array<String>} prefix 
     */
    constructor(prefix) {
        if(prefix instanceof Array) this.prefix = prefix
        else this.prefix = [prefix]
    }

    /**
     * 
     * @param {String} command 
     */
    handleCommand(command) {
        let prefix = undefined
        for(let i = 0; i < this.prefix.length; i++) {
            if(command.startsWith(this.prefix[i])) {
                prefix = this.prefix[i]
                break
            }
        }

        if(!prefix) return ["Unknown command prefix"]
        
        const [commandName, params] = this.#parseCommand(command.slice(prefix.length))
        return [undefined, commandName, params]
    }

    /**
     * @desc This command is used to parse the command. 
     * It separates the command name from the params and parse arguments separated with spaces 
     * or params that are string literals 
     * @param {String} input 
     * @returns {Array} [commandName, params] 
     */
    #parseCommand(input) {
        const regex = /"([^"]+)"|\S+/g;
        const matches = input.match(regex);
        const result = matches.map(match => match.startsWith('"') ? match.slice(1, -1) : match);
        
        const commandName = result.shift().slice(prefix.length)
        const params = result
        
        return [commandName, params];
      }
}
