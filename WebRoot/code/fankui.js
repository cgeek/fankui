if(window.Fankui_Feedback) {
	window.Fankui_Feedback = {}
}
if(!window.Fankui_Feedback || !window.Fankui_Feedback.showPopupWidget) {
	var FANKUI_CONFIGS = {
		webhost:"http://fankui.cc",
		apihost:"http://fankui.cc",
		codehost:"http://fankui.cc/code",
		pos:'right',
		app_key:0,
		type:'right'
	};

	(function(){
		var g = document.getElementsByTagName('script');
		for(var i=0, ss;ss = g[i++];) {
			if(ss.src && ss.src.indexOf('fankui.js') != -1) {
				ss.src.replace(/(app_key|pos|type)=([^&]+)/g, function(match,key,value){
					FANKUI_CONFIGS[key] = value;
				});
			}
		}

		var d = document,
		w = window,
		isStrict = document.compatMode == "CSS1Compat",
		m = Math.max,
		dd = d.documentElement,
		db = d.body,
		na = navigator.userAgent.toLowerCase(),
		wlh = window.location.host,
		head = d.getElementsByTagName('head')[0] || dd,
		ie = !! d.all,
		getWH = function () {
			return {
				h: (isStrict ? dd : db).clientHeight,
				w: (isStrict ? dd : db).clientWidth
			}
		},
		getScrollTop = function () {
			return {
				t: m(dd.scrollTop, db.scrollTop),
				l: m(dd.scrollLeft,db.scrollLeft)
			}
		},
		render = function(template,params) {
			return template.replace(/\#\{([^{}]*)\}/g, function(a,b) {
				var r = params[b];
				return typeof r === "string" || typeof r === "number" ? r : a;
			});
		},
		insertHtml = function(html) {
			var dummy = d.createElement("div");
			dummy.innerHTML = html;
			document.body.insertBefore(dummy.firstChild, db.firstChild);
			return db.firstChild;
		},
		includeCss = function(cssString) {
			var styleElement = d.createElement("style");
			styleElement.type = "text/css";
			styleElement.media = "screen";
			if (styleElement.styleSheet) {
				styleElement.styleSheet.cssText = cssString;
			} else {
				styleElement.appendChild(d.createTextNode(cssString));
			}
			head.appendChild(styleElement);
		},
		creElm = function(o,t,a){
			var b = d.createElement(t || 'div');
			for(var p in o) {
				p == 'style' ? b[p].cssText = o[p] : b[p] = o[p];
			}
			return (a || db).insertBefore(b,(a ||db).firstChild);
		};

		//var box_template = '<div id="fkHandle" onclick="$FANKUI.showBox();" class="handle"><span><i></i></span></div><div class="bd"><textarea onfocus="$FANKUI.placeholder();">在此处填写您的意见或建议</textarea><input type="text" name="contact" value="联系方式：E-mail，微博，QQ"><div class="action"><a id="fk_submit" href="#" onclic="$FANKUI.submit();"><span>发送反馈</span></a></div><div class="tips" style="display:none;"><em class="icon-success"></em><p>发送成功</p><p>感谢您的反馈</p></div></div>';
		var box_template = '<div id="fkHandle" onclick="$FANKUI.showBox();" class="handle"><span><i></i></span></div><div class="bd"><iframe id="fankui-dialog-iframe" src="#{url}" name="fankui_iframe" width="100%"></iframe></div>';

		creElm({
			href: FANKUI_CONFIGS.codehost + '/css/fankui.css',
			rel: 'stylesheet',
			type: 'text/css'
		}, 'link');
		div  = creElm({
			id : "fankui_cc_right_box",
			style:"right:-240px;",
			innerHTML: render(box_template,{url:'http://fankui.cc/client/feedback?app_key=123'})
		});
			$FANKUI = {
				showBox: function(){
					var elem = d.getElementById("fankui_cc_right_box");
					if(elem) {
						elem.style.right = "0px";
						var handle = d.getElementById("fkHandle");

						handle.onclick = "function(){$FANKUI.hideBox();}";
					}
				},
				hideBox:function(){
					var elem = d.getElementById("fankui_cc_right_box");

					alert('hidebox');
					if(elem) {
						elem.style.right = "-240px";
						var handle = d.getElementById("fkHandle");
						handle.onclick = "function(){$FANKUI.showBox();}";
					}
				},
				placeholder:function(){
					console.log('placeholder');
				},
				submit:function(){

				}

			};
			//console.log(box_template);
			window.Fankui_Feedback= div;
			//console.log("d"+d + " w:"+w + " isStrict:" + isStrict + dd + db + na + wlh + head + ie);
	})();


}
