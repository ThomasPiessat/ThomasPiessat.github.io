import{_ as a,c as i,o as s,a4 as e}from"./chunks/framework.bQ0x2aEl.js";const u=JSON.parse('{"title":"Importing an external Git repository","description":"","frontmatter":{},"headers":[],"relativePath":"versionning/git.md","filePath":"versionning/git.md","lastUpdated":1712236866000}'),t={name:"versionning/git.md"},h=e('<h1 id="importing-an-external-git-repository" tabindex="-1">Importing an external Git repository <a class="header-anchor" href="#importing-an-external-git-repository" aria-label="Permalink to &quot;Importing an external Git repository&quot;">​</a></h1><h2 id="clone-via-https" tabindex="-1">Clone via HTTPS : <a class="header-anchor" href="#clone-via-https" aria-label="Permalink to &quot;Clone via HTTPS :&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://gitlab.com/gitlab-tests/sample-project.git&#39;</span></span></code></pre></div><h2 id="clone-via-ssh" tabindex="-1">Clone via SSH : <a class="header-anchor" href="#clone-via-ssh" aria-label="Permalink to &quot;Clone via SSH :&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git@gitlab.com:gitlab-org/gitlab.git</span></span></code></pre></div><h2 id="download-the-latest-changes-in-the-project" tabindex="-1">Download the latest changes in the project : <a class="header-anchor" href="#download-the-latest-changes-in-the-project" aria-label="Permalink to &quot;Download the latest changes in the project :&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> _REMOTE_</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> _name-of-branch_</span></span></code></pre></div><h2 id="create-a-branch" tabindex="-1">Create a branch : <a class="header-anchor" href="#create-a-branch" aria-label="Permalink to &quot;Create a branch :&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> _branch-name_</span></span></code></pre></div><h2 id="viewing-branches" tabindex="-1">Viewing branches : <a class="header-anchor" href="#viewing-branches" aria-label="Permalink to &quot;Viewing branches :&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> or</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --list</span></span></code></pre></div><h2 id="git-checkout" tabindex="-1">Git checkout : <a class="header-anchor" href="#git-checkout" aria-label="Permalink to &quot;Git checkout :&quot;">​</a></h2><p>This command is used to switch from one branch to another</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> _name-of-branch_</span></span></code></pre></div><h2 id="come-back-to-an-older-commit" tabindex="-1">Come Back to an older Commit : <a class="header-anchor" href="#come-back-to-an-older-commit" aria-label="Permalink to &quot;Come Back to an older Commit :&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> _commit_hash_</span></span></code></pre></div><h2 id="deleting-a-branch" tabindex="-1">Deleting a branch : <a class="header-anchor" href="#deleting-a-branch" aria-label="Permalink to &quot;Deleting a branch :&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> _branch-name_</span></span></code></pre></div><h2 id="rename-a-local-git-branch" tabindex="-1">Rename a local Git branch : <a class="header-anchor" href="#rename-a-local-git-branch" aria-label="Permalink to &quot;Rename a local Git branch :&quot;">​</a></h2><p>Select the Git branch you want to rename</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> old-name</span></span></code></pre></div><p>Now perform the actual rename for the local Git branch.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new-name”.</span></span></code></pre></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2><h1 id="config" tabindex="-1">Config <a class="header-anchor" href="#config" aria-label="Permalink to &quot;Config&quot;">​</a></h1><h2 id="list-see-all-configuration" tabindex="-1">List/see all configuration : <a class="header-anchor" href="#list-see-all-configuration" aria-label="Permalink to &quot;List/see all configuration :&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --list</span></span></code></pre></div><h2 id="check-user-name" tabindex="-1">Check user name : <a class="header-anchor" href="#check-user-name" aria-label="Permalink to &quot;Check user name :&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user.name</span></span></code></pre></div><h2 id="set-user-name" tabindex="-1">Set user name : <a class="header-anchor" href="#set-user-name" aria-label="Permalink to &quot;Set user name :&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user.name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;your_name&quot;</span></span></code></pre></div><h2 id="check-your-email" tabindex="-1">Check your email : <a class="header-anchor" href="#check-your-email" aria-label="Permalink to &quot;Check your email :&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user.email</span></span></code></pre></div><h2 id="set-change-your-email" tabindex="-1">Set/change your email : <a class="header-anchor" href="#set-change-your-email" aria-label="Permalink to &quot;Set/change your email :&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user.email</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;your@email.com&quot;</span></span></code></pre></div><h1 id="initializing-a-git-repository" tabindex="-1">Initializing a Git repository <a class="header-anchor" href="#initializing-a-git-repository" aria-label="Permalink to &quot;Initializing a Git repository&quot;">​</a></h1><h2 id="init-project-on-main-branch" tabindex="-1">Init project on main branch : <a class="header-anchor" href="#init-project-on-main-branch" aria-label="Permalink to &quot;Init project on main branch :&quot;">​</a></h2><p>Navigate to the root directory of your project. Initialize the local directory as a Git repository If you’re using Git 2.28.0 or a later version</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span></span></code></pre></div><h2 id="add-the-files-in-your-new-local-repository" tabindex="-1">Add the files in your new local repository : <a class="header-anchor" href="#add-the-files-in-your-new-local-repository" aria-label="Permalink to &quot;Add the files in your new local repository :&quot;">​</a></h2><p>This stages them for the first commit.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span></code></pre></div><h2 id="commit-the-files" tabindex="-1">Commit the files : <a class="header-anchor" href="#commit-the-files" aria-label="Permalink to &quot;Commit the files :&quot;">​</a></h2><p>This stages them for the first commit.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;First commit&quot;</span></span></code></pre></div><h2 id="check-the-state-of-work" tabindex="-1">Check the state of work : <a class="header-anchor" href="#check-the-state-of-work" aria-label="Permalink to &quot;Check the state of work :&quot;">​</a></h2><p>Displays the state of the working directory and the staging area</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span></span></code></pre></div><h2 id="for-adding-untracked-files" tabindex="-1">For adding Untracked files : <a class="header-anchor" href="#for-adding-untracked-files" aria-label="Permalink to &quot;For adding Untracked files :&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h1 id="adding-a-local-repository-to-github" tabindex="-1">Adding a local repository to GitHub : <a class="header-anchor" href="#adding-a-local-repository-to-github" aria-label="Permalink to &quot;Adding a local repository to GitHub :&quot;">​</a></h1><p>Create a new repository on GitHub.com In the Command prompt, add the URL for the remote repository where your local repository will be pushed.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">REMOTE_UR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">L</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h2 id="push-the-changes-in-your-local-repository-to-github-com" tabindex="-1">Push the changes in your local repository to GitHub.com : <a class="header-anchor" href="#push-the-changes-in-your-local-repository-to-github-com" aria-label="Permalink to &quot;Push the changes in your local repository to GitHub.com :&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span></span></code></pre></div>',55),n=[h];function l(o,p,r,c,d,k){return s(),i("div",null,n)}const F=a(t,[["render",l]]);export{u as __pageData,F as default};
