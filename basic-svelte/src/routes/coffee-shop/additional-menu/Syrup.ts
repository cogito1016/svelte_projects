import type { Menu } from '../menu/menu';
import { AdditionalMenu } from './additional-menu';

export class Syrup extends AdditionalMenu {
	constructor(menu: Menu) {
		super();
		this._menu = menu;
	}

	get description(): string {
		return this._menu.description + ', Syrup';
	}
	cost(): number {
		return this._menu.cost() + 100;
	}
}
