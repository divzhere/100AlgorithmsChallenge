function addBorder(...picture: string[]): string[] {

    const l = picture[0].length + 2
    var line = ""
    
    for(var i=0;i<l;i++){
    line += "*"
    }
    
    picture[0].unshift(line)
    picture[0].push(line)
    
    picture[0][1] = "*" + picture[0][1] + "*"
    picture[0][2] = "*" + picture[0][2] + "*"
    
    return picture
    
    }
    
    console.log(addBorder(["abc", "ded"]));