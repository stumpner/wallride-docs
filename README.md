WallRide Docs
=============

Setup
-----

Download and install **Pandoc** for your environment: http://pandoc.org/installing.html

Generating the documentation
----------------------------

```
pandoc \
--write=html5 \
--template=templates/guide.html \
--toc \
--toc-depth=4 \
--section-divs \
--no-highlight \
--smart \
--output=build/guide.html \
docs/guide.md
```
