// page.tsx - Home Page

import React from 'react';
import {Content, fetchOneEntry, getBuilderSearchParams, isPreviewing} from '@builder.io/sdk-react';
import {PageProps} from '~/types/types';


// Builder Public API Key set in .env file
const apiKey = `${process.env.NEXT_PUBLIC_BUILDER_API_KEY}`;

export default async function FormPage(props: PageProps) {
    const urlPath = '/form-page' + (props.params?.slug?.join('/') || '');
    const content = await fetchOneEntry({
        model: 'page',
        apiKey,
        options:
            getBuilderSearchParams(props.searchParams),
        userAttributes: { urlPath },

    });

    return (
        <>
            {/* Render the Builder page */}
            <Content
                content={content}
                model="page"
                apiKey={apiKey} />;
        </>
    );
}
