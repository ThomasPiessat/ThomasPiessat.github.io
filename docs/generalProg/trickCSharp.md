# C# Tricks

## Readonly Structs for Immutable Data Types
Readonly structures are ideal for creating immutable data types. This means that once an object is created, it cannot be changed.
```cpp
public readonly struct Point
{
    public double X { get; }
    public double Y { get; }
    
    public Point(double x, double y) => (X, Y) = (x, y);
}
```

## Ref Returns and Locals for Performance Optimization
Ref returns and locals allow methods to return references to variables, instead of the values themselves. This can significantly improve performance for large objects.
```cpp
public ref int Find(int[] numbers, int target)
{
    for (int i = 0; i < numbers.Length; i++)
    {
        if (numbers[i] == target)
            return ref numbers[i];
    }
    throw new IndexOutOfRangeException("Not found");
}
```