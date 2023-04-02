import type { Menu } from '../menu/menu';
import { AdditionalMenu } from './additional-menu';

export class Milk extends AdditionalMenu {
	constructor(menu: Menu) {
		super();
		this._menu = menu;
	}

	get description(): string {
		return this._menu.description + ', Milk';
	}
	cost(): number {
		return this._menu.cost() + 500;
	}
}
