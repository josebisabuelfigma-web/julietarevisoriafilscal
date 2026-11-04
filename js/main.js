/* ==========================================================================
   COMPORTAMIENTO DE LA PÁGINA (menú, WhatsApp, calendario de fechas)
   No necesitas tocar este archivo para cambiar textos o datos de contacto:
   - Contacto  -> js/config.js
   - Fechas    -> js/fechas.js
   - Textos    -> index.html
   ========================================================================== */
(function () {
  "use strict";

  var S = window.SITIO || {};

  /* ---------- 1. Enlaces de WhatsApp ----------
     Todo elemento con data-wa se convierte en un enlace a WhatsApp.
     Opcional: data-wa-msg="texto" para cambiar el mensaje de ese botón. */
  function urlWhatsApp(mensaje) {
    return "https://wa.me/" + S.whatsapp + "?text=" + encodeURIComponent(mensaje || S.mensajeWhatsapp);
  }

  document.querySelectorAll("[data-wa]").forEach(function (el) {
    el.setAttribute("href", urlWhatsApp(el.getAttribute("data-wa-msg")));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  /* ---------- 2. Datos de contacto en pantalla ---------- */
  document.querySelectorAll("[data-email]").forEach(function (el) {
    el.textContent = S.email;
    el.setAttribute("href", "mailto:" + S.email);
  });
  document.querySelectorAll("[data-ubicacion]").forEach(function (el) {
    el.textContent = S.ubicacion;
  });
  document.querySelectorAll("[data-boton]").forEach(function (el) {
    el.textContent = S.textoBoton;
  });
  document.querySelectorAll("[data-anio]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- 2b. Iconos de redes sociales ----------
     Cada icono en el HTML lleva data-red="facebook|instagram|tiktok".
     Aquí se le pone el enlace de js/config.js; si el enlace está vacío,
     el icono se oculta para no dejar un botón que no lleva a ninguna parte. */
  document.querySelectorAll("[data-red]").forEach(function (el) {
    var enlace = (S.redes || {})[el.getAttribute("data-red")];
    if (enlace) {
      el.setAttribute("href", enlace);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer me");
    } else {
      el.parentNode.hidden = true;
    }
  });

  /* ---------- 3. Menú en celulares ---------- */
  var botonMenu = document.getElementById("btn-menu");
  var menu = document.getElementById("menu");
  if (botonMenu && menu) {
    botonMenu.addEventListener("click", function () {
      var abierto = menu.classList.toggle("abierto");
      botonMenu.setAttribute("aria-expanded", abierto ? "true" : "false");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        menu.classList.remove("abierto");
        botonMenu.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- 4. Formulario -> abre WhatsApp con los datos ----------
     No hay servidor: el formulario arma el mensaje y abre el chat. */
  var form = document.getElementById("form-asesoria");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var lineas = [
        "Hola Julieta, quiero agendar una asesoría.",
        "Nombre: " + (d.get("nombre") || ""),
        "Empresa: " + (d.get("empresa") || ""),
        "Servicio de interés: " + (d.get("servicio") || ""),
        d.get("mensaje") ? "Comentario: " + d.get("mensaje") : ""
      ].filter(Boolean);
      window.open(urlWhatsApp(lineas.join("\n")), "_blank", "noopener");
    });
  }

  /* ---------- 5. Calendario de fechas importantes ---------- */
  var cont = document.getElementById("fechas-lista");
  if (!cont || !window.FECHAS) return;

  var anio = "2026";       // pestaña activa (2026 o 2027)
  var filtro = "todas";    // categoría activa
  var mesActual = new Date().getMonth();

  function crear(tag, clase, texto) {
    var el = document.createElement(tag);
    if (clase) el.className = clase;
    if (texto) el.textContent = texto;
    return el;
  }

  function dibujar() {
    cont.textContent = "";
    window.FECHAS.forEach(function (m, i) {
      var items = m.items.filter(function (it) { return filtro === "todas" || it.cat === filtro; });
      if (!items.length) return;

      var tarjeta = crear("article", "mes" + (i === mesActual ? " mes-actual" : ""));
      var cab = crear("h3", "", m.mes);
      if (i === mesActual) cab.appendChild(crear("span", "etiqueta-mes", "Este mes"));
      tarjeta.appendChild(cab);

      var ul = crear("ul", "obligaciones");
      items.forEach(function (it) {
        var li = crear("li", "ob ob-" + it.cat);
        li.appendChild(crear("strong", "", it.titulo));
        var fecha = anio === "2026" ? it.f2026 : it.f2027;
        var texto = fecha || ("Mes esperado: " + m.mes + " · por confirmar con el calendario DIAN 2027");
        var p = crear("span", "ob-fecha" + (fecha ? "" : " por-confirmar"), texto);
        li.appendChild(p);
        if (it.nit) li.appendChild(crear("em", "ob-nit", "Según NIT"));
        ul.appendChild(li);
      });
      tarjeta.appendChild(ul);
      cont.appendChild(tarjeta);
    });
  }

  /* Botones de año y de categoría */
  document.querySelectorAll("[data-anio-btn]").forEach(function (b) {
    b.addEventListener("click", function () {
      anio = b.getAttribute("data-anio-btn");
      document.querySelectorAll("[data-anio-btn]").forEach(function (x) {
        x.setAttribute("aria-pressed", x === b ? "true" : "false");
      });
      dibujar();
    });
  });
  document.querySelectorAll("[data-filtro]").forEach(function (b) {
    b.addEventListener("click", function () {
      filtro = b.getAttribute("data-filtro");
      document.querySelectorAll("[data-filtro]").forEach(function (x) {
        x.setAttribute("aria-pressed", x === b ? "true" : "false");
      });
      dibujar();
    });
  });

  /* Obligaciones mensuales */
  var men = document.getElementById("fechas-mensuales");
  if (men && window.FECHAS_MENSUALES) {
    window.FECHAS_MENSUALES.forEach(function (o) {
      var li = crear("li");
      li.appendChild(crear("strong", "", o.titulo));
      li.appendChild(crear("span", "", o.detalle));
      men.appendChild(li);
    });
  }

  var aviso = document.getElementById("fechas-aviso");
  if (aviso && window.FECHAS_AVISO) aviso.textContent = window.FECHAS_AVISO;

  dibujar();
})();
