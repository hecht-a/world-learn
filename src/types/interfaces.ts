interface Currency {
	code: string;
	name: string;
	symbol: string;
}

interface Languages {
	iso639_1: string;
	iso639_2: string;
	name: string;
	nativeName: string;
}

interface RegionalBlocs {
	acronym: string;
	name: string;
	otherAcronym: string[];
	otherNames: string[];
}

export interface CountryData {
	name: string;
	topLevelDomain: string[];
	alpha2code: string;
	alpha3code: string;
	callingCodes: string[];
	capital: string;
	altSpellings: string[];
	region: string;
	subregion: string;
	population: number;
	latlng: number[];
	demonym: string;
	area: number;
	gini: number;
	timezones: string[];
	borders: string[];
	nativeName: string;
	numericCode: string;
	currencies: Currency[];
	languages: Languages[];
	translations: Record<string, string>;
	flag: string;
	regionalBlocs: RegionalBlocs[];
	cioc: string;
}
