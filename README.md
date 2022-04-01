# docker-dev
A quick way to setup mongodb,nodejs,nginx docker-dev environment (can be adapted)

## Changes
Only a few simple changes need to be made to the files here to start this. It is also important that if you are installing new modules that you must delete the docker-volumes and also rebuild the image, docker volumes won't automatically install packages after performing `npm install <your_package`. Kapeesh?

