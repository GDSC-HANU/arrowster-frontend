import { ref } from 'vue'
import { useSupabaseClient } from '#imports'

export const useCountry = () => {
  const client = useSupabaseClient()

  const country = ref<{ id: string; name: string }[]>([])
  const fetchCountries = async () => {
    const { data: countries } = await client
      .from('location')
      .select('id, country')
    if (countries) {
      country.value = countries.map((countryData) => ({
        id: countryData.id,
        name: countryData.country
      }))
    }
  }
  return { fetchCountries, country }
}
