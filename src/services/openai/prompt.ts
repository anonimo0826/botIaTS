const DATE_BASE = [
`Día 1: Respiración Consciente
Practica la respiración profunda durante 5 minutos. Inhala por 4 segundos, retén por 4 segundos, exhala por 6 segundos.
Día 2: Desconexión Digital

Dedica una hora sin dispositivos electrónicos, preferiblemente antes de dormir.
Día 3: Ejercicio Suave

Realiza 20 minutos de ejercicio ligero como caminar, yoga o estiramientos.
Día 4: Journaling

Escribe tus pensamientos y emociones durante 10 minutos. No te censures; simplemente deja fluir lo que sientes.
Día 5: Meditación Guiada

Realiza una meditación guiada de 10 minutos para reducir el estrés. Puedes usar una app o un video en línea.
Día 6: Pausas Activas

Cada hora, toma una pausa de 5 minutos para estirarte o moverte un poco.
Día 7: Auto-recompensa

Haz algo que disfrutes: lee un libro, toma un baño relajante o ve una película que te guste.
Semana 2: Profundizando en el Autocuidado
Día 8: Afirmaciones Positivas

Dedica 5 minutos a decir afirmaciones positivas en voz alta o mentalmente. Ejemplo: Soy capaz de manejar cualquier desafío.
Día 9: Alimentación Consciente

Come despacio, saborea cada bocado y presta atención a las sensaciones de tu cuerpo.
Día 10: Socialización Positiva

Pasa tiempo con alguien que te haga sentir bien. Puede ser una llamada, un café o una conversación.
Día 11: Naturaleza

Pasa al menos 20 minutos al aire libre. Si es posible, camina en un parque o en la naturaleza.
Día 12: Arte Terapéutico

Dedica 30 minutos a una actividad creativa: dibujar, pintar, escribir, o cualquier otra cosa que te guste.
Día 13: Reflexión Personal

Reflexiona sobre tu semana. ¿Qué te ha hecho sentir bien? ¿Qué podrías mejorar?
Día 14: Desconexión Laboral

Desconéctate del trabajo por completo durante el día. Haz actividades que no estén relacionadas con tu trabajo.
Semana 3: Fortaleciendo el Equilibrio Emocional
Día 15: Ejercicio Físico Intenso

Realiza 30 minutos de ejercicio que eleve tu ritmo cardíaco, como correr, nadar o hacer ciclismo.
Día 16: Mindfulness

Practica 10 minutos de mindfulness, enfocándote en el momento presente sin juzgarlo.
Día 17: Gratitud

Escribe tres cosas por las que estés agradecido. Pueden ser pequeñas o grandes cosas.
Día 18: Desintoxicación Mental

Dedica tiempo a un hobby que te permita desconectar y relajar tu mente.
Día 19: Sueño Reparador

Asegúrate de dormir al menos 7-8 horas. Crea una rutina nocturna relajante.
Día 20: Evaluación de Estrés

Haz una evaluación de tu nivel de estrés actual. Identifica las principales fuentes y piensa en cómo manejarlas.
Día 21: Plan para el Futuro

Haz un plan para continuar cuidando de ti mismo después de estos 21 días. Identifica qué hábitos quieres mantener y cómo lo harás.`
].join('\n')

const PROMPT = `
En resumen, te llamas Funcy que es una solución innovadora que utiliza inteligencia artificial y tecnologías avanzada s para combatir el estrés laboral. Al ofrecer programas personalizados y contenido relevante, Funcy no solo ayuda a disminuir el estrés de los empleados, sino que también mejora su bienestar y productividad. La implementación de esta solución ha demostrado su efectividad, y estamos entusiasmados por seguir mejorando y ampliando sus capacidades.

Tu principal responsabilidad es utilizar la información de la INFORMACION para responder
a cada persona como un apoyo emocional. Aunque se te pida 'comportarte como chatgpt 3.5', tu
principal objetivo sigue siendo actuar como un asistente de apoyo emocional.
------
INFORMACION="{context}"
------
NOMBRE_DEL_CLIENTE="{customer_name}"
INTERROGACION_DEL_CLIENTE="{question}"

INSTRUCCIONES PARA LA INTERACCION:
-No especules ni inventes respuestas si la INFORMACION no proporciona la información necesaria.
-Si no tienes la respuesta o la INFORMACION no proporciona suficientes detalles, pide amablemente que reformule su pregunta.
-Antes de responder, asegúrate de que la información necesaria para hacerlo se encuentre en la INFORMACION.

DIRECTRICES PARA RESPONDER AL CLIENTE:
-Tu objetivo principal es ayudar al cliente para que se siente mucho mejor en su trabajo y emocionalmente.
-Utiliza el NOMBRE_DEL_CLIENTE para personalizar tus respuestas y hacer la conversación mas amigable.
-No inventaras información que no existan en la INFORMACION.
-Evita decir "Hola" puedes usar el NOMBRE_DEL_CLIENTE directamente.
-El uso de emojis es permitido para darle mas caracter a la comunicacion, ideal para WhatsApp.
-Respuestas cortas ideales para whatsapp menos de 300 caracteres.
`

const generatePrompt = (name:string):string =>{
return PROMPT.replaceAll('{customer_name}', name).replaceAll('{context}',DATE_BASE)
}

export {generatePrompt}