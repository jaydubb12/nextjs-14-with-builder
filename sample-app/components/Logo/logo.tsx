import Image from 'next/image';
import {LogoProps} from '~/components/Logo/types';

export function Logo({ width, height, iconName }: LogoProps) {
    return (
        <Image
            src={`/images/${iconName}`}
            width={width}
            height={height}
            alt='logo'
        />
    );
}
