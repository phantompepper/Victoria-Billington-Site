
![logo](https://github.com/phantompepper/Victoria-Billington-Site/blob/master/img/favicon.png)
# Victoria Billington

- Victoria Billington Portfolio Site
- Built with Vuejs, Sass
- Uses Contentful.io for CMS
- Hosted on Netlify
- Auto deploy on commit from Github.com
- Was a great project for learning SASS / CSS

## Development Goal of this project: Get a better grasp of CSS and how it works.

In this project, the main objective, besides creating a website for Victoria Billington, was to deep-dive into CSS and Sass. I took a [Udemy Course](https://www.udemy.com/advanced-css-and-sass) that went through the design thought process of creating a website, structuring Sass, and using the BEM naming convention. (Block_Element--Modifier). This course starts with the traditional CSS specs for creating a website, like floats. It then goes into Flex-box and finaly, CSS-Grid. It also has a great deal of focus on browser compatibility and browser pre-fixes. 

The website is hosted on [Netlify](https://www.netlify.com), with a Google Domain name pointing to the Netlify DNS Servers.

I use a private Repo on Github for version control. Netlify is hooked up to the production branch of the repo, looking at all files, and will automatically build on any changes. If a build fails, it will automatically fall back to the previous build and send me an email with the error.

Another awesome feature of Netlify are forms. When adding a contact form, you can easily tell netlify to watch for it with something like:

```
<form name="contact" method="POST" data-netlify="true">
 ...
</form>
```
With this in place, netlify sees the form, parses the input values, and sends an email to whomever you specify in the project settings. 
Netlify explains this in detail on there [site](https://www.netlify.com/docs/form-handling/).

Vue JS is primarily used to handle requests to and from [Contentful.io](https://contentful.io). Contentful is a CMS that has a really easy GUI to work with, allowing Victoria to login and make changes to her site on the fly. Netlify is also hooked into contentful to rebuild the site on detected changes, via api web hooks. 

## Install

npm install

### START

npm start

### BUILD

npm run build
