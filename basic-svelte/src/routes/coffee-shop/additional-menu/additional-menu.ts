/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Menu } from '../menu/menu';

export abstract class AdditionalMenu extends Menu {
	//@ts-ignore
	_menu: Menu;
}
