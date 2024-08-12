import { createBot, createProvider, createFlow, addKeyword, utils } from '@builderbot/bot'
import helloFlow from './hello.flow'


export default createFlow([
    helloFlow
])