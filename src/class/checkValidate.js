export class checkValidate {
    constructor() {
        
    }


    validCard(nomer) {
        let rezult = nomer.split('')
        rezult.reverse()
        rezult = rezult.join("")
        const kontrol = rezult.slice(0, 1)
        rezult = rezult.slice(1)
        let spisok = rezult.split('')
        spisok = spisok.map(string => parseInt(string))
        spisok = spisok.map((number, index) => index % 2 === 0 ? number * 2 : number)
        spisok = spisok.map(number => number > 9 ? number - 9 : number)
        spisok = spisok.reduce((a, b) => a + b, 0)
        const itog = 10 - (spisok % 10)

        if (itog == parseInt(kontrol)) {
            const status = true
            return status
        }else{
            const status = false
            return status
        }

    }

    firmaCard(nomer) {
        if (nomer.length == 16 && nomer.slice(0, 1) == "4") {
            return "Visa" 
    }else if (nomer.length == 16 && nomer.slice(0, 2) == "34" || nomer.slice(0, 2) == "37") {
        return "AmericanExpress"
    }else if ((nomer.length >= 16 && nomer.length <= 19) && (nomer.slice(0, 4) == "6011" || nomer.slice(0, 2 ) == "65" || (Number(nomer.slice(0, 3)) >= 644 && Number(nomer.slice(0, 3)) <= 649))) {
        return "Discover"    
    }else if ((nomer.length >= 14 && nomer.length <= 19) && (nomer.slice(0, 2) == "30" || nomer.slice(0, 2) == "36" || nomer.slice(0, 2) == "38" || nomer.slice(0, 2) == "39")) {
        return "DinersClub"
    }else if ((nomer.length >= 16 && nomer.length <= 19) && (Number(nomer.slice(0, 4)) >= 3528 && Number(nomer.slice(0, 4)) <= 3589)) {
        return "JCB"   
    }else if (nomer.length == 16 && ((Number(nomer.slice(0, 4)) >= 2221 && Number(nomer.slice(0, 4)) <= 2720) || (Number(nomer.slice(0, 2)) >= 51 && Number(nomer.slice(0, 2)) <= 55))) {   
        return "Mastercard"
    }else if ((nomer.length >= 16 && nomer.length <= 19) && (Number(nomer.slice(0, 4)) >= 2200 && Number(nomer.slice(0, 4)) <= 2204)){
        return "Mir"
    }
    } 
    
    
}    