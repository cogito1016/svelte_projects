import { Menu } from './menu';

export class Espresso extends Menu {
	constructor() {
		super();
		this._description = 'Espresso';
	}

	cost(): number {
		return 1200;
	}
}
