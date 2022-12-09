# iLink - Client

_This readme file is only for the **client side** of iLink. To read the combined version, please visit the [iLinkDocs](https://github.com/teamilink/iLinkDocs) repository._

iLink optimises your social media presence by linking all the landing pages under one main URL as an online business card.

<hr />

- **Deployed App**: [https://ilinkapp.netlify.app/](https://ilinkapp.netlify.app/)
  - Test User
    - Email: `coder@test.com`, Password: `test123`
    - Profile: [https://ilinkapp.netlify.app/ilink/coder_academy](https://ilinkapp.netlify.app/ilink/coder_academy)
- **Deployed Server**: [https://ilink-server-new.herokuapp.com/links](https://ilink-server-new.herokuapp.com/links)
- **Client Repo**: [https://github.com/teamilink/client](https://github.com/teamilink/client)
- **Server Repo**: [https://github.com/teamilink/server](https://github.com/teamilink/server)
- **Part A Docs Repo**: [https://github.com/teamilink/iLinkDocs](https://github.com/teamilink/iLinkDocs)

<hr />

## Installation & Instructions

- Clone the client repository
  `$ git clone git@github.com:teamilink/client.git`
- Move into the directory
  `$ cd client`
- Install the dependencies and libraries that used in this project
  `$ npm install` or `$ yarn install`
  - If you have installation errors, please try to remove the node_modules folder in your local machine and re-run the command line.
- Run the server
  `$ npm start` or `$ yarn run start`
  - The server will run on port 3000

## Overview

iLink is an application that offers digital marketing professionals the tool to optimise their social media presence by linking all their social media platforms and promotion links (landing page) together under one main URI link endpoint.

Below are the benefits that offered by iLink:

- The application allows users to add multiple landing page links or call to action buttons.
- Users can direct their web traffic to specific landing pages (promotion) or other target pages on their website and add as many links as they want.
- Businesses can enhance their brand identity with a custom image and links.

By having this capability of iLink, users such as small business owners or digital marketers are able to better manage their social media presence by giving their followers a convenient way to and one-click process to all their online contents on the internet.

### Functionality / Features

Account Creation

- User Login/Logout and New Account Registration
- Image uploaded for user profile picture
- Random image from a batch of images via unsplash API if no profile image is uploaded by the user.
- Fill up basic information of the user

Account Dashboard

- Create and generate new card (main URI endpoint link)
- Add new URI links with title and description into the card
- View, update or delete existing links to the card

### Target audience

This app aims at social media influencers, marketing and branding professionals and other social media content creators that are looking to grow and gather all their followers across multiple different platforms into one single platform for their web visitors.

## Tech stack

The following is the technology stack used for this project.

- **Programming Language:** Javascript
- **Client Side:** React.js library, Material UI & PostCSS.
- **Server Side:** Ruby on Rails framework
- **Testing:** RSpec, Jest, React-testing-libraries, Cypress
- **Database:** PostgreSQL
- **Cloud Storage:** Amazon S3
- **Cloud Hosting:** Netlify for Client side and Render for server side
- **Utilities:** Balsamiq Wireframes, Draw.io
- **DevOps:** Github, Git Version Control, Visual Studio Code
- **Project Management Tools:** Trello and Discord

### Libraries & Dependencies

- **react** for building client side using create-react-app (CRA)
- **axios** for handling HTTP requests
- **react-router-dom** for routing within the web app
- **react-frame-component** for implementing `<iframe>` for component encapsulation
- **dotenv** for storing environment variables
- **Jest** for testing Javascript
- **react-testing-library** for testing react components and UI
- **Cypress** for E2E test
- **Material UI** for injecting styling to the iframe and creating tabs, forms, and buttons
- **PostCSS** for overall layouts and styling

## Screenshots of the App

**Home**
![](/screenshots/Home.png)

**Sign up**
![](/screenshots/Signup.png)

**Dashboard - Links**
![](/screenshots/Dashboard-Links.png)

**Dashboard - Appearance**
![](/screenshots/Dashboard-Appearance.png)

**iLink Profile - Valid Username**
![](/screenshots/iLink-profile.png)

**iLink Profile - Invalid Username**
![](/screenshots/iLink-profile-invalid.png)

**Not Found**
![](/screenshots/not_found.png)

## Reference Links

- [iLink Part A - Trello Board](https://trello.com/b/vwtGNhLx/t3a2-part-a)
- [iLink Part B - Trello Board](https://trello.com/b/PY27jXUy/t3a2-part-b)
- [iLink - Slide Deck for Part A](https://www.canva.com/design/DAFFim6i7co/uUwexPtZMTMt71YQwHYxwA/view?utm_content=DAFFim6i7co&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
- [iLink - Slide Deck for Part B](https://www.canva.com/design/DAFIbcFDLno/ZVy-5DlxTncpmvXmp1wlDQ/view?utm_content=DAFIbcFDLno&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
