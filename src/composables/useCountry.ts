import { ref } from 'vue'
import { useSupabaseClient } from '#imports'

export const useCountry = () => {
  const client = useSupabaseClient()

  const country = ref<string[]>([])
  const fetchCountries = async () => {
    const { data: countries } = await client.from('location').select('country')
    if (countries) {
      country.value = countries.map((countryData) => countryData.country)
    }
  }
  return { fetchCountries, country }
}
