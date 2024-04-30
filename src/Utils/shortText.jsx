

export const shortText = (text,len) =>{

    if(text && text.length > len){

        return `${text.slice(0, len)}...`
    }

    return text

}