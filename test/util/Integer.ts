import * as tsc from 'ts-collection';

export class Integer implements tsc.Comparable<Integer>{
	constructor(public num: number) {

	}
	public compareTo(int: Integer): number{
		return this.num - int.num;
	}

	public equals(e: Integer): boolean {
		return this.num === e.num;
	}
}

export class IntegerComparator implements tsc.Comparator<Integer> {
	public compare(e1: Integer, e2: Integer): number {
		if(e1.num > e2.num){
			return 1;
		}else if(e1.num < e2.num){
			return -1;
		}
		return 0;
	}
}
