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
      };var element = document.getElementById("1b16d5be-9397-4e42-8b19-e691cb2162a9");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '1b16d5be-9397-4e42-8b19-e691cb2162a9' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1f5c1d38-11a5-4b32-9d0b-5365ab87be85":{"roots":{"references":[{"attributes":{},"id":"16454","type":"Selection"},{"attributes":{"ticker":{"id":"16421","type":"BasicTicker"}},"id":"16424","type":"Grid"},{"attributes":{"below":[{"id":"16420","type":"LinearAxis"}],"center":[{"id":"16424","type":"Grid"},{"id":"16429","type":"Grid"}],"left":[{"id":"16425","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"16446","type":"GlyphRenderer"}],"title":{"id":"16449","type":"Title"},"toolbar":{"id":"16436","type":"Toolbar"},"x_range":{"id":"16412","type":"DataRange1d"},"x_scale":{"id":"16416","type":"LinearScale"},"y_range":{"id":"16414","type":"DataRange1d"},"y_scale":{"id":"16418","type":"LinearScale"}},"id":"16411","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"16455","type":"UnionRenderers"},{"attributes":{},"id":"16434","type":"ResetTool"},{"attributes":{"formatter":{"id":"16452","type":"BasicTickFormatter"},"ticker":{"id":"16426","type":"BasicTicker"}},"id":"16425","type":"LinearAxis"},{"attributes":{},"id":"16435","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"16445","type":"Triangle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16456","type":"BoxAnnotation"},{"attributes":{},"id":"16426","type":"BasicTicker"},{"attributes":{"callback":null},"id":"16412","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"16426","type":"BasicTicker"}},"id":"16429","type":"Grid"},{"attributes":{},"id":"16418","type":"LinearScale"},{"attributes":{"data_source":{"id":"16443","type":"ColumnDataSource"},"glyph":{"id":"16444","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16445","type":"Triangle"},"selection_glyph":null,"view":{"id":"16447","type":"CDSView"}},"id":"16446","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"16414","type":"DataRange1d"},{"attributes":{"source":{"id":"16443","type":"ColumnDataSource"}},"id":"16447","type":"CDSView"},{"attributes":{"fill_color":{"value":"#99D594"},"line_color":{"value":"#99D594"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"16444","type":"Triangle"},{"attributes":{},"id":"16416","type":"LinearScale"},{"attributes":{"callback":null,"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"16454","type":"Selection"},"selection_policy":{"id":"16455","type":"UnionRenderers"}},"id":"16443","type":"ColumnDataSource"},{"attributes":{"text":""},"id":"16449","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16430","type":"PanTool"},{"id":"16431","type":"WheelZoomTool"},{"id":"16432","type":"BoxZoomTool"},{"id":"16433","type":"SaveTool"},{"id":"16434","type":"ResetTool"},{"id":"16435","type":"HelpTool"}]},"id":"16436","type":"Toolbar"},{"attributes":{"formatter":{"id":"16450","type":"BasicTickFormatter"},"ticker":{"id":"16421","type":"BasicTicker"}},"id":"16420","type":"LinearAxis"},{"attributes":{},"id":"16430","type":"PanTool"},{"attributes":{},"id":"16450","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"16456","type":"BoxAnnotation"}},"id":"16432","type":"BoxZoomTool"},{"attributes":{},"id":"16431","type":"WheelZoomTool"},{"attributes":{},"id":"16452","type":"BasicTickFormatter"},{"attributes":{},"id":"16421","type":"BasicTicker"},{"attributes":{},"id":"16433","type":"SaveTool"}],"root_ids":["16411"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"1f5c1d38-11a5-4b32-9d0b-5365ab87be85","roots":{"16411":"1b16d5be-9397-4e42-8b19-e691cb2162a9"}}];
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