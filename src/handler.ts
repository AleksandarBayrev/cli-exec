import { ExecShHandler, IConfig } from './types'

export const handler: ExecShHandler = (error: Error | null, stdout: string, stderr: string, console: Console, config: IConfig) => {
    if (error && error !== null) {
        console.error(`Error: ${JSON.stringify(error)}`)
        console.error(`stderr: ${stderr}`)
        return
    }

    if (config.loopCommands) {
        setInterval(() => {
            console.log(stdout)
        }, config.loopIntervalInMs)
        return
    }

    console.log(stdout)
}