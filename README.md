# remark-autonumber

This is a [remark](https://github.com/remarkjs/remark) plugin that adds auto-numbering
to markdown heading, allowing for numbered heading that are rendered only in the final
output and not in the source markdown, allowing for less markdown conflicts and PR churn.

## Example

When using `remark-autonumber`, given the following markdown:

```md
# Wow

## Such  

In this section, we discuss the lesser known forest elephants.

## Headings

Forest elephants do not live in trees but among them.
```

...remark will output the following HTML:

```html
<h1>1 Wow</h1>
  <h2>1.1 Such</h2>
  <p>In this section, we discuss the lesser known forest elephants.</p>
  <h2>1.2 Headings</h2>
  <p>Forest elephants do not live in trees but among them.</p>
```

## Usage (In Docusaurus)

To use this in a docusaurus site, start by installing with npm:

```shell
npm install damageboy/remark-autonumber
```

Next, edit your `docusaurus.config.js` and add the following chunks:

```js
// Easily reference the remark-plugin elsewhere
const autonumber = require('remark-autonumber')

module.exports = {
...
    plugins: [
    [
      ...
      '@docusaurus/plugin-content-docs',
      {
        ...
        remarkPlugins: [
          ...
          // This installs the plugin
          autonumber,
        ],
        // This ensures the plugins runs before ToC generation
        // occurs
        beforeDefaultRemarkPlugins: [autonumber],
      }
    ]
};
```

## License

This repository is licensed under the MIT license; see the LICENSE file for details.
