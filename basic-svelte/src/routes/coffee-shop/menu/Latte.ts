import { Menu } from './menu';

export class Latte extends Menu {
	constructor() {
		super();
		this._description = 'Latte';
	}

	cost(): number {
		return 900;
	}
}
