// page.tsx - Home Page

import React from 'react';
import RenderServerSideBuilderContent from '~/components/BuilderCMS/Server-Side/builder-server-side';

export default async function HomePage() {

    return (
        <>
            {/* Render the Builder page */}
            <RenderServerSideBuilderContent
                model= 'page'

            />;
        </>
    );
}
