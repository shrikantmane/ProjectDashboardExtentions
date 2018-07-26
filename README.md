## project-dashboard-extension

This is where you include your WebPart documentation.

### Building the code

```bash
* create a custom CSS file and name it CustomStyles.css. This is to hide Quick launch menu Recycle bin and footerbar containing Views, Likes and Feedback buttons. 
```
div[name="Recycle bin"]{
  display: none !important;
}

div[class^="footerBar_"]{
  display: none !important;
}
```
* upload the CSS file to Styles Library of the site collection.

git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO
