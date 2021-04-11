# <img src="public/favicon.ico" width="25" height="25"> Welcome to Veni Vidi Voravi! 

### **Live Link: [Veni Vidi Voravi](https://venividivoravi.herokuapp.com/welcome/)**

_Veni Vidi Voravi_ is inspired by [Medium](https://medium.com/) and allows users to share and discover experiences from different culinary adventures. Users can browse, create, and edit their own stories, and leave comments or claps on other stories they found enjoyable. 

### Welcome View
![Welcome Page View - PLACEHOLDER](public/images/welcome-page-2.gif)

### Home View
![Home Page View - PLACEHOLDER](/public/images/home-page-2.gif)

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Read our [wiki](https://github.com/rsdimatulac/Veni-Vidi-Voravi/wiki)
- Check out our [mock up](https://xd.adobe.com/view/d2379a4a-1d94-46e5-8f09-316f9bebba7c-8764/)

##  Technologies
#### Front-End
- Javascript
- HTML (rendering through PUG templating)
- CSS
- Font Awesome
- Hosted on Heroku

#### Back-End
- [cookie-parser](https://www.npmjs.com/package/cookie-parser) / [csurf](https://www.npmjs.com/package/csurf)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) for user authentication
- **built with [express](https://expressjs.com/)**
- [express-session](https://www.npmjs.com/package/express-session)
- [express-validator](https://www.npmjs.com/package/express-validator)
- [faker](https://www.npmjs.com/package/faker) for generating large amounts of fake data
- **uses [postgreSQL](https://www.postgresql.org/) database**
- [sequelize](https://www.npmjs.com/package/sequelize) / [sequelize-cli](https://www.npmjs.com/package/sequelize-cli)

## Features
- User authentication is handled using bcryptjs library for password hashing.
- Grants access to features like creating and editing stories to authorized users only.
- Designed around a relational database schema, which allows users to create, edit, clap, and comment on stories with dynamic data and rendering.
- Makes use of AJAX / API Routes to render elements such as clapping and commenting asynchronously.
- Includes csrf attack protection and performs front-end and back-end validation on forms

## Code Highlights / Challenges 

#### Highlights 
- Creating DRY Pug templates to render.

- Adding `CASCADE` to our Story Model so that we can delete stories with comments / claps, without deleting the comments / claps first. 
```
Story.associate = function(models) {
    Story.belongsTo(models.User, { foreignKey: "userId" });
    Story.hasMany(models.Comment, {
      foreignKey: "storyId",
      onDelete: 'cascade',
      hooks: true
    });
    Story.hasMany(models.Clap, {
      foreignKey: "storyId",
      onDelete: 'cascade',
      hooks: true
    });
}
```

#### Challenges
- When `npm start` was run, the localhost on the browser was not loading and left us hanging. It was caused by a session cookie that is dependent on the Demo User to login but was deleted when the database was dropped. It was fixed when we deleted the session cookie, and added the Demo User credentials as a seeded sequelize file.
- Initially hosting to Heroku. When we ran into problems locally, we solved this by dropping our databases and re-migrating and seeding. Dropping databases was not recommended on Heroku so we had to work around this. 

## Future Implementations 
 - Topics / Categories / Tags
- Bookmarks
- Claps on comments
- Filtering Stories
- Display Followers/Following List on Profile Page

## Contributors
Huge shout out to those that contributed to this project:
- [@rsdimatulac](https://github.com/rsdimatulac) 🚁
- [@hye-kim](https://github.com/hye-kim) 🎴
- [@ssmall1](https://github.com/ssmall1) 🌿
- [@B-Salinas](https://github.com/B-Salinas) 🌀

---

_I came, I saw, I devoured._
