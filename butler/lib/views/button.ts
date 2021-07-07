import { Button, PlainTextElement } from '@slack/types';

export { Input, buildView };

interface Input {
    text: PlainTextElement;
    action_id: string;
    style: 'primary' | 'danger' | undefined;
}

function buildView({ text, action_id, style }: Input): Button {
    return {
        type: 'button' as const,
        text,
        action_id,
        style,
    };
}
