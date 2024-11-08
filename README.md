# git-workflow-event

This repository compliments the Codecademy Boston Club Collaborative Git Skills Workshop event.

---

## Event Instructions

This set of instructions should help attendees understand the various `git` commands they must use to:

- Clone the repository
- View local branches
- Pull updates from remote origin branches
- Create your own branches
- View local changes staged/ not staged
- Commit staged changes

### How to Clone the Repo

There are multiple ways to clone a repository, including:

- GitHub Desktop
- Your IDE
- Command Line

If you're familiar with one already and prefer it, go ahead!

Otherwise, to clone this repository using the command line, follow these instructions:

- Navigate to the folder/ directory you wish to clone the repo
  - `cd <directory>` to "change directory"
  - `cd ..` to "go back/ up" one directory
- Once there, use the following command to clone this repo:
  - `git clone https://github.com/nedwardzz/git-workflow-event.git`
- Once cloned, use the following command to enter your local copy of the project
  - `cd git-workflow-event`

### How to View Branches

By default, you'll begin on our `main` branch.

To "check out" another branch, use the command `git checkout <branch name>`

- For example: `git checkout develop` or `git checkout stage`

There are currently 3 main branches within this repository:

1. `main`
   - Our production environment
   - Requires peer approval to merge
   - Requires code owner approval to merge
2. `stage`
   - Our production replica environment
   - Also sometimes used as QA/ UAT testing environment
   - Requires peer approval to merge
3. `develop`
   - Our development environment
   - Used to test new features and fixes
   - May have many untested/ not ready commits
   - May merge at will ( developer agility - quicker feedback loops )

Begin by checking out the `develop` branch as this will be our starting point.

### How to Pull Updates from Remote Origin

Use the command `git pull` to update your local branch with the latest changes from it's _remote origin_.

Whenever there are changes made to the remote repository within any of these branches, your local copy of that branch is then behind it's remote origin.

For each branch you check out, you're really creating a local instance of the remote branch.

This means that if you accidentally delete your copy of `main` or `develop`, you can easily check it back out and retrieve the most recent copy of either from the remote origin.

Note, however, that any local code changes you had saved in any branch you delete will be lost.

### How to Create a New Branch

Once you've checked out the `develop` branch, use the command `git checkout -b <new branch name>`

- For example: `git checkout -b "feat/TASK-1234`

This command with the `-b` flag will create a new branch and check it out at the same time.

Once you've created a new branch off of develop and checked it out, you're ready to introduce your own changes!

### How to View and Stage Local Changes

Once you've made changes to any of the code files in the project and have your local branch in a state that you wish to save/ capture, you're ready to create a _commit_!

Before we do this, first, let's quickly review working and staging directories and the difference between the two

- The _working directory_ is where we are now with our changes made and saved
- The _staging directory_ is where we must save our files ( "stage" ) to for them to be committed to the remote repository

To view what changes may or may not exist in your staging directory, use the command `git status`

- Assets which are red either are new or have new changes within them not yet staged
- Assets which are green have been staged are ready to be committed

To stage changes, use one the following commands:

1. `git add <file path/name>` to add a specific file
2. `git add .` to add all changes not yet staged

### How to Commit and Push Local Changes to Remote Repository

To commit all staged changes, use the command `git commit -m "message"` where message is a description of the changes you're committing.

After committing, you can push these changes to a remote copy of your new branch using the command `git push origin <new branch name>`

If the operation is successful, in your command line, you'll see a URL you can use to quickly access GitHub to open a PR!

---
