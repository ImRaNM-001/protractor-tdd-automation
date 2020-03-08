# protractor_Learning
My First Protractor Repo for beginner practice:
How to Install Protractor_Instructions.txt
---------------------------------------------------------------------------------

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

10- If any script running issue occurs with message like protractor.ps1 cannot be loaded because running scripts is disabled on this system. This is because The PowerShell execution policy is default set to Restricted. We have to change the PowerShell execution policies to RemoteSigned.

Do the following (must hit a i.e, [A] Yes to All ) :
========================================
Set-ExecutionPolicy RemoteSigned

Execution Policy Change
The execution policy helps protect you from scripts that you do not trust. Changing the execution policy might expose
you to the security risks described in the about_Execution_Policies help topic at
https:/go.microsoft.com/fwlink/?LinkID=135170. Do you want to change the execution policy?
[Y] Yes  [A] Yes to All  [N] No  [L] No to All  [S] Suspend  [?] Help (default is "N"): a


11- Install command for protractor screenshot reporter for Jasmine2	(here we are installing a library and adding code in conf.js file for taking screenshots only, this report generates basic report and separate screenshot file):

npm install protractor-jasmine2-screenshot-reporter --save-dev

[Raghav video: Protractor Beginner Tutorial 10 | How to take screenshots in Protractor,	URL = https://www.youtube.com/watch?v=EX0SmoUfdQ4&t=321s]


12- 4 types of widely used reports in protractor are:

a> protractor-html-reporter-2	
install command: npm i -g protractor-html-reporter-2

[Note: I liked it as it generates rich, decent report and embedded screenshot file for fail spec, hence started using it by adding respective dependencies on 23-Feb-2020.
We have to install other libraries (like in point#13, 14) as well].

b> protractor-jasmine2-screenshot-reporter (generates basic report and separate screenshot file, no richness like a> and d>)	[install command: npm i protractor-jasmine2-screenshot-reporter]

c> jasmine-allure-reporter (or commonly known as Allure report)	[install command: npm i -g jasmine-allure-reporter] and [install command for Allure commandline: npm i -g allure-commandline --save-dev]

d> protractor-beautiful-reporter					[install command: npm i -g protractor-beautiful-reporter]

here, i stands for install and -g means we are installing globally so that other user's in the system can also use it (and not just me)


13- Install command for fs-extra (library that adds file system methods that aren't included in the native fs module and adds promise support to the fs method):
npm i -g fs-extra

14- Install command for jasmine-reporters (collection of javascript jasmine reporter classes that can be used with the JasmineBDD testing framework):
npm i -g jasmine-reporters

15- (For file uploads, need to install path library). Install command for path (which is an exact copy of the NodeJS ’path’ module published to the NPM registry)
npm i -g path

16- Install command for xlsx (library for reading data from excel sheet)
npm i -g xlsx

17- Install command for log4js (library for taking output of log statements)
npm i -g log4js

18- 




