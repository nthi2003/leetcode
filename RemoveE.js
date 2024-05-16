// [3, 2 , 2, 3] val = 3
// output = [2, 2, _, _]
//giai thich chi tiet
//[3,2,2,3]
// 0 1 2 3
// k  let k = 0; 

// i chay tu 0 ts n 
// num[i] khac thang val = 3

// trong do thang i = 0 co val 3 = val trung vs lai val yeu cau nen bo qua
// thang i = 1 val = 2 nen la khac thoa dieu kien nen thang k = i o day i dang co val = 2
//k++ no se nhay len thang 1 steeps
//[2]
//tiep tuc nhu tren 

const RemoveE = (nums, val) => {
    let k = 0;  
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}

let nums = [3, 2, 2, 3];
let val = 3;
let newLength = RemoveE(nums, val);
console.log(newLength); // Output: 2
console.log(nums.slice(0, newLength)); // Output: [2, 2]
