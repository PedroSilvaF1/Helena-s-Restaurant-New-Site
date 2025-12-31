import type * as React from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "dotlottie-player": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        autoplay?: boolean;
        loop?: boolean;
        background?: string;
        renderer?: string;
        speed?: string | number;
      };
    }
  }
}

export {};
