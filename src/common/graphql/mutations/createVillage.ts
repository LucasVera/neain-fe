import { VillageDetails } from "../../Village/types/Village"
import gqlApi from "../gqlApi"

const gqlQuery = (
  name: string
): string => `mutation createVillage {
  createVillage(input: {name: "${name}", reCreate: true}) {
    commonerPopulation
    defenseRating
    food
    gold
    heroPopulation
    name
    id
    reputation
  }
}
`

type CreateVillageGqlResponse = { createVillage: VillageDetails }

export default async (
  name: string,
): Promise<VillageDetails> => {
  const apiResponse = await gqlApi.request<CreateVillageGqlResponse>(gqlQuery(
    name
  ))
  return apiResponse.createVillage
} 
