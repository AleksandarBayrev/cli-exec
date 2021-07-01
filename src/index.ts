import execSh from 'exec-sh'
import { config } from './config'
import { handler } from './handler'
import { ICommand, IConfig } from './types'

((console: Console, config: IConfig) => {
        config.commands.map((command: ICommand) => execSh(
            command.scriptToExecute,
            command.parameters,
            (error: Error | null, stdout: string, stderr: string) => handler(error, stdout, stderr, console, config))
        )
})(console, config)