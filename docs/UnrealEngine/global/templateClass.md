## Template Class

```c++
.h
	
#pragma region COMPONENTS

protected:
	UPROPERTY(VisibleAnywhere, Category = "Components")
		USceneComponent* Root = nullptr;
	UPROPERTY(VisibleAnywhere, Category = "Components")
		USceneComponent* ChildSceneComponent = nullptr;
	UPROPERTY(VisibleAnywhere, Category = "Componentss")
		UStaticMeshComponent* Mesh = nullptr;
	UPROPERTY(VisibleAnywhere, Category = "Components")
		UShapeComponent* Collider = nullptr;

#pragma endregion

	UFUNCTION()
		void OnBeginOverlap(UPrimitiveComponent* OverlapComp, AActor* OtherActor, UPrimitiveComponent* OtherComp, int32 OtherBodyIndex, bool bFromSweep, const FHitResult& SweepResult);

	UFUNCTION()
		void OnHit(UPrimitiveComponent* HitComp, AActor* OtherActor, UPrimitiveComponent* OtherComp, FVector NormalImpulse, const FHitResult& Hit);
```

```c++
.cpp
#include "Components/SceneComponent.h"
#include "Components/StaticMeshComponent.h"
#include "Components/BoxComponent.h"

	Root = CreateDefaultSubobject<USceneComponent>("Root");
	RootComponent = Root;
	ChildSceneComponent = CreateDefaultSubobject<USceneComponent>("ChildSceneComponent");
	ChildSceneComponent->SetupAttachment(Root);
	Mesh = CreateDefaultSubobject<UStaticMeshComponent>("BoxOne");
	Mesh->SetupAttachment(Root);
	Collider = CreateDefaultSubobject<UBoxComponent>("Collider");
	Collider->SetupAttachment(Root);


BeginPlay()
{
	Super::BeginPlay();

	OnComponentBeginOverlap.AddDynamic(this, &MP_MyClass::OnBeginOverlap);
	OnComponentHit.AddDynamic(this, &MP_MyClass::OnHit);
}

void MP_MyClass::OnHit(UPrimitiveComponent* HitComp, AActor* OtherActor, UPrimitiveComponent* OtherComp, FVector NormalImpulse, const FHitResult& Hit)
{

}

void MP_MyClass::OnBeginOverlap(UPrimitiveComponent* OverlapComp, AActor* OtherActor, UPrimitiveComponent* OtherComp, int32 OtherBodyIndex, bool bFromSweep, const FHitResult& SweepResult)
{

}

void MP_MyClass::Raycast()
{
	FHitResult out hit;
	TArray<AActor> toIgnore = TArray<AActor>();
	if (UKismetSystemLibrary::LineTraceSingle(GetWorld(), m_Spear->GetActorLocation(), mousePosition, ETraceTypeQuery::TraceTypeQuery1, true, toIgnore, EDrawDebugTrace::ForOneFrame, outHit, true))
	{
		
	}
}
```