(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("89273150-28a6-422f-a512-a4ce4cdd9b52");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '89273150-28a6-422f-a512-a4ce4cdd9b52' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.1.0.min.js"];
      var css_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.1.0.min.css", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.1.0.min.css", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.1.0.min.css"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"4c507c5e-149b-4bea-b0b6-99a069a7677f":{"roots":{"references":[{"attributes":{"data_source":{"id":"10100","type":"ColumnDataSource"},"glyph":{"id":"10103","type":"HexTile"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"10105","type":"CDSView"}},"id":"10104","type":"GlyphRenderer"},{"attributes":{},"id":"10117","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"10110","type":"BasicTicker"}},"id":"10111","type":"Grid"},{"attributes":{},"id":"10119","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"10112","type":"DataRange1d"},{"attributes":{"formatter":{"id":"10119","type":"BasicTickFormatter"},"ticker":{"id":"10110","type":"BasicTicker"}},"id":"10107","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#fb9a99"},"line_color":{"value":"white"},"q":{"field":"q"},"r":{"field":"r"}},"id":"10103","type":"HexTile"},{"attributes":{"formatter":{"id":"10117","type":"BasicTickFormatter"},"ticker":{"id":"10108","type":"BasicTicker"}},"id":"10106","type":"LinearAxis"},{"attributes":{},"id":"10110","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"10113","type":"Toolbar"},{"attributes":{"ticker":{"id":"10108","type":"BasicTicker"}},"id":"10109","type":"Grid"},{"attributes":{"source":{"id":"10100","type":"ColumnDataSource"}},"id":"10105","type":"CDSView"},{"attributes":{},"id":"10108","type":"BasicTicker"},{"attributes":{},"id":"10122","type":"UnionRenderers"},{"attributes":{"below":[{"id":"10106","type":"LinearAxis"}],"center":[{"id":"10109","type":"Grid"},{"id":"10111","type":"Grid"}],"left":[{"id":"10107","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"10104","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"10113","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"10112","type":"DataRange1d"},"x_scale":{"id":"10116","type":"LinearScale"},"y_range":{"id":"10114","type":"DataRange1d"},"y_scale":{"id":"10115","type":"LinearScale"}},"id":"10101","type":"Plot"},{"attributes":{},"id":"10115","type":"LinearScale"},{"attributes":{},"id":"10116","type":"LinearScale"},{"attributes":{"callback":null},"id":"10114","type":"DataRange1d"},{"attributes":{},"id":"10121","type":"Selection"},{"attributes":{"callback":null,"data":{"q":[0,0,-1,-1,1,1,0],"r":[0,-1,0,1,-1,0,1]},"selected":{"id":"10121","type":"Selection"},"selection_policy":{"id":"10122","type":"UnionRenderers"}},"id":"10100","type":"ColumnDataSource"}],"root_ids":["10101"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"4c507c5e-149b-4bea-b0b6-99a069a7677f","roots":{"10101":"89273150-28a6-422f-a512-a4ce4cdd9b52"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {} // ensure no trailing comma for IE
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();