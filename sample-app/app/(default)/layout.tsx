import type { PropsWithChildren } from 'react';
import {HeaderComponent} from '~/components/Header';

export default function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <HeaderComponent/>
            <main className='flex-1 w-full pb-0'>
                {children}
            </main>
        </>
    );
};

