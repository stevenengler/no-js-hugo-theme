// license information for librejs extension users
// @license magnet:?xt=urn:btih:d3d9a9a6595521f9666a5e94cc830dab83b65699&dn=expat.txt "Expat License (sometimes called MIT Licensed)"

// in Firefox we need to add a new css style with document.write rather than modifying the href
// of the existing one, otherwise the screen will flash white while loading on dark themes
var theme_css_elem = document.getElementById('theme_css');
var js_url = document.currentScript.src; // example: http://example.com/myhugo/js/theme-switcher.js
if(localStorage.getItem('theme') === 'dark'){
	var clone = theme_css_elem.cloneNode(false);
	clone.href = new URL("../css/themes/dark.css", js_url);
	theme_css_elem.remove();
	document.write(clone.outerHTML);
}else if(localStorage.getItem('theme') === 'light'){
	var clone = theme_css_elem.cloneNode(false);
	clone.href = new URL("../css/themes/light.css", js_url);
	theme_css_elem.remove();
	document.write(clone.outerHTML);
}

window.addEventListener("load", function(event){update_toggle_button();}, false);

function update_toggle_button(){
	var elem = document.getElementById('theme_css');
	var button = document.getElementById('change-theme-button');
	button.style.display = "";
	if(elem.href.endsWith('light.css')){
		button.getElementsByTagName('img')[0].src = new URL('../images/theme-switcher-moon.svg', js_url);
	}else if(elem.href.endsWith('dark.css')){
		button.getElementsByTagName('img')[0].src = new URL('../images/theme-switcher-sun.svg', js_url);
	}
}

function toggle_theme(){
	var elem = document.getElementById('theme_css');
	if(elem.href.endsWith('light.css')){
		elem.href = new URL("../css/themes/dark.css", js_url);
		localStorage.setItem('theme', 'dark');
	}else if(elem.href.endsWith('dark.css')){
		elem.href = new URL("../css/themes/light.css", js_url);
		localStorage.setItem('theme', 'light');
	}
	update_toggle_button();
}

// @license-end
