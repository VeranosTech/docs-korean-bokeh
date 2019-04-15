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
      };var element = document.getElementById("e82ccf6b-8787-4190-ae39-c1ac153cf849");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'e82ccf6b-8787-4190-ae39-c1ac153cf849' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"281794a6-7037-4b61-92e7-f558d3b82a73":{"roots":{"references":[{"attributes":{"formatter":{"id":"15871","type":"BasicTickFormatter"},"ticker":{"id":"15845","type":"BasicTicker"}},"id":"15844","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"15849","type":"PanTool"},{"id":"15850","type":"WheelZoomTool"},{"id":"15851","type":"BoxZoomTool"},{"id":"15852","type":"SaveTool"},{"id":"15853","type":"ResetTool"},{"id":"15854","type":"HelpTool"}]},"id":"15855","type":"Toolbar"},{"attributes":{},"id":"15837","type":"LinearScale"},{"attributes":{},"id":"15845","type":"BasicTicker"},{"attributes":{"data_source":{"id":"15862","type":"ColumnDataSource"},"glyph":{"id":"15863","type":"Ray"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15864","type":"Ray"},"selection_glyph":null,"view":{"id":"15866","type":"CDSView"}},"id":"15865","type":"GlyphRenderer"},{"attributes":{},"id":"15849","type":"PanTool"},{"attributes":{},"id":"15874","type":"UnionRenderers"},{"attributes":{},"id":"15853","type":"ResetTool"},{"attributes":{},"id":"15835","type":"LinearScale"},{"attributes":{"callback":null},"id":"15833","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"15875","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"15875","type":"BoxAnnotation"}},"id":"15851","type":"BoxZoomTool"},{"attributes":{},"id":"15840","type":"BasicTicker"},{"attributes":{},"id":"15852","type":"SaveTool"},{"attributes":{"text":""},"id":"15868","type":"Title"},{"attributes":{},"id":"15854","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"15873","type":"Selection"},"selection_policy":{"id":"15874","type":"UnionRenderers"}},"id":"15862","type":"ColumnDataSource"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"15863","type":"Ray"},{"attributes":{"below":[{"id":"15839","type":"LinearAxis"}],"center":[{"id":"15843","type":"Grid"},{"id":"15848","type":"Grid"}],"left":[{"id":"15844","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"15865","type":"GlyphRenderer"}],"title":{"id":"15868","type":"Title"},"toolbar":{"id":"15855","type":"Toolbar"},"x_range":{"id":"15831","type":"DataRange1d"},"x_scale":{"id":"15835","type":"LinearScale"},"y_range":{"id":"15833","type":"DataRange1d"},"y_scale":{"id":"15837","type":"LinearScale"}},"id":"15830","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"ticker":{"id":"15845","type":"BasicTicker"}},"id":"15848","type":"Grid"},{"attributes":{},"id":"15850","type":"WheelZoomTool"},{"attributes":{},"id":"15873","type":"Selection"},{"attributes":{"callback":null},"id":"15831","type":"DataRange1d"},{"attributes":{},"id":"15869","type":"BasicTickFormatter"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"15864","type":"Ray"},{"attributes":{"ticker":{"id":"15840","type":"BasicTicker"}},"id":"15843","type":"Grid"},{"attributes":{"source":{"id":"15862","type":"ColumnDataSource"}},"id":"15866","type":"CDSView"},{"attributes":{"formatter":{"id":"15869","type":"BasicTickFormatter"},"ticker":{"id":"15840","type":"BasicTicker"}},"id":"15839","type":"LinearAxis"},{"attributes":{},"id":"15871","type":"BasicTickFormatter"}],"root_ids":["15830"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"281794a6-7037-4b61-92e7-f558d3b82a73","roots":{"15830":"e82ccf6b-8787-4190-ae39-c1ac153cf849"}}];
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