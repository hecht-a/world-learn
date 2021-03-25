import { CountryData } from "@/types/interfaces";

export function upOrDown(countries: CountryData[]): Record<string, string> {
	const result: Record<string, string> = {};
	countries.forEach((c: CountryData) => {
		const letter = c.name.charAt(0);
		if (!result[letter]) {
			result[letter] = "up";
		}
	});
	return result;
}
