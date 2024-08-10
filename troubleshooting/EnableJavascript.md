# 🚀 Guía para Habilitar JavaScript en Azure AD B2C

## 🛠️ Paso 1: Habilitar la Ejecución de Scripts

Para habilitar la ejecución de scripts en tu política personalizada, sigue estos pasos:

1. **Abre el archivo de la directiva personalizada**. Por ejemplo, `SignUpOrSignin.xml`.
2. **Agrega el elemento `ScriptExecution`** al elemento `RelyingParty`:

    ```xml
    <RelyingParty>
      <DefaultUserJourney ReferenceId="SignUpOrSignIn" />
      <UserJourneyBehaviors>
        <ScriptExecution>Allow</ScriptExecution>
      </UserJourneyBehaviors>
      ...
    </RelyingParty>
    ```

3. **Guarda y carga el archivo**.

🔗 [Referencia para habilitar JavaScript](https://learn.microsoft.com/es-mx/azure/active-directory-b2c/javascript-and-page-layout?pivots=b2c-custom-policy)

## 🚨 Solución de Problemas

Si encuentras el siguiente error al guardar la política:

![Error al guardar la política](https://github.com/user-attachments/assets/f087b10a-104a-4dd0-a9ae-9bafe5d908b0)

### 🔧 Paso 2: Actualizar los DataUri

Para resolver el problema, actualiza los DataUri en tu archivo de política con los siguientes valores:

| **DataUri Antiguo**                                  | **DataUri Nuevo**                                      |
|------------------------------------------------------|--------------------------------------------------------|
| urn:com:microsoft:aad:b2c:elements:globalexception:1.0.0 | urn:com:microsoft:aad:b2c:elements:contract:globalexception:1.2.1 |
| urn:com:microsoft:aad:b2c:elements:globalexception:1.1.0 | urn:com:microsoft:aad:b2c:elements:contract:globalexception:1.2.1 |
| urn:com:microsoft:aad:b2c:elements:idpselection:1.0.0     | urn:com:microsoft:aad:b2c:elements:contract:providerselection:1.2.1 |
| urn:com:microsoft:aad:b2c:elements:selfasserted:1.0.0     | urn:com:microsoft:aad:b2c:elements:contract:selfasserted:2.1.7 |
| urn:com:microsoft:aad:b2c:elements:selfasserted:1.1.0     | urn:com:microsoft:aad:b2c:elements:contract:selfasserted:2.1.7 |
| urn:com:microsoft:aad:b2c:elements:unifiedssd:1.0.0       | urn:com:microsoft:aad:b2c:elements:contract:unifiedssd:1.2.1 |
| urn:com:microsoft:aad:b2c:elements:unifiedssp:1.0.0       | urn:com:microsoft:aad:b2c:elements:contract:unifiedssp:2.1.5 |
| urn:com:microsoft:aad:b2c:elements:unifiedssp:1.1.0       | urn:com:microsoft:aad:b2c:elements:contract:unifiedssp:2.1.5 |
| urn:com:microsoft:aad:b2c:elements:multifactor:1.0.0      | urn:com:microsoft:aad:b2c:elements:contract:multifactor:1.2.5 |
| urn:com:microsoft:aad:b2c:elements:multifactor:1.1.0      | urn:com:microsoft:aad:b2c:elements:contract:multifactor:1.2.5 |

🔗 [Referencia para la actualización de DataUri](https://learn.microsoft.com/es-mx/azure/active-directory-b2c/contentdefinitions#migrating-to-page-layout)

---

¡Espero que esta guía te sea útil y que la solución de problemas sea más clara y accesible! Si tienes más preguntas, no dudes en consultarme.
