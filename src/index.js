const VueMouseflow = {
  createMfq: function() {
    window._mfq = window._mfq || [];
  },
  addTrackingScript: function(tracking_key) {
    const mf = document.createElement('script');
    mf.type = 'text/javascript';
    mf.async = true;
    mf.src = '//cdn.mouseflow.com/projects/' + tracking_key + '.js';

    document.getElementsByTagName('head')[0].appendChild(mf);
  },
  install: function(Vue, options) {
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
  push: function(...args) {
    window._mfq.push([...args]);
  },
  logRouteChange: function(to, options) {
    const path =
      (options || {}).includeRouteParams === false
        ? to.matched[to.matched.length - 1].path
        : to.fullPath;

    this.push('newPageView', path);
  }
};

export default VueMouseflow;
