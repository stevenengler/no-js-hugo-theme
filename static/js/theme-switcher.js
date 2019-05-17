// in Firefox we need to add a new css style with document.write rather than modifying the href
// of the existing one, otherwise the screen will flash white while loading on dark themes
var theme_css_elem = document.getElementById('theme_css');
if(localStorage.getItem('theme') === 'dark'){
	var clone = theme_css_elem.cloneNode(false);
	clone.href = "css/themes/dark.css";
	theme_css_elem.remove();
	document.write(clone.outerHTML);
}else if(localStorage.getItem('theme') === 'light'){
	var clone = theme_css_elem.cloneNode(false);
	clone.href = "css/themes/light.css";
	theme_css_elem.remove();
	document.write(clone.outerHTML);
}

window.addEventListener("load", function(event){update_toggle_button();}, false);

function update_toggle_button(){
	var elem = document.getElementById('theme_css');
	var button = document.getElementById('change-theme-button');
	button.style.display = "";
	if(elem.href.endsWith('light.css')){
		button.getElementsByTagName('img')[0].src = 'images/theme-switcher-moon.svg';
	}else if(elem.href.endsWith('dark.css')){
		button.getElementsByTagName('img')[0].src = 'images/theme-switcher-sun.svg';
	}
}

function toggle_theme(){
	var elem = document.getElementById('theme_css');
	if(elem.href.endsWith('light.css')){
		elem.href = "css/themes/dark.css";
		localStorage.setItem('theme', 'dark');
	}else if(elem.href.endsWith('dark.css')){
		elem.href = "css/themes/light.css";
		localStorage.setItem('theme', 'light');
	}
	update_toggle_button();
}
