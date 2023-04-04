import type { Menu } from '../menu/menu';
import { AdditionalMenu } from './additional-menu';

export class Whip extends AdditionalMenu {
	constructor(menu: Menu) {
		super();
		this._menu = menu;
	}

	get description(): string {
		return this._menu.description + ', Whip';
	}
	cost(): number {
		return this._menu.cost() + 300;
	}
}
