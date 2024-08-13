import { addKeyword, EVENTS } from "@builderbot/bot";
import { run } from "src/services/openai";
import { ChatCompletionMessageParam } from "openai/resources";

/*
*Flujo que es por defecto cuando no scontiene palabras claves
*/

export default addKeyword(EVENTS.WELCOME)
.addAction(async (ctx, {flowDynamic, state})=>{
    const newhistory = (state.getMyState()?.history ?? []) as ChatCompletionMessageParam[]
    const name = ctx?.pushName ?? ''

    newhistory.push({
        role:'user',
        content:ctx.body
    })

    const ai = await run(name,newhistory)
    await flowDynamic(ai)

    newhistory.push({
        role:'assistant',
        content:ai
    })

    await state.update({history: newhistory})

})