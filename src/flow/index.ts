import { createBot, createProvider, createFlow, addKeyword, utils } from '@builderbot/bot'
import helloFlow from './hello.flow'
import welcomeFlow from './welcome.flow'


export default createFlow([
    helloFlow,
    welcomeFlow
])