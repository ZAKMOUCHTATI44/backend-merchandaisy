import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import App from '@/Layouts/App';

export default function Welcome(props) {
    return (
        <>
            <Head title="Profit" />
            <App>
                Hello World
            </App>

        </>
    );
}
