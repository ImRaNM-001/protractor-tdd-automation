# protractor_Learning
My First Protractor Repo for beginner practice:

How to Install Protractor_Instructions.txt

1- npm install -g protractor		[advisable to run from different path like: C:\testAutomationPractice\installationArea\Protractor but always saves the installed files in default windows directory C:\Users\imz_x\AppData\Roaming\npm\node_modules\protractor]

2- check protractor version as protractor --version

3- webdriver-manager update	[advisable to run from different path like: C:\testAutomationPractice\installationArea\Protractor]

3- webdriver-manager start (do it from cmd not from vscode terminal)		[not required to run if directConnect: true, in package.json file]

4- npm init (this command is used to create package.json file for the 1st time, while creation enter below data):  		[advisable to run from different path like: C:\testAutomationPractice\installationArea\Protractor because it will create node_modules folder which will conflict with .git push because of its large size (12MB approx) ]

package name: (protractor_learning) test
version: (1.0.0)
description: to_learn_protractor
entry point: (index.js)
test command:
git repository:
keywords:
author: Imran
license: (ISC)
About to write to C:\Users\Imran-A.Mazumder\OneDrive\Documents\REITERATE_PRACTICE_AUTOMATION\jS_Workspace\protractor_Learning\package.json:

5- open package.json (post its creation) and add dependencies as below:
[Note: in VsCode it takes automatically by ctrl+space]

 "dependencies": {
    "protractor": "^5.4.3",
    "jasmine": "3.5.0"
  },

6- run npm install from same location (this command is similar to mvn clean install, which is used to build the project once again/update all dependencies)		[advisable to run from different path like: C:\testAutomationPractice\installationArea\Protractor because it will create node_modules folder which will conflict with .git push because of its large size (12MB approx) ]

7- create folderStructure manually (see git repo Or, VsCode folder or more)

8- Create 2 files conf.js and spec_Ex1.js, override them by copy pasting code from location C:\Users\imz_x\AppData\Roaming\npm\node_modules\protractor\example

9- Run the tests using the command protractor conf.js

10- 




