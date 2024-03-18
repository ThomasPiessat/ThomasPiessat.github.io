# Using Attributes in C++

All (good) programmers know that adding comments to code is important for maintainability and clarity. Commenting code can help express certain intentions of the code to future developers without speaking to them directly, such as if a function is expected to be deprecated soon or to explain a complex algorithm.

Sometimes, it’s not other developers who get confused by code — it’s the compiler! In some cases, programmers can add compiler flags when building code or ```#pragma``` directives in the code to help suppress compiler warnings, but this is not always ideal.

Fortunately, beginning in C++11 and continuing in C++14, C++17, and beyond, _attributes_ have been added to the language as a way to provide additional information about the code to tell the compiler and developers about expected behavior.

## Attribute specifier syntax
The basic syntax for specifying an attribute is to use double square brackets, such as ```[[attribute]]```. To specify multiple attributes, either provide a comma-separated list within double brackets, or multiple double-bracket attributes. For example:

```cpp
[[attribute1]] [[attribute2]] [[attribute3]]
int myFunc();

// OR

[[attribute1, attribute2, attribute3]]
int myFunc();
```

The placement of an attribute determines which entity will have the attribute applied to. Examine the following examples:
```cpp
// Attribute applied to return value
[[myattribute]] int myFunc(int value);

// Attribute applied to function
int [[myattribute]] myFunc(int value);

// Attribute applied to function parameter
int myFunc([[myattribute]] int value);

// Attribute applied to variable
[[myattribute]] int thing = myFunc(10);
```

## Standard attributes

Below are examples of the standard attributes (up to C++17) that can be used regardless of the chosen compiler. When applicable, each attribute will have an example where a warning, error, or undefined behavior may apply without the attribute and an example correctly using the attribute.

- ```[[noreturn]]```: Indicates a function does not return

```cpp
// Incorrect
[[noreturn]] void throwSign(int i) {
  // Undefined behavior if i <= 0
  if (i > 0) {
    throw "Positive";
  }
}

// Correct
[[noreturn]] void infiniteLoop() {
  // Function will not return due to infinite loop
  while (true) {
    // Do something
  }
}
```

- ```[[deprecated]]```: Indicates a function, class, or variable is deprecated. Can provide a string message with an explanation
```cpp
[[deprecated("Use updatedFunc() instead")]] void oldFunc() {
  // Function implementation
}
```

- ```[[fallthrough]]```: Indicates a fallthrough from a previous case statement is intentional

```cpp
// Incorrect
switch (value) {
  case 1:
    // Some code (no break)
  case 2: // Possible compiler warning for fallthrough
    // Code for case 1 and case 2
    break;
  default:
    // Code for default case
    break;
}

// Correct
switch (value) {
  case 1:
    // Some code
    [[fallthrough]]; // Fallthrough, no break
  case 2:
    // Code for case 1 and case 2
    break;
  default:
    // Code for default case
    break;
}
```

- ```[[nodiscard]]```: Encourages the compiler to warn if a return value is not used
```cpp
// Incorrect
[[nodiscard]] int someFunc() { return 0; };
int main() {
  someFunc(); // Possible compiler warning on discarding a nodiscard value
  return 0;
}

// Correct
[[nodiscard]] int someFunc() { return 0; };
int main() {
  int value = someFunc();
  std::cout << "Value: " << value << std::endl;
  return 0;
}
```

- ```[[maybe_unused]]```: Suppresses compiler warning on unused entities
```cpp
// Incorrect
int myFunc(int a, int b) {
  return a; // Possible compiler warning for not using "b"
}

// Correct
int myFunc(int a, [[maybe_unused]] int b) {
  return a;
}
```

There are a few more attributes that were added in C++20, and even more are being added to C++23, but these will be covered in future articles.

## Non-standard attributes

Popular compilers such as GCC, Clang, and MSVC have their own compiler-specific methods for adding attributes. For example, MSVC has the ```__declspec``` keyword for attributes that are specific to MSVC and GCC has the ```__attribute__``` keyword.

However, these compilers are beginning to add attributes using the newer C++ standard syntax for attributes with the compiler as a prefix. For example, MSVC has ```[[msvc::forceinline]]``` and other attributes, while GCC has ```[[gnu::always_inline]]```.

## Conclusion

Attributes provide a clean way to communicate certain code behavior to the compiler without compiler flags, as well as to other developers without additional code comments. The C++ standard attributes allow your code to be built with any compiler with the same expected behavior. This helps C++ programmers write clear and effective code that expresses the programmer’s intentions and reduces the number of compiler warnings produced.