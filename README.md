# Metalsmith localize Collection

Creates localized branches of a metalsmith collection.

## Installation

```bash
npm install --save metalsmith-localize-collection
```

## Usage

```javascript
var Metalsmith = require('metalsmith');
var collections = require('metalsmith-collections');
var multiLanguage = require('metalsmith-multi-language');
var localizeCollection = require('metalsmith-localize-collection');

Metalsmith()
  .use(multiLanguage({
    default: 'en',
    locales: ['en', 'es']
  }))
  .use(collections({
    posts: {
      pattern: 'posts/*/!(index).md',
      sortBy: 'date',
      reverse: true
    }
  }))
  .use(localizeCollection('posts'))
```

This will create two new collections: `posts_en` and `posts_es`
