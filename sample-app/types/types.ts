export interface PageProps {
    model: string,
    params: {
        slug: string[];
    };
    searchParams: Record<string, string>;
}
