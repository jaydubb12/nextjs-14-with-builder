

/**
 * Design pattern utilizes second generation of Builder.io GEN 2 React Component
 * utilizing Server-side content delivery
 * in order to utilize a DRY approach to deploying the code
 */
import {Content, fetchOneEntry, getBuilderSearchParams} from '@builder.io/sdk-react'; // Import necessary functions and components from Builder.io SDK
// import customComponents from '~/builder-registry';
import {BuilderApiKey} from '~/helpers/builderAPIkey'; // Import API key once from a single location
import {PageProps} from '~/types/types'; // Import custom components from builder-registry module

// Functional component to render Builder.io content
export default async function  RenderServerSideBuilderContent(props:PageProps) {
    const urlPath = '/' + (props.params?.slug?.join('/') || ''); // sets path for all content as /

    // function retrieves content during server side page compilation
    const content = await fetchOneEntry({
            model: props.model, // Use model prop to specify Builder.io model when component is used
            apiKey: BuilderApiKey,
            options:
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                getBuilderSearchParams(props.searchParams),
            userAttributes: { urlPath },
    });

    return (
        <Content
            content={content}
            model={props.model}
            apiKey={BuilderApiKey} />
           //customComponents={customComponents} /> // Pass customComponents to Content component
    );
}
