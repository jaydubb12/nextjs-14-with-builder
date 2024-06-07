// components/builder.tsx

'use client';

import { BuilderComponent, useIsPreviewing } from '@builder.io/react';
import '../../builder-registry';
import type {BuilderPageProps} from '~/types/types';
import {builder} from '@builder.io/sdk';

// Builder Public API Key set in .env file
// @ts-ignore
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export function RenderBuilderContent({ content, model}: BuilderPageProps) {
    // Use hook to determine if page is being previewed in Builder
    const isPreviewing = useIsPreviewing();

    // If "content" has a value or the page is being previewed in Builder,
    // render the BuilderComponent with the specified content and model props.
    if (content || isPreviewing) {
        return <BuilderComponent content={content} model={model} />;
    }

    return null;
}
