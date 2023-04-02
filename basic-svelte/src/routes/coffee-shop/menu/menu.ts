export abstract class Menu {
	_description: string;

	constructor() {
		this._description = 'Menu';
	}

	get description(): string {
		return this._description;
	}

	abstract cost(): number;
}
