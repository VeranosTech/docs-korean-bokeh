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
      };var element = document.getElementById("1364a885-f3de-4924-b8a5-d681e26e55f5");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '1364a885-f3de-4924-b8a5-d681e26e55f5' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a76e294c-34a4-4db8-a553-c294eb56c95c":{"roots":{"references":[{"attributes":{"overlay":{"id":"8082","type":"BoxAnnotation"}},"id":"8058","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"8078","type":"BasicTickFormatter"},"ticker":{"id":"8052","type":"BasicTicker"}},"id":"8051","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8082","type":"BoxAnnotation"},{"attributes":{"text":""},"id":"8075","type":"Title"},{"attributes":{"source":{"id":"8069","type":"ColumnDataSource"}},"id":"8073","type":"CDSView"},{"attributes":{},"id":"8059","type":"SaveTool"},{"attributes":{"minor_grid_line_color":{"value":"#eeeeee"},"ticker":{"id":"8047","type":"BasicTicker"}},"id":"8050","type":"Grid"},{"attributes":{"callback":null,"end":800},"id":"8040","type":"Range1d"},{"attributes":{},"id":"8080","type":"Selection"},{"attributes":{},"id":"8060","type":"ResetTool"},{"attributes":{"formatter":{"id":"8076","type":"BasicTickFormatter"},"ticker":{"id":"8047","type":"BasicTicker"}},"id":"8046","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"fill_color":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"],"xs":[[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]],"ys":[{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFRAAAAAAACAS0AAAAAAAAA0QAAAAAAAgEBAAAAAAACAQEAAAAAAAEBTQAAAAAAAgEdAAAAAAACAS0AAAAAAAMBQQAAAAAAAgFdAAAAAAADAVEAAAAAAAIBCQAAAAAAAAEhAAAAAAADAU0AAAAAAAAAzQAAAAAAAACZAAAAAAADAVkAAAAAAAABIQAAAAAAAAEZAAAAAAAAAQ0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAAQ0AAAAAAAABGQAAAAAAAAEhAAAAAAADAVkAAAAAAAAAmQAAAAAAAADNAAAAAAADAU0AAAAAAAABIQAAAAAAAgEJAAAAAAADAVEAAAAAAAIBXQAAAAAAAwFBAAAAAAACAS0AAAAAAAIBHQAAAAAAAQFNAAAAAAACAQEAAAAAAAIBAQAAAAAAAADRAAAAAAACAS0AAAAAAAEBUQAAAAAAAwGNAAAAAAAAAYEAAAAAAAEBdQAAAAAAAAEZAAAAAAADAUUAAAAAAAMBfQAAAAAAAAFJAAAAAAABAWUAAAAAAAEBjQAAAAAAAAGRAAAAAAACgYEAAAAAAAABMQAAAAAAAgFBAAAAAAABgZUAAAAAAAMBbQAAAAAAAADxAAAAAAACgZUAAAAAAAEBZQAAAAAAAgFtAAAAAAAAAYEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAAYEAAAAAAAIBbQAAAAAAAQFlAAAAAAACgZUAAAAAAAAA8QAAAAAAAwFtAAAAAAABgZUAAAAAAAIBQQAAAAAAAAExAAAAAAACgYEAAAAAAAABkQAAAAAAAQGNAAAAAAABAWUAAAAAAAABSQAAAAAAAwF9AAAAAAADAUUAAAAAAAABGQAAAAAAAQF1AAAAAAAAAYEAAAAAAAMBjQAAAAAAAYGVAAAAAAABAaUAAAAAAAMBkQAAAAAAAAFVAAAAAAAAAW0AAAAAAAOBkQAAAAAAAQFlAAAAAAADAZkAAAAAAAKBlQAAAAAAAIGlAAAAAAACAZEAAAAAAAMBYQAAAAAAAIGRAAAAAAABAZ0AAAAAAAOBoQAAAAAAAwFpAAAAAAACgb0AAAAAAAABpQAAAAAAAAGFAAAAAAAAAbEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAAbEAAAAAAAABhQAAAAAAAAGlAAAAAAACgb0AAAAAAAMBaQAAAAAAA4GhAAAAAAABAZ0AAAAAAACBkQAAAAAAAwFhAAAAAAACAZEAAAAAAACBpQAAAAAAAoGVAAAAAAADAZkAAAAAAAEBZQAAAAAAA4GRAAAAAAAAAW0AAAAAAAABVQAAAAAAAwGRAAAAAAABAaUAAAAAAAGBlQAAAAAAAoG5AAAAAAADAckAAAAAAAKBtQAAAAAAAQGNAAAAAAACgZkAAAAAAAOBnQAAAAAAAYGVAAAAAAAAAbEAAAAAAAIBnQAAAAAAAoGxAAAAAAAAgaUAAAAAAAEBgQAAAAAAAYGpAAAAAAADQcUAAAAAAABBxQAAAAAAA4GVAAAAAAABQdUAAAAAAAEBrQAAAAAAAAGdAAAAAAADgcEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADgcEAAAAAAAABnQAAAAAAAQGtAAAAAAABQdUAAAAAAAOBlQAAAAAAAEHFAAAAAAADQcUAAAAAAAGBqQAAAAAAAQGBAAAAAAAAgaUAAAAAAAKBsQAAAAAAAgGdAAAAAAAAAbEAAAAAAAGBlQAAAAAAA4GdAAAAAAACgZkAAAAAAAEBjQAAAAAAAoG1AAAAAAADAckAAAAAAAKBuQAAAAAAAUHJAAAAAAADwdEAAAAAAABBzQAAAAAAAQGdAAAAAAAAAcUAAAAAAAHBwQAAAAAAAgGdAAAAAAADwcUAAAAAAAHBwQAAAAAAA4G1AAAAAAAAAbUAAAAAAAOBqQAAAAAAAoG1AAAAAAABAc0AAAAAAABBzQAAAAAAAQHBAAAAAAABweEAAAAAAAHBwQAAAAAAAAGlAAAAAAADgdkA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADgdkAAAAAAAABpQAAAAAAAcHBAAAAAAABweEAAAAAAAEBwQAAAAAAAEHNAAAAAAABAc0AAAAAAAKBtQAAAAAAA4GpAAAAAAAAAbUAAAAAAAOBtQAAAAAAAcHBAAAAAAADwcUAAAAAAAIBnQAAAAAAAcHBAAAAAAAAAcUAAAAAAAEBnQAAAAAAAEHNAAAAAAADwdEAAAAAAAFByQAAAAAAAMHZAAAAAAACweEAAAAAAAEB1QAAAAAAAIGlAAAAAAACgcUAAAAAAAOByQAAAAAAA4GhAAAAAAACAd0AAAAAAABB2QAAAAAAA4HRAAAAAAAAQckAAAAAAAGBzQAAAAAAAQG9AAAAAAACQd0AAAAAAACB3QAAAAAAAAHRAAAAAAABwe0AAAAAAAJBzQAAAAAAAYHFAAAAAAADAe0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADAe0AAAAAAAGBxQAAAAAAAkHNAAAAAAABwe0AAAAAAAAB0QAAAAAAAIHdAAAAAAACQd0AAAAAAAEBvQAAAAAAAYHNAAAAAAAAQckAAAAAAAOB0QAAAAAAAEHZAAAAAAACAd0AAAAAAAOBoQAAAAAAA4HJAAAAAAACgcUAAAAAAACBpQAAAAAAAQHVAAAAAAACweEAAAAAAADB2QAAAAAAA4HdAAAAAAACwekAAAAAAAAB3QAAAAAAAYHJAAAAAAABQc0AAAAAAAAB0QAAAAAAAgGtAAAAAAAAweEAAAAAAANB2QAAAAAAA4HZAAAAAAABQd0AAAAAAAGB3QAAAAAAAEHVAAAAAAAAQfUAAAAAAAEB8QAAAAAAAoHRAAAAAAABQfEAAAAAAAEB5QAAAAAAAIHRAAAAAAACgfUA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAACgfUAAAAAAACB0QAAAAAAAQHlAAAAAAABQfEAAAAAAAKB0QAAAAAAAQHxAAAAAAAAQfUAAAAAAABB1QAAAAAAAYHdAAAAAAABQd0AAAAAAAOB2QAAAAAAA0HZAAAAAAAAweEAAAAAAAIBrQAAAAAAAAHRAAAAAAABQc0AAAAAAAGByQAAAAAAAAHdAAAAAAACwekAAAAAAAOB3QAAAAAAAoHxAAAAAAADAfEAAAAAAAEB5QAAAAAAA0HZAAAAAAADQdUAAAAAAALB3QAAAAAAAoHNAAAAAAAAQe0AAAAAAAHB7QAAAAAAA0HhAAAAAAACAekAAAAAAAMB6QAAAAAAA8HhAAAAAAADQf0AAAAAAABCAQAAAAAAAUHlAAAAAAAAwfUAAAAAAAFB/QAAAAAAAwHlAAAAAAADgfkA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADgfkAAAAAAAMB5QAAAAAAAUH9AAAAAAAAwfUAAAAAAAFB5QAAAAAAAEIBAAAAAAADQf0AAAAAAAPB4QAAAAAAAwHpAAAAAAACAekAAAAAAANB4QAAAAAAAcHtAAAAAAAAQe0AAAAAAAKBzQAAAAAAAsHdAAAAAAADQdUAAAAAAANB2QAAAAAAAQHlAAAAAAADAfEAAAAAAAKB8QAAAAAAAOIFAAAAAAADQf0AAAAAAAEB7QAAAAAAAsHhAAAAAAABwekAAAAAAAIB8QAAAAAAA4HhAAAAAAACwfUAAAAAAAEB/QAAAAAAAEHpAAAAAAABAfEAAAAAAALB7QAAAAAAA8H1AAAAAAAA4gEAAAAAAALCAQAAAAAAAYH9AAAAAAAAQf0AAAAAAAMiBQAAAAAAA4HxAAAAAAACYgUA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAACYgUAAAAAAAOB8QAAAAAAAyIFAAAAAAAAQf0AAAAAAAGB/QAAAAAAAsIBAAAAAAAA4gEAAAAAAAPB9QAAAAAAAsHtAAAAAAABAfEAAAAAAABB6QAAAAAAAQH9AAAAAAACwfUAAAAAAAOB4QAAAAAAAgHxAAAAAAABwekAAAAAAALB4QAAAAAAAQHtAAAAAAADQf0AAAAAAADiBQAAAAAAAWINAAAAAAADAgkAAAAAAAMB8QAAAAAAA4HxAAAAAAADgfEAAAAAAAFB+QAAAAAAAoHpAAAAAAABIgEAAAAAAAFCAQAAAAAAAcH5AAAAAAADwfUAAAAAAAACAQAAAAAAA4IFAAAAAAACQgUAAAAAAADCBQAAAAAAAgIFAAAAAAABggkAAAAAAAEiEQAAAAAAAoH1AAAAAAABAhEA=","dtype":"float64","shape":[40]}]},"selected":{"id":"8080","type":"Selection"},"selection_policy":{"id":"8081","type":"UnionRenderers"}},"id":"8069","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"8046","type":"LinearAxis"}],"center":[{"id":"8050","type":"Grid"},{"id":"8055","type":"Grid"}],"left":[{"id":"8051","type":"LinearAxis"}],"renderers":[{"id":"8072","type":"GlyphRenderer"}],"title":{"id":"8075","type":"Title"},"toolbar":{"id":"8062","type":"Toolbar"},"x_range":{"id":"8038","type":"Range1d"},"x_scale":{"id":"8042","type":"LinearScale"},"y_range":{"id":"8040","type":"Range1d"},"y_scale":{"id":"8044","type":"LinearScale"}},"id":"8037","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8047","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"8071","type":"Patches"},{"attributes":{},"id":"8044","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"field":"fill_color"},"line_alpha":{"value":0.8},"line_color":{"value":null},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"8070","type":"Patches"},{"attributes":{},"id":"8061","type":"HelpTool"},{"attributes":{},"id":"8081","type":"UnionRenderers"},{"attributes":{},"id":"8078","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"minor_grid_line_color":{"value":"#eeeeee"},"ticker":{"id":"8052","type":"BasicTicker"}},"id":"8055","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8056","type":"PanTool"},{"id":"8057","type":"WheelZoomTool"},{"id":"8058","type":"BoxZoomTool"},{"id":"8059","type":"SaveTool"},{"id":"8060","type":"ResetTool"},{"id":"8061","type":"HelpTool"}]},"id":"8062","type":"Toolbar"},{"attributes":{},"id":"8076","type":"BasicTickFormatter"},{"attributes":{},"id":"8042","type":"LinearScale"},{"attributes":{},"id":"8056","type":"PanTool"},{"attributes":{"callback":null,"end":19},"id":"8038","type":"Range1d"},{"attributes":{},"id":"8052","type":"BasicTicker"},{"attributes":{"data_source":{"id":"8069","type":"ColumnDataSource"},"glyph":{"id":"8070","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8071","type":"Patches"},"selection_glyph":null,"view":{"id":"8073","type":"CDSView"}},"id":"8072","type":"GlyphRenderer"},{"attributes":{},"id":"8057","type":"WheelZoomTool"}],"root_ids":["8037"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"a76e294c-34a4-4db8-a553-c294eb56c95c","roots":{"8037":"1364a885-f3de-4924-b8a5-d681e26e55f5"}}];
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