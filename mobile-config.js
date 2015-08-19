App.info({
	id: "org.sfgoodwill.donate",
	name: "Donation App",
	description: "Donation app for SF Goodwill",
	author: "Nicolas Vigier",
	website: "https://sfgoodwill.org"
});

App.accessRule("https://fonts.googleapis.com");
App.accessRule("https://fonts.gstatic.com");
App.accessRule("http://104.197.87.34");

App.icons({
	'android_ldpi' : 'public/img/gw-icon-36.png',
	'android_mdpi' : 'public/img/gw-icon-48.png',
	'android_hdpi' : 'public/img/gw-icon-72.png',
	'android_xhdpi' : 'public/img/gw-icon-96.png'
	//'android_xxhdpi' : 'public/img/gw-icon-144.png',
	//'android_xxxhdpi' : 'public/img/gw-icon-192.png'
});
