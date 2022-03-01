import { fluentMenu, fluentMenuItem, provideFluentDesignSystem } from "@fluentui/web-components";
// import { createSignal } from 'solid-js';

export default function Menu() {
    provideFluentDesignSystem().register(fluentMenu(), fluentMenuItem);
	return (
        <fluent-menu>
            <fluent-menu-item>Undo</fluent-menu-item>
            <fluent-menu-item>Redo</fluent-menu-item>
            <fluent-divider></fluent-divider>
            <fluent-menu-item role="menuitemcheckbox">Extensions</fluent-menu-item>
            <fluent-menu-item role="menuitemcheckbox">Add ons</fluent-menu-item>
            <fluent-divider></fluent-divider>
            <fluent-menu-item role="menuitemradio">Start</fluent-menu-item>
            <fluent-menu-item role="menuitemradio">End</fluent-menu-item>
        </fluent-menu>
    );
}