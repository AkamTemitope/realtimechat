<img src="https://i.postimg.cc/qvZnPc9v/rtc.png" alt="RTC" style="width: 40px;"/> 

# Realtime Chat Web App


This is a real-time chat web app built with React.js and Appwrite. 
The app is fully responsive and can be accessed on various devices.

## Features
 - User registration: Allows users to create an account with a unique username and password.
 - User authentication: Users can sign in with their credentials to access the chat functionality.
 - Realtime messaging: Messages are sent and received in real-time using the Appwrite Realtime WebSocket API.
 - Message deletion: Users can delete their own messages.
 - Chat room: All users can participate in a single chat room and see messages from other users.


## Technologies Used
 - React.js: A JavaScript library for building user interfaces.
 - Appwrite: An open-source backend server that helps developers build and scale applications.


### Getting Started
To get started, create a .env file in the root directory of the project and set the following variables:
```
VITE_API_ENDPOINT=your_appwrite_api_endpoint
VITE_PROJECT_ID=your_appwrite_project_id
VITE_DATABASE_ID=your_appwrite_database_id
VITE_COLLECTION_ID_MESSAGES=your_appwrite_collection_id_messages
```

### Appwrite setup
1. Create or login into your appwrite account. 
2. Create a new project, then create a database and a `messages` collection
    - user_id
    - username
    - body
3. Update the permissions in the `messages` collection settings.

Use the data from appwrite to fill the .env file
<div style="display: flex;">
    <img src="https://i.postimg.cc/L6kKnnxR/rtchat.png" alt="rtc1" style="width: 500px;"  />
    <img src="https://i.postimg.cc/N0mnL08m/rtc4.png" alt="rtc2" style="width: 500px; "  />
</div>
<img src="https://i.postimg.cc/9QvSW99c/rtc5.png" alt="rtc3" style="height: 500px;"  />

