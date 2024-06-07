// homepage

'use client';
import React from 'react';
import type {Metadata} from 'next';
import { Content, fetchOneEntry, getBuilderSearchParams } from '@builder.io/sdk-react';
import {LocationDropdown, LogoComponent} from 'jw-global-components';
import 'jw-global-components/dist/style.css'


// Builder Public API Key set in .env file
const apiKey = 'ef5268376769437498572f9ea7691860';

interface PageProps {
    params: {
        slug: string[];
    };
    searchParams: Record<string, string>;
}


// @ts-ignore
export default async function FormPage(props: PageProps) {
    const urlPath = '/' + (props.params?.slug?.join('/') || '');
    const content = await fetchOneEntry({
        model: 'page',
        apiKey,
        options: getBuilderSearchParams(props.searchParams),
        userAttributes: { urlPath },
    });

    return (
        <>
            {/* Render the Builder page */}
            <Content content={content} model="page" apiKey={apiKey} />;
        </>
    );
}
