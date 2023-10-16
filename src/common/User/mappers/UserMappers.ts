import { CognitoUserAttributes, CognitoUserIdentity } from "../types/Cognito"
import { UserProfile, UserIdentity, UserIdentityProvider } from "../types/User"

export const extractCognitoIdentity = (cognitoUserAttributes: CognitoUserAttributes): CognitoUserIdentity | null => {
  if (!cognitoUserAttributes?.identities) return null
  const cognitoIdentity = JSON.parse(cognitoUserAttributes.identities)[0] as CognitoUserIdentity
  return cognitoIdentity
}

export const cognitoIdentityToUserIdentity = (cognitoIdentity: CognitoUserIdentity | null): UserIdentity => ({
  providerType: cognitoIdentity?.providerType as UserIdentityProvider,
  primary: cognitoIdentity?.primary,
  dateCreated: cognitoIdentity?.dateCreated,
  userId: cognitoIdentity?.userId ?? ''
})

export const mapCognitoAttributesToUserProfile = (
  cognitoUserAttributes: CognitoUserAttributes,
  identity = extractCognitoIdentity(cognitoUserAttributes)
): UserProfile => ({
  id: identity?.userId ?? '',
  email: cognitoUserAttributes?.email,
  emailVerified: cognitoUserAttributes?.email_verified === 'true',
  identities: [cognitoIdentityToUserIdentity(identity)]
})
