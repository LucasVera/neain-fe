export type CognitoUserAttributes = {
  email: string
  email_verified: string
  identities: string
}

export type CognitoUserIdentity = {
  userId: string
  providerName: string
  providerType: string
  issuer?: string | null
  primary: boolean
  dateCreated: number
}
