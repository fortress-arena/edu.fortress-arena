Deploy

touch out/.nojekyll

$ git push origin --delete gh-pages
$ git subtree push --prefix out origin gh-pages
