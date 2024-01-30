const checkdog = function(choju,chokate){

    //1
    const dogjulias = choju.slice();
    console.log(dogjulias.slice(1,3));
    //2
    const alldogs = dogjulias.concat(chokate);
    console.log(alldogs);


    alldogs.forEach(function(dog,i){
        if(dog>= 3){
            console.log (`Chó số ${i + 1} là người lớn và ${dog} tuổi`);
        }else{
            console.log(`Chó số ${i+1} vẫn là chó con `);
        }
    });
};


checkdog([3,5,2,12,7],[,4,1,15,8,3]);
checkdog( [9, 16, 6, 8, 37],[10, 5, 6, 1, 4]);
