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
      };var element = document.getElementById("cc47afa5-6589-4607-9faa-8c07a57a4d08");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'cc47afa5-6589-4607-9faa-8c07a57a4d08' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"42e0150b-12e8-4a2b-a602-7cfd29762692":{"roots":{"references":[{"attributes":{},"id":"33493","type":"PanTool"},{"attributes":{"source":{"id":"33506","type":"ColumnDataSource"}},"id":"33510","type":"CDSView"},{"attributes":{"grid_line_color":{"value":null},"ticker":{"id":"33484","type":"BasicTicker"}},"id":"33487","type":"Grid"},{"attributes":{},"id":"33489","type":"BasicTicker"},{"attributes":{},"id":"33494","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"33515","type":"BasicTickFormatter"},"ticker":{"id":"33489","type":"BasicTicker"}},"id":"33488","type":"LinearAxis"},{"attributes":{},"id":"33515","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"33519","type":"BoxAnnotation"}},"id":"33495","type":"BoxZoomTool"},{"attributes":{},"id":"33484","type":"BasicTicker"},{"attributes":{},"id":"33517","type":"Selection"},{"attributes":{},"id":"33497","type":"ResetTool"},{"attributes":{"formatter":{"id":"33513","type":"BasicTickFormatter"},"ticker":{"id":"33484","type":"BasicTicker"}},"id":"33483","type":"LinearAxis"},{"attributes":{},"id":"33496","type":"SaveTool"},{"attributes":{},"id":"33518","type":"UnionRenderers"},{"attributes":{},"id":"33498","type":"HelpTool"},{"attributes":{},"id":"33479","type":"LinearScale"},{"attributes":{"dimension":1,"grid_line_alpha":{"value":0.5},"grid_line_dash":[6,4],"ticker":{"id":"33489","type":"BasicTicker"}},"id":"33492","type":"Grid"},{"attributes":{"callback":null},"id":"33475","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33519","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"33477","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"33508","type":"Circle"},{"attributes":{"below":[{"id":"33483","type":"LinearAxis"}],"center":[{"id":"33487","type":"Grid"},{"id":"33492","type":"Grid"}],"left":[{"id":"33488","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"33509","type":"GlyphRenderer"}],"title":{"id":"33512","type":"Title"},"toolbar":{"id":"33499","type":"Toolbar"},"x_range":{"id":"33475","type":"DataRange1d"},"x_scale":{"id":"33479","type":"LinearScale"},"y_range":{"id":"33477","type":"DataRange1d"},"y_scale":{"id":"33481","type":"LinearScale"}},"id":"33474","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"33506","type":"ColumnDataSource"},"glyph":{"id":"33507","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33508","type":"Circle"},"selection_glyph":null,"view":{"id":"33510","type":"CDSView"}},"id":"33509","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"33507","type":"Circle"},{"attributes":{"text":""},"id":"33512","type":"Title"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"33517","type":"Selection"},"selection_policy":{"id":"33518","type":"UnionRenderers"}},"id":"33506","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33493","type":"PanTool"},{"id":"33494","type":"WheelZoomTool"},{"id":"33495","type":"BoxZoomTool"},{"id":"33496","type":"SaveTool"},{"id":"33497","type":"ResetTool"},{"id":"33498","type":"HelpTool"}]},"id":"33499","type":"Toolbar"},{"attributes":{},"id":"33481","type":"LinearScale"},{"attributes":{},"id":"33513","type":"BasicTickFormatter"}],"root_ids":["33474"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"42e0150b-12e8-4a2b-a602-7cfd29762692","roots":{"33474":"cc47afa5-6589-4607-9faa-8c07a57a4d08"}}];
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