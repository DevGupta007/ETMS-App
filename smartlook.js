      window.smartlook || (function (d) {
      var o = smartlook = function () { o.api.push(arguments) }, h = d.getElementsByTagName('head')[0];
      var c = d.createElement('script'); o.api = new Array(); c.async = true; c.type = 'text/javascript';
      c.charset = 'utf-8'; c.src = 'https://web-sdk.smartlook.com/recorder.js'; h.appendChild(c);
      })(document);
       smartlook('init', '7a894c2305e5e1ce1a06eed0e19db545c1aad977', { region: 'eu' });
        console.log("smartlook started")
