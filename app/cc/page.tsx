import CcLogoLink from "./CcLogoLink";
import RadialField from "./RadialField";

export default function CcPage() {
    return (
        <div className="min-h-screen flex items-center justify-center cc-stage">
            <RadialField />
            <CcLogoLink>
                <div className="cc-logo-wrap relative z-10" aria-label="CC logo">
                    <div className="cc-logo cc-logo-mask" aria-hidden="true" />
                    <img src="/CC.svg" alt="CC logo" className="cc-logo-img" />
                </div>
            </CcLogoLink>
        </div>
    );
}
