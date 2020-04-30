# WebdriverIOFramework

# To run the framework execute below commands
npm install
npm run test

# To execute specific spec file
npm test -- --spec ./test/login.test.js

# command to generate wdio config file
./node_modules/.bin/wdio config

# generte reports
execute below command on command line
allure genrate && allure open
