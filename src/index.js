const VueMouseflow = {
  createMfq: function () {
    window._mfq = window._mfq || []
  },
  addTrackingScript: function (tracking_key) {
    const mf = document.createElement('script')
    mf.type = 'text/javascript'
    mf.async = true
    mf.src = '//cdn.mouseflow.com/projects/' + tracking_key + '.js'

    document.getElementsByTagName('head')[0].appendChild(mf)
  },
  install: function (Vue, options) {
    this.createMfq()

    this.addTrackingScript(options.tracking_key)
  },
  logRouteChange: function (to, options) {
    this.createMfq()

    const path = options.includeRouteParams === false ? to.matched[to.matched.length - 1].path : to.fullPath

    window._mfq.push(['newPageView', path])
  }
}

export default VueMouseflow
