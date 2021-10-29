I just got tired of doing this all the time so i decided to make a kind of universal starting point

This project uses docker and docker-compose to run the following:

- A Nodejs development server with typescript (with working hot-reload)
- A Vuejs development server (with working hot-reload)
- A Mongo database
- A Redis database
- A Mongo-Express container to check mongo
- An Nginx proxy to connect everything togheter


There may be some dependencies to remove, but it should work fine.

To change configurations and ports, edit the docker-compose.yml file.

*Note: If you're going to change the ports for the apps set on the docker-compose.yml file, you'll have to change them on the nginx/nginx.conf file as well (i will try to automate this without that terrible envsubst solution on a later date).

To run the project, go to the root folder and run the command `docker-compose up`, assuming you already have docker setup on your machine.
