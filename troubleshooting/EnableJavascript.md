# 🚀 Guía para Habilitar JavaScript en Políticas Personalizadas de Azure AD B2C

Esta guía te ayudará a habilitar la ejecución de JavaScript en tus políticas personalizadas de Azure AD B2C y resolver posibles problemas al actualizar los `DataUri` en tu archivo de política.

## 🛠️ Paso 1: Habilitar la Ejecución de Scripts

Para permitir la ejecución de scripts en tu política personalizada, sigue estos pasos:

1. **Abre el archivo de la directiva personalizada**. Un ejemplo podría ser `SignUpOrSignin.xml`.
2. **Agrega el elemento `ScriptExecution`** dentro del elemento `RelyingParty` de la siguiente manera:

    ```xml
    <RelyingParty>
      <DefaultUserJourney ReferenceId="SignUpOrSignIn" />
      <UserJourneyBehaviors>
        <ScriptExecution>Allow</ScriptExecution>
      </UserJourneyBehaviors>
      ...
    </RelyingParty>
    ```

3. **Guarda y carga el archivo** en Azure AD B2C.

> **Nota:** Es importante que este cambio se realice en un entorno de desarrollo antes de aplicarlo en producción.

🔗 [Consulta la documentación oficial para más detalles](https://learn.microsoft.com/es-mx/azure/active-directory-b2c/javascript-and-page-layout?pivots=b2c-custom-policy).

---

## 🚨 Solución de Problemas

### Error al Guardar la Política

Si encuentras el siguiente error al intentar guardar tu política, es probable que necesites actualizar los `DataUri`:

![Error al guardar la política](https://github.com/user-attachments/assets/f087b10a-104a-4dd0-a9ae-9bafe5d908b0)

### 🔧 Paso 2: Actualizar los DataUri en Content Definitions

Para resolver este problema, actualiza los `DataUri` en la sección de **Content Definitions** de tu archivo de política con los valores correspondientes en la siguiente tabla:

| **DataUri Antiguo**                                      | **DataUri Nuevo**                                           |
|----------------------------------------------------------|-------------------------------------------------------------|
| `urn:com:microsoft:aad:b2c:elements:globalexception:1.0.0` | `urn:com:microsoft:aad:b2c:elements:contract:globalexception:1.2.1` |
| `urn:com:microsoft:aad:b2c:elements:globalexception:1.1.0` | `urn:com:microsoft:aad:b2c:elements:contract:globalexception:1.2.1` |
| `urn:com:microsoft:aad:b2c:elements:idpselection:1.0.0`     | `urn:com:microsoft:aad:b2c:elements:contract:providerselection:1.2.1` |
| `urn:com:microsoft:aad:b2c:elements:selfasserted:1.0.0`     | `urn:com:microsoft:aad:b2c:elements:contract:selfasserted:2.1.7` |
| `urn:com:microsoft:aad:b2c:elements:selfasserted:1.1.0`     | `urn:com:microsoft:aad:b2c:elements:contract:selfasserted:2.1.7` |
| `urn:com:microsoft:aad:b2c:elements:unifiedssd:1.0.0`       | `urn:com:microsoft:aad:b2c:elements:contract:unifiedssd:1.2.1` |
| `urn:com:microsoft:aad:b2c:elements:unifiedssp:1.0.0`       | `urn:com:microsoft:aad:b2c:elements:contract:unifiedssp:2.1.5` |
| `urn:com:microsoft:aad:b2c:elements:unifiedssp:1.1.0`       | `urn:com:microsoft:aad:b2c:elements:contract:unifiedssp:2.1.5` |
| `urn:com:microsoft:aad:b2c:elements:multifactor:1.0.0`      | `urn:com:microsoft:aad:b2c:elements:contract:multifactor:1.2.5` |
| `urn:com:microsoft:aad:b2c:elements:multifactor:1.1.0`      | `urn:com:microsoft:aad:b2c:elements:contract:multifactor:1.2.5` |

> **Importante:** Esta actualización en los Content Definitions es crítica para asegurar que tu política se guarde correctamente y funcione según lo esperado.

🔗 [Guía completa para la actualización de `DataUri`](https://learn.microsoft.com/es-mx/azure/active-directory-b2c/contentdefinitions#migrating-to-page-layout).

---

## 🎯 Recomendaciones Finales

- **Prueba en Entornos Seguros**: Antes de aplicar cambios en producción, realiza pruebas exhaustivas en un entorno de desarrollo.
- **Mantén tus Políticas Actualizadas**: Revisa regularmente la documentación de Azure AD B2C para estar al tanto de las últimas actualizaciones y mejores prácticas.
- **Monitorea el Comportamiento**: Después de aplicar los cambios, monitorea el comportamiento de tus políticas para detectar posibles problemas o errores.

---

¡Espero que esta guía te sea útil y te ayude a solucionar cualquier inconveniente al habilitar JavaScript en Azure AD B2C! Si tienes más preguntas, no dudes en consultarme.
