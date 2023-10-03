# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and Package-lock.json to th container
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the reset of the application code to the container
COPY . .

# Expos a port that the application will listen on
EXPOSE 3000


# Define the commant to start the application 
CMD ["npm", "start"
