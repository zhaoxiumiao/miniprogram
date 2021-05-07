function convertToCastString(casts){
    let castsjonin=""
    for(let idx in casts){
        castsjonin = castsjonin + casts[idx].name + " / "
    }
    return castsjonin.substring(0, castsjonin.length - 2) //截取字符串
}

function convertToCastInfo(casts){
    let castsArray=[]
    for(let idx in casts){
        let cast = {
            img: casts[idx].avatars.large ? casts[idx].avatars.large:"",
            name: casts[idx].name
        }
        castsArray.push(cast)
    }
    return castsArray
}

export {
    convertToCastString,
    convertToCastInfo
}