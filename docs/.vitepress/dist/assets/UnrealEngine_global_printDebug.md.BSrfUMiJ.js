import{_ as i,c as s,o as a,a4 as t}from"./chunks/framework.bQ0x2aEl.js";const c=JSON.parse('{"title":"Print Debug in UE4","description":"","frontmatter":{},"headers":[],"relativePath":"UnrealEngine/global/printDebug.md","filePath":"UnrealEngine/global/printDebug.md","lastUpdated":1712845610000}'),e={name:"UnrealEngine/global/printDebug.md"},n=t(`<h1 id="print-debug-in-ue4" tabindex="-1">Print Debug in UE4 <a class="header-anchor" href="#print-debug-in-ue4" aria-label="Permalink to &quot;Print Debug in UE4&quot;">​</a></h1><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// https://wiki.unrealengine.com/Logs,_Printing_Messages_To_Yourself_During_Runtime#Related_Tutorial</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">GEngine</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AddOnScreenDebugMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::White, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TEXT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;This message will appear on the screen!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span></code></pre></div><h1 id="writing-logs-in-unreal-engine" tabindex="-1">Writing Logs in Unreal Engine <a class="header-anchor" href="#writing-logs-in-unreal-engine" aria-label="Permalink to &quot;Writing Logs in Unreal Engine&quot;">​</a></h1><h1 id="logging-using-ue-log" tabindex="-1">Logging using UE_LOG <a class="header-anchor" href="#logging-using-ue-log" aria-label="Permalink to &quot;Logging using UE_LOG&quot;">​</a></h1><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">UE_LOG</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(LogTemp, Warning, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TEXT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Warning Text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span></code></pre></div><h1 id="formatting-examples-quick-reference" tabindex="-1">Formatting Examples Quick Reference <a class="header-anchor" href="#formatting-examples-quick-reference" aria-label="Permalink to &quot;Formatting Examples Quick Reference&quot;">​</a></h1><h2 id="logging-an-fstring" tabindex="-1">Logging an FString <a class="header-anchor" href="#logging-an-fstring" aria-label="Permalink to &quot;Logging an FString&quot;">​</a></h2><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">UE_LOG</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(LogTemp, Warning, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TEXT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;The Actor&#39;s name is </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">YourActor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span></code></pre></div><h2 id="logging-a-bool" tabindex="-1">Logging a Bool <a class="header-anchor" href="#logging-a-bool" aria-label="Permalink to &quot;Logging a Bool&quot;">​</a></h2><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">UE_LOG</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(LogTemp, Warning, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TEXT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;The boolean value is </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), ( bYourBool </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TEXT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;true&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TEXT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;false&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) ));</span></span></code></pre></div><h2 id="logging-an-integer" tabindex="-1">Logging an Integer <a class="header-anchor" href="#logging-an-integer" aria-label="Permalink to &quot;Logging an Integer&quot;">​</a></h2><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">UE_LOG</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(LogTemp, Warning, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TEXT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;The integer value is: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), YourInteger);</span></span></code></pre></div><h2 id="logging-a-float" tabindex="-1">Logging a Float <a class="header-anchor" href="#logging-a-float" aria-label="Permalink to &quot;Logging a Float&quot;">​</a></h2><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">UE_LOG</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(LogTemp, Warning, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TEXT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;The float value is: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), YourFloat);</span></span></code></pre></div><h2 id="logging-an-fvector" tabindex="-1">Logging an FVector <a class="header-anchor" href="#logging-an-fvector" aria-label="Permalink to &quot;Logging an FVector&quot;">​</a></h2><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">UE_LOG</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(LogTemp, Warning, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TEXT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;The vector value is: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">YourVector.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ToString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span></code></pre></div><h2 id="logging-with-multiple-specifiers" tabindex="-1">Logging with Multiple Specifiers <a class="header-anchor" href="#logging-with-multiple-specifiers" aria-label="Permalink to &quot;Logging with Multiple Specifiers&quot;">​</a></h2><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">UE_LOG</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(LogTemp, Warning, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TEXT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Current values are: vector </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">, float </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">, and integer </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span></code></pre></div><h1 id="logging-using-ue-logfmt" tabindex="-1">Logging using UE_LOGFMT <a class="header-anchor" href="#logging-using-ue-logfmt" aria-label="Permalink to &quot;Logging using UE_LOGFMT&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This macro is introduced with Unreal Engine 5.2 and may not be available in earlier revisions of the engine. In order to utilize UE_LOGFMT you will need to #include &quot;Logging/StructuredLog.h&quot; either in your current file or in a linked file.</p></div><p>Experienced Unreal Engine developers will be familiar with the UE_LOG macro, and in particular some of its quirks.</p><p>UE_LOG is extremely verbose, requiring the developer to constantly wrap log text in the TEXT macro. UE_LOG is also incapable of printing basic types, such as Booleans, or FStrings, Unreal&#39;s standard String type. UE_LOG requires awareness of types when printing different variables such as float, integer, booleans, strings.</p><p>The new UE_LOGFMT macro helps to alleviate many of these issues. At its most simple, UE_LOGFMT can be utilized in the following way:</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">UE_LOGFMT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(LogTemp, Log, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;This message will print to my log&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>When printing variables to log, UE_LOGFMT provides a cleaner and more consistent syntax. Like so:</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FString</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SomeName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">int32 Value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 999</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">UE_LOGFMT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(LogTemp, Log, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Printing my Name {0} with Value {1}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, Name, Value);</span></span></code></pre></div><p>UE_LOGFMT accepts parameters in two ways:</p><h2 id="positional-parameters" tabindex="-1">Positional Parameters <a class="header-anchor" href="#positional-parameters" aria-label="Permalink to &quot;Positional Parameters&quot;">​</a></h2><p>The field values must exactly match the fields referenced by the log statement.</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">UE_LOGFMT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(LogCore, Warning, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Loading &#39;{0}&#39; failed with error {1}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, Package</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), ErrorCode);</span></span></code></pre></div><p>In this example, the first variable encountered in the log statement ({0}) is replaced by the value of Package-&gt;GetName(). The second variable ({1}) is replaced by ErrorCode.</p><p>The ordering of Package-&gt;GetName and ErrorCode in this example is implicitly important to deducing the values replaced in the log statement.</p><h2 id="named-parameters" tabindex="-1">Named Parameters <a class="header-anchor" href="#named-parameters" aria-label="Permalink to &quot;Named Parameters&quot;">​</a></h2><p>The fields must contain every field referenced by Format. Order is irrelevant and extra fields are permitted.</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">UE_LOGFMT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(LogCore, Warning, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Loading &#39;{Name}&#39; failed with error {Error}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ErrorCode), (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, Package</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()), (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Flags&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, LoadFlags));</span></span></code></pre></div><p>In this example, the first variable encountered in the log statement ({Name}) is replaced by the value bundled with the (&quot;Name&quot;, ...) identifier. The second variable ({Error}) is replaced by the value bundled with the (&quot;Error&quot;, ...) identifier.</p><p>The following table lists all available verbosity levels, from lowest verbosity to highest:</p><table><thead><tr><th>Verbosity Level</th><th style="text-align:center;">Printed in Console?</th><th style="text-align:center;">Printed in Editor&#39;s Log?</th><th style="text-align:right;">Notes</th></tr></thead><tbody><tr><td>Fatal</td><td style="text-align:center;">Yes</td><td style="text-align:center;">N/A</td><td style="text-align:right;">Crashes the session, even if logging is disabled</td></tr><tr><td>Error</td><td style="text-align:center;">Yes</td><td style="text-align:center;">Yes</td><td style="text-align:right;">Log text is coloured red</td></tr><tr><td>Warning</td><td style="text-align:center;">Yes</td><td style="text-align:center;">Yes</td><td style="text-align:right;">Log text is coloured yellow</td></tr><tr><td>Display</td><td style="text-align:center;">Yes</td><td style="text-align:center;">Yes</td><td style="text-align:right;">Log text is coloured grey</td></tr><tr><td>Log</td><td style="text-align:center;">No</td><td style="text-align:center;">Yes</td><td style="text-align:right;">Log text is coloured grey</td></tr><tr><td>Verbose</td><td style="text-align:center;">No</td><td style="text-align:center;">No</td><td style="text-align:right;"></td></tr><tr><td>VeryVerbose</td><td style="text-align:center;">No</td><td style="text-align:center;">No</td><td style="text-align:right;"></td></tr></tbody></table>`,38),l=[n];function h(p,r,g,k,o,d){return a(),s("div",null,l)}const u=i(e,[["render",h]]);export{c as __pageData,u as default};