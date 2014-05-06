/*
 * grunt-init-electronics-scaffolding
 * https://gruntjs.com/
 *
 * Copyright (c) 2013 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */
'use strict';

// Basic template description.
exports.description = 'Creates a blank framework for front end development.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
	'install_. After that, you may execute project tasks with _grunt_. For ' +
	'more information about installing and configuring Grunt, please see ' +
	'the Getting Started guide:' +
	'\n\n' +
	'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

	init.process({type: 'electronics-scaffolding'}, [
		// Prompt for these values.
		init.prompt('name'),
		init.prompt('title'),
		init.prompt('description', 'The best project ever!'),
		init.prompt('version'),
		init.prompt('repository'),
		init.prompt('homepage'),
		init.prompt('bugs'),
		init.prompt('licenses', 'MIT'),
		init.prompt('author_name'),
		init.prompt('author_email'),
		init.prompt('author_url')
	], function(err, props) {
	
		props.keywords = [];

		// Files to copy (and process).
		var files = init.filesToCopy(props);

		// Add properly-named license files.
		init.addLicenseFiles(files, props.licenses);

		// Actually copy (and process) files.
		init.copyAndProcess(files, props, {noProcess: 'libs/**'});

		// Generate package.json file, used by npm and grunt.
		init.writePackageJSON('package.json', {
			name: 'electronics-scaffolding',
			version: '0.0.0-ignored',
			npm_test: 'grunt qunit',
			// TODO: pull from grunt's package.json
			node_version: '>= 0.1.0',
			devDependencies: {
				"grunt": "~0.4.1",
				"grunt-contrib-concat": "^0.4.0",
				"grunt-contrib-uglify": "^0.4.0",
				"grunt-contrib-imagemin": "^0.7.0",
				"grunt-contrib-watch": "^0.6.1",
				"grunt-contrib-sass": "^0.7.3",
				"qunitjs": "^1.14.0",
				"grunt-contrib-jshint": "^0.10.0",
				"grunt-contrib-qunit": "^0.4.0"	
			}
		});
		// All done!
		done();
	});
};

