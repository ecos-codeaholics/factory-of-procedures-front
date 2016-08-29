(function(global) {

    var map = {
	'src': 'src',
	'@angular': 'node_modules/@angular',
	'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
	'angular2-jwt': 'node_modules/angular2-jwt',
	'rxjs': 'node_modules/rxjs'
    };

    var packages = {
	'src': { main: 'main.js', defaultExtension: 'js' },
	'rxjs': { defaultExtension: 'js' },
	'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
	'angular2-jwt': { main: 'angular2-jwt', defaultExtension: 'js' }
    };

    var ngPackageNames = [
	'common',
	'compiler',
	'core',
	'forms',
	'http',
	'platform-browser',
	'platform-browser-dynamic',
	'router',
	'router-deprecated',
	'upgrade'
    ];

    function packIndex(pkgName) {
	packages['@angular/'+pkgName] = {main: 'index.js', defaultExtension: 'js'};
    }

    function packUmd(pkgName) {
	packages['@angular/'+pkgName] = { main : '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
    }

    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

    ngPackageNames.forEach(setPackageConfig);

    var config = {
	map: map,
	packages: packages
    }

    System.config(config);

})(this);
