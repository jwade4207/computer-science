// const buttonEl = document.getElementById('my-button');

// const clickHandler = function() {
//   let count = parseInt(this.getAttribute('data-count'));
//   count++;

//   this.setAttribute('data-count', count);
//   this.textContent = `Clicks: ${count}`;
// };

// buttonEl.addEventListener('click', clickHandler);


//this uses a closure unlike above, creates self contained buttons that own their own data. Also helps limit DOM interaction, gets rid of need to write HTML attributes like on lines 7 and 8
// const buttonEl = document.getElementById('my-button');

// const clickHandler = function() {
//   let count = 0;

//   return function() {
//     count++;
//     this.textContent = `Clicks: ${count}`;
//   };
// };

// buttonEl.addEventListener('click', clickHandler());

//code example with event delegation
// const containerEl = document.getElementById('container');

// const clickHandler = function(event) {
//   if (event.target.matches('button')) {
//     event.target.textContent = 'Clicked!';
//   }
// };

// containerEl.addEventListener('click', clickHandler);

//algorithm knows as a linear search
// const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

// const findIndex = (num) => {
//     for (let i = 0; i < data.length; i++) {
//         if (data[i] === num) {
//             console.log(`${num} found at index ${i}`);
//         }
        
//     }
// } 

//binary search code example
// const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

// const binarySearch = (arr, num) => {
//   let left = 0;
//   let right = arr.length - 1;
//   let middle = Math.floor((left + right) / 2);

//   if (num === arr[middle]) {
//     return 'found it';
//   }
//   else if (num < arr[middle]) {
//     right = middle;
//     return `bring right down to ${right}`;
//   }
//   else if (num > arr[middle]) {
//     left = middle + 1;
//     return `bring left up to ${left}`;
//   }
// };

// console.log(binarySearch(data, 38));

//binary search example using recursion(function that calls itself)
const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

const binarySearch = (arr, num, left, right) => {
  let middle = Math.floor((left + right) / 2);

  // range overlapped, so never found number
  if (left > right) {
    return -1;
  }
  else if (num === arr[middle]) {
    return middle;
  }
  else if (num < arr[middle]) {
    // call again with a new right value
    return binarySearch(arr, num, left, middle - 1);
  }
  else {
    // call again with a new left value
    return binarySearch(arr, num, middle + 1, right);
  }
};

// set initial left and right values on first call
console.log(binarySearch(data, 12, 0, data.length - 1));