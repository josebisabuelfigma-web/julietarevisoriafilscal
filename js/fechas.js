/* ==========================================================================
   FECHAS IMPORTANTES DE COLOMBIA  (se dibujan solas en la sección "Fechas")
   --------------------------------------------------------------------------
   CÓMO EDITAR:
   - Cada mes tiene una lista de obligaciones. Para agregar una, copia una
     línea { ... } y cambia sus textos. Respeta las comas y las comillas.
   - cat:    "dian" | "mercantil" | "super"  (define el color y el filtro)
   - titulo: nombre de la obligación
   - f2026:  fecha/ventana del calendario 2026 (ya publicado por la DIAN)
   - f2027:  fecha del 2027. Si lo dejas vacío (""), la página muestra
             "Mes esperado · por confirmar". Cuando la DIAN publique el
             calendario 2027, escribe aquí las fechas reales.
   - fijo:   true si la fecha la fija la ley (no cambia cada año).
   - nit:    true si el día exacto depende del último dígito del NIT / cédula.

   IMPORTANTE: el calendario 2027 de la DIAN aún no estaba publicado
   (consultado nov-2026). La estructura de plazos la fija el Decreto 2229 de
   2023, por eso se espera el mismo mes cada año. Verificar siempre en
   https://www.dian.gov.co antes de dar una fecha a un cliente.
   ========================================================================== */

window.FECHAS_CATEGORIAS = {
  dian:      "DIAN · Impuestos",
  mercantil: "Cámara de Comercio y sociedades",
  super:     "Supersociedades"
};

/* Texto de aviso que aparece debajo del calendario */
window.FECHAS_AVISO =
  "Fechas de referencia para Colombia. El día exacto de la mayoría de los " +
  "vencimientos depende del último dígito del NIT (o de los dos últimos de la " +
  "cédula). El calendario 2027 de la DIAN aún no se ha publicado: los meses " +
  "marcados como «por confirmar» se actualizan cuando salga el decreto. " +
  "Confirme siempre en dian.gov.co o contácteme.";

window.FECHAS = [
  /* ------------------------------- ENERO ------------------------------- */
  { mes: "Enero", items: [
    { cat: "dian", titulo: "IVA bimestral (nov–dic) y cuatrimestral (sep–dic)",
      f2026: "Enero, según último dígito del NIT", f2027: "", nit: true },
    { cat: "dian", titulo: "Actualización del Registro Único de Beneficiarios Finales (RUB)",
      f2026: "1 de enero (solo si hubo cambios)", f2027: "1 de enero (solo si hubo cambios)", fijo: true }
  ]},

  /* ------------------------------ FEBRERO ------------------------------ */
  { mes: "Febrero", items: [
    { cat: "dian", titulo: "Renta grandes contribuyentes: pago de la 1.ª cuota",
      f2026: "Febrero, según último dígito del NIT", f2027: "", nit: true },
    { cat: "mercantil", titulo: "Preparar estados financieros y dictamen para la asamblea",
      f2026: "Antes del 31 de marzo", f2027: "Antes del 31 de marzo", fijo: true }
  ]},

  /* ------------------------------- MARZO ------------------------------- */
  { mes: "Marzo", items: [
    { cat: "mercantil", titulo: "Reunión ordinaria de la asamblea o junta de socios (el revisor fiscal presenta su dictamen)",
      f2026: "Hasta el 31 de marzo", f2027: "Hasta el 31 de marzo", fijo: true },
    { cat: "mercantil", titulo: "Renovación de la matrícula mercantil",
      f2026: "Hasta el 31 de marzo", f2027: "Hasta el 31 de marzo", fijo: true },
    { cat: "dian", titulo: "IVA bimestral (ene–feb)",
      f2026: "Marzo, según último dígito del NIT", f2027: "", nit: true }
  ]},

  /* ------------------------------- ABRIL ------------------------------- */
  { mes: "Abril", items: [
    { cat: "dian", titulo: "Información exógena (medios magnéticos): inician los vencimientos",
      f2026: "Desde finales de abril hasta junio, según NIT (grandes contribuyentes primero)", f2027: "", nit: true },
    { cat: "super", titulo: "Estados financieros a Supersociedades (solo empresas vigiladas o requeridas)",
      f2026: "13 de abril al 11 de mayo, según los 2 últimos dígitos del NIT", f2027: "", nit: true },
    { cat: "dian", titulo: "Régimen SIMPLE: declaración anual",
      f2026: "Abril–mayo, según último dígito del NIT", f2027: "", nit: true },
    { cat: "dian", titulo: "Declaración de activos en el exterior (grandes contribuyentes)",
      f2026: "13 al 27 de abril", f2027: "", nit: true },
    { cat: "dian", titulo: "Actualización del RUB",
      f2026: "1 de abril (solo si hubo cambios)", f2027: "1 de abril (solo si hubo cambios)", fijo: true }
  ]},

  /* ------------------------------- MAYO -------------------------------- */
  { mes: "Mayo", items: [
    { cat: "dian", titulo: "Renta personas jurídicas: declaración y 1.ª cuota",
      f2026: "12 al 26 de mayo, según último dígito del NIT", f2027: "", nit: true },
    { cat: "dian", titulo: "Información exógena: continúan los vencimientos",
      f2026: "Mayo, según NIT", f2027: "", nit: true }
  ]},

  /* ------------------------------- JUNIO ------------------------------- */
  { mes: "Junio", items: [
    { cat: "dian", titulo: "Información exógena: cierre de plazos",
      f2026: "Hasta mediados de junio, según NIT", f2027: "", nit: true }
  ]},

  /* ------------------------------- JULIO ------------------------------- */
  { mes: "Julio", items: [
    { cat: "dian", titulo: "Renta personas jurídicas: 2.ª cuota",
      f2026: "9 al 23 de julio, según último dígito del NIT", f2027: "", nit: true },
    { cat: "dian", titulo: "IVA bimestral (may–jun)",
      f2026: "Julio, según último dígito del NIT", f2027: "", nit: true },
    { cat: "dian", titulo: "Actualización del RUB",
      f2026: "1 de julio (solo si hubo cambios)", f2027: "1 de julio (solo si hubo cambios)", fijo: true }
  ]},

  /* ------------------------------ AGOSTO ------------------------------- */
  { mes: "Agosto", items: [
    { cat: "dian", titulo: "Renta personas naturales: inician los vencimientos (y activos en el exterior de personas naturales)",
      f2026: "Desde el 12 de agosto, según los 2 últimos dígitos de la cédula/NIT", f2027: "", nit: true }
  ]},

  /* ---------------------------- SEPTIEMBRE ----------------------------- */
  { mes: "Septiembre", items: [
    { cat: "dian", titulo: "Renta personas naturales: continúan los vencimientos",
      f2026: "Septiembre, según los 2 últimos dígitos", f2027: "", nit: true },
    { cat: "dian", titulo: "IVA bimestral (jul–ago) y cuatrimestral (may–ago)",
      f2026: "Septiembre, según último dígito del NIT", f2027: "", nit: true }
  ]},

  /* ------------------------------ OCTUBRE ------------------------------ */
  { mes: "Octubre", items: [
    { cat: "dian", titulo: "Renta personas naturales: cierre de plazos",
      f2026: "Hasta el 26 de octubre", f2027: "", nit: true },
    { cat: "dian", titulo: "Actualización del RUB",
      f2026: "1 de octubre (solo si hubo cambios)", f2027: "1 de octubre (solo si hubo cambios)", fijo: true }
  ]},

  /* ----------------------------- NOVIEMBRE ----------------------------- */
  { mes: "Noviembre", items: [
    { cat: "dian", titulo: "IVA bimestral (sep–oct)",
      f2026: "Noviembre, según último dígito del NIT", f2027: "", nit: true },
    { cat: "mercantil", titulo: "Planear el cierre del año: conciliaciones, inventarios y control interno",
      f2026: "Recomendado", f2027: "Recomendado", fijo: true }
  ]},

  /* ----------------------------- DICIEMBRE ----------------------------- */
  { mes: "Diciembre", items: [
    { cat: "dian", titulo: "La DIAN publica la UVT del año siguiente",
      f2026: "Mediados de diciembre (UVT 2026: $52.374, Res. 000238 de 2025)", f2027: "Mediados de diciembre", fijo: true },
    { cat: "mercantil", titulo: "Cierre del ejercicio contable",
      f2026: "31 de diciembre", f2027: "31 de diciembre", fijo: true }
  ]}
];

/* Obligaciones que se repiten TODOS los meses */
window.FECHAS_MENSUALES = [
  { titulo: "Retención en la fuente", detalle: "Del mes anterior; vence a mediados de mes según el último dígito del NIT." },
  { titulo: "Nómina electrónica", detalle: "Transmisión dentro de los primeros 10 días hábiles del mes siguiente." },
  { titulo: "Seguridad social (PILA)", detalle: "Primeros días hábiles del mes siguiente, según el NIT o cédula." },
  { titulo: "Impuesto de industria y comercio (ICA)", detalle: "Depende de cada municipio: anual, bimestral o mensual." }
];
