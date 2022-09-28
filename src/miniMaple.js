class MiniMaple{
    constructor(){}

    regexTestString(str){
        str = str.replace(/\s+/g, '');
        let regex = /^((\-|\+)((\d+\*){0,1}([a-z](\^\d+){0,1})|(\d+)(\*[a-z](\^\d+){0,1}){0,1}))+$/gm;
        if(str[0] != '-')
            str = '+'.concat(str);
        return regex.test(str);
    }
}

export {MiniMaple}