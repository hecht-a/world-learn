import { CountryData } from "@/types/interfaces";
import { restCountriesAPI } from "@/utils/constants";
import axios from "axios";

export async function getCountries(): Promise<CountryData[]> {
	const { data } = await axios.get(restCountriesAPI);
	return data;
}
