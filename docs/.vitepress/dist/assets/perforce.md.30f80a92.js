import{_ as s,c as e,o as a,N as t}from"./chunks/framework.0799945b.js";const C=JSON.parse('{"title":"Sync your files :","description":"","frontmatter":{},"headers":[],"relativePath":"perforce.md"}'),o={name:"perforce.md"},n=t('<h1 id="sync-your-files" tabindex="-1">Sync your files : <a class="header-anchor" href="#sync-your-files" aria-label="Permalink to &quot;Sync your files :&quot;">​</a></h1><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">p4</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sync</span></span></code></pre></div><h1 id="sync-your-files-to-the-older-version" tabindex="-1">Sync your files to the older version : <a class="header-anchor" href="#sync-your-files-to-the-older-version" aria-label="Permalink to &quot;Sync your files to the older version :&quot;">​</a></h1><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">p4</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sync</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@n</span></span></code></pre></div><h1 id="sync-files-to-the-latest-revision-on-the-repository" tabindex="-1">Sync files to the latest revision on the repository : <a class="header-anchor" href="#sync-files-to-the-latest-revision-on-the-repository" aria-label="Permalink to &quot;Sync files to the latest revision on the repository :&quot;">​</a></h1><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">p4</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sync</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@n+</span><span style="color:#F78C6C;">1</span></span></code></pre></div><h1 id="set-p4-ignore" tabindex="-1">Set P4 Ignore : <a class="header-anchor" href="#set-p4-ignore" aria-label="Permalink to &quot;Set P4 Ignore :&quot;">​</a></h1><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">p4</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">p4ignore=_filename.ext_</span></span></code></pre></div><h1 id="open-all-the-files-for-edit" tabindex="-1">Open all the files for edit : <a class="header-anchor" href="#open-all-the-files-for-edit" aria-label="Permalink to &quot;Open all the files for edit :&quot;">​</a></h1><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">p4</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">edit</span></span></code></pre></div><h1 id="accept-the-changes-that-you-have-made" tabindex="-1">Accept the changes that you have made : <a class="header-anchor" href="#accept-the-changes-that-you-have-made" aria-label="Permalink to &quot;Accept the changes that you have made :&quot;">​</a></h1><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">p4</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">resolve</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-ay</span></span></code></pre></div><h1 id="submit-the-changes" tabindex="-1">Submit the changes : <a class="header-anchor" href="#submit-the-changes" aria-label="Permalink to &quot;Submit the changes :&quot;">​</a></h1><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">p4</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">submit</span></span></code></pre></div>',14),l=[n];function p(c,r,i,h,d,y){return a(),e("div",null,l)}const g=s(o,[["render",p]]);export{C as __pageData,g as default};