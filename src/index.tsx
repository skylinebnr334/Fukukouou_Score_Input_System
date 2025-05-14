import * as React from 'react';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app') as Element;
const root = createRoot(container);
root.render(<React.StrictMode>
    Test
</React.StrictMode>);