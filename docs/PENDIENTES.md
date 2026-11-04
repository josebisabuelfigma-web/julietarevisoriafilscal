# Pendientes · Sitio web de Julieta (JLB Auditoría y Consultoría)

Última actualización: 2026-11-03. Cuando quiera retomar, pídale a Claude: *"analiza docs/PENDIENTES.md"*.

## 1. Datos que debe dar Julieta
- [x] Número de WhatsApp real: 310 703 0220 (ya en `js/config.js`, Contacto y datos para Google). Falta que Julieta confirme si es de uso personal o del negocio
- [x] Ciudad y modalidad: Bogotá de preferencia, virtual en toda Colombia, visitas presenciales coordinadas con el cliente (aplicado en la página)
- [x] Teléfono publicado (es el mismo WhatsApp)
- [ ] Confirmar que "atención directa y personalizada" es cierto en su práctica (respuesta de la pregunta sobre servicios independientes)
- [ ] Confirmar las credenciales publicadas: Tarjeta Profesional vigente, especialización en curso, más de 15 años
- [ ] Decidir si se retira la frase «¡No espere a que lo inspeccionen y no tenga nada!» de la tarjeta del manual de calidad (transmite presión; ya se quitó en Contacto)
- [ ] Revisar las fechas de `js/fechas.js` antes de ofrecerlas a clientes (algunas fuentes difieren en 1 día)
- [ ] Decidir el año del pie de página (hoy fijo en «© 2011»; alternativa: «2011–año actual»)
- [ ] Política de tratamiento de datos personales (Ley 1581 de 2012): el formulario recoge nombre y empresa
- [ ] Opcional: logo en archivo (SVG/PNG), foto original de mayor resolución, segunda foto para «Sobre mí»

## 2. Dominio y publicación
Dominio evaluado: `revisoriafiscaljulietalozano.com` (libre al 2026-11-03; largo, descriptivo). Alternativa corta: `jlbauditoria.com` (también libre). Se puede comprar ambos y redirigir uno al otro. `julietalozano.com` ya está registrado.

- [ ] Comprar el dominio `revisoriafiscaljulietalozano.com` **a nombre de Julieta** (que ella sea la titular y tenga la cuenta del registrador)
- [ ] Conectarlo en Netlify (Domain management) y activar HTTPS
- [x] Dominio real ya puesto en `index.html`, `sitemap.xml` y `robots.txt` (`https://revisoriafiscaljulietalozano.com`, sin www). Falta que se compre y se conecte.
- [ ] Redirigir `www.revisoriafiscaljulietalozano.com` al dominio sin www (Netlify)
- [ ] Hacer `commit` y `push` de los cambios locales (hoy hay cambios sin subir)
- [ ] Probar los enlaces de las tres redes sociales

## 3. SEO: cambios de código pendientes
Objetivo de Julieta: aparecer en búsquedas como «Revisoría Fiscal en Bogotá», «Revisora Fiscal independiente» y «Auditoría Financiera». (Nadie puede garantizar posición; esto aumenta las posibilidades.)

Falta, en `index.html` (depende de confirmar la ciudad):
- [x] (Hecho) **`<title>` y meta description**: incluir «Revisora Fiscal independiente», «Auditoría Financiera» y la ciudad. Ejemplo: *Revisora Fiscal independiente en Bogotá | Auditoría Financiera · JLB*
- [x] (Hecho) **H1 / línea superior de la portada** (`.sobretitulo`): incluir las frases clave de forma natural
- [x] (Hecho en el título de la sección de servicios) **Subtítulos de servicios**: nombrar «Revisoría fiscal en [ciudad]» y «Auditoría financiera» en los `<h3>` o en el texto de cada tarjeta
- [x] (Hecho) **Sección «Dónde atiendo»**: ciudad, modalidad (presencial/virtual) y cobertura en Colombia
- [x] (Hecho) Datos estructurados con `areaServed` (Bogotá y Colombia) y `sameAs` (3 redes). **Falta** `telephone` (si lo publica) y, si algún día tiene dirección o local, `address`
- [x] (Hecho) `og:title`, `og:description` y texto alternativo de la foto
- [ ] **Páginas separadas por servicio** (ej. `/revisoria-fiscal-bogota/`, `/auditoria-financiera/`, `/revisora-fiscal-independiente/`): una sola página compite poco por varias búsquedas. Cada una con su título, H1, texto propio, preguntas y enlace al formulario; agregarlas a `sitemap.xml`
- [ ] Opcional: artículos útiles (ej. «¿Quién está obligado a tener revisor fiscal?», «Calendario tributario»), que atraen búsquedas y enlaces
- [ ] Nota: la etiqueta `meta keywords` **no sirve** (Google la ignora); las palabras clave van en título, encabezados y texto

## 4. Google (cuentas y pasos)
**Cuenta recomendada:** una cuenta de Google **de Julieta** (idealmente `revisoriafiscaljlb@gmail.com`, el correo que muestra la página). El negocio y su reputación deben quedar a su nombre; el desarrollador entra como usuario delegado, no como dueño. Así no se pierde el acceso si cambia el colaborador.

- [ ] **Google Search Console** (search.google.com/search-console): agregar el dominio como «Propiedad de dominio» → verificar con registro DNS (TXT) en el registrador, o con la etiqueta `google-site-verification` en el `<head>` → enviar `https://DOMINIO/sitemap.xml` → «Inspección de URL» → «Solicitar indexación». Después, en Configuración → Usuarios y permisos, agregar al desarrollador como «Completo».
- [ ] **Google Business Profile** (business.google.com): ficha gratuita; es lo que más pesa en búsquedas con ciudad («en Bogotá»). Si no atiende público en un local, crearla como negocio con **área de servicio** y ocultar la dirección. Requiere verificación (llamada, video o correo postal). Debe tener exactamente el mismo nombre, ciudad, teléfono y sitio web que la página y las redes. Agregar al desarrollador como «Administrador».
- [ ] Pedir reseñas a clientes en la ficha (con su autorización)
- [ ] Opcional: Google Analytics (medir visitas)
- [ ] Seguimiento: revisar Search Console a las 2-4 semanas (indexación y consultas) y a los 3 meses (posiciones)

## 5. Después de publicar
- [ ] Probar el sitio en celular real (menú, WhatsApp flotante, formulario, calendario)
- [ ] Probar el botón de WhatsApp con el número real
- [ ] Compartir el enlace en WhatsApp para verificar la vista previa (imagen y texto)
- [ ] Calendario DIAN 2027: cuando se publique, completar `f2027` en `js/fechas.js`
- [ ] UVT 2027 (la DIAN la publica en diciembre): actualizar el recuadro de sanción mínima en `index.html` y las respuestas que lo mencionan
- [ ] Actualizar la fecha `lastmod` del `sitemap.xml` al hacer cambios importantes
