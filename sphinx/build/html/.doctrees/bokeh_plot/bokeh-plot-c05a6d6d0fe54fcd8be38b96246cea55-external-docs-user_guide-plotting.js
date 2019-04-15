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
      };var element = document.getElementById("f62aa129-a9aa-4ae6-8667-458e8ecd27a4");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'f62aa129-a9aa-4ae6-8667-458e8ecd27a4' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.1.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.1.0.min.js"];
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
                    
                  var docs_json = '{"41810067-ec92-4f6f-ad28-069f6676ad73":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"29144","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"29102","type":"DataRange1d"},{"attributes":{},"id":"29138","type":"BasicTickFormatter"},{"attributes":{},"id":"29118","type":"PanTool"},{"attributes":{},"id":"29114","type":"BasicTicker"},{"attributes":{"callback":null},"id":"29100","type":"DataRange1d"},{"attributes":{},"id":"29123","type":"HelpTool"},{"attributes":{"ticker":{"id":"29109","type":"BasicTicker"}},"id":"29112","type":"Grid"},{"attributes":{},"id":"29104","type":"LinearScale"},{"attributes":{"formatter":{"id":"29138","type":"BasicTickFormatter"},"ticker":{"id":"29109","type":"BasicTicker"}},"id":"29108","type":"LinearAxis"},{"attributes":{"source":{"id":"29131","type":"ColumnDataSource"}},"id":"29135","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"29118","type":"PanTool"},{"id":"29119","type":"WheelZoomTool"},{"id":"29120","type":"BoxZoomTool"},{"id":"29121","type":"SaveTool"},{"id":"29122","type":"ResetTool"},{"id":"29123","type":"HelpTool"}]},"id":"29124","type":"Toolbar"},{"attributes":{},"id":"29106","type":"LinearScale"},{"attributes":{"dimension":1,"ticker":{"id":"29114","type":"BasicTicker"}},"id":"29117","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"29142","type":"Selection"},"selection_policy":{"id":"29143","type":"UnionRenderers"}},"id":"29131","type":"ColumnDataSource"},{"attributes":{},"id":"29140","type":"BasicTickFormatter"},{"attributes":{},"id":"29142","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.25},"x":{"field":"x"},"y":{"field":"y"}},"id":"29133","type":"Annulus"},{"attributes":{"data_source":{"id":"29131","type":"ColumnDataSource"},"glyph":{"id":"29132","type":"Annulus"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"29133","type":"Annulus"},"selection_glyph":null,"view":{"id":"29135","type":"CDSView"}},"id":"29134","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"orange"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.6},"line_color":{"value":"orange"},"outer_radius":{"units":"data","value":0.25},"x":{"field":"x"},"y":{"field":"y"}},"id":"29132","type":"Annulus"},{"attributes":{"formatter":{"id":"29140","type":"BasicTickFormatter"},"ticker":{"id":"29114","type":"BasicTicker"}},"id":"29113","type":"LinearAxis"},{"attributes":{},"id":"29109","type":"BasicTicker"},{"attributes":{"below":[{"id":"29108","type":"LinearAxis"}],"center":[{"id":"29112","type":"Grid"},{"id":"29117","type":"Grid"}],"left":[{"id":"29113","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"29134","type":"GlyphRenderer"}],"title":{"id":"29137","type":"Title"},"toolbar":{"id":"29124","type":"Toolbar"},"x_range":{"id":"29100","type":"DataRange1d"},"x_scale":{"id":"29104","type":"LinearScale"},"y_range":{"id":"29102","type":"DataRange1d"},"y_scale":{"id":"29106","type":"LinearScale"}},"id":"29099","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"29121","type":"SaveTool"},{"attributes":{},"id":"29122","type":"ResetTool"},{"attributes":{"text":""},"id":"29137","type":"Title"},{"attributes":{},"id":"29119","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"29144","type":"BoxAnnotation"}},"id":"29120","type":"BoxZoomTool"},{"attributes":{},"id":"29143","type":"UnionRenderers"}],"root_ids":["29099"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"41810067-ec92-4f6f-ad28-069f6676ad73","roots":{"29099":"f62aa129-a9aa-4ae6-8667-458e8ecd27a4"}}];
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