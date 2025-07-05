---
prev:
  text: 'Debug'
  link: '/UnrealEngine/global/debug/debug'
---
# Draw Debug
## Draw Debug String 
DrawDebugString, DrawDebugLine, and other similar functions only work during gameplay — they rely on PlayerControllers and HUDs that don't exist when the editor itself is running 
. That means:

✅ You'll see debug text during Play In Editor (PIE) or Standalone play sessions.

❌ You won’t see DrawDebugString output in the editor viewport, even in construction scripts.
```cpp
FVector TextLocation(WorldPos.X, WorldPos.Y, 50.0f); // Slightly above the ground
float TextDuration = 15.0f;
FString DebugText = FString::Printf(TEXT("THIS IS A DEBUG TEXT"));

DrawDebugString(GetWorld(), TextLocation, DebugText, nullptr, FColor::White, TextDuration, false);
```

## Text Render
If you want debug text visible in the editor viewport, even when not playing:

Attach a ***UTextRenderComponent*** to your actor and update its text dynamically. It's visible in both the editor and runtime, but will appear as 3D world-space text.

```cpp
    UTextRenderComponent* TextComp = NewObject<UTextRenderComponent>(this);
    TextComp->SetText(FText::FromString(Text));
    TextComp->SetWorldSize(50.0f);
    TextComp->SetHorizontalAlignment(EHTA_Center);
    TextComp->SetVerticalAlignment(EVRTA_TextCenter);
    TextComp->SetTextRenderColor(FColor::Yellow);
    TextComp->SetupAttachment(RootComponent);
    TextComp->RegisterComponent();

    FVector LabelOffset(0, 0, 100); // Slightly above the ground
    TextComp->SetWorldLocation(WorldPos + LabelOffset);

    CellLabels.Add(TextComp);
```

## Draw Debug Line
```cpp
float Duration = 15.0f;
DrawDebugLine(World, LastPoint, FirstPoint, FColor::Green, false, Duration, 0, 2.0f);
```