import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources";
import { generatePrompt } from "./prompt";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const run = async (name:string, history:ChatCompletionMessageParam[]): Promise<string> =>{

    const promtp = generatePrompt(name)
    console.log(`[PROMPT]:`, promtp);

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
            "role": "system",
            "content": generatePrompt(name)
            },
            ...history
        ],
        temperature: 1,
        max_tokens: 500,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        response_format: {
            "type": "text"
        },
        });
        return response.choices[0].message.content
}
export {run}