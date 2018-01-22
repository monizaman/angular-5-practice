import { animate, state, style, transition, trigger, keyframes } from '@angular/animations';

export const ON_OFF_4_ANIMATION =
	trigger('onOff4Trigger', [
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
		transition('off => on', animate('0.6s 100ms ease-in',keyframes([ 
		   style({fontSize: '19px', backgroundColor: 'yellow', offset: 0.1 }),
		   style({fontSize: '20px', backgroundColor: 'green', offset: 0.3 }),
		   style({fontSize: '21px', backgroundColor: 'red', offset: 0.5 })
		]))),
		transition('on => off', animate('0.7s 100ms ease-out', keyframes([ 
		   style({fontSize: '22px', backgroundColor: 'yellow', offset: 0 }),
		   style({fontSize: '21px', backgroundColor: 'green', offset: 0.2 }),
		   style({fontSize: '20px', backgroundColor: 'red', offset: 0.4 }),
		   style({fontSize: '19px', backgroundColor: 'blue', offset: 0.5 })
		])))
	]);