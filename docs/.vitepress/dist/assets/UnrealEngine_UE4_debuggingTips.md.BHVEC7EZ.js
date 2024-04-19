import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.bQ0x2aEl.js";const F=JSON.parse('{"title":"Debugging Tips","description":"","frontmatter":{},"headers":[],"relativePath":"UnrealEngine/UE4/debuggingTips.md","filePath":"UnrealEngine/UE4/debuggingTips.md","lastUpdated":1704378734000}'),e={name:"UnrealEngine/UE4/debuggingTips.md"},n=t(`<h1 id="debugging-tips" tabindex="-1">Debugging Tips <a class="header-anchor" href="#debugging-tips" aria-label="Permalink to &quot;Debugging Tips&quot;">​</a></h1><h2 id="compile-all-blueprints" tabindex="-1">Compile all blueprints <a class="header-anchor" href="#compile-all-blueprints" aria-label="Permalink to &quot;Compile all blueprints&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Engine\\Binaries\\Win64\\UnrealEditor-cmd.exe -run=CompileAllBlueprints&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> this</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> print</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> text</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&gt;F:\\MyLog.txt | type F:\\MyLog.txt&quot;</span></span></code></pre></div><h2 id="shadow-cache-stats" tabindex="-1">Shadow cache stats <a class="header-anchor" href="#shadow-cache-stats" aria-label="Permalink to &quot;Shadow cache stats&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> r.ShaderPrint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">r.Shadow.VirtualShowStats</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span></span></code></pre></div><h2 id="activate-the-vsync" tabindex="-1">Activate the VSYNC <a class="header-anchor" href="#activate-the-vsync" aria-label="Permalink to &quot;Activate the VSYNC&quot;">​</a></h2><p>Prevents tearing of the image but costs fps and causes input latency.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">r.VSync</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span></code></pre></div><h2 id="enabling-dynamic-resolution" tabindex="-1">Enabling Dynamic Resolution <a class="header-anchor" href="#enabling-dynamic-resolution" aria-label="Permalink to &quot;Enabling Dynamic Resolution&quot;">​</a></h2><p><a href="https://docs.unrealengine.com/4.27/en-US/RenderingAndGraphics/DynamicResolution/" target="_blank" rel="noreferrer">https://docs.unrealengine.com/4.27/en-US/RenderingAndGraphics/DynamicResolution/</a> Dynamic Resolution adjusts the primary screen percentage according to the previous frames&#39; GPU workload. The resolution adjusts (as needed) based on a heuristic, for example, when there are too many objects on the screen, or if there is an expensive effect that suddenly enters the frame. The GPU rendering time will increase, and the resolution of the screen will be lowered to maintain the targeted frame rate. At Runtime</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">GEngine-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetDynamicResolutionStatus</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SetEnabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>Controlling Dynamic Resolution With Operation Mode</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">r.DynamicRes.OperationMode</span></span></code></pre></div><h2 id="disable-wpo-invalidating-shadow-cache" tabindex="-1">Disable WPO invalidating shadow cache <a class="header-anchor" href="#disable-wpo-invalidating-shadow-cache" aria-label="Permalink to &quot;Disable WPO invalidating shadow cache&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Global:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> r.Shadow.Virtual.Cache.MaxMaterialPositionInvalidationRange</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Per</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> foliage</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> instance:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Foliage</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Instance</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Settings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> World</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Position</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Offset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Disable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Distance</span></span></code></pre></div><h2 id="draw-mesh-bounds-causing-cache-invalidations" tabindex="-1">Draw mesh bounds causing cache invalidations <a class="header-anchor" href="#draw-mesh-bounds-causing-cache-invalidations" aria-label="Permalink to &quot;Draw mesh bounds causing cache invalidations&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> r.Shadow.Virtual.Cache.DeformableMeshesInvalidate</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span></code></pre></div><h2 id="handy-visualization-modes" tabindex="-1">Handy visualization modes <a class="header-anchor" href="#handy-visualization-modes" aria-label="Permalink to &quot;Handy visualization modes&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ViewMode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Nanite</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Visualization</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Evaluate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> WPO</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ViewMode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Virtual</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Shadow</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Cached</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Page</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Show</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Visualize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Draw</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Only</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Geometry</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Causing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> VSM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Invalidation</span></span></code></pre></div>`,19),h=[n];function l(p,k,d,r,o,g){return a(),i("div",null,h)}const y=s(e,[["render",l]]);export{F as __pageData,y as default};