function miniMaxSum(arr: number[]): void {
    // Write your code here

    let temp_nimimax = 0
    let collection_minimax: number[] = [];

    for (let i_minimax: number = 0; i_minimax < arr.length; i_minimax++ ){
        
        for (let j_minimax: number = 0; j_minimax < arr.length; j_minimax++){
            if(j_minimax == i_minimax){
                continue;
            }
            else{
                temp_nimimax += arr[j_minimax];
            }
        }

        collection_minimax.push(temp_nimimax)
        temp_nimimax = 0;
    }
    
    console.log(Math.min(...collection_minimax), Math.max(...collection_minimax));    

}

const arrs2: number[] = [5, 5, 5, 5, 5]

miniMaxSum(arrs2)