# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Links

- Solution URL: [FrontendMentor](https://condensedmilk7.github.io/static-job-listings/)
- Live Site URL: [Github Pages](https://condensedmilk7.github.io/static-job-listings/)

## My process

### Built with

- [Angular](https://angular.io/) - JS Framework
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>The filter code I'm proud of</h1>
```

```js
filterData(data: Company[]) {
    const filteredData = [];
    for (let company of data) {
      // tags are defined by these properties only
      const companyValues = [
        company.role,
        company.level,
        ...company.languages,
        ...company.tools,
      ];
      // if the company's values include all the filter tags
      // push company to filteredData
      if (this.includesAll([...this.filterList], companyValues)) {
        filteredData.push(company);
      }
    }
    return filteredData;
  }

  private includesAll(needles: any[], haystack: any[]) {
    return needles.every((val) => {
      return haystack.indexOf(val) !== -1;
    });
  }

```

### Continued development

I want to focus more on working with Angular.

## Author

- Website - [My Github](https://github.com/CondensedMilk7)
- Frontend Mentor - [@CondensedMilk7](https://www.frontendmentor.io/profile/CondensedMilk7)
