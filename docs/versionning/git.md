# Importing an external Git repository
## Clone via HTTPS :
```sh
  git clone https://gitlab.com/gitlab-tests/sample-project.git'
```

## Clone via SSH :
```sh
  git clone git@gitlab.com:gitlab-org/gitlab.git
```

## Download the latest changes in the project :
```sh
  git pull _REMOTE_ _name-of-branch_
```

## Create a branch :
```sh
  git branch _branch-name_
```

## Viewing branches :
```sh
git branch or git branch --list
```

## Git checkout :
This command is used to switch from one branch to another
```sh
git checkout _name-of-branch_
```

## Come Back to an older Commit :
```sh
git checkout _commit_hash_
```

## Deleting a branch :
```sh
git branch -d _branch-name_
```

##
# Config
## List/see all configuration :
```sh
git config --list
```

## Check user name :
```sh
git config user.name
```

## Set user name :
```sh
git config user.name "your_name"
```

## Check your email :
```sh
git config user.email
```

## Set/change your email :
```sh
git config user.email "your@email.com"
```

# Initializing a Git repository
## Init project on main branch :
Navigate to the root directory of your project.
Initialize the local directory as a Git repository
If you’re using Git 2.28.0 or a later version
```sh
git init -b main
```

## Add the files in your new local repository :
This stages them for the first commit.
```sh
git add .
```

## Commit the files :
This stages them for the first commit.
```sh
git commit -m "First commit"
```

## Check the state of work :
Displays the state of the working directory and the staging area
```sh
git status 
```

## For adding Untracked files :
```sh
git add <file path>
```

# Adding a local repository to GitHub :
Create a new repository on GitHub.com
In the Command prompt, add the URL for the remote repository where your local repository will be pushed.
```sh
git remote add origin <REMOTE_URL>
```
## Push the changes in your local repository to GitHub.com :
```sh
git push origin main
```
