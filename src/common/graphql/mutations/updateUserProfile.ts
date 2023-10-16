import { UserProfile } from "../../User/types/User"
import gqlApi from "../gqlApi"

const gqlQuery = (
  name: string,
  nickname: string,
  dateOfBirth: string
): string => `mutation updateUserProfile {
  updateUserProfile(input: {dateOfBirth: "${dateOfBirth}", nickname: "${nickname}", name: "${name}"}) {
    age
    avatar
    dateOfBirth
    createdAt
    email
    emailVerified
    lastLoggedInAt
    name
    nickname
    updatedAt
  }
}
`

type UpdateUserProfileGqlResponse = { updateUserProfile: UserProfile }

export default async (
  name: string,
  nickname: string,
  dateOfBirth: string
): Promise<UserProfile> => {
  const apiResponse = await gqlApi.request<UpdateUserProfileGqlResponse>(gqlQuery(
    name,
    nickname,
    dateOfBirth
  ))
  return apiResponse.updateUserProfile
} 
