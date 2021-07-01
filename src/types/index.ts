export interface ICommandParameters {
    [key: string]: any
}

export interface ICommand {
    scriptToExecute: string
    parameters: ICommandParameters
}

export interface IConfig {
    commands: ICommand[]
    loopCommands: boolean
    clearAfterLoop: boolean
    loopIntervalInMs: number
}

export type ExecShHandler = (error: Error | null, stdout: string, stderr: string, console: Console, config: IConfig) => void