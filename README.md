# TypeScript Essentials: Types and Enums

This document explains key TypeScript types — `any`, `unknown`, and `never` — along with the usage of `enum` in TypeScript.

---

## 3. Explain the difference between `any`, `unknown`, and `never` types in TypeScript.

### `any`
- Accepts any type.
- No type checking; disables type safety.

```ts
// 'any' - No type checking
let anyValue: any = 42;
anyValue = "Hello";  // No error
````

---

### `unknown`

* Also accepts any type.
* Requires type checking before usage.

```ts
// 'unknown' - Requires type checking
let unknownValue: unknown = 42;
// unknownValue.toUpperCase(); // Error

if (typeof unknownValue === "string") {
  unknownValue.toUpperCase(); // Safe
}
```

---

### `never`

* Represents values that never occur.
* Used in functions that never return (e.g., throw an error).

```ts
// 'never' - Function that never returns
function throwError(message: string): never {
  throw new Error(message);
}
```

---

## 4. What is the use of enums in TypeScript? Provide an example of a `numeric` and `string` enum.

Enums in TypeScript are a feature that allows to define a set of named constants. They make code more readable and intent-driven, especially when dealing with a fixed set of related values like roles, directions, or statuses.

Enums can be numeric or string-based, and they help reduce errors caused by hard-coded strings or numbers.

#### Why use Enums?
- Improve code readability and maintainability.
- Prevent typos and magic numbers.
- Provide autocompletion and compile-time checks.

---

### Numeric Enum example

```ts
enum Status {
  Pending = 1,
  InProgress,
  Completed
}

console.log(Status.Pending);     // 1
console.log(Status.InProgress); // 2
```

---

### String Enum example:

```ts
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}

console.log(Color.Red);   // "RED"
console.log(Color.Green); // "GREEN"





