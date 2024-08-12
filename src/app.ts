import { createBot, createProvider, createFlow, addKeyword, utils } from '@builderbot/bot'
import { MetaProvider as Provider } from '@builderbot/provider-meta'
import database from './database'
import provider from './provider'
import flow from './flow'
const PORT = process.env.PORT ?? 3008













const main = async () => {
    // const adapterFlow = createFlow([flujoSaludo])
    // const adapterProvider = createProvider(Provider, {
    //     jwtToken: 'EAAYgzcqAN3oBO10AewRZCsOVWTLrlG9xK7yHlEcOfaPd1gumwVFH9HiNCQZCzGoT86MjTIaJxqWHGd1gY5tZBg58iu1c04FDbo5l4pMdUvIT7TQZCOrEgvL3OQu7IfxRJzfkeZBrd14hT2tc83RYa8nI1ajNQ6gUxsHkHY49LYL7p2Akxw6kTNyMdY40BrI35R3RnZAlTKN1c76vM5cj2z3BjQNSzNtGZA1As4ZD',
    //     numberId: '392059530655358',
    //     verifyToken: 'Safiro2024',
    //     version: 'v18.0'
    // })
    // const adapterDB = new Database()

    const { httpServer } = await createBot({
        flow,
        provider,
        database,
    })

    httpServer(+PORT)
}

main()
