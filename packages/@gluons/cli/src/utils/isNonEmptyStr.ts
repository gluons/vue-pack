export default function isNonEmptyStr(obj: any): boolean {
	return typeof obj === 'string' && obj.length > 0;
}
