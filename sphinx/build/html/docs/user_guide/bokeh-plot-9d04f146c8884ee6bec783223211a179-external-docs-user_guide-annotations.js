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
      };var element = document.getElementById("41e54734-81ba-4045-8605-b262d11af2cb");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '41e54734-81ba-4045-8605-b262d11af2cb' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"7674830c-2617-4c4f-9ac5-9f703a96aa2b":{"roots":{"references":[{"attributes":{},"id":"17372","type":"HelpTool"},{"attributes":{"callback":null},"id":"17349","type":"DataRange1d"},{"attributes":{"source":{"id":"17380","type":"ColumnDataSource"}},"id":"17384","type":"CDSView"},{"attributes":{},"id":"17363","type":"BasicTicker"},{"attributes":{},"id":"17387","type":"BasicTickFormatter"},{"attributes":{},"id":"17368","type":"WheelZoomTool"},{"attributes":{},"id":"17371","type":"ResetTool"},{"attributes":{},"id":"17355","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"17381","type":"Circle"},{"attributes":{"data_source":{"id":"17380","type":"ColumnDataSource"},"glyph":{"id":"17381","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17382","type":"Circle"},"selection_glyph":null,"view":{"id":"17384","type":"CDSView"}},"id":"17383","type":"GlyphRenderer"},{"attributes":{"dimension":1,"ticker":{"id":"17363","type":"BasicTicker"}},"id":"17366","type":"Grid"},{"attributes":{"ticker":{"id":"17358","type":"BasicTicker"}},"id":"17361","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17367","type":"PanTool"},{"id":"17368","type":"WheelZoomTool"},{"id":"17369","type":"BoxZoomTool"},{"id":"17370","type":"SaveTool"},{"id":"17371","type":"ResetTool"},{"id":"17372","type":"HelpTool"}]},"id":"17373","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"17382","type":"Circle"},{"attributes":{},"id":"17392","type":"UnionRenderers"},{"attributes":{"below":[{"id":"17357","type":"LinearAxis"},{"id":"17385","type":"Title"}],"center":[{"id":"17361","type":"Grid"},{"id":"17366","type":"Grid"}],"left":[{"id":"17362","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"17383","type":"GlyphRenderer"}],"title":{"id":"17347","type":"Title"},"title_location":"left","toolbar":{"id":"17373","type":"Toolbar"},"x_range":{"id":"17349","type":"DataRange1d"},"x_scale":{"id":"17353","type":"LinearScale"},"y_range":{"id":"17351","type":"DataRange1d"},"y_scale":{"id":"17355","type":"LinearScale"}},"id":"17346","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17358","type":"BasicTicker"},{"attributes":{"align":"center","text":"Bottom Centered Title"},"id":"17385","type":"Title"},{"attributes":{"callback":null},"id":"17351","type":"DataRange1d"},{"attributes":{},"id":"17367","type":"PanTool"},{"attributes":{"overlay":{"id":"17393","type":"BoxAnnotation"}},"id":"17369","type":"BoxZoomTool"},{"attributes":{},"id":"17389","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[1,2],"y":[3,4]},"selected":{"id":"17391","type":"Selection"},"selection_policy":{"id":"17392","type":"UnionRenderers"}},"id":"17380","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"17387","type":"BasicTickFormatter"},"ticker":{"id":"17358","type":"BasicTicker"}},"id":"17357","type":"LinearAxis"},{"attributes":{},"id":"17391","type":"Selection"},{"attributes":{"text":"Left Title"},"id":"17347","type":"Title"},{"attributes":{},"id":"17353","type":"LinearScale"},{"attributes":{"formatter":{"id":"17389","type":"BasicTickFormatter"},"ticker":{"id":"17363","type":"BasicTicker"}},"id":"17362","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17393","type":"BoxAnnotation"},{"attributes":{},"id":"17370","type":"SaveTool"}],"root_ids":["17346"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"7674830c-2617-4c4f-9ac5-9f703a96aa2b","roots":{"17346":"41e54734-81ba-4045-8605-b262d11af2cb"}}];
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