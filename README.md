# docusaurus-crowdin-example

This repository is an example of translating a [Docusaurus v2](http://v2.docusaurus.io/) with Crowdin.

Read the [official Docusaurus Crowdin tutorial](http://v2.docusaurus.io/docs/i18n/crowdin).

The initial site is a newly initialized Docusaurus site, and we provide i18n + Crowdin support with [this Pull-Request](https://github.com/slorber/docusaurus-crowdin-example/pull/1/files).

The original site is in English, and Crowdin help us provide French translations.

The site is deployed with Netlify at [docusaurus-crowdin-example.netlify.app](https://docusaurus-crowdin-example.netlify.app/) (build command: `yarn crowdin:sync && yarn build`).

We used the Crowdin pre-translate feature after hiding the `id`, `slug`, `tags` and `author_url` frontmatters to get this good-enough but inaccurate result fast.
