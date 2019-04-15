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
      };var element = document.getElementById("5868fa95-3dde-4011-8267-55cd9327eeb1");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '5868fa95-3dde-4011-8267-55cd9327eeb1' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5425b277-9796-4f53-b71f-4029361ca833":{"roots":{"references":[{"attributes":{"data_source":{"id":"2591","type":"ColumnDataSource"},"glyph":{"id":"2592","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2593","type":"Segment"},"selection_glyph":null,"view":{"id":"2595","type":"CDSView"}},"id":"2594","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2616","type":"ColumnDataSource"}},"id":"2620","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":["a","b","c","c","c","e","e","e","e","f"],"y":[3.0255907397909936,3.041353441778858,-1.9217262572964149,3.9153098980688146,-2.354826159747051,-1.1298444630525286,-1.2194906125935656,-1.0311467260273153,4.785135986273231,5.045292670056563]},"selected":{"id":"2644","type":"Selection"},"selection_policy":{"id":"2645","type":"UnionRenderers"}},"id":"2621","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#F38630"},"line_color":{"value":"#F38630"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"2622","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"2623","type":"Circle"},{"attributes":{"data_source":{"id":"2621","type":"ColumnDataSource"},"glyph":{"id":"2622","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2623","type":"Circle"},"selection_glyph":null,"view":{"id":"2625","type":"CDSView"}},"id":"2624","type":"GlyphRenderer"},{"attributes":{},"id":"2579","type":"LinearScale"},{"attributes":{},"id":"2634","type":"Selection"},{"attributes":{"source":{"id":"2621","type":"ColumnDataSource"}},"id":"2625","type":"CDSView"},{"attributes":{"formatter":{"id":"2628","type":"CategoricalTickFormatter"},"major_label_text_font_size":{"value":"12pt"},"ticker":{"id":"2582","type":"CategoricalTicker"}},"id":"2581","type":"CategoricalAxis"},{"attributes":{"callback":null,"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"ibd9uuAJB0C8ZwuyAgUHQMuAAK4MygxARQpONyfqDkC/G2ZSzI8SQIrwPUyu7xNA","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"WCfryDJy6T+Gpp6T4cfoP0R6ySyLCvs/iszkWavx+z/mwguOifsEQJ8Wk8G/2QVA","dtype":"float64","shape":[6]}},"selected":{"id":"2632","type":"Selection"},"selection_policy":{"id":"2633","type":"UnionRenderers"}},"id":"2591","type":"ColumnDataSource"},{"attributes":{"text":""},"id":"2627","type":"Title"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"2592","type":"Segment"},{"attributes":{},"id":"2628","type":"CategoricalTickFormatter"},{"attributes":{"source":{"id":"2591","type":"ColumnDataSource"}},"id":"2595","type":"CDSView"},{"attributes":{},"id":"2630","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"2593","type":"Segment"},{"attributes":{},"id":"2635","type":"UnionRenderers"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"2597","type":"Segment"},{"attributes":{},"id":"2636","type":"Selection"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"2598","type":"Segment"},{"attributes":{},"id":"2637","type":"UnionRenderers"},{"attributes":{"background_fill_color":{"value":"#efefef"},"below":[{"id":"2581","type":"CategoricalAxis"}],"center":[{"id":"2584","type":"Grid"},{"id":"2589","type":"Grid"}],"left":[{"id":"2585","type":"LinearAxis"}],"renderers":[{"id":"2594","type":"GlyphRenderer"},{"id":"2599","type":"GlyphRenderer"},{"id":"2604","type":"GlyphRenderer"},{"id":"2609","type":"GlyphRenderer"},{"id":"2614","type":"GlyphRenderer"},{"id":"2619","type":"GlyphRenderer"},{"id":"2624","type":"GlyphRenderer"}],"title":{"id":"2627","type":"Title"},"toolbar":{"id":"2590","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2573","type":"FactorRange"},"x_scale":{"id":"2577","type":"CategoricalScale"},"y_range":{"id":"2575","type":"DataRange1d"},"y_scale":{"id":"2579","type":"LinearScale"}},"id":"2572","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"WFP18AXgAsCQbp50OZMFwEVn6CG32ve/Knkj25ps9b8IUykK6aznv4gdVeFGFeq/","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"2qccTa0G478Y/xU6jxXkvzSAPDVcu9o/nIL30shi1D+sP2yoqXH0P/bJ77kDrPM/","dtype":"float64","shape":[6]}},"selected":{"id":"2634","type":"Selection"},"selection_policy":{"id":"2635","type":"UnionRenderers"}},"id":"2596","type":"ColumnDataSource"},{"attributes":{},"id":"2638","type":"Selection"},{"attributes":{"grid_line_color":{"value":null},"grid_line_width":{"value":2},"ticker":{"id":"2582","type":"CategoricalTicker"}},"id":"2584","type":"Grid"},{"attributes":{},"id":"2639","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"2596","type":"ColumnDataSource"},"glyph":{"id":"2597","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2598","type":"Segment"},"selection_glyph":null,"view":{"id":"2600","type":"CDSView"}},"id":"2599","type":"GlyphRenderer"},{"attributes":{},"id":"2640","type":"Selection"},{"attributes":{"source":{"id":"2596","type":"ColumnDataSource"}},"id":"2600","type":"CDSView"},{"attributes":{},"id":"2641","type":"UnionRenderers"},{"attributes":{},"id":"2642","type":"Selection"},{"attributes":{"callback":null,"data":{"bottom":{"__ndarray__":"WCfryDJy6T+Gpp6T4cfoP0R6ySyLCvs/iszkWavx+z/mwguOifsEQJ8Wk8G/2QVA","dtype":"float64","shape":[6]},"top":{"__ndarray__":"TkX/zWsOwT9XjtpiD2SzvxD9lb6iLPE/+opsxacB8T+RLG7UvBj/P1jYXvEFrv8/","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]},"selected":{"id":"2636","type":"Selection"},"selection_policy":{"id":"2637","type":"UnionRenderers"}},"id":"2601","type":"ColumnDataSource"},{"attributes":{},"id":"2643","type":"UnionRenderers"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#E08E79"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"2602","type":"VBar"},{"attributes":{},"id":"2644","type":"Selection"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"2603","type":"VBar"},{"attributes":{},"id":"2645","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"2601","type":"ColumnDataSource"},"glyph":{"id":"2602","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2603","type":"VBar"},"selection_glyph":null,"view":{"id":"2605","type":"CDSView"}},"id":"2604","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2601","type":"ColumnDataSource"}},"id":"2605","type":"CDSView"},{"attributes":{"callback":null,"data":{"bottom":{"__ndarray__":"TkX/zWsOwT9XjtpiD2SzvxD9lb6iLPE/+opsxacB8T+RLG7UvBj/P1jYXvEFrv8/","dtype":"float64","shape":[6]},"top":{"__ndarray__":"2qccTa0G478Y/xU6jxXkvzSAPDVcu9o/nIL30shi1D+sP2yoqXH0P/bJ77kDrPM/","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]},"selected":{"id":"2638","type":"Selection"},"selection_policy":{"id":"2639","type":"UnionRenderers"}},"id":"2606","type":"ColumnDataSource"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#3B8686"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"2607","type":"VBar"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"2608","type":"VBar"},{"attributes":{"data_source":{"id":"2606","type":"ColumnDataSource"},"glyph":{"id":"2607","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2608","type":"VBar"},"selection_glyph":null,"view":{"id":"2610","type":"CDSView"}},"id":"2609","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"2630","type":"BasicTickFormatter"},"ticker":{"id":"2586","type":"BasicTicker"}},"id":"2585","type":"LinearAxis"},{"attributes":{"callback":null},"id":"2575","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"2590","type":"Toolbar"},{"attributes":{"source":{"id":"2606","type":"ColumnDataSource"}},"id":"2610","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"WFP18AXgAsCQbp50OZMFwEVn6CG32ve/Knkj25ps9b8IUykK6aznv4gdVeFGFeq/","dtype":"float64","shape":[6]}},"selected":{"id":"2640","type":"Selection"},"selection_policy":{"id":"2641","type":"UnionRenderers"}},"id":"2611","type":"ColumnDataSource"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"grid_line_width":{"value":2},"ticker":{"id":"2586","type":"BasicTicker"}},"id":"2589","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"2612","type":"Rect"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f"]},"id":"2573","type":"FactorRange"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"2613","type":"Rect"},{"attributes":{},"id":"2577","type":"CategoricalScale"},{"attributes":{"data_source":{"id":"2611","type":"ColumnDataSource"},"glyph":{"id":"2612","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2613","type":"Rect"},"selection_glyph":null,"view":{"id":"2615","type":"CDSView"}},"id":"2614","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2611","type":"ColumnDataSource"}},"id":"2615","type":"CDSView"},{"attributes":{},"id":"2586","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"ibd9uuAJB0C8ZwuyAgUHQMuAAK4MygxARQpONyfqDkC/G2ZSzI8SQIrwPUyu7xNA","dtype":"float64","shape":[6]}},"selected":{"id":"2642","type":"Selection"},"selection_policy":{"id":"2643","type":"UnionRenderers"}},"id":"2616","type":"ColumnDataSource"},{"attributes":{},"id":"2632","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"2617","type":"Rect"},{"attributes":{},"id":"2633","type":"UnionRenderers"},{"attributes":{},"id":"2582","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"2618","type":"Rect"},{"attributes":{"data_source":{"id":"2616","type":"ColumnDataSource"},"glyph":{"id":"2617","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2618","type":"Rect"},"selection_glyph":null,"view":{"id":"2620","type":"CDSView"}},"id":"2619","type":"GlyphRenderer"}],"root_ids":["2572"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"5425b277-9796-4f53-b71f-4029361ca833","roots":{"2572":"5868fa95-3dde-4011-8267-55cd9327eeb1"}}];
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