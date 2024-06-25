

/**
 * Design pattern utilizes second generation of Builder.io GEN 2 React Component
 * utilizing client-side content delivery
 * in order to utilize a DRY approach to deploying the code
 */

'use client'; // Use 'use client' pragma for Builder.io SDK

import {Content, fetchOneEntry, getBuilderSearchParams} from '@builder.io/sdk-react'; // Import necessary functions and components from Builder.io SDK
import { useEffect, useState } from 'react'; // Import useEffect and useState hooks from React
// import customComponents from '~/builder-registry';
import {BuilderApiKey} from '~/helpers/builderAPIkey'; // Import API key once from a single location
import {PageProps} from '~/types/types'; // Import custom components from builder-registry module

// Functional component to render Builder.io content
export function RenderBuilderContent(props:PageProps) {
    const urlPath = '/' + (props.params?.slug?.join('/') || ''); // sets path for all content as /
    const [content, setContent] = useState(undefined); // State variable to hold fetched content

    // useEffect hook to fetch content when component mounts
    useEffect(() => {
        fetchOneEntry({
            model: props.model, // Use model prop to specify Builder.io model when component is used
            apiKey: BuilderApiKey,
            options:
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                getBuilderSearchParams(props.searchParams),
            userAttributes: { urlPath },
            // eslint-disable-next-line @typescript-eslint/no-shadow
        }).then((content) => {
            // @ts-ignore
            setContent(content);
        });
    }, [props.model, props.searchParams, urlPath]);

    return (
        <Content
            content={content}
            model={props.model}
            apiKey={BuilderApiKey} />
           //customComponents={customComponents} /> // Pass customComponents to Content component
    );
}
