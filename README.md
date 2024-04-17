# No-JS Hugo Theme

A minimal, responsive, and privacy-friendly [Hugo](https://gohugo.io/) theme that does not require the client to enable JavaScript.

Many Hugo themes (and websites in general) don't render properly or even become unreadable when clients choose not to enable JavaScript. This theme is designed to work well if the client does not have JavaScript enabled. It is designed for both desktop and mobile browsers. All modern browsers (Chromium, Firefox, and Safari) are supported. The theme does not load any external third-party resources.

See the [example site](https://stevenengler.github.io/no-js-hugo-theme-example/).

![Screenshot](/screenshot.png?raw=true)

The theme works well with the Tor Browser at all security levels. Tor Browser [does not support](https://gitlab.torproject.org/tpo/applications/tor-browser/-/issues/42498) fallbacks for SVG images, so you may want to rasterize the theme's svg images as jpg/png/webp versions so that they display on the "safest" security level.

Some features are not possible without JavaScript. These features can be enabled in the site config file and will never decrease the quality of the website.

Additional JavaScript features:
  - light/dark theme switcher
