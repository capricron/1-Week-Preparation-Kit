function plusminus(arr: number[]): void {

    let positive :number = 0;
    let negative :number = 0;
    let zero: number = 0;

    for (let num of arr){
        if(num > 0){
            positive++
        }else if(num < 0){
            negative++
        }else{
            zero++
        }
    }
    
    console.log(positive/arr.length);
    console.log(negative/arr.length);
    console.log(zero/arr.length);
}

let arrs: number[] = [-4, 3, -9, 0, 4, 1]  
plusminus(arrs);