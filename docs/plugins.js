var plugins = [
  function (hook) {
    var container = '<div id="gitalk-container"></div>';
    hook.afterEach(function (html) {
      return html + container;
    });
    hook.doneEach(function () {
      gitalk.render("gitalk-container");
    });
  },
  function (hook, vm) {
    var cfg = vm.config.footer;
    var thisYear = new Date().getFullYear();
    var sinceStr = String(cfg.since) + " - " + String(thisYear);
    if (thisYear === cfg.since) {
      sinceStr = String(thisYear);
    }
    var container = [
      "<hr/>",
      '<footer style="line-height: 1.5rem;">',
      '<span><a href="' +
        cfg.url +
        '">' +
        cfg.title +
        "</a> &copy; " +
        sinceStr +
        ".</span><br/>",
      '<span>Proudly published with <a href="https://github.com/docsifyjs/docsify" target="_blank">docsify</a>.</span>',
      "</footer>",
    ].join("");

    hook.afterEach(function (html) {
      return html + container;
    });
  },
];
