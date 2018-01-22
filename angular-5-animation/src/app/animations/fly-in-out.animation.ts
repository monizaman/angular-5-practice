import { animate, state, style, transition, trigger, group } from '@angular/animations';

export const FLY_IN_OUT_ANIMATION =
  trigger('flyInOutTrigger', [
    state('in', style({
		    backgroundColor: '#7BBEFC',
	        color: '#080809', 
			transform: 'translateX(0)', 
			opacity: 1
	})),
    transition(':enter', [
      style({
	        backgroundColor: '#E3E8EC',
		    transform: 'translateX(300%)',
		    opacity: 0
	  }),
      group([
        animate('0.5s 0.1s ease-in', style({
            transform: 'translateX(0)',
        })),
        animate('0.3s 0.1s ease', style({
            opacity: 1
        }))
      ])
    ]),
    transition(':leave', [
      style({
	        backgroundColor: '#9DCEFC',
	  }),	
      group([
        animate('0.5s ease-out', style({
            transform: 'translateX(300%)'
        })),
        animate('0.3s 0.1s ease', style({
            opacity: 0
        }))
      ])
    ])
  ])