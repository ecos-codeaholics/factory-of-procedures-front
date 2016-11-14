(function(global) {

    var map = {
	'src': 'src',
	'@angular': 'node_modules/@angular',
	'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
	'angular2-jwt': 'node_modules/angular2-jwt',
	'moment': 'node_modules/moment/moment.js',
	'ng2-bootstrap': 'node_modules/ng2-bootstrap',
	'ng2-uploader': 'node_modules/ng2-uploader',
	'rxjs': 'node_modules/rxjs'
    };

    var packages = {
	'src': { main: 'main.js', defaultExtension: 'js' },
	'rxjs': { defaultExtension: 'js' },
	'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
	'angular2-jwt': { main: 'angular2-jwt', defaultExtension: 'js' },
	'ng2-bootstrap': { main: 'ng2-bootstrap', defaultExtension: 'js' },
	'ng2-uploader': { main: 'ng2-uploader', defaultExtension: 'js' }
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
