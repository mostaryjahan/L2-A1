function formatString(input: string, toUpper: boolean = true): string {
  if (toUpper === true) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

//    console.log(formatString("Hello"));
//     console.log(formatString("Hello", true));
//     console.log(formatString("Hello", false));



const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 }
];

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
  return items.filter(item => item.rating >= 4);
}

// console.log(filterByRating(books)); // Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]


// Problem 3:
// Description: Create a generic function that concatenates multiple arrays of the same type using rest parameters.

// Function Signature:

function concatenateArrays<T>(...arrays: T[][]): T[] {

}

 concatenateArrays(["a", "b"], ["c"]);       // Output: ["a", "b", "c"]
// concatenateArrays([1, 2], [3, 4], [5]);     // Output: [1, 2, 3, 4, 5]


