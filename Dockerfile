# pull a base image which gives all required tools and libraries
FROM node:20.18.1

# create a folder where the app code will be stored
WORKDIR /app

# copy the source code from HOST machine to Container
COPY . .

# install the all the packages or dependencies required
RUN npm install

# run the application
ENTRYPOINT ["node"]
CMD ["index.js"]