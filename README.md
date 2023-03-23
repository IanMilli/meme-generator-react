# Meme-Generator-React

## 🌟[Description](#table-of-contents)
The meme generator allows the user to search using a keyword for up to 20 images, then select (and reselect) and image, on to which they can add text to the top and bottom of the photo and choose the colour of the text
<p>
    <img src="https://img.shields.io/badge/license-MIT-yellow"/>
    <img src="https://img.shields.io/badge/-HTML-brightgreen" />
    <img src="https://img.shields.io/badge/-CSS-lightgrey" />
    <img src="https://img.shields.io/badge/-JavaScript-blue" />
    <img src="https://img.shields.io/badge/-bootstrap-yellowgreen"  />
    <img src="https://img.shields.io/badge/-node.js-orange" />

</p>

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### 🚀 The challenge

Use everything we've learned on the course to create a real-world client-side single-page application that will be a showcase to potential employers. 

We will:
- Use React.
- Use Node.js.
- Be deployed using Netlify.
- Use at least two libraries, packages, or technologies that we haven't discussed.
- Have a polished front end/UI.
- Meet good quality coding standards (indentation, scoping, naming).
- Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).

### 📺 Screenshot

![](./screenshot.jpg)



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

We first met to discuss the idea for the project. We looked at several options and landed on a Meme Generator. We then created the GitHub repository to host our development and shared access. We used this repo to create a Kanban board / project. We then allocated / took tasks from the Kanban board and worked on our development. We did a stand up meeting most days and updated each other with progress and challenges. We used Slack in between those times to communicate with each other. We made sure we tackled MVP and avoided specification creep.

### 🔑 Built with

- Semantic HTML5 markup
- CSS custom properties
- MUI CSS framework 
- Mobile-first workflow
- Node.js
- React


### What We learned

Cool function to download the element which had the image and text overlayed as a png file

```js
const downloadImage = async () => {
    const dataUrl = await htmlToImage.toPng(domEl.current);
    // download image
    const link = document.createElement('a');
    link.download = 'html-to-img.png';
    link.href = dataUrl;
    link.click();
  }
```


### 🤝 Continued development

* User can change font, font size, position and free-choice of colour for text
* Add more formats such as bmp, jpeg etc the user can choose from
* Carousel beneath the text so the user can audition the results of the image search automatically
* Storage of user generated memes online so users/others can link/use the memes
* Allow the user to make multiple searches and amalgamate the their chosen results
* Allow the user to create multiple meme files at once


### Useful resources

- [Reference material for adding photos from free api into a react app](https://medium.com/@yahtzeemoomtaz/fetch-from-an-api-and-display-some-pictures-react-4de2a027eda7) 
- [Copy to Clipboard Library](https://www.npmjs.com/package/copy-image-clipboard) - This allowed us to add the copy to clipboard functionality
- [Git Hub Pages Deployment](https://medium.com/mobile-web-dev/how-to-build-and-deploy-a-react-app-to-github-pages-in-less-than-5-minutes-d6c4ffd30f14) - This article was a good reference on how to deploy our project to GitHub Pages
- [Mui CSS Framework](https://www.muicss.com/) - We used Mui CSS as our CSS Framework. We used the documentation extensively. 


## Author
* Ian Logendra https://github.com/EDX-IL
* Emmanouil Giavasis https://github.com/manolisgi/
* Ian Millichamp https://github.com/IanMilli

- Website - [your name or website url](https://www.your-site.com)


## Acknowledgments

We would like to thank, Dane, Andrew, Noah, Brooke,and Jonathan for all their help throughout the course and specifically on this project. Their patience and knowledge were instrumental in our success.  
=======

