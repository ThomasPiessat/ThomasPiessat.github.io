# Variable and Array Initialization

You may choose between =, (), and {}; the following are all correct:
```cpp
int x = 3;
int x(3);
int x{3};
std::string name = "Some Name";
std::string name("Some Name");
std::string name{"Some Name"};
```

Be careful when using a braced **initialization list** {...} on a type with an **std::initializer_list** constructor. A nonempty braced-init-list prefers the std::initializer_list constructor whenever possible. Note that empty braces {} are special, and will call a default constructor if available. To force the non-std::initializer_list constructor, use parentheses instead of braces.

```cpp
std::vector<int> v(100, 1);  // A vector containing 100 items: All 1.
std::vector<int> v{100, 1};  // A vector containing 2 items: 100 and 1.
```

Also, the brace form prevents narrowing of integral types. This can prevent some types of programming errors.
```cpp
int pi(3.14);  // OK -- pi == 3.
int pi{3.14};  // Compile error: narrowing conversion.
```