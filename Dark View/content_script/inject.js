/* Aplicar estilos dos arquivos de /custom para compatibilidade com os seguintes sites. */

function injectImportantNativeStyles(){
	let a=document.documentElement.querySelectorAll('*');
	
	for(let b=0;b<a.length;b++){
		if(getComputedStyle(a[b]).backgroundColor.match('rgba')){
			if('rgba(0, 0, 0, 0)'==getComputedStyle(a[b]).backgroundColor){a[b].getAttribute('style')?a[b].setAttribute('style',a[b].getAttribute('style')+`;background-color: rgba(0, 0, 0, 0) !important;`):a[b].setAttribute('style',`background-color: rgba(0, 0, 0, 0) !important;`);continue}let c=getComputedStyle(a[b]).backgroundColor.replace(/rgba?\(\d{1,3}, ?\d{1,3}, ?\d{1,3}, ?/,'');

		if(c=c.replace(/\)/,''),0.2>+c){a[b].getAttribute('style')?a[b].setAttribute('style',a[b].getAttribute('style')+`;background-color: rgba(0, 0, 0, 0) !important;`):a[b].setAttribute('style',`background-color: rgba(0, 0, 0, 0) !important;`);
		continue}}a[b].getAttribute('style')?a[b].setAttribute('style',a[b].getAttribute('style')+`;
			background-color: #222222 !important;color: #eeeeee !important;`):a[b].setAttribute('style',`background-color: #222222 !important;color: #eeeeee !important;`)}}
		function removeImportantNativeStyles(){
			let a=document.documentElement.querySelectorAll('*');

	for(let b=0;b<a.length;b++)a[b].getAttribute('style')&&a[b].setAttribute('style',a[b].getAttribute('style').replace(/background\-color\:\s?#222222\s?\!important\;?/gi,'').replace('color: #eeeeee !important;','').replace(/background-color: rgba\(0, 0, 0, 0\) !important\;/gi,''))}
		var n_dark_themes=34,
		tab=document.location.href,link=document.getElementById('dark-mode'),
		style=document.getElementById('dark-mode-custom-style'),
		head=document.documentElement||document.head||document.querySelector('head'),hostname=function(a){
		a=a.replace('www.','');
		var b=a.indexOf('//')+2;
		
		/* Aplicar compatibilidade com os seguintes site: */

		if(1<b){var c=a.indexOf('/',b);

		return 0<c?a.substring(b,c):(c=a.indexOf('?',b),0<c?a.substring(b,c):a.substring(b))}
		return a},custom={
			ebay:'.ebay.com',
			yahoo:'www.yahoo.',
			twitch:'.twitch.tv',
			github:'github.com',
			docs:'docs.google.',
			bing:'www.bing.com',
			amazon:'www.amazon.',
			gmail:'mail.google.',
			tumblr:'www.tumblr.',
			twitter:'twitter.com',
			inbox:'inbox.google.',
			drive:'drive.google.',
			sites:'sites.google.',
			youtube:'www.youtube.',
			dropbox:'www.dropbox.',
			reddit:'www.reddit.com',
			maps:'.google.com/maps/',
			facebook:'www.facebook.',
			wikipedia:'wikipedia.org',
			instagram:'www.instagram.',
			duckduckgo:'duckduckgo.com',
			stackoverflow:'stackoverflow.com'};

		link||(link=document.createElement('link'),
			link.setAttribute('type','text/css'),
			link.setAttribute('id','dark-mode'),
			link.setAttribute('rel','stylesheet'),
			head&&head.appendChild(link)),
		style||(style=document.createElement('style'),
			style.setAttribute('type','text/css'),
			style.setAttribute('id','dark-mode-custom-style'),
			head&&head.appendChild(style));
		
		var edit=function(a,b){
			link.setAttribute('href',a),
		style.textContent=b}
		update=function(){var a={};
		
		for(var b in custom)a[b]=!0;
			for(var c=1;c<=n_dark_themes;c++)a['dark_'+c]=!1;
			a.dark_1=!0,a.whitelist=[],a.state='light',
			chrome.storage.local.get(a,function(a){
			var b=null,c=hostname(tab);
			
			if(-1!==tab.indexOf('/chrome/newtab'))return edit('','');
			
			for(let b=0;b<a.whitelist.length;b++)
				if(a.whitelist[b]===c)return edit('','');
			
			for(let c=1;c<=n_dark_themes;c++)
				if(a['dark_'+c]){b=c;break}
			
			for(var d in custom)
			
			if(a[d]&&-1!==tab.indexOf(custom[d])){
				const b='dark'===a.state?chrome.runtime.getURL('/content_script/custom/'+d+'.css'):'';
				return void edit(b,'')
			}

				if(!('dark'===a.state))removeImportantNativeStyles(),edit('','');
			
			else if(b){const a=chrome.runtime.getURL('/content_script/general/dark_'+b+'.css');34===b?chrome.storage.local.get({custom:''},function(a){
				removeImportantNativeStyles(),
				edit('',a.custom)}):(injectImportantNativeStyles(),
				edit(a,''))
			}

			else removeImportantNativeStyles(),
				edit('','')})},init=function(a){
				a&&(tab=a),
				update()},observer=new MutationObserver(function(){
					var a=document.getElementById('dark-mode');
					!a&&head&&head.appendChild(link),
					observer.disconnect()});
				window===window.top?update():chrome.runtime.sendMessage({message:'top'},init),
				chrome.storage.onChanged.addListener(update),
				observer.observe(document,{childList:!0,subtree:!0});