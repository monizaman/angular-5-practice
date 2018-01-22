import { animate, state, style, transition, trigger } from '@angular/animations';

export const ON_OFF_2_ANIMATION =
	trigger('onOff2Trigger', [
		state('off', style({
		  backgroundColor: '#E5E7E9',
		  color: '#1C2833',
		  fontSize: '18px',		  
		  transform: 'scale(1)'
		})),
		state('on',   style({
		  backgroundColor: '#17202A',
		  color: '#F0F3F4',
		  fontSize: '22px',
		  transform: 'scale(1.1)'
		})),
		transition('off => on', animate('0.6s 100ms ease-in')),
		transition('on => off', animate('0.7s 100ms ease-out'))
	]);