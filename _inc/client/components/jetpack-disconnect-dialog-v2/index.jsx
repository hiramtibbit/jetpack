/**
 * External dependencies
 */
import Button from 'components/button';
import React, { Component } from 'react';
import { translate as __ } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import Features from './features';
import Survey from './survey';

/**
 * Style dependencies
 */
import './style.scss';

const JETPACK_DISCONNECT_INITIAL_STEP = 'jetpack_disconnect_initial_step';
const JETPACK_DISCONNECT_SURVEY_STEP = 'jetpack_disconnect_survey_step';

class JetpackDisconnectDialog extends Component {
	constructor( props ) {
		super( props );

		this.state = { step: JETPACK_DISCONNECT_INITIAL_STEP };
		this.handleFeaturesContinueClick = this.handleFeaturesContinueClick.bind( this );
		this.handleSurveyDisableClick = this.handleSurveyDisableClick.bind( this );
	}

	handleFeaturesContinueClick() {
		this.setState( {
			step: JETPACK_DISCONNECT_SURVEY_STEP,
		} );
	}

	handleSurveyDisableClick() {
		// noop for now
	}

	renderInitialStep() {
		return (
			<Features>
				<Button compact>{ __( 'Cancel' ) }</Button>
				<Button compact scary onClick={ this.handleFeaturesContinueClick }>
					{ __( 'Continue Disabling Jetpack' ) }
				</Button>
			</Features>
		);
	}

	renderSurveyStep() {
		return (
			<Survey>
				<Button compact>{ __( 'Close' ) }</Button>
				<Button compact primary onClick={ this.handleSurveyDisableClick }>
					{ __( 'Disable Jetpack' ) }
				</Button>
			</Survey>
		);
	}

	render() {
		const { step } = this.state;
		return JETPACK_DISCONNECT_SURVEY_STEP === step
			? this.renderSurveyStep()
			: this.renderInitialStep();
	}
}

export default JetpackDisconnectDialog;
