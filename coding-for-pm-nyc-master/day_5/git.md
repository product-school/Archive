# Git

Git is a tool for version control, meaning, allowing people to track changes in their code. This allows...
* Collaboration
* Logging/Archiving/Undoing of code.
* Reverting to old versions
* Isolation of code--you can work on two features without cross contamination, and without contaminating the the code others are using.

### Commands

* `git status` - See the status of your git commands.
* `git add` - Add files to be commited.
* `git commit -m <message>` - Makes a commit with the entered message.
* `git log` - Display list of commits with their messages, newest first.
* `git checkout` - Specify a file to undo changes since the last commit, or rever the repository to the state of a specified commit.

## Github

Github is not inherently connected to git, although they were both created by the same person. Github is a website where git repositories can be stored and shared, allowing for collaboration on projects. A similar service is BitBucket.

### Commands

* `git remote -v` - Show all remote repositories (such as those on Github)
* `git remote add <name> <address>` - Add a remote with the given name and at the given address.
* `git pull <remote name> <branch>` - Applies commits from the branch at that remote repository to your current branch.
* `git push <remote name> <branch>` - Updates the given branch at the remote repository to match your branch of that name.
* 

