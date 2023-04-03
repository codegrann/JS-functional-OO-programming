function findMedianSortedArrays(nums1, nums2) {
    if (nums1.length > nums2.length) {
      [nums1, nums2] = [nums2, nums1]; // swap arrays so that nums1 is always the shorter one
    }
    
    const m = nums1.length;
    const n = nums2.length;
    let left = 0;
    let right = m;
    
    while (left <= right) {
      let i = Math.floor((left + right) / 2);
      let j = Math.floor((m + n + 1) / 2) - i;
      
      let maxLeft1 = (i === 0) ? -Infinity : nums1[i - 1];
      let minRight1 = (i === m) ? Infinity : nums1[i];
      let maxLeft2 = (j === 0) ? -Infinity : nums2[j - 1];
      let minRight2 = (j === n) ? Infinity : nums2[j];
      
      if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
        if ((m + n) % 2 === 0) {
          return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
        } else {
          return Math.max(maxLeft1, maxLeft2);
        }
      } else if (maxLeft1 > minRight2) {
        right = i - 1;
      } else {
        left = i + 1;
      }
    }
  }
var arr1=[1,3];
var arr2=[2];
findMedianSortedArrays(arr1, arr2);

//   let a = 1;
  function four() {
    let a=2;
    if (true) {
  //     let a = 3;
  
    console.log(a); // prints '4'
  }
  console.log(a);
}
four();
// console.log(a);