"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function SetQueryFilters() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);

            return params.toString();
        },
        [searchParams]
    );

    return (
        <>
            <input
                type="text"
                value={searchParams.get("filter") || ""}
                onChange={(e) => {
                    router.push(pathname + "?" + createQueryString("filter", e.target.value));
                }}
            />
        </>
    );
}