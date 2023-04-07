function TimeConversion(s: string): string {
    let waktu = s.slice(-2);
    let jam = s.slice(0,2);
    let jamArray: string[] = [];

    if(jam == "12"){
        jam = "00"
    }

    if(waktu == "PM"){
        let jamNumber: number = parseInt(jam)
        jamNumber += 12
        jam = jamNumber.toString()
    }

    jamArray = jam.split("");
    
    let semua: string[] = s.split("");
    semua = semua.splice(0, semua.length - 2)
    semua[0] = jamArray[0]
    semua[1] = jamArray[1]

    return semua.join("")

}

let time: string = "12:05:45AM"

console.log(TimeConversion(time))