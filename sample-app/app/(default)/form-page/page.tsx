// page.tsx - Home Page

import React from 'react';
import {Content, fetchOneEntry, getBuilderSearchParams, isPreviewing} from '@builder.io/sdk-react';
import {PageProps} from '~/types/types';



// Builder Public API Key set in .env file
const apiKey = 'ef5268376769437498572f9ea7691860';

export default async function FormPage(props: PageProps) {
    const urlPath = '/form-page' + (props.params?.slug?.join('/') || '');
    const content = await fetchOneEntry({
        model: 'page',
        apiKey,
        options: getBuilderSearchParams(props.searchParams),
        userAttributes: { urlPath },
    });
    const canShowContent = content || isPreviewing(props.searchParams);

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
                model="page"
                apiKey={apiKey} />;
        </>
    );
}
