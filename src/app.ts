import "dotenv/config"
import { createBot} from '@builderbot/bot'
import database from './database'
import provider from './provider'
import flow from './flow'
const PORT = process.env.PORT ?? 3008



const main = async () => {
    const { httpServer } = await createBot({
        flow,
        provider,
        database,
    })
    httpServer(+PORT)
}
main()
