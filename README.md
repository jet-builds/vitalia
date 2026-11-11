# Vitalia

Tu día en un minuto. Una app gratuita y accesible que junta en un solo check-in lo que más influye en tu bienestar diario: sueño, agua, ánimo, gasto y tu prioridad del día.

## Qué es

Vitalia calcula cada día un Equilibrio de 0 a 100 a partir de cinco hábitos básicos, muestra tu racha y un gráfico de los últimos 7 días. Está pensada para que registrar tu día lleve menos de un minuto, sin cuentas ni anuncios.

## Para todo el mundo

Es una PWA: funciona en cualquier navegador y se instala en Android, iOS, Windows, macOS y Linux desde el propio navegador. Funciona sin conexión, respeta el modo oscuro, usa botones grandes y es navegable con teclado y lector de pantalla. Tus datos se guardan solo en tu dispositivo.

## Coste cero para el autor

No hay servidor, base de datos ni APIs de pago. El alojamiento es GitHub Pages, que es gratuito, y los datos viven en el dispositivo de cada usuario.

## Modelo de negocio

Plan Gratis: check-in diario, equilibrio, racha y los últimos 7 días.

Plan Pro (aprox. 1,99 € al mes o 14,99 € al año): historial ilimitado y exportar tus datos a CSV. El cobro se hará con Stripe Payment Links, sin servidor propio. Stripe cobra una comisión por cada pago, que sale del ingreso y no supone gasto fijo.

Limitación actual: sin servidor, el desbloqueo de Pro se basa en la redirección tras el pago y no es infalible. Se mejorará más adelante.

## Hoja de ruta

Fase 1: app base PWA offline (hecha).

Fase 2: publicación en GitHub Pages y pruebas con usuarios.

Fase 3: idiomas adicionales y objetivos personalizables.

Fase 4: tiendas de aplicaciones opcionales, que tienen cuotas de desarrollador.

Fase 5 (última): cobro de suscripciones Pro con Stripe.

## Aviso

Vitalia no es un producto sanitario ni sustituye el consejo médico.

## Licencia

MIT
