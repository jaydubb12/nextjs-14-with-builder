import Link from 'next/link';
import {Logo} from '~/components/Logo';

export function HeaderComponent() {
    return (
        <header>
            <div className="flex gap-[clamp(1rem,3vw,3rem)] items-center w-full md:h-[80px] max-w-screen-3xl py-6 px-4 md:px-6 lg:px-10 mx-auto sticky top-0">
                <Link
                    href="/"
                    aria-label="Homepage"
                    className="h-6 md:h-7 -mt-1.5"
                    >
                    <Logo
                        iconName='BORN.png'
                        width={100}
                        height={25}
                        />
                </Link>

            </div>
        </header>
    );
}
