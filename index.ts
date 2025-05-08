function formatString(input: string, toUpper?: boolean):string{
    if(toUpper || toUpper === undefined){
        return input.toUpperCase();
    }else{
        return input.toLowerCase();
    };
}


type FilterByRating = {
  title: string;
  rating: number;
};

function filterByRating(items: FilterByRating[]): FilterByRating[] {
  return items.filter((item: FilterByRating) => item.rating >= 4);
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}


class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo() {
    return `Make:${this.make}, Year:${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel() {
    return `Model: ${this.model}`;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();
myCar.getModel();


function processValue(value: string | number): number {
  if (typeof value === "string") {
    const newValue = value.trim();
    return newValue.length;
  } else {
    return value * 2;
  }
}
processValue("hello");
processValue(10);


interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length < 1) {
    return null;
  } else {
    return products.reduce(
      (maxPrice: Product, currentPrice: Product): Product =>
        currentPrice.price > maxPrice.price ? currentPrice : maxPrice
    );
  }
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];
getMostExpensiveProduct(products);


enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}
getDayType(Day.Monday);
getDayType(Day.Sunday);


async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
}
squareAsync(4).then(console.log);        // Output after 1s: 16
squareAsync(-3).catch(console.error);   // Output: Error: Negative number not allowed
