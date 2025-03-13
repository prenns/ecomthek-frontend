import { remark } from 'remark';
import html from 'remark-html';

export function mapTypeToRevenue(size) {
    const revenueMap = {
        "SMALL": "bis 100.000€",
        "MIDDLE": "100.000 - 1 Mio. €",
        "LARGE": "1 Mio. - 10 Mio. €",
        "ENTERPRISE": "10 Mio. €+"
    };
    return revenueMap[size];
}

export async function markdownToHtml(markdown)  {
    const processedContent = await remark()
        .use(html)
        .process(markdown);

    return processedContent.toString();
}