# xiyuez2.github.io — academic-homepage version

Built on [luost26/academic-homepage](https://github.com/luost26/academic-homepage) (Jekyll, builds on GitHub Pages with no extra setup).

| What | Where |
|---|---|
| Name, bio, photo, links, education, experience | `_data/profile.yml`, photo at `assets/images/photos/portrait.jpg` |
| Experience & project cards (homepage and Projects page; click a tag to filter) | `_showcase/industry/*.md`, `_showcase/research/*.md` (front matter: title, subtitle, cover, caption, venue = accepted venue badge, tags = filter topics from `projects.filter_tags` in `_data/display.yml`, keywords = free-form badges, paper / project_page / code = official links only, note; body = markdown bullet list), figures in `assets/images/covers/`|
| Publications (with cover figure + topic badges) | `_publications/<year>/*.md` |
| Coauthor links / bolding | `_data/authors.yml` |
| Navbar, homepage sections | `_data/navigation.yml`, `_data/display.yml` |

## Deploy on GitHub Pages
1. Create a **new empty repo** named `xiyuez2.github.io`.
2. Push this folder to its `main` branch.
3. Settings → Pages → Build and deployment → Source: **GitHub Actions** (the workflow in `.github/workflows/jekyll.yml` builds with the `jekyll-email-protect` plugin, which the default branch build does not support).
4. Live at https://xiyuez2.github.io/ after a minute or two.

Local preview: install Ruby + Bundler, then `bundle install && bundle exec jekyll serve`.

## To do before publishing
- `assets/images/photos/portrait.jpg` is a square crop of the LinkedIn photo (EXIF stripped); replace it with any other square JPEG, keeping the file name.
- `assets/images/badges/` holds the institution logos (UIUC Block I, Amazon and TikTok icons from Wikimedia Commons, XPeng mark from xpeng.com, ZJU seal); they are trademarks of the respective institutions, used only to label affiliations.
- `assets/images/covers/query-recommendation.jpg` and `medqpa-gen.png` are schematics drawn for this site.
- News box is off (`show_news: false` in `_data/display.yml`); add `_news/*.md` and flip it on when you have items.
- Optional: put a CV PDF under `assets/files/` and uncomment `cv_link` in `_data/profile.yml`.
