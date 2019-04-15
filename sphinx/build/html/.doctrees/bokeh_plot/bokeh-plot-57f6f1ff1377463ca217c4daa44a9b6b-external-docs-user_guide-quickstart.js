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
      };var element = document.getElementById("6a484787-1448-4034-ad76-17adb54a8fbf");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '6a484787-1448-4034-ad76-17adb54a8fbf' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"94286c95-dc5f-4b45-a7b9-0f9383ce5897":{"roots":{"references":[{"attributes":{"overlay":{"id":"30550","type":"BoxAnnotation"}},"id":"30485","type":"BoxZoomTool"},{"attributes":{"callback":null,"overlay":{"id":"30562","type":"BoxAnnotation"}},"id":"30528","type":"BoxSelectTool"},{"attributes":{"callback":null},"id":"30467","type":"DataRange1d"},{"attributes":{},"id":"30471","type":"LinearScale"},{"attributes":{},"id":"30483","type":"PanTool"},{"attributes":{},"id":"30479","type":"BasicTicker"},{"attributes":{"children":[{"id":"30567","type":"ToolbarBox"},{"id":"30565","type":"GridBox"}]},"id":"30568","type":"Column"},{"attributes":{"callback":null,"overlay":{"id":"30563","type":"PolyAnnotation"}},"id":"30529","type":"LassoSelectTool"},{"attributes":{"callback":null},"id":"30465","type":"DataRange1d"},{"attributes":{},"id":"30469","type":"LinearScale"},{"attributes":{"callback":null},"id":"30505","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"30540","type":"Circle"},{"attributes":{"callback":null},"id":"30507","type":"DataRange1d"},{"attributes":{"data_source":{"id":"30462","type":"ColumnDataSource"},"glyph":{"id":"30539","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30540","type":"Circle"},"selection_glyph":null,"view":{"id":"30542","type":"CDSView"}},"id":"30541","type":"GlyphRenderer"},{"attributes":{},"id":"30509","type":"LinearScale"},{"attributes":{},"id":"30511","type":"LinearScale"},{"attributes":{"source":{"id":"30462","type":"ColumnDataSource"}},"id":"30542","type":"CDSView"},{"attributes":{"ticker":{"id":"30474","type":"BasicTicker"}},"id":"30477","type":"Grid"},{"attributes":{"formatter":{"id":"30555","type":"BasicTickFormatter"},"ticker":{"id":"30514","type":"BasicTicker"}},"id":"30513","type":"LinearAxis"},{"attributes":{"tools":[{"id":"30483","type":"PanTool"},{"id":"30484","type":"WheelZoomTool"},{"id":"30485","type":"BoxZoomTool"},{"id":"30486","type":"ResetTool"},{"id":"30487","type":"SaveTool"},{"id":"30488","type":"BoxSelectTool"},{"id":"30489","type":"LassoSelectTool"},{"id":"30523","type":"PanTool"},{"id":"30524","type":"WheelZoomTool"},{"id":"30525","type":"BoxZoomTool"},{"id":"30526","type":"ResetTool"},{"id":"30527","type":"SaveTool"},{"id":"30528","type":"BoxSelectTool"},{"id":"30529","type":"LassoSelectTool"}]},"id":"30566","type":"ProxyToolbar"},{"attributes":{},"id":"30514","type":"BasicTicker"},{"attributes":{},"id":"30544","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"30500","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"30552","type":"PolyAnnotation"}},"id":"30489","type":"LassoSelectTool"},{"attributes":{"ticker":{"id":"30514","type":"BasicTicker"}},"id":"30517","type":"Grid"},{"attributes":{},"id":"30546","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"30544","type":"BasicTickFormatter"},"ticker":{"id":"30474","type":"BasicTicker"}},"id":"30473","type":"LinearAxis"},{"attributes":{"formatter":{"id":"30557","type":"BasicTickFormatter"},"ticker":{"id":"30519","type":"BasicTicker"}},"id":"30518","type":"LinearAxis"},{"attributes":{},"id":"30486","type":"ResetTool"},{"attributes":{},"id":"30548","type":"Selection"},{"attributes":{"children":[[{"id":"30463","subtype":"Figure","type":"Plot"},0,0],[{"id":"30503","subtype":"Figure","type":"Plot"},0,1]]},"id":"30565","type":"GridBox"},{"attributes":{},"id":"30519","type":"BasicTicker"},{"attributes":{},"id":"30549","type":"UnionRenderers"},{"attributes":{"dimension":1,"ticker":{"id":"30519","type":"BasicTicker"}},"id":"30522","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"30550","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"30473","type":"LinearAxis"}],"center":[{"id":"30477","type":"Grid"},{"id":"30482","type":"Grid"}],"left":[{"id":"30478","type":"LinearAxis"}],"plot_height":350,"plot_width":350,"renderers":[{"id":"30501","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"30490","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"30465","type":"DataRange1d"},"x_scale":{"id":"30469","type":"LinearScale"},"y_range":{"id":"30467","type":"DataRange1d"},"y_scale":{"id":"30471","type":"LinearScale"}},"id":"30463","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[300]},"y0":{"__ndarray__":"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","dtype":"float64","shape":[300]},"y1":{"__ndarray__":"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","dtype":"float64","shape":[300]}},"selected":{"id":"30548","type":"Selection"},"selection_policy":{"id":"30549","type":"UnionRenderers"}},"id":"30462","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"30546","type":"BasicTickFormatter"},"ticker":{"id":"30479","type":"BasicTicker"}},"id":"30478","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"30551","type":"BoxAnnotation"},{"attributes":{},"id":"30474","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"30499","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"30539","type":"Circle"},{"attributes":{"toolbar":{"id":"30566","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"30567","type":"ToolbarBox"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"30552","type":"PolyAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"30523","type":"PanTool"},{"id":"30524","type":"WheelZoomTool"},{"id":"30525","type":"BoxZoomTool"},{"id":"30526","type":"ResetTool"},{"id":"30527","type":"SaveTool"},{"id":"30528","type":"BoxSelectTool"},{"id":"30529","type":"LassoSelectTool"}]},"id":"30530","type":"Toolbar"},{"attributes":{},"id":"30487","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"30483","type":"PanTool"},{"id":"30484","type":"WheelZoomTool"},{"id":"30485","type":"BoxZoomTool"},{"id":"30486","type":"ResetTool"},{"id":"30487","type":"SaveTool"},{"id":"30488","type":"BoxSelectTool"},{"id":"30489","type":"LassoSelectTool"}]},"id":"30490","type":"Toolbar"},{"attributes":{},"id":"30523","type":"PanTool"},{"attributes":{"callback":null,"overlay":{"id":"30551","type":"BoxAnnotation"}},"id":"30488","type":"BoxSelectTool"},{"attributes":{"source":{"id":"30462","type":"ColumnDataSource"}},"id":"30502","type":"CDSView"},{"attributes":{},"id":"30555","type":"BasicTickFormatter"},{"attributes":{},"id":"30524","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"30462","type":"ColumnDataSource"},"glyph":{"id":"30499","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30500","type":"Circle"},"selection_glyph":null,"view":{"id":"30502","type":"CDSView"}},"id":"30501","type":"GlyphRenderer"},{"attributes":{},"id":"30557","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"30513","type":"LinearAxis"}],"center":[{"id":"30517","type":"Grid"},{"id":"30522","type":"Grid"}],"left":[{"id":"30518","type":"LinearAxis"}],"plot_height":350,"plot_width":350,"renderers":[{"id":"30541","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"30530","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"30505","type":"DataRange1d"},"x_scale":{"id":"30509","type":"LinearScale"},"y_range":{"id":"30507","type":"DataRange1d"},"y_scale":{"id":"30511","type":"LinearScale"}},"id":"30503","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"30484","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"30561","type":"BoxAnnotation"}},"id":"30525","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"30561","type":"BoxAnnotation"},{"attributes":{"dimension":1,"ticker":{"id":"30479","type":"BasicTicker"}},"id":"30482","type":"Grid"},{"attributes":{},"id":"30526","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"30562","type":"BoxAnnotation"},{"attributes":{},"id":"30527","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"30563","type":"PolyAnnotation"}],"root_ids":["30568"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"94286c95-dc5f-4b45-a7b9-0f9383ce5897","roots":{"30568":"6a484787-1448-4034-ad76-17adb54a8fbf"}}];
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