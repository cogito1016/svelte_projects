export class TargetData {
	target: number;
	changedNumber: number | null;

	constructor(target: number, changedNumber: number | null) {
		this.target = target;
		this.changedNumber = changedNumber;
	}
}
