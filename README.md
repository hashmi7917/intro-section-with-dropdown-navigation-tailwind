## React + Vite + Tailwind

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# Installation: Clone the Repo and Install Modules run the following command

## npm install

# Frontend Mentor - Intro Section Page solution

This is a solution to the [Intro Section Page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5/hub). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

### Desktop

![desktop](https://github.com/hashmi7917/easybank-landing-page-tailwindcss/assets/38833326/98b30491-016a-4029-9f98-f1e1c790c4fd)

### Mobile

![mobile](https://github.com/hashmi7917/easybank-landing-page-tailwindcss/assets/38833326/0474de70-917e-4436-9521-32559e925c1d)

### Links

- Solution URL: [Github](https://github.com/hashmi7917/intro-section-with-dropdown-navigation-tailwind)
- Live Site URL: [Netlify](https://intro-section-with-tailwindcss.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Tailwind CSS
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library + Vite
- [Fontawesome](https://fontawesome.com/icons) - Icons
- [Tailwind CSS](https://tailwindcomponents.com/cheatsheet/) - Tailwind CSS Cheatsheet

### What I learned

Tailwind CSS , Flexbox, Layouts, CSS GRIDS.

```html
<
<div
  className="hidden w-1/2 max-md:w-full xl:flex justify-around max-md:justify-between max-lg:pt-4"
>
  <img src="{Logo}" alt="logo" />
  <ul
    className="hidden w-1/2 xl:flex justify-between items-start  transition-all ease-in-out duration-75"
  >
    <li className="cursor-pointer">Features</li>
    <li className="cursor-pointer">Company</li>
    <li className="cursor-pointer">Careers</li>
    <li className="cursor-pointer">About</li>
  </ul>
</div>
```

```css

extend: {
      fontFamily: {
        Epilogue: ['Epilogue', 'sans-serif'],
      },
      fontWeight: {
        normal: '500',
        medium: '700',
      },
      fontSize: {
        md: '16px',
        xxs: '12px',
      },
      colors: {
        neutral: {
          AlmostWhite: 'hsl(0, 0%, 98%)',
          MediumGray: 'hsl(0, 0%, 41%)',
          AlmostBlack: 'hsl(0, 0%, 8%)',
        },
      },
    },
```

### Continued development

Tailwind CSS, CSS Grids, Flexbox, Layouts

### Useful resources

- [Tailwind CSS Cheatsheet](https://tailwindcomponents.com/cheatsheet/) - This helped me for easily access to tailwind css. I really liked this pattern and will use it going forward.

## Author

- Website - [Github-Profile](https://github.com/hashmi7917)
- Frontend Mentor - [@hashmi7917](https://www.frontendmentor.io/profile/hashmi7917)
- Instagram - [@hashmi.developer](https://www.instagram.com/hashmi.developer/)

## Acknowledgments

Thanks to Tailwind CSS Community and Frontend Mentor Community.
