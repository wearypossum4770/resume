![Build Status](https://gitlab.com/pages/plain-html/badges/master/build.svg)

---

Example plain HTML site using GitLab Pages.

Learn more about GitLab Pages at https://pages.gitlab.io and the official
documentation https://docs.gitlab.com/ce/user/project/pages/.

---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

** ToDo**

- [ ] wrap icons <!-- <i class="devicon-javascript-plain"></i></code></pre> -->
- [ ] add devicon css link <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.9.0/devicon.min.css">
                                                      -->
- [ ] checkout [react svg](https://dev.to/ianholden/using-svg-icons-in-your-react-developer-portfolio-project-1f1c)

 <!-- free harvard courses https://online-learning.harvard.edu/catalog/free  -->
 <!-- Global react state https://www.basefactor.com/global-state-with-react  -->
 <!-- JS functional programming https://medium.com/swlh/functional-programming-with-javascript-reduce-curry-fe999af500f4  -->
 <!-- PY functional programming https://melvinkoh.me/amp/understanding-the-python-reduce-function-with-examples-ck7mzz8l200na8ss1ogdvw5c5  -->

**Table of Contents** _generated with [DocToc](https://github.com/thlorenz/doctoc)_

- [GitLab CI](#gitlab-ci)
- [GitLab User or Group Pages](#gitlab-user-or-group-pages)
- [Did you fork this project?](#did-you-fork-this-project)
- [Troubleshooting](#troubleshooting)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## GitLab CI

This project's static Pages are built by [GitLab CI][ci], following the steps
defined in [`.gitlab-ci.yml`](.gitlab-ci.yml):

```
image: alpine:latest

pages:
  stage: deploy
  script:
  - echo 'Nothing to do...'
  artifacts:
    paths:
    - public
  only:
  - master
```

The above example expects to put all your HTML files in the `public/` directory.

## GitLab User or Group Pages

To use this project as your user/group website, you will need one additional
step: just rename your project to `namespace.gitlab.io`, where `namespace` is
your `username` or `groupname`. This can be done by navigating to your
project's **Settings**.

Read more about [user/group Pages][userpages] and [project Pages][projpages].

## Did you fork this project?

If you forked this project for your own use, please go to your project's
**Settings** and remove the forking relationship, which won't be necessary
unless you want to contribute back to the upstream project.

## Troubleshooting

1. CSS is missing! That means that you have wrongly set up the CSS URL in your
   HTML files. Have a look at the [index.html] for an example.

[ci]: https://about.gitlab.com/gitlab-ci/
[index.html]: https://gitlab.com/pages/plain-html/blob/master/public/index.html
[userpages]: https://docs.gitlab.com/ce/user/project/pages/introduction.html#user-or-group-pages
[projpages]: https://docs.gitlab.com/ce/user/project/pages/introduction.html#project-pages

[agile development](https://openclassrooms.com/en/courses/4544611-write-agile-documentation-user-stories-acceptance-tests/4821601-follow-an-in-depth-example-of-creating-user-stories)
[agile test documentations](https://openclassrooms.com/en/courses/4544611-write-agile-documentation-user-stories-acceptance-tests/4810081-writing-acceptance-tests)
RULE: Only allow withdrawls when there is sufficient balance
| ID | Given | When | Then |
| :------------- | :----------: | -----------: |
|01 | User balance = $23 | User asks to withdraw $20 | withdrawl is authorized AND User balance is now $3|
|01 | User balance = $18 | User asks to withdraw $20 | withdrawl is NOT authorized AND User balance is still $18|
[testing with examples](https://gojko.net/assets/tre-small.png)
