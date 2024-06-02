<p align="center"><img src="https://github.com/sssshefer/messenger/assets/63253440/03f23447-e7de-48d0-bbb5-d91e57b52d45" alt=""  height="250"></p>

# Messenger 
This application implements the basic functionality of modern messengers. Its purpose is to showcase the usage of WebSockets

## Table of Contents
- [Introduction](#introduction)
- [Technologies](#technologies)
- [Main Features](#main-features)
- [User Management](#user-management)
- [Setup](#setup)

## About the project

The main focus was to implement the live features of WebSockets, with an emphasis on the frontend.So there is no database. All data is stored in local storage

> [!IMPORTANT]
> The easiest and clearest way to explore the functionality of the project is to <br/> open several tabs on the same screen. But ***remember to use incognito tabs***. <br/><br/>
> In incognito mode, browsers don't retain data like cookies, browsing history, or local storage to maintain user privacy. So, if you save project data to local storage during a regular browsing session, it won't be accessible in incognito mode because the browser doesn't store that information beyond the current session. This way you can create ***different users*** in different tabs <br/><br/>
> To clear localStorage (if you need to ***reset the created user***), you can either open your browser's Developer Tools, navigate to the Application tab, and clear it from the Local Storage section, or use JavaScript by typing `localStorage.clear()` in the console or in your code. To remove specific items, use `localStorage.removeItem('keyName')`

## Main Features
- Link your **ID** similar to how you link your phone or Google account in modern messengers
- Create personal **Contact List**
- Chat in **real time**
- Create private group chats (select multiple users for a conversation)
- The sender's name from your contacts and the date when the message was sent are shown in the dialog

## Built with
 **Frontend:**
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Socket.io](https://socket.io/)
- [React Bootstrap](https://react-bootstrap.netlify.app/)
    
 **Backend:**
- [Node.js](https://nodejs.org/)
- [Socket.io](https://socket.io/)


## User Management
To test the application with two different users, you can open two incognito tabs in your browser. Each tab will have its own instance of the local storage, allowing you to create and manage two separate users with different IDs.

## Setup
### Prerequisites
- Node.js
- npm (Node package manager)

### Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```
2. **
## Contributing
Feel free to submit issues or pull requests. For major changes, please open an issue first to discuss what you would like to change.

<a href="https://ru.freepik.com/free-vector/man-woman-chatting-online-people-using-mobile-phones-speech-bubble-distance-flat-vector-illustration-communication-internet_10173148.htm#fromView=search&page=2&position=0&uuid=17686646-04ab-4b32-9265-0cc4367e4bc7">Изображение от pch.vector на Freepik</a>
