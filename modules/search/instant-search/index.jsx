/** @jsx h */

/**
 * External dependencies
 */
import { h, render } from 'preact';

/**
 * Internal dependencies
 */
import SearchWidget from './components/search-widget';
import { getSearchQuery, getFilterQuery } from './lib/query-string';
import { getThemeOptions } from './lib/dom';

const injectSearchWidget = grabFocus => {
	render(
		<SearchWidget
			grabFocus={ grabFocus }
			initialFilters={ getFilterQuery() }
			initialValue={ getSearchQuery() }
			options={ window.JetpackInstantSearchOptions }
			themeOptions={ getThemeOptions( window.JetpackInstantSearchOptions ) }
		/>,
		document.body
	);
};

document.addEventListener( 'DOMContentLoaded', function() {
	if (
		!! window.JetpackInstantSearchOptions &&
		'siteId' in window.JetpackInstantSearchOptions &&
		document.body.classList.contains( 'search' )
	) {
		injectSearchWidget( getSearchQuery() );
	}
} );
