import { UserProfile } from "../../User/types/User"
import gqlApi from "../gqlApi"

const gqlQuery = () => `query getUserProfile {
  getUserProfile(input: {dummy: "${(Math.random() * 1000).toFixed(4)}"}) {
    email
    emailVerified
    nickname
    dateOfBirth
    avatar
    name
    age
    createdAt
    updatedAt
    lastLoggedInAt
  }
}
`

type GetUserProfileGqlResponse = { getUserProfile: UserProfile }

export default async (): Promise<UserProfile> => {
  const apiResponse = await gqlApi.request<GetUserProfileGqlResponse>(gqlQuery())
  return apiResponse.getUserProfile
} 
