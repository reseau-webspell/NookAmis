import { AxonClient } from 'axoncore';

import * as modules from './modules/index';

/**
 * Example - Client constructor
 *
 * @author KhaaZ
 *
 * @class Client
 * @extends AxonCore.AxonClient
 */
class NookClient extends AxonClient {
    constructor(client, axonOptions) {
        super(client, axonOptions, modules);
    }

    onInit() {
        //
    }

    onStart() {
        return Promise.resolve(true);
    }

    onReady() {
        return Promise.resolve(true);
    }

    initStatus() {
        this.botClient.editStatus(null, {
            name: `${this.settings.prefixes[0]}infos`,
            type: 0,
        } );
    }

    // eslint-disable-next-line no-unused-vars
    sendFullHelp(msg, guildConfig) {
        return this.getCommand('infos').execute( { msg } );
    }

    // eslint-disable-next-line no-unused-vars
    $sendHelp(command, env) {
        // override sendHelp method
        return this.axonUtils.sendMessage(env.msg.channel, `Help override for ${command.label}`);
    }
}

export default NookClient;
