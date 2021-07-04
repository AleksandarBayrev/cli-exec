import { IConfig } from './types'

export const config: IConfig = {
    commands: [
        {
            scriptToExecute: 'sensors',
            parameters: {}
        }
    ],
    loopCommands: true,
    clearAfterLoop: true,
    loopIntervalInMs: 1000
}