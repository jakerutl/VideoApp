# VideoApp

Folders included:
-css
-images
-includes
-js
-node_modules
-prod
-sass

Files included:
-Gruntfile.js
-Index.html
-package.json
-production.js
-production.min.js
-main.js
-style.scss
-style.scss
-style.css.map

This is a straight forward folder structure to start you off in the right direction for your project. It includes tasks such as imagemin, jshint, sass and more. To run these tasks properly I suggest getting familiar with grunt. Grunt basically makes your life easier with coding. There are many different tasks available to help with your needs.
I suggest downloading grunt, a great Youtube channel to get you started is https://www.youtube.com/channel/UC1DUQiZduv_yNZy0O7n_iHA

How to run "imagemin":
  simply go to your terminal and get to this folder, once there type in "grunt imagemin". If you have larger images in you image folder, you should see a new folder created inside the original under the name "image_min". Inside will be a small file size of the same image. I did not include this under the watch task because I did not think it was necessary to have this going all the time.

How to run "Concat":
  Concat is activated under watch. so to activate this you apply the same steps as instructed under "How to run "Watch"".

How to run "Watch"
  The way I have watch set up is so that it'll watch for almost all changes including sass and jshint. To run these tasks, simple go to this folder in your terminal and type in "grunt watch".
  Any changes should appear on the terminal after saving in the application.
