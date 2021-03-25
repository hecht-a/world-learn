import { CountryData } from "@/types/interfaces";
import { getCountries } from "./getCountries";

export async function getCountry(countryName?: string, amount = 4): Promise<CountryData | CountryData[]> {
	const countries = await getCountries();
	if (countryName === undefined || typeof countryName === "number") {
		const countriesS: CountryData[] = [];
		for (let i = 0; i < amount; i++) {
			let newCtr = countries[Math.floor(Math.random() * countries.length)];
			while (countriesS.includes(newCtr)) {
				newCtr = countries[Math.floor(Math.random() * countries.length)];
			}
			countriesS.push(newCtr);
		}
		return countriesS;
	}

	let index = 0;
	countries.forEach((country, i) => {
		if (country.name.toLowerCase() === countryName.toLowerCase()) {
			index = i;
		}
	});
	return countries[index];
}
