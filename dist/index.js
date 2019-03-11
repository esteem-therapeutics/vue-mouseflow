'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;
var VueMouseflow = {
  createMfq: function createMfq() {
    window._mfq = window._mfq || [];
  },
  addTrackingScript: function addTrackingScript(tracking_key) {
    var mf = document.createElement('script');
    mf.type = 'text/javascript';
    mf.async = true;
    mf.src = '//cdn.mouseflow.com/projects/' + tracking_key + '.js';
    document.getElementsByTagName('head')[0].appendChild(mf);
  },
  install: function install(Vue, options) {
    Vue.prototype.$mf = {
      push: this.push,
      logRouteChange: this.logRouteChange
    };

    if (options.tracking_key === undefined) {
      throw new Error('No Mouseflow tracking key specified.');
    }

    this.createMfq();
    this.addTrackingScript(options.tracking_key);
  },
  push: function push() {
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    window._mfq.push([].concat(args));
  },
  logRouteChange: function logRouteChange(to, options) {
    var path =
      (options || {}).includeRouteParams === false
        ? to.matched[to.matched.length - 1].path
        : to.fullPath;
    this.push('newPageView', path);
  }
};
var _default = VueMouseflow;
exports.default = _default;
