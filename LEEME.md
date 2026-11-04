# JLB Auditoría y Consultoría · Sitio web

Página estática (HTML + CSS + JavaScript), sin instalar nada. Se abre con doble clic en `index.html`.

## Qué editar

| Quiero cambiar…                         | Archivo                 |
|-----------------------------------------|-------------------------|
| WhatsApp, correo, ciudad, texto del botón | `js/config.js`          |
| Enlaces de Facebook, Instagram y TikTok (si uno queda vacío, su icono se oculta) | `js/config.js` (bloque `redes`) |
| Fechas importantes (2026 / 2027)        | `js/fechas.js`          |
| Textos de la página                     | `index.html`            |
| Colores y tipografías                   | `css/styles.css` (bloque `:root`) |
| Foto                                    | `img/julieta.jpg` y `img/julieta.webp` |

Busque la palabra **TODO** en los archivos para ver lo que falta personalizar
(número real de WhatsApp, nombre completo, biografía, ciudad, dominio).

## Publicar (hosting gratis recomendado: Netlify)

1. Entrar a netlify.com → "Add new site" → arrastrar la carpeta `Julietarevisoria`.
2. Comprar el dominio `.com` (Namecheap, GoDaddy, etc.) y conectarlo en Netlify → *Domain management*.
3. El dominio `https://revisoriafiscaljulietalozano.com` ya está puesto en `index.html`, `sitemap.xml` y `robots.txt`; si cambia, reemplácelo ahí.

## Para aparecer en Google

1. Crear cuenta en **Google Search Console** → agregar el dominio → verificar.
2. Enviar `https://SU-DOMINIO/sitemap.xml`.
3. Crear la ficha gratuita de **Google Business Profile** (ayuda a salir en búsquedas locales y mapas).
4. Pedir a clientes reseñas en esa ficha; enlazar la página desde LinkedIn e Instagram.
5. Ya incluido: título y descripción optimizados, datos estructurados (negocio y preguntas frecuentes),
   sitemap, robots, imágenes ligeras, diseño adaptable a celular y vista previa al compartir.

## Fechas

El calendario 2027 de la DIAN no estaba publicado (nov-2026). Cuando salga, completar `f2027`
en `js/fechas.js`. Verificar siempre en dian.gov.co.
