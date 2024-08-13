import { addKeyword, EVENTS } from "@builderbot/bot";

/*
*Flujo que es por defecto cuando no scontiene palabras claves
*/

export default addKeyword(EVENTS.ACTION)
.addAnswer("pepe!")