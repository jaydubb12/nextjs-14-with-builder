// page.tsx - Home Page

import React from 'react';
import {Content, fetchOneEntry, getBuilderSearchParams, isEditing, isPreviewing} from '@builder.io/sdk-react';
import {PageProps} from '~/types/types';

// Builder Public API Key set in .env file
const apiKey = `${process.env.NEXT_PUBLIC_BUILDER_API_KEY}`;

export default async function HomePage(props: PageProps) {


    const urlPath = '/' + (props.params?.slug?.join('/') || '');
    const content = await fetchOneEntry({
        model: 'page',
        apiKey,
        options:
            getBuilderSearchParams(props.searchParams),
        userAttributes: { urlPath },
    });
    const canShowContent =
        content ||
        isPreviewing(props.searchParams)
        isEditing(props.searchParams);

    if (!canShowContent) {
        return (
            <>
                <h1>404</h1>
                <p>Make sure you have your content published at Builder.io.</p>
            </>
        );
    }

    return (
        <>
            {/* Render the Builder page */}
            <Content
                content={content}
                model= 'page'
                apiKey={apiKey}
            />;
        </>
    );
}
