/* FUNÇÃO DE ATIVAR E DESATIVAR A EXTENSÃO, APLICANDO A MUDANÇA DE ICONES DARK OU LIGHT. */

var hostname=function(a){
	a=a.replace("www.","");
	var b=a.indexOf("//")+2;

		if(1<b){var c=a.indexOf("/",b);
		return 0<c?a.substring(b,c):(c=a.indexOf("?",b),0<c?a.substring(b,c):a.substring(b))
}
	return a},update=function(a){
		app.button.label="Current State: "+a.toUpperCase(),
		app.button.icon={path:{32:"/icons/"+a+"/32.png",64:"/icons/"+a+"/64.png"}}};
		app.button.onCommand(function(){
			config.addon.state="dark"===config.addon.state?"light":"dark",update(config.addon.state)}),
		chrome.contextMenus.onClicked.addListener(function(a){

	if("dark-mode-context-menu"===a.menuItemId){
		var b=a.pageUrl;
		chrome.storage.local.get({whitelist:[]},function(a){

var c=a.whitelist;
	c.push(hostname(b)),
	c=c.filter(function(a,b,c){
		return a&&c.indexOf(a)===b}),chrome.storage.local.set({whitelist:c},function(){})})}}),
		window.setTimeout(function(){update(config.addon.state)},300),
		chrome.contextMenus.create({contexts:["page"],
			id:"dark-mode-context-menu",
			title:"Exclude from Dark Mode"});