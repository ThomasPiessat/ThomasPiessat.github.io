import{_ as e,c as t,o as a,a4 as o}from"./chunks/framework.bQ0x2aEl.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"UnrealEngine/global/ueptr.md","filePath":"UnrealEngine/global/ueptr.md","lastUpdated":1704752430000}'),s={name:"UnrealEngine/global/ueptr.md"},n=o('<h2 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h2><p>Just want the summary? Here ya go! These assume you&#39;re making gameplay code and not editor plugins:</p><h2 id="✔-use-these-pointer-types" tabindex="-1">✔ Use these pointer types <a class="header-anchor" href="#✔-use-these-pointer-types" aria-label="Permalink to &quot;✔ Use these pointer types&quot;">​</a></h2><ul><li>TSoftObjectPtr: Used for referencing objects which might or might not be loaded via their path. Can point to actors in other levels even if they aren&#39;t loaded. Can be used with Asynchronous loading functions when pointing to assets (like meshes) to load them ad-hoc. Same as the &quot;Soft Object Reference&quot; blueprint variable type.</li><li>TSoftClassPtr: Used for referencing class or blueprint types that might or might not be loaded. Once loaded it will give you a class type that you can create instances from. Can be used with Asynchronous loading functions to load them. Same as the &quot;Soft Class Reference&quot; blueprint variable type.</li><li>TWeakObjectPtr: Used to reference already instantiated objects. Will resolve to null if the object gets destroyed or garbage collected.</li></ul><h2 id="❌-don-t-use-these-pointer-types" tabindex="-1">❌ Don&#39;t use these pointer types <a class="header-anchor" href="#❌-don-t-use-these-pointer-types" aria-label="Permalink to &quot;❌ Don&#39;t use these pointer types&quot;">​</a></h2><ul><li>FSoftObjectPath: Used internally by the other pointer types ☝. Is slow as it doesn&#39;t cache the results. If set in Editor it will point to the UBlueprint class instead of the UBlueprintGeneratedClass, which is usually not what gameplay code wants. Makers of Editor Plugins might want that functionality though.</li><li>FSoftClassPath: Same as FSoftObjectPath but with some helper functions related to loading classes. Mostly a legacy type now.</li><li>FSoftObjectPtr: Non-templated and non-BP exposed version of TSoftObjectPtr.</li></ul><h2 id="weak-vs-soft-pointers" tabindex="-1">Weak vs Soft Pointers <a class="header-anchor" href="#weak-vs-soft-pointers" aria-label="Permalink to &quot;Weak vs Soft Pointers&quot;">​</a></h2><p>A Weak Pointer is created or set to point to an existing UObject that is already instantiated using its GUObjectArray index. The pointer does not need to be a UPROPERTY to know if the object it points to has been garbage collected.</p><p>A Soft Pointer is a string representation of a path for an object or asset that may or may not be loaded. It stores an additional Weak Pointer internally to keep track of the object after it has been queried and found (in non-editor builds).</p><h2 id="soft-pointers" tabindex="-1">Soft Pointers <a class="header-anchor" href="#soft-pointers" aria-label="Permalink to &quot;Soft Pointers&quot;">​</a></h2><p>ℹ For almost all cases you should use either TSoftObjectPtr or TSoftClassPtr, but an explanation of all related classes are below.</p><h3 id="fsoftobjectpath" tabindex="-1">FSoftObjectPath <a class="header-anchor" href="#fsoftobjectpath" aria-label="Permalink to &quot;FSoftObjectPath&quot;">​</a></h3><p>🛑 Don&#39;t create your own FSoftObjectPath variables for gameplay code. They don&#39;t cache the resolved object so every query will search for the object again. They also point to the blueprint class asset (UBlueprint) instead of the generated class (UBlueprintGeneratedClass, &quot;_C&quot; in the path name). UBlueprint’s get stripped out in packaged builds. Use either TSoftObjectPtr or TSoftClassPtr.</p><p>FSoftObjectPath in Instance Details/Class Defaults view. FSoftObjectPath in Instance Details/Class Defaults view. Used internally by all types of Soft Pointers. Soft Object Path variables can be created in blueprints but should only be done for editor utilities where know what you’re doing, don’t want to point to the UBlueprintGeneratedClass class, and don’t need caching.</p><p>If used in blueprints it will only allow picking on-disk assets, not object instances. To point to instances use TSoftObjectPtr.</p><p>It isn&#39;t templated. To restrict selection to a type of asset you can use the MetaClass UProperty metadata (or use TSoftClassPtr instead for that kind of functionality).</p><p>When objects are being resolved it will search for it using hashes, which has a bit of an overhead compared to normal or weak pointers. Extending classes will usually cache them so once resolved it won&#39;t search again.</p><h3 id="fsoftclasspath" tabindex="-1">FSoftClassPath <a class="header-anchor" href="#fsoftclasspath" aria-label="Permalink to &quot;FSoftClassPath&quot;">​</a></h3><p>Same as FSoftObjectPath but with some helper functions related to loading classes. Mostly a legacy type now. Don&#39;t create your own, use TSoftClassPtr instead.</p><h3 id="fsoftobjectptr" tabindex="-1">FSoftObjectPtr <a class="header-anchor" href="#fsoftobjectptr" aria-label="Permalink to &quot;FSoftObjectPtr&quot;">​</a></h3><p>The base class for soft -object and -class pointers. Internally keeps an FSoftObjectPath for finding the object, and a FWeakObjectPtr for caching it after it&#39;s been found.</p><p>Extends TPersistentObjectPtr where a lot of the functionality resides.</p><p>Not a USTRUCT so it can&#39;t be used in Blueprints, only C++.</p><p>Has two extending types, TSoftObjectPtr or TSoftClassPtr, which provide a templated, BP visible way to either point to an Object Instance or an Asset (CDO) respectively. They should be used instead.</p><p>When you call Get() it will call it on the base class which will first check if an internal WeakPtr has been previously cached (in non-PIE sessions), otherwise it will call FSoftObjectPath.ResolveObject to find the object.</p><h3 id="tsoftobjectptr" tabindex="-1">TSoftObjectPtr <a class="header-anchor" href="#tsoftobjectptr" aria-label="Permalink to &quot;TSoftObjectPtr&quot;">​</a></h3><p>TSoftObjectPtr in Instance Details/Class Defaults view. TSoftObjectPtr in Instance Details/Class Defaults view. Creating a Soft Object Pointer in Blueprint. Creating a Soft Object Pointer in Blueprint. Templatized wrapper of the generic FSoftObjectPtr. Can be used in Blueprints.</p><p>Can be used to point to anything with a path name. Best used to point to things that might not be loaded, whether that’s on-disk assets or objects in any level.</p><p>💡 Because it can point to an object in any level that might not be loaded already it’s very powerful for cross-level communications, not used as much as it should be in my opinion.</p><p>Actor is in another level that isn&#39;t currently loaded, but property still retains its path value. Actor is in another level that isn&#39;t currently loaded, but property still retains its path value. If you want to reference an already instantiated actor use TWeakObjectPtr instead.</p><p>The default value in the editor can&#39;t be set to Blueprint types (use TSoftClassPtr instead). It can point to Data Assets though.</p><p>The value can be set either in the Instance Details window by selecting an actor that&#39;s loaded, or even in the Class Defaults for any actor in the currently opened map.</p><p>When Get() is called when the pointed-to object isn&#39;t loaded, it will return nullptr. Once loaded it will return the actor with a matching full name and cache it for further queries.</p><p>TSoftClassPtr TSoftClassPtr in Instance Details/Class Defaults view. TSoftClassPtr in Instance Details/Class Defaults view. Creating a Soft Class Pointer in Blueprint. Creating a Soft Class Pointer in Blueprint. Templatized wrapper around FSoftObjectPtr that works like a TSubclassOf, it can be used in UProperties for blueprint subclasses.</p><p>Use it to point to Blueprint types (UBlueprintGeneratedClass) that you can query if they&#39;re loaded or not. Can also be used to load the Class asynchronously (or synchronously, although that introduces hitches).</p><p>Doesn&#39;t work for DataAssets though as they shouldn&#39;t be instantiated, use TSoftObjectPtr for those instead.</p><h2 id="weak-pointers" tabindex="-1">Weak Pointers <a class="header-anchor" href="#weak-pointers" aria-label="Permalink to &quot;Weak Pointers&quot;">​</a></h2><p>Weak Pointers don&#39;t store path names like Soft Pointers do, they only reference objects that have already been instantiated.</p><p>Under The Hood Weak pointers only store two things: int32 ObjectIndex and int32 ObjectSerialNumber.</p><p>When you call Get it will first get the object from GUObjectArray using ObjectIndex, if it exists.</p><p>&quot;But ObjectIndex is only 32 bit, doesn&#39;t it easily run out of numbers if you keep spawning and destroying actors&quot; you ask? Excellent question, yes it would in theory, but since you&#39;ll only have a few hundred thousand objects alive at most at any time, those indices get reused.</p><p>Because of that we have ObjectSerialNumber to make sure it truly is the object we wanted in case of Index reuse. ObjectSerialNumber is ONLY assigned the first time a weak pointer is pointed at a UObject, otherwise it&#39;s zero. It&#39;s a threadsafe incremental int32 counter.</p><p>&quot;What happens when we run out of those serial numbers&quot; you ask? That&#39;s where the game fatally asserts (i.e. crashes). That means you&#39;ll be able to make new weak pointers to a maximum of 2,147,483,647 unique UObjects before you run out of serial numbers. It should be way more than enough for most use cases, but take it into account for very long running processes or weird uses of weak pointers.</p><p>After comparing the serial numbers it finally checks if the UObject IsValid(), if it isn&#39;t (in case of PendingKill or IsGarbage) return null, otherwise return the object. Because of this you can be sure that dereferencing a weak pointer will always return a valid UObject or nullptr if not.</p><p>All Delegates keep a reference to their UObjects via a Weak Pointer when using the AddUObject/BindUObject functions, so you can safely subscribe to delegates without worrying about unsubscribing during destruction. This is opposed to using AddRaw/BindRaw functions, which use unmanaged C++ pointers so treat those carefully and try not to use them at all when dealing with UObjects.</p><p>Summary To summarize, Weak Pointers are an excellent and safe way of pointing to UObjects with some minor overhead when dereferencing them. Not so weak after all! Because they handle all the internals of fetching and validating the UObjects they also don&#39;t have to be a UPROPERTY.</p><p>FWeakObjectPtr A weak pointer to a UObject in memory. Isn&#39;t a USTRUCT so can&#39;t be used in Blueprints, C++ only.</p><p>It&#39;s a base class for TWeakObjectPtr, which you should use instead.</p><p>TWeakObjectPtr</p><p>TWeakObjectPtr in Instance Details view. TWeakObjectPtr in Instance Details view. Templated version of the generic FWeakObjectPtr. Can be used in Blueprints but must be declared in C++.</p><p>Many people might not know this but the value can be set in the Instance Details view (not Class Defaults), even though it doesn&#39;t use string representation of the object internally.</p><p>Because it doesn’t use string paths it skips the overhead of looking for the asset, but it can only be set to already instantiated objects.</p><p>In C++ you can point to any instantiated UObject, no matter which level it’s in, so long as it’s already loaded.</p>',53),i=[n];function r(l,h,c,u,d,p){return a(),t("div",null,i)}const y=e(s,[["render",r]]);export{b as __pageData,y as default};
