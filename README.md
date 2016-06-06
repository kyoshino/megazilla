# Megazilla: A mega menu experiment for Mozilla properties

This is an IA/UX project aimed at improving the site navigation across Mozilla sites. [See the demo](https://kyoshino.github.io/megazilla/).

## Background

Mozilla's unique nature of an organic, distributed, non-profit organization leads to both strengths and weaknesses. While each team can quickly build their own products and sites, those aren't well integrated and often don't get enough attention even if it's a great effort.

In 2011, there was a project called [One Mozilla](https://wiki.mozilla.org/Websites/Mozilla.org/One_Mozilla) that brought all major sites into a single branding and platform at [www.mozilla.org](https://www.mozilla.org/). It looked successful, but since then, as the organization grows rapidly, many Mozilla sites have scattered around the Web. Since there is no sitemap, *Tabzilla*, a universal tab asset, is the only way to connect Mozilla properties.

## Tabzilla 1.0

The [original Tabzilla](https://wiki.mozilla.org/Websites/Mozilla.org/One_Mozilla/Documentation/Tabzilla) was a global navigation library offering a promotion, links to major sites, a search bar, as well as the [Translation Bar](https://blog.mozilla.org/webdev/2013/12/12/improving-mozilla-org-user-experience-for-people-all-over-the-world/). The major issues were:

* Only a few sites were listed
* The performance was not optimized
* The usage rate was low, because it was difficult for visitors to understand that it contained a navigation unless they tried to click on it

In July 2015, instead of being improved, the original Tabzilla was deprecated in favour of the [static Tabzilla asset](https://groups.google.com/d/topic/mozilla.dev.webdev/ie8GaHeM8RI/discussion). As of June 2016, it's still used on various sites including [SUMO](https://support.mozilla.org/). See also a [discussion log](https://old.etherpad-mozilla.org/tabzilla) at an offsite in 2014 as well as the [bug list](https://bugzilla.mozilla.org/buglist.cgi?product=Websites&component=Tabzilla).

## Tabzilla 2.0

The current static Tabzilla is just a tab with the Mozilla wordmark that links to www.mozilla.org. It doesn't have navigation nor promotion any more. The major issues are:

* It's a blackhole; each site links to www.mozilla.org but it's not linking back to most of those sites
* The UX for international users has been detracted due to the lack of the [standalone Translation Bar](https://bugzilla.mozilla.org/show_bug.cgi?id=1195068)
* Most importantly, it doesn't represent the broad Mozilla ecosystem

## Megazilla

A solution to the issues above could be a mega menu. I have started the project by understanding the full picture of Mozilla properties using a [spreadsheet](https://docs.google.com/spreadsheets/d/1Vh8lAXh7cQ5VVBW8EWu7pTA1EaNVvpVplLFGPBELRHw/edit). The goals are to:

* Prototype a new, consistent global navigation that also serves as an up-to-date sitemap
* Improve the user experience and content discoverability for visitors
* Motivate Mozilla employees and contributors by making their project more prominent

[See the demo](https://kyoshino.github.io/megazilla/).

## ToDo

* Ensure cross-browser compatibility
* Support keyboard navigation with a better a11y implementation
* Add translation bar
* Add search bar
* Add social media links and newsletter subscription form
* Optimize for mobile with a responsive design
* Optimize the performance
* Integrate Firefox Account?
* Add CTAs in the menu, e.g. Firefox download button
* Add timely promos
