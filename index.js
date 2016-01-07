'use stritc';

module.exports = function (name) {
  return function (files, metalsmith, callback) {
    var metadata = metalsmith.metadata();
    var collections = metadata.collections;
    var collection = collections[name] || null;

    if (!collection) {
      return;
    }

    metadata.locales.forEach(function (locale) {
      if (!collections[name + '_' + locale]) {
        collections[name + '_' + locale] = [];
      }
    });

    function workFile(file) {
      var locale = file.locale || metadata.defaultLocale || null;

      if (!locale) {
        return;
      }

      var collection = collections[name + '_' + locale];
      collection.push(file);
    }

    collection.forEach(workFile);

    callback();
  };
}

