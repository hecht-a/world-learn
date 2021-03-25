import { CountryData } from "@/types/interfaces";

export function countriesToArray(countries: CountryData[]): Record<string, CountryData[]> {
	const result: Record<string, CountryData[]> = {};
	countries
		.sort((a, b) =>
			// eslint-disable-next-line no-nested-ternary, prettier/prettier
			a.name.toLowerCase() < b.name.toLowerCase()
				? -1
				: a.name.toLowerCase() > b.name.toLowerCase()
					? 1
					: 0,
		)
		.forEach((c: CountryData) => {
			const letter = c.name.charAt(0);
			if (!result[letter]) {
				result[letter] = [];
			}
			result[letter].push(c);
		});
	return result;
}
