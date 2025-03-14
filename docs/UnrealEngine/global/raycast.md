# Draw Raycast

```cpp
    FHitResult HitResult;
    FCollisionQueryParams CollisionParams;
    CollisionParams.AddIgnoredActor(this); // Ignore self

    // Perform the raycast
    bool bHit = GetWorld()->LineTraceSingleByChannel(
        HitResult, 
        Start, 
        End, 
        ECC_Visibility, 
        CollisionParams
    );

    // Debug: Draw the ray in the world
    DrawDebugLine(GetWorld(), Start, End, FColor::Red, false, 2.0f, 0, 1.0f);

    if (bHit)
    {
        // Output the name of the hit object
        UE_LOG(LogTemp, Warning, TEXT("Hit: %s"), *HitResult.GetActor()->GetName());
    }
```