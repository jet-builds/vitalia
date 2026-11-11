# Vitalia

Tu dia en un minuto. Una app gratuita y accesible que junta en un solo check-in lo que mas influye en tu bienestar diario: sueno, agua, animo, gasto y tu prioridad del dia.

## Que es

Vitalia calcula cada dia un Equilibrio de 0 a 100 a partir de cinco habitos basicos, muestra tu racha y una grafica de los ultimos 7 dias. Esta pensada para que registrar tu dia lleve menos de un minuto, sin cuentas ni anuncios.

## Para todo el mundo

Es una PWA: funciona en cualquier navegador y se instala en Android, iOS, Windows, macOS y Linux desde el propio navegador. Funciona sin conexion, respeta el modo oscuro, usa botones grandes y es navegable con teclado y lector de pantalla. Tus datos se guardan solo en tu dispositivo.

## Coste cero para el autor

No hay servidor, base de datos ni APIs de pago. El alojamiento es GitHub Pages, que es gratuito, y los datos viven en el dispositivo de cada usuario.

## Modelo de negocio

Plan Gratis: check-in diario, equilibrio, racha y los ultimos 7 dias.

Plan Pro (aprox. 1,99 EUR al mes o 14,99 EUR al ano): historial ilimitado y exportar tus datos a CSV. El cobro se hara con Stripe Payment Links, sin servidor propio. Stripe cobra una comision por cada pago, que sale del ingreso y no supone gasto fijo.

Limitacion actual: sin servidor, el desbloqueo de Pro se basa en la redireccion tras el pago y no es infalible. Se mejorara mas adelante.

## Hoja de ruta

Fase 1: app base PWA offline (hecha).

Fase 2: publicacion en GitHub Pages y pruebas con usuarios.

Fase 3: idiomas adicionales y objetivos personalizables.

Fase 4: tiendas de aplicaciones opcionales, que tienen cuotas de desarrollador.

Fase 5 (ultima): cobro de suscripciones Pro con Stripe.

## Aviso

Vitalia no es un producto sanitario ni sustituye el consejo medico.

## Licencia

MIT
