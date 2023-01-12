import { Page } from "../typings";

export const fetchPage= async () => {
    //calling backend
    const res = await fetch(`${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getPage`)

    const data = await res.json();
    const page: Page = data.page;

    return page;
};
