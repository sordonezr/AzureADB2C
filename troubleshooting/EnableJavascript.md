# Habilitar JavaScript

Habilite la ejecución del script agregando el elemento ScriptExecution al elemento RelyingParty.

1. Abra el archivo de la directiva personalizada. Por ejemplo, SignUpOrSignin.xml.
2. Agregue el elemento ScriptExecution al elemento RelyingParty:

```xml
<RelyingParty>
  <DefaultUserJourney ReferenceId="SignUpOrSignIn" />
  <UserJourneyBehaviors>
    <ScriptExecution>Allow</ScriptExecution>
  </UserJourneyBehaviors>
  ...
</RelyingParty>
```
3. Guarde y cargue el archivo.

