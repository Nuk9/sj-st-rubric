Solutions Journalism Rubric
===========================

This is an application for aiding the process of assessing the degree to which an article meets the standards of [Solutions Journalism](http://solutionsjournalism.org/).
<br/>

## How it works
Given an article URL, the application retrieves the content of the article (via the [Readability API](http://www.readability.com/developers/api)) and displays it on the page.  This text can then be highligted and assigned three different tags (these tags can be flexibly added, edited, or removed):

 - Problem
  * The social issue at the heart of the article. In other words, what tension prompted the article?
- Solution:
  * The attempt(s) to address the issue, whether through legislation, community organization, protest, etc.
- Result:
  * How did the above attempt(s) to address the problem fare?  What, if any, were the outcomes.
<br/>

As these annotations are built up, they are stored as a list of dictionaries, with the keys being the `tag` and the `text`, IE:

```
[
  {
    "tag" : "solution",
    "text" : "In West and Northeast Seattle, where the growth is largest, class sizes are up and some teachers are leading classes in cafeterias  and auditoriums."
  },
  {
    "tag" : "problem",
    "text" : "By next year, about half of the 12 shuttered schools will be back in operation � after millions of dollars were spent in closing and reopening costs. But the reopened school can't accommodate all the extra students, and a tight budget prevents any new building construction until at least 2016."}
]
```

In addition to these in-text annotations, the app also includes a Google Form with 10 carefully-constructed questions which help in the assessment of the degree to which an article meets the standards of Solutions Journalism.
<br>
When a user is finished annotating the text and replying to the questions, they simply press `Submit`.  In turn, the responses to the questions, the in-text annotations, and other relevant metadata are deposited in a [Google Spreadsheet](https://docs.google.com/spreadsheet/ccc?key=0An9Q5Mkz4lG7dEtXanVWVUo1ZjE0R0UxcjhUM2I2aFE&usp=drive_web#gid=0).  This spreadsheet can then be easily exported for offline analysis.

## Hosting
The easiest way to host this application is on Github via gh-pages.  Of course, seeing as that the app is built on static files and doesn't need a server, you could also simply hos the application on Dropbox, Amazon S3, or an equivalent file-sharing service. Contact [Brian Abelson](mailto:brianabelson@gmail.com) for advice / help in this process.


## Maintenance
If you would like to change any of the fields in the rubric, you'll need to edit the form that underlies the Google Spreadsheet (see [here](https://docs.google.com/forms/d/13EyHZbX1Ln3M4Wqrl1dl8C8qiLt8cjL4ip00A016MI8/edit)).  You'll then need to follow [these instructions](http://www.immersionmedia.com/blog/customizing-and-styling-google-forms/) to extract the correct HTML from this form.  With this updated HTML, you'll want to go into `index.html` and overwrite everything inside of `<div id="form-container">`.  This is identified in the document with two comments: `BEGINNING OF GOOGLE FORM` and `END OF GOOGLE FORM`.  While this should work fine, you'll also want to remove some unnecessary things such as the text under each question which says `This is a required field.` Finally, to improve the UI, you'll want to add an `hidden-field` class to each of:
- artcle_headline
- article_url
- article_annotations
- article_content.
Since these fields are automatically added by the app, it's confusing to a user to have them visible. See lines 573,597,621 of `index.html` for examples of this. 
<br>
If you have any additional questions, please contact Brian Abelson:
  - brianabelson at gmail dot com
  -[@brianabelson](http://www.twitter.com/brianabelson)