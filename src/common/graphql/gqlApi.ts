import { API, graphqlOperation } from 'aws-amplify'

export default {
  async request<T>(gqlQuery: string): Promise<T> {
    try {
      const rawGqlResponse = await API.graphql(graphqlOperation(gqlQuery))
      const gqlResponse = rawGqlResponse as { data: T }
      return gqlResponse.data
    } catch (ex: any) {
      // extract errors from gql response
      const errors = ex?.errors as { message: string }[] ?? []
      const errorMessages = errors.map((error) => error.message)
      const errorMessage = errorMessages.join(", ")
      throw new Error(errorMessage)
    }
  }
}

