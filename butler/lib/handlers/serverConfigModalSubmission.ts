import { App } from '@slack/bolt';
import * as Console from 'fp-ts/Console';

import * as ServerConfigModal from '../views/serverConfigModal';

export { handle };

function handle(app: App): void {
    app.view(ServerConfigModal.callbackId, async ({ ack, body }) => {
        await ack();
        Console.log(JSON.stringify(body.view.state.values))();
    });
}
