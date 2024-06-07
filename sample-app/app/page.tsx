// homepage

'use client';
import React from 'react';
import type {Metadata} from 'next';
import { builder } from '@builder.io/sdk';
import {RenderBuilderContent} from '~/components/BuilderCMS/builder';
import {LocationDropdown, LogoComponent} from 'jw-global-components';
import 'jw-global-components/dist/style.css'


// Builder Public API Key set in .env file
// @ts-ignore
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);


// @ts-ignore
export default async function HomePage(params) {
    const content = await builder
        // Get the page content from Builder with the specified options
        .get('page', {
            userAttributes: {
                urlPath: '/' + (params?.page?.join('/') || ''),
            },
        })
        // Convert the result to a promise
        .toPromise();

    return (
        <>

            <LogoComponent />
            <LocationDropdown />
            {/* Render the Builder page */}
            <RenderBuilderContent
                model="page"
                content={content} />
        </>
    );
}
