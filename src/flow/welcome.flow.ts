import { addKeyword, EVENTS } from "@builderbot/bot";

/*
*Flujo que es por defecto cuando no scontiene palabras claves
*/

export default addKeyword(EVENTS.WELCOME)
.addAction(async (ctx, {flowDynamic})=>{
    await flowDynamic(`claro que si ${ctx.pushName}`)
})