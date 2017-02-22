function Diamond() {
    this.print = function(character){
        return character
    }

    this.height = function(c){
        return 2 * this.charNumber(c) - 1
    }
    this.innerSpace = function(c){
        return this.charNumber(c) - 1
    }
    this.outerSpace = function(c,maximum){
        return this.charNumber(maximum) - this.charNumber(c)
    }
    this.line = function(c, maximum){
        var line = this.blanks(this.outerSpace(c, maximum))
        line += c
        if(c != "A"){
            line += this.blanks(this.innerSpace(c,maximum)) 
            line += c
        } 
        return line 
    }

    // Private functions    
    this.charNumber = function(c){
        return c.charCodeAt(0) - 64
    }
    this.blanks = function(n){
        var blanks = ""
        while(n != 0){
            blanks += " "
            --n
        } 
        return blanks
    }

}
