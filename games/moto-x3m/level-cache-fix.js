/* Keep level JSON fresh and avoid stale cached files after updates. */
(function () {
  if (!window.Phaser || !Phaser.Loader || Phaser.Loader.prototype.__mlvLevelCacheFix) return;
  const original = Phaser.Loader.prototype.json;
  Phaser.Loader.prototype.json = function (key, url) {
    if (typeof url === 'string' && url.indexOf('assets/levels/') !== -1 && url.indexOf('?') === -1) {
      url += '?mlv=20260917';
    }
    return original.apply(this, [key, url].concat(Array.prototype.slice.call(arguments, 2)));
  };
  Phaser.Loader.prototype.__mlvLevelCacheFix = true;
})();
