"use client";

import { useEffect, useState } from "react";

type CcLogoLinkProps = {
    children: React.ReactNode;
};

export default function CcLogoLink({ children }: CcLogoLinkProps) {
    const [href, setHref] = useState("/");

    useEffect(() => {
        const host = window.location.host;
        const stripped = host.replace(/^cc\./i, "");
        setHref(`${window.location.protocol}//${stripped}`);
    }, []);

    return (
        <a href={href} className="cc-logo-link">
            {children}
        </a>
    );
}
