import { Menu } from './menu';

export class Moca extends Menu {
	constructor() {
		super();
		this._description = 'Moca';
	}

	cost(): number {
		return 1000;
	}
}
