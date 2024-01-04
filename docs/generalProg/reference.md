# Reference

A reference, like a pointer, stores the address of an object that is located elsewhere in memory. Unlike a pointer, a reference after it is initialized cannot be made to refer to a different object or set to null.

Multiple declarators and initializers may appear in a comma-separated list following a single declaration specifier. For example:

```cpp
int &i;
int &i, &j;
```

## Example
```cpp
// references.cpp
#include <stdio.h>
struct S {
   short i;
};

int main() {
   S  s;   // Declare the object.
   S& SRef = s;   // Declare and initialize the reference.
   s.i = 3;

   printf_s("%d\n", s.i);
   printf_s("%d\n", SRef.i);

   SRef.i = 4;
   printf_s("%d\n", s.i);
   printf_s("%d\n", SRef.i);
}
```

### Output
```cpp
3
3
4
4
```