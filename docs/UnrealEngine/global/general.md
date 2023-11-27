## Usefull Key words
### Pawns
- Game avatars (not necessarily humanoid) inherited from the Actor. Managed by a player or an AI.
### Character
- A game character (humanoid) inherited from the Pioneer Actor. Includes collisions, control adjustments, etc.
### PlayerController
- Converts player inputs into game activities. Can control the pawn or character. 
### AIController
controls the Pawns representing the game characters (NPC).
### GameMode
- Defines the rules of the game.
### GameStates
- Contains information about the state of the game client (game account, number of bots, etc.).
### PlayerStates
- Contains information about the status of the player or bot (nickname, health, etc.).

## Find object by type
```c++
for (TObjectIterator<UMyObject> It; It; ++It)
{
    UMyObject* myObject = *It;
    // ...
}
```

## Clone Actor
```c++
AMyActor* CreateCloneOfMyActor(AMyActor* ExistingActor, FVector SpawnLocation, FRotator SpawnRotation)
{
    UWorld* world = ExistingActor->GetWorld();
    FActorSpawnParameters spawnParams;
    spawnParams.Template = ExistingActor;
    world->SpawnActor<AMyActor>(ExistingActor->GetClass(), SpawnLocation, SpawnRotation, spawnParams);
}
```

## Destroy object
```c++
MyActor->Destroy(); // Destroy instantly
MyActor->SetLifeSpan(1); // Destroy with 1 sec of delay
```

## Activation
```c++
MyActor->SetActorHiddenInGame(true);    // Hide visible components
MyActor->SetActorEnableCollision(false);    // Unable components collision
MyActor->SetActorTickEnabled(false);    // Unable tick
```

## Actor tags
```c++
MyActor.Tags.AddUnique(TEXT("MyTag"));
// Check if an actor get this tag
if (MyActor->ActorHasTag(FName(TEXT("MyTag"))));
{
    // ...
}
if (MyGameObject.CompareTag("MyTag"))
{
    // ...
}
```