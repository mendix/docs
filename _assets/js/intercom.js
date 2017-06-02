(function() {
  var identifier = '[Intercom]:';
  window.__IntercomBooted = false;
  var onBootEvents = [];
  var log = function () {
    Array.prototype.unshift.call(arguments, identifier);
    console.log.apply(this, arguments);
  }

  window.__trackIntercomEvent = function (type, data) {
    if (window.__IntercomBooted) {
      window.Intercom('trackEvent', type, data);
    } else {
      onBootEvents.push({type: type, data: data});
    }
  }

  log('Loading Intercom');

  var timeout = setTimeout(function () {
    log('Not booted, quiting');
    clearInterval(interval);
  }, 30000);

  var interval = setInterval(function () {
    if (window.Intercom && window.Intercom.booted) {
      // Intercom is booted
      log('Booted');
      window.__IntercomBooted = true;

      onBootEvents.forEach(function (evt) {
        window.Intercom('trackEvent', evt.type, evt.data);
      });
      onBootEvents = [];

      clearInterval(interval);
      clearTimeout(timeout);
    }
  }, 10);

  (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/' + window.__IntercomAppId;var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()
}())
