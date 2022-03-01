import { fluentMenu, fluentMenuItem, provideFluentDesignSystem } from "@fluentui/web-components";
// import { createSignal } from 'solid-js';

export default function Menu() {
    provideFluentDesignSystem().register(fluentMenu(), fluentMenuItem);
	return (
        <>Yes</>
    );
}