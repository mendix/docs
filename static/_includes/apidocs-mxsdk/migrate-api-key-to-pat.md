To switch an existing integration from an API key to a PAT, do the following:

1. [Generate a PAT](#authenticating-with-pat) with the required scopes.
2. Remove the `Mendix-Username` and `Mendix-ApiKey` headers.
3. Add an `Authorization` header with the value `MxToken {GENERATED_PAT}`.
4. Run your integration to verify that the calls succeed.
